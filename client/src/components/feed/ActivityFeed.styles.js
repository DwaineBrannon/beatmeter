import styled from 'styled-components';

export const ActivityFeedContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

export const FeedHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e0e0e0;

  h2 {
    margin: 0;
    color: #333;
  }
`;

export const FeedTabs = styled.div`
  display: flex;
  gap: 10px;
`;

export const TabButton = styled.button`
  padding: 8px 16px;
  border: 1px solid #ddd;
  background: white;
  color: #666;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.2s;

  &.active {
    background: #007bff;
    color: white;
    border-color: #007bff;
  }

  &:hover:not(.active) {
    background: #f8f9fa;
  }
`;

export const Activities = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ActivityItem = styled.article`
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const ActivityContent = styled.div`
  margin-bottom: 12px;
`;

export const ActivityText = styled.div`
  font-size: 14px;
  color: #333;
  margin-bottom: 8px;
`;

export const ActivityReview = styled.blockquote`
  font-style: italic;
  color: #666;
  margin: 8px 0;
  padding: 8px;
  background: #f8f9fa;
  border-radius: 4px;
  border-left: 3px solid #007bff;
`;

export const ActivityTimestamp = styled.time`
  font-size: 12px;
  color: #999;
`;

export const ActivityEngagement = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  border-top: 1px solid #f0f0f0;
`;

export const EngagementStats = styled.div`
  display: flex;
  gap: 15px;
  font-size: 12px;
  color: #666;

  span {
    margin-right: 0;
  }
`;

export const EngagementActions = styled.div`
  display: flex;
  gap: 10px;
`;

export const LikeButton = styled.button`
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  transition: all 0.2s;

  &:hover {
    background: #f8f9fa;
  }

  &.liked {
    color: #e91e63;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const CommentButton = styled.button`
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  transition: all 0.2s;

  &:hover {
    background: #f8f9fa;
  }
`;

export const LoadingContainer = styled.div`
  text-align: center;
  padding: 40px 20px;
  color: #666;
  font-style: italic;
`;

export const ErrorContainer = styled.div`
  text-align: center;
  padding: 40px 20px;
  color: #dc3545;
  background: #f8f9fa;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
`;

export const NoActivitiesContainer = styled.div`
  text-align: center;
  padding: 40px 20px;
  color: #666;
  font-style: italic;
`;

export const LoadingSpinner = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid #f3f3f3;
  border-top: 2px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  display: inline-block;
  margin-right: 10px;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const RetryButton = styled.button`
  margin-top: 10px;
  padding: 8px 16px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
  }
`;
