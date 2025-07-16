import React, { useState } from 'react';
import styled from 'styled-components';
import { useAuth } from '../../auth/context/AuthContext';
import { createPost, POST_TYPES } from '../../../services/database/postService';

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
  max-width: 600px;
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
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary || '#111'};
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${props => props.theme.colors.border.primary || '#ddd'};
  border-radius: 5px;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary.main || '#007bff'};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${props => props.theme.colors.border.primary || '#ddd'};
  border-radius: 5px;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary.main || '#007bff'};
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${props => props.theme.colors.border.primary || '#ddd'};
  border-radius: 5px;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary.main || '#007bff'};
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 2rem;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
`;

const CancelButton = styled(Button)`
  background-color: ${props => props.theme.colors.surface.secondary || '#f8f9fa'};
  color: ${props => props.theme.colors.text.primary || '#111'};
  &:hover {
    background-color: ${props => props.theme.colors.surface.tertiary || '#e9ecef'};
  }
`;

const SubmitButton = styled(Button)`
  background-color: ${props => props.theme.colors.primary.main || '#007bff'};
  color: white;
  &:hover {
    background-color: ${props => props.theme.colors.primary.dark || '#0056b3'};
  }
  &:disabled {
    background-color: ${props => props.theme.colors.text.disabled || '#6c757d'};
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.div`
  color: #dc3545;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

const CharacterCount = styled.div`
  font-size: 0.875rem;
  color: ${props => props.theme.colors.text.secondary || '#6c757d'};
  text-align: right;
  margin-top: 0.25rem;
`;

const CreatePostModal = ({ isOpen, onClose, onPostCreated }) => {
  const { currentUser } = useAuth();
  const [formData, setFormData] = useState({
    type: POST_TYPES.NOTE, // Only allow Notes from this modal
    title: '',
    content: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError(''); // Clear error when user starts typing
  };

  const validateForm = () => {
    if (!formData.title.trim()) {
      setError('Title is required');
      return false;
    }
    if (!formData.content.trim()) {
      setError('Content is required');
      return false;
    }
    if (formData.title.length > 100) {
      setError('Title must be 100 characters or less');
      return false;
    }
    if (formData.content.length > 2000) {
      setError('Content must be 2000 characters or less');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const postData = {
        userId: currentUser.uid,
        userDisplayName: currentUser.displayName || 'Anonymous',
        type: formData.type,
        title: formData.title.trim(),
        content: formData.content.trim()
      };

      const postId = await createPost(postData);
      console.log('Post created successfully with ID:', postId);

      // Reset form
      setFormData({
        type: POST_TYPES.NOTE, // Always reset to Note since that's all we allow
        title: '',
        content: ''
      });

      // Notify parent component
      if (onPostCreated) {
        onPostCreated();
      }

      onClose();
    } catch (error) {
      console.error('Error creating post:', error);
      setError('Failed to create post. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setFormData({
        type: POST_TYPES.NOTE, // Always reset to Note since that's all we allow
        title: '',
        content: ''
      });
      setError('');
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={(e) => e.target === e.currentTarget && handleClose()}>
      <ModalContent>
        <CloseButton onClick={handleClose} disabled={isSubmitting}>
          ×
        </CloseButton>
        
        <Title>Create New Note</Title>
        
        <form onSubmit={handleSubmit}>
          {/* Remove post type selector since we only allow Notes */}
          
          <InputGroup>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              type="text"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Enter a catchy title..."
              disabled={isSubmitting}
              maxLength={100}
            />
            <CharacterCount>
              {formData.title.length}/100
            </CharacterCount>
          </InputGroup>

          <InputGroup>
            <Label htmlFor="content">Content</Label>
            <TextArea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              placeholder="What's on your mind?"
              disabled={isSubmitting}
              maxLength={2000}
            />
            <CharacterCount>
              {formData.content.length}/2000
            </CharacterCount>
          </InputGroup>

          {error && <ErrorMessage>{error}</ErrorMessage>}

          <ButtonGroup>
            <CancelButton 
              type="button" 
              onClick={handleClose}
              disabled={isSubmitting}
            >
              Cancel
            </CancelButton>
            <SubmitButton 
              type="submit"
              disabled={isSubmitting || !formData.title.trim() || !formData.content.trim()}
            >
              {isSubmitting ? 'Creating...' : 'Create Note'}
            </SubmitButton>
          </ButtonGroup>
        </form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default CreatePostModal;
