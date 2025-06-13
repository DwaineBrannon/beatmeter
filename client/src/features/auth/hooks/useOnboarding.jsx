import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../config/firebase';

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
        const userDocRef = doc(db, 'userprofiles', currentUser.uid);
        const docSnap = await getDoc(userDocRef);
        
        if (docSnap.exists()) {
          const userData = docSnap.data();
          // Consider profile complete if it has bio and profile picture
          const profileComplete = !!(userData.bio && userData.profilePicture && userData.profileSetup !== false);
          setIsProfileComplete(profileComplete);
          
          // Redirect if profile is incomplete and redirectOnIncomplete is true
          if (redirectOnIncomplete && !profileComplete) {
            navigate(redirectPath);
          }
        } else {
          setIsProfileComplete(false);
          if (redirectOnIncomplete) {
            navigate(redirectPath);
          }
        }
      } catch (error) {
        console.error("Error checking profile status:", error);
      } finally {
        setLoading(false);
      }
    }

    checkProfileStatus();
  }, [currentUser, navigate, redirectOnIncomplete, redirectPath]);

  return { loading, isProfileComplete };
}

export default useOnboarding;
