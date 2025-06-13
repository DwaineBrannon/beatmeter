import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../config/firebase';

// Protected route component that redirects to login if user is not authenticated
// Also redirects to profile setup if profile is incomplete
const ProtectedRoute = ({ children, requireCompleteProfile = false }) => {
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [profileComplete, setProfileComplete] = useState(true);
  
  useEffect(() => {
    async function checkProfileStatus() {
      if (!currentUser) {
        setLoading(false);
        return;
      }
      
      if (requireCompleteProfile) {        try {
          const userDoc = await getDoc(doc(db, 'userprofiles', currentUser.uid));
          if (userDoc.exists()) {
            const userData = userDoc.data();
            // Consider profile complete if it has bio and profile picture
            const isComplete = !!(userData.bio && userData.profilePicture && userData.profileSetup !== false);
            setProfileComplete(isComplete);
          } else {
            // No user document found
            setProfileComplete(false);
          }
        } catch (error) {
          console.error("Error checking profile status:", error);
        }
      }
      
      setLoading(false);
    }
    
    checkProfileStatus();
  }, [currentUser, requireCompleteProfile]);
  
  if (loading) {
    // Show loading state while checking
    return <div>Loading...</div>;
  }
  
  if (!currentUser) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" replace />;
  }
  
  if (requireCompleteProfile && !profileComplete) {
    // Redirect to profile setup if profile is incomplete
    return <Navigate to="/profile-setup" replace />;
  }
  
  return children;
};

export default ProtectedRoute;
