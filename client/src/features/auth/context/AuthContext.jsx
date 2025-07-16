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
import { auth, storage } from '../../../config/firebase';
import { createOrUpdateUserProfile, getMergedUserProfile, quickConnectivityTest } from '../services/userProfileService';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  async function signup(email, password, displayName) {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(userCredential.user, { displayName });
    // Firestore profile will be created in onAuthStateChanged
    return userCredential.user;
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout() {
    return signOut(auth);
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  function googleSignIn() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider).then(async (result) => {
      // Firestore profile will be created in onAuthStateChanged
      return result.user;
    });
  }

  // Ensure user profile exists in Firestore (custom fields only)
  async function ensureUserProfile(user) {
    if (!user) return null;
    try {
      await createOrUpdateUserProfile(user.uid, {}, true, user); // merge: true, pass current user
      console.log('[ensureUserProfile] Successfully called createOrUpdateUserProfile for UID:', user.uid);
      return user;
    } catch (error) {
      console.error('[ensureUserProfile] Error ensuring user profile:', error);
      if (error && error.stack) {
        console.error('[ensureUserProfile] Error stack:', error.stack);
      }
      console.trace('[ensureUserProfile] Call stack trace');
      return user;
    }
  }

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 15000);
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      clearTimeout(loadingTimeout);
      try {
        if (user) {
          await ensureUserProfile(user);
          const mergedProfile = await getMergedUserProfile(user);
          setCurrentUser(mergedProfile);
        } else {
          setCurrentUser(null);
        }
      } catch (error) {
        console.error("Error during auth state change:", error);
        setCurrentUser(null);
      } finally {
        setLoading(false);
      }
    }, () => {
      setLoading(false);
    });
    return () => {
      clearTimeout(loadingTimeout);
      unsubscribe();
    };
  }, []);

  async function updateUserProfile(userData) {
    try {
      if (!currentUser || !currentUser.uid) throw new Error('No user is logged in');
      
      console.log('updateUserProfile called with:', userData);
      
      // Update Auth profile if displayName or photoURL provided
      if (userData.displayName || userData.profilePicture instanceof File) {
        let photoURL = currentUser.photoURL;
        if (userData.profilePicture && userData.profilePicture instanceof File) {
          console.log('Uploading profile picture file to Firebase Storage...');
          const storageRef = ref(storage, `profilePictures/${currentUser.uid}`);
          const uploadResult = await uploadBytes(storageRef, userData.profilePicture);
          console.log('Upload successful:', uploadResult);
          
          photoURL = await getDownloadURL(storageRef);
          console.log('Got download URL:', photoURL);
          
          await updateProfile(auth.currentUser, { photoURL });
          console.log('Updated Auth profile with new photoURL');
          
          // Store the profile picture URL in Firestore too
          userData.profilePicture = photoURL;
          console.log('Set userData.profilePicture to:', photoURL);
        }
        if (userData.displayName) {
          await updateProfile(auth.currentUser, { displayName: userData.displayName });
          console.log('Updated Auth profile with displayName:', userData.displayName);
        }
      }
      
      console.log('Calling createOrUpdateUserProfile with userData:', userData);
      console.log('userData.profilePicture specifically:', userData.profilePicture);
      
      // Only update custom fields in Firestore
      await createOrUpdateUserProfile(currentUser.uid, userData, true, currentUser);
      console.log('createOrUpdateUserProfile completed successfully');
      
      // Refresh merged profile
      const mergedProfile = await getMergedUserProfile(auth.currentUser);
      console.log('Got merged profile:', mergedProfile);
      setCurrentUser(mergedProfile);
      return true;
    } catch (error) {
      console.error("Error updating profile:", error);
      throw error;
    }
  }  // Temporary function to reset user profile
  async function resetUserProfile() {
    if (!currentUser) {
      console.log("No current user");
      return;
    }
    
    console.log("Current user:", currentUser.uid, currentUser.email);
    
    try {
      await createOrUpdateUserProfile(currentUser.uid, { profileSetup: false }, true, currentUser);
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("User profile created/reset successfully!");
      return "Success!";
      
    } catch (error) {
      console.error("Error creating user profile:", error);
      return "Error: " + error.message;
    }
  }

  // Debug function to test profile creation step by step
  async function debugProfileCreation() {
    console.log('=== DEBUGGING PROFILE CREATION ===');
    
    if (!currentUser) {
      console.error('❌ No authenticated user found');
      return { success: false, error: 'No authenticated user' };
    }
    
    console.log('✅ Current user:', {
      uid: currentUser.uid,
      email: currentUser.email,
      displayName: currentUser.displayName,
      emailVerified: currentUser.emailVerified
    });
    
    try {
      // Test 1: Basic connectivity
      console.log('\n--- Test 1: Basic Connectivity ---');
      const connectivityResult = await quickConnectivityTest();
      console.log('Connectivity test result:', connectivityResult);
      
      if (!connectivityResult.success) {
        return { success: false, error: `Connectivity failed: ${connectivityResult.error}` };
      }
      
      // Test 2: Minimal profile creation
      console.log('\n--- Test 2: Minimal Profile Creation ---');
      const minimalOverrides = {
        bio: 'Test bio',
        profileSetup: true
      };
      
      await createOrUpdateUserProfile(currentUser.uid, minimalOverrides, true, currentUser);
      console.log('✅ Profile creation successful');
      
      return { success: true, message: 'Profile creation successful' };
      
    } catch (error) {
      console.error('❌ Profile creation failed:', error);
      
      // Analyze the error
      if (error.message.includes('Authentication check failed')) {
        return { success: false, error: 'Authentication issue', details: error.message };
      } else if (error.message.includes('400') || error.code === 'invalid-argument') {
        return { success: false, error: 'Data validation error', details: error.message };
      } else if (error.message.includes('permission-denied')) {
        return { success: false, error: 'Permission denied - check Firestore rules', details: error.message };
      } else if (error.message.includes('timeout')) {
        return { success: false, error: 'Timeout - connectivity issue', details: error.message };
      } else {
        return { success: false, error: 'Unknown error', details: error.message };
      }
    }
  }

  // Make functions available globally for debugging
  if (typeof window !== 'undefined') {
    window.resetUserProfile = resetUserProfile;
    window.debugProfileCreation = debugProfileCreation;
  }
    const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    googleSignIn,
    updateUserProfile
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );

}
