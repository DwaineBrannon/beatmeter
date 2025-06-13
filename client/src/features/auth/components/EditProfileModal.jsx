import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import styled from 'styled-components';

// Styled components
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: ${props => props.theme.colors.surface.primary || '#fff'};
  padding: 2rem;
  border-radius: 10px;
  max-width: 500px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${props => props.theme.colors.text.secondary || '#888'};
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.text.primary || '#111'};
`;

const InputGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.text.primary || '#111'};
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${props => props.theme.colors.border || '#ddd'};
  border-radius: 4px;
  background-color: ${props => props.theme.colors.surface.secondary || '#f9f9f9'};
  color: ${props => props.theme.colors.text.primary || '#111'};
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.accent || '#007bff'};
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${props => props.theme.colors.border || '#ddd'};
  border-radius: 4px;
  background-color: ${props => props.theme.colors.surface.secondary || '#f9f9f9'};
  color: ${props => props.theme.colors.text.primary || '#111'};
  resize: vertical;
  min-height: 100px;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.accent || '#007bff'};
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  background-color: ${props => props.theme.colors.accent || '#007bff'};
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover:not(:disabled) {
    background-color: #0069d9;
  }
  
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.div`
  color: #dc3545;
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
  border: 3px solid ${props => props.theme.colors.accent || '#007bff'};
`;

const ImageUploadButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: transparent;
  border: 1px solid ${props => props.theme.colors.accent || '#007bff'};
  color: ${props => props.theme.colors.accent || '#007bff'};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: ${props => props.theme.colors.accent || '#007bff'}20;
  }
`;

function EditProfileModal({ isOpen, onClose, userData }) {
  const { currentUser, updateUserProfile } = useAuth();
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [bio, setBio] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [isNewProfile, setIsNewProfile] = useState(false);
  
  const fileInputRef = useRef(null);
  
  // Initialize form data when modal opens or userData changes
  useEffect(() => {
    if (isOpen && userData) {
      setDisplayName(userData.name || '');
      setBio(userData.bio || '');
      setImagePreview(userData.profilePicture || 'https://via.placeholder.com/150');
      setIsNewProfile(userData.isNewProfile || false);
    }
  }, [isOpen, userData]);

  if (!isOpen) return null;

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
      });
      
      onClose(true); // Close with refresh flag
    } catch (error) {
      console.error('Error updating profile:', error);
      setError('Failed to update profile. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ModalOverlay onClick={(e) => e.target === e.currentTarget && onClose()}>      <ModalContent>
        <CloseButton onClick={() => onClose()}>×</CloseButton>
        <Title>{isNewProfile ? 'Complete Your Profile' : 'Edit Profile'}</Title>
        
        {isNewProfile && (
          <div style={{ 
            backgroundColor: '#f8f9fa', 
            padding: '12px', 
            borderRadius: '4px', 
            marginBottom: '16px',
            border: '1px solid #e9ecef'
          }}>
            <p style={{ margin: '0 0 8px 0', color: '#495057' }}>
              Welcome to BeatMeter! Complete your profile to get started.
            </p>
            <ul style={{ margin: '0', paddingLeft: '20px', color: '#6c757d' }}>
              <li>Upload a profile picture</li>
              <li>Add a bio to tell others about yourself</li>
              <li>Customize your display name</li>
            </ul>
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
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
              Change Profile Picture
            </ImageUploadButton>
          </ProfileImageContainer>
          
          <InputGroup>
            <Label htmlFor="displayName">Display Name</Label>
            <Input
              id="displayName"
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Enter your display name"
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
            {loading ? 'Saving Changes...' : 'Save Changes'}
          </SubmitButton>
        </form>
      </ModalContent>
    </ModalOverlay>
  );
}

export default EditProfileModal;
