import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useProfileCreation } from '../hooks/useProfileCreation';

/**
 * A component that ensures every authenticated user has a complete profile
 */
const AuthenticationWrapper = ({ children }) => {
  // Use the profile creation hook to ensure user profile exists
  useProfileCreation();
  
  // No need for additional rendering logic, just use the hook and render children
  return <>{children}</>;
};

export default AuthenticationWrapper;
