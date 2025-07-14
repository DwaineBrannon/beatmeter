import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { firestore } from '../../../config/firebase';

/**
 * Custom hook to handle user onboarding flow
 * Checks if the user has completed their profile setup and redirects accordingly
 * @param {Object} options - Hook options
 * @param {boolean} options.redirectOnIncomplete - Whether to redirect to profile setup if profile is incomplete
 * @param {string} options.redirectPath - Where to redirect if profile is incomplete (defaults to /profile-setup)
 */
export function useOnboarding({ redirectOnIncomplete = false, redirectPath = '/profile-setup' } = {}) {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isProfileComplete, setIsProfileComplete] = useState(false);

  useEffect(() => {
    async function checkProfileStatus() {
      if (!currentUser) {
        setLoading(false);
        return;
      }

      try {
        const userDocRef = doc(firestore, 'userprofiles', currentUser.uid);
        const docSnap = await getDoc(userDocRef);
        
        if (docSnap.exists()) {
          const userData = docSnap.data();
          
          // Smart profile completion detection:
          let profileComplete;
          
          if (userData.profileSetupComplete !== undefined) {
            // If the field exists, use it (new flow)
            profileComplete = userData.profileSetupComplete === true;
          } else {
            // Legacy users: auto-migrate if they have essential data
            const hasDisplayName = userData.displayName || currentUser?.displayName;
            const hasBasicProfile = hasDisplayName && (userData.bio !== undefined || userData.profilePicture);
            
            if (hasBasicProfile) {
              // Auto-migrate existing user: they have enough profile data
              profileComplete = true;
              // Optionally update their record to prevent future checks
              try {
                const userDocRef = doc(firestore, 'userprofiles', currentUser.uid);
                await setDoc(userDocRef, { profileSetupComplete: true }, { merge: true });
              } catch (error) {
                console.warn('Could not auto-migrate user profile status:', error);
              }
            } else {
              // User needs proper setup
              profileComplete = false;
            }
          }
          
          setIsProfileComplete(profileComplete);
          
          // Redirect if profile is incomplete and redirectOnIncomplete is true
          if (redirectOnIncomplete && !profileComplete) {
            navigate(redirectPath);
          }
        } else {
          // No profile document exists, definitely incomplete
          setIsProfileComplete(false);
          if (redirectOnIncomplete) {
            navigate(redirectPath);
          }
        }
      } catch (error) {
        console.error("Error checking profile status:", error);
        setIsProfileComplete(false);
      } finally {
        setLoading(false);
      }
    }

    checkProfileStatus();
  }, [currentUser, navigate, redirectOnIncomplete, redirectPath]);

  return { loading, isProfileComplete };
}

export default useOnboarding;
