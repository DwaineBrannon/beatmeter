import React, { useState } from 'react';
import styled from 'styled-components';
import { useAuth } from '../../auth/context/AuthContext';

const PostContainer = styled.div`
  background-color: ${props => props.theme.colors.surface.primary || '#fff'};
  border: 1px solid ${props => props.theme.colors.border.primary || '#e1e8ed'};
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;

const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const PostInfo = styled.div`
  flex: 1;
`;

const PostType = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  background-color: ${props => props.$type === 'Reviews' ? '#e3f2fd' : '#f3e5f5'};
  color: ${props => props.$type === 'Reviews' ? '#1976d2' : '#7b1fa2'};
  margin-bottom: 0.5rem;
`;

const PostTitle = styled.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary || '#111'};
  line-height: 1.4;
`;

const PostMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.875rem;
  color: ${props => props.theme.colors.text.secondary || '#6c757d'};
  margin-bottom: 1rem;
`;

const AuthorName = styled.span`
  font-weight: 500;
  color: ${props => props.theme.colors.primary.main || '#007bff'};
`;

const PostDate = styled.span``;

const PostActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.text.secondary || '#6c757d'};
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 4px;
  font-size: 0.875rem;
  
  &:hover {
    background-color: ${props => props.theme.colors.surface.secondary || '#f8f9fa'};
    color: ${props => props.theme.colors.text.primary || '#111'};
  }

  &.delete {
    color: #dc3545;
    &:hover {
      background-color: #f8d7da;
    }
  }
`;

const PostContent = styled.div`
  font-size: 1rem;
  line-height: 1.6;
  color: ${props => props.theme.colors.text.primary || '#111'};
  white-space: pre-wrap;
  word-wrap: break-word;
`;

const PostStats = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid ${props => props.theme.colors.border.secondary || '#f1f3f4'};
  font-size: 0.875rem;
  color: ${props => props.theme.colors.text.secondary || '#6c757d'};
`;

const StatItem = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const DeleteConfirmation = styled.div`
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

const ConfirmDialog = styled.div`
  background-color: ${props => props.theme.colors.surface.primary || '#fff'};
  padding: 2rem;
  border-radius: 8px;
  max-width: 400px;
  width: 90%;
`;

const ConfirmTitle = styled.h3`
  margin: 0 0 1rem 0;
  color: ${props => props.theme.colors.text.primary || '#111'};
`;

const ConfirmText = styled.p`
  margin: 0 0 1.5rem 0;
  color: ${props => props.theme.colors.text.secondary || '#6c757d'};
`;

const ConfirmButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
`;

const ConfirmButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  font-size: 0.875rem;
  cursor: pointer;
  
  &.cancel {
    background-color: ${props => props.theme.colors.surface.secondary || '#f8f9fa'};
    color: ${props => props.theme.colors.text.primary || '#111'};
  }
  
  &.delete {
    background-color: #dc3545;
    color: white;
  }
`;

const PostItem = ({ post, onDelete, showActions = true }) => {
  const { currentUser } = useAuth();
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const formatDate = (timestamp) => {
    if (!timestamp) return 'Just now';
    
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    
    return date.toLocaleDateString();
  };

  const isOwnPost = currentUser && currentUser.uid === post.userId;

  const handleDeleteClick = () => {
    setShowDeleteConfirm(true);
  };

  const handleDeleteConfirm = async () => {
    setIsDeleting(true);
    try {
      if (onDelete) {
        await onDelete(post.id);
      }
    } catch (error) {
      console.error('Error deleting post:', error);
    } finally {
      setIsDeleting(false);
      setShowDeleteConfirm(false);
    }
  };

  const handleDeleteCancel = () => {
    setShowDeleteConfirm(false);
  };

  return (
    <>
      <PostContainer>
        <PostHeader>
          <PostInfo>
            <PostType $type={post.type}>{post.type}</PostType>
            <PostTitle>{post.title}</PostTitle>
            <PostMeta>
              <AuthorName>{post.userDisplayName || 'Anonymous'}</AuthorName>
              <PostDate>{formatDate(post.timestamp)}</PostDate>
            </PostMeta>
          </PostInfo>
          {showActions && isOwnPost && (
            <PostActions>
              <ActionButton 
                className="delete" 
                onClick={handleDeleteClick}
                title="Delete post"
              >
                🗑️
              </ActionButton>
            </PostActions>
          )}
        </PostHeader>

        <PostContent>{post.content}</PostContent>

        <PostStats>
          <StatItem>
            ❤️ {post.likesCount || 0}
          </StatItem>
          <StatItem>
            💬 {post.commentsCount || 0}
          </StatItem>
        </PostStats>
      </PostContainer>

      {showDeleteConfirm && (
        <DeleteConfirmation onClick={(e) => e.target === e.currentTarget && handleDeleteCancel()}>
          <ConfirmDialog>
            <ConfirmTitle>Delete Post</ConfirmTitle>
            <ConfirmText>
              Are you sure you want to delete "{post.title}"? This action cannot be undone.
            </ConfirmText>
            <ConfirmButtons>
              <ConfirmButton 
                className="cancel" 
                onClick={handleDeleteCancel}
                disabled={isDeleting}
              >
                Cancel
              </ConfirmButton>
              <ConfirmButton 
                className="delete" 
                onClick={handleDeleteConfirm}
                disabled={isDeleting}
              >
                {isDeleting ? 'Deleting...' : 'Delete'}
              </ConfirmButton>
            </ConfirmButtons>
          </ConfirmDialog>
        </DeleteConfirmation>
      )}
    </>
  );
};

export default PostItem;
