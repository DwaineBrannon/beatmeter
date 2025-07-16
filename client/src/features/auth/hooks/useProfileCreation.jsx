import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { doc, getDoc } from 'firebase/firestore';
import { firestore } from '../../../config/firebase';
import { createOrUpdateUserProfile } from '../services/userProfileService';

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
        const userDocRef = doc(firestore, 'userprofiles', currentUser.uid);
        const docSnap = await getDoc(userDocRef);
        
        if (!docSnap.exists()) return; // Initial creation handled by AuthProvider
        
        const userData = docSnap.data();
        const updates = {};
        
        // Add missing fields if they don't exist
        // BUT: Only add fields for truly incomplete profiles, not existing ones
        
        // Skip if profile seems complete (has either bio content or is marked as setup)
        if (userData.bio || userData.profileSetup === true) {
          console.log('[useProfileCreation] Profile appears complete, skipping field additions');
          return;
        }
        
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
          updates.joinDate = userData.createdAt;
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
          await createOrUpdateUserProfile(currentUser.uid, updates, true, currentUser);
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
