import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import styled from 'styled-components';

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  padding: 2rem;
`;

const SignUpForm = styled.form`
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

const AlreadyHaveAccount = styled.p`
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

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { signup, googleSignIn } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    // Basic validation
    if (password !== confirmPassword) {
      return setError('Passwords do not match');
    }

    if (password.length < 6) {
      return setError('Password must be at least 6 characters');
    }

    if (!displayName.trim()) {
      return setError('Please enter a display name');
    }    try {
      setError('');
      setLoading(true);
      await signup(email, password, displayName);
      navigate('/profile-setup');
    } catch (err) {
      console.error('Error during signup:', err);
      
      // Provide more readable error messages
      if (err.code === 'auth/email-already-in-use') {
        setError('Email is already in use. Please use a different email or log in');
      } else if (err.code === 'auth/invalid-email') {
        setError('Invalid email address');
      } else {
        setError('Failed to create an account. Please try again.');
      }
    }
    
    setLoading(false);
  }

  async function handleGoogleSignIn() {    try {
      setError('');
      setLoading(true);
      await googleSignIn();
      navigate('/profile-setup');
    } catch (err) {
      console.error('Error during Google sign-in:', err);
      setError('Failed to sign in with Google. Please try again.');
    }
    
    setLoading(false);
  }

  return (
    <SignUpContainer>
      <SignUpForm onSubmit={handleSubmit}>
        <Title>Create Account</Title>
        
        {error && <ErrorMessage>{error}</ErrorMessage>}
        
        <InputGroup>
          <Label htmlFor="displayName">Username</Label>
          <Input 
            type="text" 
            id="displayName" 
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)} 
            required 
          />
        </InputGroup>
        
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
        
        <InputGroup>
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input 
            type="password" 
            id="confirmPassword" 
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
          />
        </InputGroup>
        
        <SubmitButton type="submit" disabled={loading}>
          {loading ? 'Creating account...' : 'Create Account'}
        </SubmitButton>
        
        <OrDivider>
          <span>OR</span>
        </OrDivider>
        
        <GoogleButton type="button" onClick={handleGoogleSignIn} disabled={loading}>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" 
            alt="Google logo" 
          />
          Sign up with Google
        </GoogleButton>
        
        <AlreadyHaveAccount>
          Already have an account? <Link to="/login">Log In</Link>
        </AlreadyHaveAccount>
      </SignUpForm>
    </SignUpContainer>
  );
}

export default SignUp;
