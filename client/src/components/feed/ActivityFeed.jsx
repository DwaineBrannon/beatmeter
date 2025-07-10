import React, { useState, useCallback, useMemo } from 'react';
import { usePersonalizedFeed, useGlobalFeed, useActivityLike } from '../../hooks/useFeedData.js';
import { useAuth } from '../../features/auth/context/AuthContext.jsx';
import { Timestamp } from 'firebase/firestore';
import {
  ActivityFeedContainer,
  FeedHeader,
  FeedTabs,
  TabButton,
  Activities,
  ActivityItem,
  ActivityContent,
  ActivityText,
  ActivityReview,
  ActivityTimestamp,
  ActivityEngagement,
  EngagementStats,
  EngagementActions,
  LikeButton,
  CommentButton,
  LoadingContainer,
  ErrorContainer,
  NoActivitiesContainer,
  LoadingSpinner,
  RetryButton
} from './ActivityFeed.styles.js';

const ActivityFeed = () => {
  const { user } = useAuth();
  const [feedType, setFeedType] = useState('personalized');
  const [optimisticUpdates, setOptimisticUpdates] = useState(new Map());
  
  // Improved hook usage - only fetch when needed
  const personalizedFeed = usePersonalizedFeed(feedType === 'personalized' ? 20 : 0);
  const globalFeed = useGlobalFeed(feedType === 'global' ? 20 : 0);
  const { likeActivity, unlikeActivity, loading: likeLoading } = useActivityLike();
  
  const currentFeed = feedType === 'personalized' ? personalizedFeed : globalFeed;
  const { activities = [], loading, error, refetch } = currentFeed || {};

  // Apply optimistic updates to activities
  const activitiesWithOptimisticUpdates = activities.map(activity => {
    const update = optimisticUpdates.get(activity.id);
    if (!update) return activity;
    
    return {
      ...activity,
      engagement: {
        ...activity.engagement,
        hasUserLiked: update.hasUserLiked,
        likeCount: update.likeCount
      }
    };
  });

  const handleLikeToggle = async (activityId, isCurrentlyLiked) => {
    if (!user) return;

    const activity = activities.find(a => a.id === activityId);
    const currentLikeCount = activity?.engagement?.likeCount || 0;
    
    // Optimistic update
    setOptimisticUpdates(prev => new Map(prev).set(activityId, {
      hasUserLiked: !isCurrentlyLiked,
      likeCount: isCurrentlyLiked ? currentLikeCount - 1 : currentLikeCount + 1
    }));

    try {
      if (isCurrentlyLiked) {
        await unlikeActivity(activityId);
      } else {
        await likeActivity(activityId);
      }
      // Clear optimistic update and refresh
      setOptimisticUpdates(prev => {
        const newUpdates = new Map(prev);
        newUpdates.delete(activityId);
        return newUpdates;
      });
      refetch();
    } catch (error) {
      console.error('Error toggling like:', error);
      // Rollback optimistic update on error
      setOptimisticUpdates(prev => {
        const newUpdates = new Map(prev);
        newUpdates.delete(activityId);
        return newUpdates;
      });
    }
  };

  // Improved timestamp formatting
  const formatTimestamp = (timestamp) => {
    if (!timestamp) return 'Recently';
    
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    const now = new Date();
    const diffInMinutes = Math.floor((now - date) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours}h ago`;
    
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `${diffInDays}d ago`;
    
    return date.toLocaleDateString();
  };

  // Activity type icons
  const getActivityIcon = (actionType) => {
    switch (actionType) {
      case 'new_rating': return '⭐';
      case 'new_list': return '📝';
      case 'followed_user': return '👥';
      default: return '📱';
    }
  };

  const formatActivityText = (activity) => {
    const icon = getActivityIcon(activity.actionType);
    switch (activity.actionType) {
      case 'new_rating':
        return `${icon} ${activity.userDisplayName} rated "${activity.additionalData?.albumName}" by ${activity.additionalData?.albumArtist} - ${activity.additionalData?.rating}/10`;
      case 'new_list':
        return `${icon} ${activity.userDisplayName} created a new list: "${activity.additionalData?.listName}"`;
      case 'followed_user':
        return `${icon} ${activity.userDisplayName} followed ${activity.additionalData?.followedUserDisplayName}`;
      default:
        return `${icon} ${activity.userDisplayName} performed an action`;
    }
  };

  if (loading) {
    return (
      <LoadingContainer role="status" aria-label="Loading activities">
        <LoadingSpinner />
        Loading activities...
      </LoadingContainer>
    );
  }

  if (error) {
    return (
      <ErrorContainer role="alert">
        <p>Error loading feed: {error}</p>
        <RetryButton onClick={refetch}>Try Again</RetryButton>
      </ErrorContainer>
    );
  }

  return (
    <ActivityFeedContainer>
      <FeedHeader>
        <h2>Activity Feed</h2>
        {user && (
          <FeedTabs role="tablist" aria-label="Feed type selection">
            <TabButton 
              role="tab"
              aria-selected={feedType === 'personalized'}
              aria-controls="feed-content"
              className={feedType === 'personalized' ? 'active' : ''}
              onClick={() => setFeedType('personalized')}
            >
              Following
            </TabButton>
            <TabButton 
              role="tab"
              aria-selected={feedType === 'global'}
              aria-controls="feed-content"
              className={feedType === 'global' ? 'active' : ''}
              onClick={() => setFeedType('global')}
            >
              Discover
            </TabButton>
          </FeedTabs>
        )}
      </FeedHeader>

      <Activities id="feed-content" role="main">
        {(!activitiesWithOptimisticUpdates || activitiesWithOptimisticUpdates.length === 0) ? (
          <NoActivitiesContainer role="status">
            <p>No activities to show.</p>
            {feedType === 'personalized' && (
              <p>Try following some users or check out the Discover feed!</p>
            )}
          </NoActivitiesContainer>
        ) : (
          activitiesWithOptimisticUpdates.map((activity) => (
            <ActivityItem key={activity.id}>
              <ActivityContent>
                <ActivityText>
                  {formatActivityText(activity)}
                </ActivityText>
                
                {activity.additionalData?.review && (
                  <ActivityReview>
                    "{activity.additionalData.review}"
                  </ActivityReview>
                )}
                
                <ActivityTimestamp 
                  dateTime={activity.timestamp instanceof Timestamp 
                    ? activity.timestamp.toDate().toISOString()
                    : new Date(activity.timestamp).toISOString()
                  }
                >
                  {formatTimestamp(activity.timestamp)}
                </ActivityTimestamp>
              </ActivityContent>

              <ActivityEngagement>
                <EngagementStats aria-label="Engagement statistics">
                  <span aria-label={`${activity.engagement?.likeCount || 0} likes`}>
                    ❤️ {activity.engagement?.likeCount || 0}
                  </span>
                  <span aria-label={`${activity.engagement?.commentCount || 0} comments`}>
                    💬 {activity.engagement?.commentCount || 0}
                  </span>
                </EngagementStats>

                {user && (
                  <EngagementActions>
                    <LikeButton
                      className={activity.engagement?.hasUserLiked ? 'liked' : ''}
                      onClick={() => handleLikeToggle(activity.id, activity.engagement?.hasUserLiked)}
                      disabled={likeLoading}
                      aria-label={`${activity.engagement?.hasUserLiked ? 'Unlike' : 'Like'} this activity`}
                      aria-pressed={activity.engagement?.hasUserLiked}
                    >
                      {activity.engagement?.hasUserLiked ? '❤️' : '🤍'} 
                      {activity.engagement?.hasUserLiked ? 'Unlike' : 'Like'}
                    </LikeButton>
                    <CommentButton 
                      aria-label="Comment on this activity"
                      onClick={() => {/* TODO: Implement comment functionality */}}
                    >
                      💬 Comment
                    </CommentButton>
                  </EngagementActions>
                )}
              </ActivityEngagement>
            </ActivityItem>
          ))
        )}
      </Activities>
    </ActivityFeedContainer>
  );
};

export default ActivityFeed;
