import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import styled from 'styled-components';

const ForgotPasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  padding: 2rem;
`;

const ForgotPasswordForm = styled.form`
  width: 100%;
  max-width: 400px;
  background-color: ${props => props.theme.colors.surface.primary || 'rgba(30, 30, 30, 0.6)'};
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.text.primary || '#fff'};
`;

const Subtitle = styled.p`
  text-align: center;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.text.secondary || 'rgba(255, 255, 255, 0.7)'};
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

const SuccessMessage = styled.div`
  color: #52c41a;
  margin-bottom: 1rem;
  text-align: center;
  padding: 0.75rem;
  background-color: rgba(82, 196, 26, 0.1);
  border-radius: 4px;
`;

const ErrorMessage = styled.div`
  color: #ff4d4f;
  margin-bottom: 1rem;
  text-align: center;
  padding: 0.75rem;
  background-color: rgba(255, 77, 79, 0.1);
  border-radius: 4px;
`;

const BackToLogin = styled.p`
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

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const { resetPassword } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage('');
      setError('');
      setLoading(true);
      await resetPassword(email);
      setMessage('Check your inbox for further instructions');
    } catch (err) {
      console.error('Error resetting password:', err);
      
      if (err.code === 'auth/user-not-found') {
        setError('No account found with that email');
      } else if (err.code === 'auth/invalid-email') {
        setError('Invalid email address');
      } else {
        setError('Failed to reset password. Please try again.');
      }
    }
    
    setLoading(false);
  }

  return (
    <ForgotPasswordContainer>
      <ForgotPasswordForm onSubmit={handleSubmit}>
        <Title>Password Reset</Title>
        <Subtitle>
          Enter your email address and we'll send you instructions on how to reset your password.
        </Subtitle>
        
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {message && <SuccessMessage>{message}</SuccessMessage>}
        
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
        
        <SubmitButton type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Reset Password'}
        </SubmitButton>
        
        <BackToLogin>
          <Link to="/login">Back to Log In</Link>
        </BackToLogin>
      </ForgotPasswordForm>
    </ForgotPasswordContainer>
  );
}

export default ForgotPassword;
