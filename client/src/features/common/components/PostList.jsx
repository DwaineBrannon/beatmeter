import React from 'react';
import styled from 'styled-components';
import PostItem from './PostItem';

const PostListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: ${props => props.theme.colors.text.secondary || '#6c757d'};
  font-size: 1rem;
`;

const ErrorMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: #dc3545;
  font-size: 1rem;
`;

const EmptyMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: ${props => props.theme.colors.text.secondary || '#6c757d'};
  font-size: 1rem;
`;

const PostList = ({ 
  posts = [], 
  loading = false, 
  error = null, 
  onDelete = null,
  showActions = false,
  emptyMessage = "No posts found.",
  loadingMessage = "Loading posts...",
  className = "" 
}) => {
  if (loading) {
    return <LoadingMessage className={className}>{loadingMessage}</LoadingMessage>;
  }

  if (error) {
    return <ErrorMessage className={className}>Error: {error}</ErrorMessage>;
  }

  if (!posts || posts.length === 0) {
    return <EmptyMessage className={className}>{emptyMessage}</EmptyMessage>;
  }

  return (
    <PostListContainer className={className}>
      {posts.map((post) => (
        <PostItem 
          key={post.id} 
          post={post} 
          onDelete={onDelete}
          showActions={showActions}
        />
      ))}
    </PostListContainer>
  );
};

export default PostList;
