// filepath: c:\Users\Brody Roze\beatmeterweb\client\src\pages\CreateAccount.jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../features/auth/context/AuthContext';
import SignUp from '../features/auth/components/SignUp';

function CreateAccount() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  
  // If user is already logged in, redirect to home page
  useEffect(() => {
    if (currentUser) {
      navigate('/');
    }
  }, [currentUser, navigate]);

  return <SignUp />;
}

export default CreateAccount;