import { createContext, useContext, useEffect, useState } from 'react';
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  updateProfile
} from 'firebase/auth';
import { auth, firestore, storage } from '../../../config/firebase';
import { collection } from 'firebase/firestore';

import { doc, setDoc, getDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

// Helper function to create a standardized user profile object
function createUserProfileObject(userData, photoURL = null) {
  return {
    email: userData.email,
    displayName: userData.displayName || '',
    createdAt: userData.createdAt || serverTimestamp(),
    profilePicture: photoURL || userData.profilePicture || 'https://via.placeholder.com/150',
    bio: userData.bio || '', 
    musicCollection: userData.musicCollection || [],
    rateLater: userData.rateLater || [],
    followers: userData.followers || [],
    following: userData.following || [],
    profileSetup: userData.profileSetup || false,
    joinDate: userData.joinDate || serverTimestamp()
  };
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);  async function signup(email, password, displayName) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // Update profile with display name
      await updateProfile(userCredential.user, {
        displayName: displayName
      });
      
      // Create a complete user document in Firestore using the standardized helper
      const defaultProfilePic = 'https://via.placeholder.com/150';
      
      const userProfileData = createUserProfileObject({
        email: email,
        displayName: displayName,
        createdAt: serverTimestamp(),
        profileSetup: false, // Indicates profile needs further setup
        joinDate: serverTimestamp()
      }, defaultProfilePic);
      
      await setDoc(doc(firestore, 'userprofiles', userCredential.user.uid), userProfileData);
      
      return userCredential.user;
    } catch (error) {
      throw error;
    }
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }  function googleSignIn() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider).then(async (result) => {
      const user = result.user;
      
      // Check if user document exists
      const userDocRef = doc(firestore, 'userprofiles', user.uid);
      const docSnap = await getDoc(userDocRef);
      
      // If user document doesn't exist, create a complete one
      if (!docSnap.exists()) {
        // Use Google profile photo if available, otherwise use placeholder
        const userProfileData = createUserProfileObject({
          email: user.email,
          displayName: user.displayName || '',
          createdAt: serverTimestamp(),
          profileSetup: !!user.photoURL, // If they have a photo from Google, consider partial setup done
          joinDate: serverTimestamp()
        }, user.photoURL);
        
        await setDoc(userDocRef, userProfileData);
      }
      
      return user;
    });
  }  // This function ensures the user has a profile in Firestore
  async function ensureUserProfile(user) {
    if (!user) return null;
      try {
      // Check if user document exists
      const userDocRef = doc(firestore, 'userprofiles', user.uid);
      let docSnap;
      
      // Create a timeout for Firestore operations
      const timeout = 10000; // 10 seconds
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Firestore operation timed out')), timeout)
      );
      
      try {
        // Use race to implement timeout
        docSnap = await Promise.race([
          getDoc(userDocRef),
          timeoutPromise
        ]);
      } catch (fetchError) {
        console.warn("Firestore read error or timeout:", fetchError.message);
        console.log("Retrying Firestore read...");
        
        try {
          // One retry
          docSnap = await getDoc(userDocRef);
        } catch (retryError) {
          console.error("Retry failed:", retryError);
          // Continue execution, docSnap will be undefined
        }
      }
      
      // If user document doesn't exist or couldn't be fetched, create a new one
      if (!docSnap || !docSnap.exists()) {
        console.log("Creating new user profile for:", user.uid);
        
        const userProfileData = createUserProfileObject({
          email: user.email,
          displayName: user.displayName || '',
          createdAt: serverTimestamp(),
          profilePicture: user.photoURL,
          profileSetup: false
        });
        
        // Use merge option to prevent overwriting existing data
        await setDoc(userDocRef, userProfileData, { merge: true });
      }
      
      return user;
    } catch (error) {
      console.error("Error ensuring user profile:", error);
      // Still return the user to allow the app to function
      return user;
    }
  }  // Check if the user profile is complete
  async function isProfileComplete(userId) {
    try {
      const userDocRef = doc(firestore, 'userprofiles', userId);
      
      // Create a timeout promise
      const timeout = 8000; // 8 seconds
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Profile check timed out')), timeout)
      );
        // Try to get document with timeout
      let docSnap;
      try {
        // First create the document fetch promise separately
        const docPromise = getDoc(userDocRef);
        
        // Then explicitly await the result of Promise.race
        docSnap = await Promise.race([docPromise, timeoutPromise]);
      } catch (timeoutErr) {
        console.warn("Profile check timed out:", timeoutErr.message);
        // For profile completion check, default to false on timeout
        return false;
      }
      
      if (docSnap && docSnap.exists()) {
        const userData = docSnap.data();
        
        // First check if profileSetup flag is explicitly true
        if (userData.profileSetup === true) {
          return true;
        }
        
        // Otherwise, check if all required fields are filled
        const hasProfilePicture = !!userData.profilePicture && 
          userData.profilePicture !== 'https://via.placeholder.com/150';
        const hasBio = !!userData.bio && userData.bio.trim() !== '';
        
        // Consider profile complete if it has both bio and a custom profile picture
        return !!(hasBio && hasProfilePicture);
      }
      return false;
    } catch (error) {
      console.error("Error checking profile completion status:", error);
      return false;
    }
  }
  useEffect(() => {
    // Set a loading timeout to prevent infinite loading state
    const loadingTimeout = setTimeout(() => {
      console.warn("Auth state check timed out, completing loading anyway");
      setLoading(false);
    }, 15000); // 15 second timeout
    
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      clearTimeout(loadingTimeout); // Clear timeout as we've received a response
      
      try {
        // If user is logged in, ensure they have a Firestore profile
        if (user) {
          user = await ensureUserProfile(user);
        }
        setCurrentUser(user);
      } catch (error) {
        console.error("Error during auth state change:", error);
        // Still set currentUser in case of error
        setCurrentUser(user);
      } finally {
        // Always set loading to false to prevent app freeze
        setLoading(false);
      }
    }, (error) => {
      // Error handler for onAuthStateChanged
      console.error("Auth state change error:", error);
      setLoading(false);
    });
    
    return () => {
      clearTimeout(loadingTimeout);
      unsubscribe();
    };
  }, []);
    async function updateUserProfile(userData) {
    try {
      if (!currentUser) throw new Error('No user is logged in');
      
      // Update Firebase Auth profile if displayName provided
      if (userData.displayName) {
        await updateProfile(currentUser, {
          displayName: userData.displayName
        });
      }
        // Update user document in Firestore
      const userRef = doc(firestore, 'userprofiles', currentUser.uid);
      const updatedData = { ...userData };
      
      // Upload profile photo if provided
      if (userData.profilePicture && userData.profilePicture instanceof File) {
        const storageRef = ref(storage, `profilePictures/${currentUser.uid}`);
        await uploadBytes(storageRef, userData.profilePicture);
        const photoURL = await getDownloadURL(storageRef);
        
        // Update Firebase Auth profile with new photoURL
        await updateProfile(currentUser, { photoURL });
        
        // Add photoURL to Firestore update
        updatedData.profilePicture = photoURL;
        
        // Remove File object as it's already been processed
        delete updatedData.profilePicture;
      } else if (updatedData.profilePicture instanceof File) {
        // Failsafe to ensure File objects don't go to Firestore
        delete updatedData.profilePicture;
      }
      
      // Always update profile status if explicitly provided
      if (userData.profileSetup !== undefined) {
        updatedData.profileSetup = userData.profileSetup;
      } else if (userData.bio && updatedData.profilePicture) {
        // Auto-mark profile as complete if it has both bio and profile picture
        updatedData.profileSetup = true;
      }
      
      await updateDoc(userRef, updatedData);
      return true;
    } catch (error) {
      console.error("Error updating profile:", error);
      throw error;
    }
  }
    const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    googleSignIn,
    updateUserProfile,
    isProfileComplete
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
