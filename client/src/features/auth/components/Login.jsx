import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { db } from '../../../config/firebase';
import { doc, getDoc } from 'firebase/firestore';
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  padding: 2rem;
`;

const LoginForm = styled.form`
  width: 100%;
  max-width: 400px;
  background-color: ${props => props.theme.colors.surface.primary || 'rgba(30, 30, 30, 0.6)'};
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.text.primary || '#fff'};
`;

const InputGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.text.primary || '#fff'};
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${props => props.theme.colors.border || '#444'};
  border-radius: 4px;
  background-color: ${props => props.theme.colors.surface.secondary || 'rgba(20, 20, 20, 0.6)'};
  color: ${props => props.theme.colors.text.primary || '#fff'};
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.accent || '#1db954'};
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  background-color: ${props => props.theme.colors.accent || '#1db954'};
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: ${props => props.disabled ? '#cccccc' : '#18a448'};
  }
  
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const ForgotPassword = styled.div`
  text-align: right;
  margin-bottom: 1.5rem;
  
  a {
    color: ${props => props.theme.colors.accent || '#1db954'};
    text-decoration: none;
    font-size: 0.9rem;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const OrDivider = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
  
  &::before, &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid ${props => props.theme.colors.border || '#444'};
  }
  
  span {
    padding: 0 10px;
    color: ${props => props.theme.colors.text.secondary || 'rgba(255, 255, 255, 0.7)'};
  }
`;

const GoogleButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${props => props.theme.colors.border || '#444'};
  border-radius: 4px;
  background-color: #fff;
  color: #333;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
  
  img {
    height: 1.5rem;
    margin-right: 0.5rem;
  }
  
  &:hover {
    background-color: #f1f1f1;
  }
`;

const ErrorMessage = styled.div`
  color: #ff4d4f;
  margin-bottom: 1rem;
  text-align: center;
`;

const NeedAccount = styled.p`
  margin-top: 1.5rem;
  text-align: center;
  color: ${props => props.theme.colors.text.secondary || 'rgba(255, 255, 255, 0.7)'};
  
  a {
    color: ${props => props.theme.colors.accent || '#1db954'};
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login, googleSignIn } = useAuth();
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      const userCredential = await login(email, password);
      
      // Check if user has completed their profile
      const userDocRef = doc(db, 'userprofiles', userCredential.user.uid);
      const userDoc = await getDoc(userDocRef);
      
      if (userDoc.exists() && userDoc.data().bio) {
        // User has completed profile setup, redirect to home
        navigate('/');
      } else {
        // User hasn't completed profile setup, redirect to setup page
        navigate('/profile-setup');
      }
    } catch (err) {
      console.error('Error during login:', err);
      
      // Provide more readable error messages
      if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
        setError('Invalid email or password');
      } else if (err.code === 'auth/invalid-email') {
        setError('Invalid email address');
      } else if (err.code === 'auth/too-many-requests') {
        setError('Too many failed login attempts. Please try again later.');
      } else {
        setError('Failed to log in. Please try again.');
      }
    }
    
    setLoading(false);
  }
  async function handleGoogleSignIn() {
    try {
      setError('');
      setLoading(true);
      const user = await googleSignIn();
      
      // Check if user has completed their profile
      const userDocRef = doc(db, 'userprofiles', user.uid);
      const userDoc = await getDoc(userDocRef);
      
      if (userDoc.exists() && userDoc.data().bio) {
        // User has completed profile setup, redirect to home
        navigate('/');
      } else {
        // User hasn't completed profile setup, redirect to setup page
        navigate('/profile-setup');
      }
    } catch (err) {
      console.error('Error during Google sign-in:', err);
      setError('Failed to sign in with Google. Please try again.');
    }
    
    setLoading(false);
  }

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleSubmit}>
        <Title>Log In</Title>
        
        {error && <ErrorMessage>{error}</ErrorMessage>}
        
        <InputGroup>
          <Label htmlFor="email">Email</Label>
          <Input 
            type="email" 
            id="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </InputGroup>
        
        <InputGroup>
          <Label htmlFor="password">Password</Label>
          <Input 
            type="password" 
            id="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </InputGroup>
        
        <ForgotPassword>
          <Link to="/forgot-password">Forgot Password?</Link>
        </ForgotPassword>
        
        <SubmitButton type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Log In'}
        </SubmitButton>
        
        <OrDivider>
          <span>OR</span>
        </OrDivider>
        
        <GoogleButton type="button" onClick={handleGoogleSignIn} disabled={loading}>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" 
            alt="Google logo" 
          />
          Log in with Google
        </GoogleButton>
        
        <NeedAccount>
          Need an account? <Link to="/create-account">Create Account</Link>
        </NeedAccount>
      </LoginForm>
    </LoginContainer>
  );
}

export default Login;
