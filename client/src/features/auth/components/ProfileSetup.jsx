import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import styled from 'styled-components';

// Styled components
const ProfileSetupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  padding: 2rem;
`;

const SetupForm = styled.form`
  width: 100%;
  max-width: 500px;
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

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${props => props.theme.colors.border || '#444'};
  border-radius: 4px;
  background-color: ${props => props.theme.colors.surface.secondary || 'rgba(20, 20, 20, 0.6)'};
  color: ${props => props.theme.colors.text.primary || '#fff'};
  resize: vertical;
  min-height: 100px;
  
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

const ErrorMessage = styled.div`
  color: #ff6b6b;
  margin-bottom: 1rem;
  text-align: center;
`;

const ProfileImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const ProfileImagePreview = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  border: 3px solid ${props => props.theme.colors.accent || '#1db954'};
`;

const ImageUploadButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: transparent;
  border: 1px solid ${props => props.theme.colors.accent || '#1db954'};
  color: ${props => props.theme.colors.accent || '#1db954'};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: ${props => props.theme.colors.accent || '#1db954'}20;
  }
`;

function ProfileSetup() {
  const { currentUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [displayName, setDisplayName] = useState(currentUser?.displayName || '');
  const [bio, setBio] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [imagePreview, setImagePreview] = useState(currentUser?.photoURL || 'https://via.placeholder.com/150');
  
  const fileInputRef = useRef(null);

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePicture(file);
      // Preview the selected image
      const reader = new FileReader();
      reader.onload = (event) => {
        setImagePreview(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (displayName.trim() === '') {
      setError('Display name cannot be empty');
      return;
    }
      try {
      setLoading(true);
      setError('');
      
      await updateUserProfile({
        displayName,
        bio,
        profilePicture,
        profileSetup: true // Mark profile as complete
      });
        // Redirect to profile page after successful setup
      navigate(`/profile/${displayName}`);
    } catch (error) {
      console.error('Error setting up profile:', error);
      setError('Failed to set up profile. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProfileSetupContainer>
      <SetupForm onSubmit={handleSubmit}>
        <Title>Set Up Your Profile</Title>
        
        {error && <ErrorMessage>{error}</ErrorMessage>}
        
        <ProfileImageContainer>
          <ProfileImagePreview src={imagePreview} alt="Profile Preview" />
          <input
            type="file"
            accept="image/*"
            onChange={handleProfilePictureChange}
            ref={fileInputRef}
            style={{ display: 'none' }}
          />
          <ImageUploadButton type="button" onClick={triggerFileInput}>
            Choose Profile Picture
          </ImageUploadButton>
        </ProfileImageContainer>
        
        <InputGroup>
          <Label htmlFor="displayName">Display Name</Label>
          <Input
            id="displayName"
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            placeholder="Choose a display name"
            required
          />
        </InputGroup>
        
        <InputGroup>
          <Label htmlFor="bio">Bio</Label>
          <Textarea
            id="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Tell us a bit about yourself..."
          />
        </InputGroup>
        
        <SubmitButton type="submit" disabled={loading}>
          {loading ? 'Setting Up Profile...' : 'Complete Setup'}
        </SubmitButton>
      </SetupForm>
    </ProfileSetupContainer>
  );
}

export default ProfileSetup;
