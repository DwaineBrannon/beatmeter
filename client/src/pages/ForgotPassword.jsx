import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../features/auth/context/AuthContext';
import ForgotPasswordComponent from '../features/auth/components/ForgotPassword';

function ForgotPassword() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  
  // If user is already logged in, redirect to home page
  useEffect(() => {
    if (currentUser) {
      navigate('/');
    }
  }, [currentUser, navigate]);

  return <ForgotPasswordComponent />;
}

export default ForgotPassword;
