import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../../config/firebase';

/**
 * Custom hook to automatically create a user profile if it doesn't exist
 * or ensure the user profile has all required fields
 */
export function useProfileCreation() {
  const { currentUser } = useAuth();
  
  useEffect(() => {
    async function ensureUserProfile() {
      if (!currentUser) return;
      
      try {
        const userDocRef = doc(db, 'userprofiles', currentUser.uid);
        const docSnap = await getDoc(userDocRef);
        
        if (!docSnap.exists()) {
          // Create a new user profile if it doesn't exist
          console.log('Creating new user profile for:', currentUser.uid);
          await setDoc(userDocRef, {
            email: currentUser.email,
            displayName: currentUser.displayName || '',
            createdAt: serverTimestamp(),
            profilePicture: currentUser.photoURL || 'https://via.placeholder.com/150',
            bio: '',
            musicCollection: [],
            rateLater: [],
            followers: [],
            following: [],
            profileSetup: false, // Not fully set up yet
            joinDate: serverTimestamp()
          });
        } else {
          // Profile exists, but ensure it has all required fields
          const userData = docSnap.data();
          const updates = {};
          
          // Add missing fields if they don't exist
          if (!('profilePicture' in userData)) {
            updates.profilePicture = currentUser.photoURL || 'https://via.placeholder.com/150';
          }
          
          if (!('bio' in userData)) {
            updates.bio = '';
          }
          
          if (!('profileSetup' in userData)) {
            // If they have both bio and profile picture, consider it set up
            updates.profileSetup = !!(userData.bio && userData.profilePicture);
          }
          
          if (!('joinDate' in userData)) {
            updates.joinDate = userData.createdAt || serverTimestamp();
          }
          
          if (!('musicCollection' in userData)) {
            updates.musicCollection = [];
          }
          
          if (!('followers' in userData)) {
            updates.followers = [];
          }
          
          if (!('following' in userData)) {
            updates.following = [];
          }
          
          if (!('rateLater' in userData)) {
            updates.rateLater = [];
          }
          
          // Update the document if there are missing fields
          if (Object.keys(updates).length > 0) {
            await setDoc(userDocRef, updates, { merge: true });
          }
        }
      } catch (error) {
        console.error('Error ensuring user profile:', error);
      }
    }
    
    ensureUserProfile();
  }, [currentUser]);
  
  // No need to return anything as this hook just performs the profile creation
  return null;
}

export default useProfileCreation;
