import React, { useState } from 'react';
import { usePersonalizedFeed, useGlobalFeed, useActivityLike } from '../../hooks/useFeedData.js';
import { useAuth } from '../../features/auth/context/AuthContext.jsx';
import './ActivityFeed.css';

const ActivityFeed = () => {
  const { user } = useAuth();
  const [feedType, setFeedType] = useState('personalized');
  
  // Use different hooks based on feed type
  const personalizedFeed = usePersonalizedFeed(20);
  const globalFeed = useGlobalFeed(20);
  const { likeActivity, unlikeActivity, loading: likeLoading } = useActivityLike();
  
  // Choose which feed to display
  const currentFeed = feedType === 'personalized' ? personalizedFeed : globalFeed;
  const { activities = [], loading, error, refetch } = currentFeed || {};

  const handleLikeToggle = async (activityId, isCurrentlyLiked) => {
    try {
      if (isCurrentlyLiked) {
        await unlikeActivity(activityId);
      } else {
        await likeActivity(activityId);
      }
      // Refresh the feed to get updated like counts
      refetch();
    } catch (error) {
      console.error('Error toggling like:', error);
    }
  };

  const formatActivityText = (activity) => {
    switch (activity.actionType) {
      case 'new_rating':
        return `${activity.userDisplayName} rated "${activity.additionalData?.albumName}" by ${activity.additionalData?.albumArtist} - ${activity.additionalData?.rating}/10`;
      case 'new_list':
        return `${activity.userDisplayName} created a new list: "${activity.additionalData?.listName}"`;
      case 'followed_user':
        return `${activity.userDisplayName} followed ${activity.additionalData?.followedUserDisplayName}`;
      default:
        return `${activity.userDisplayName} performed an action`;
    }
  };

  if (loading) {
    return <div className="activity-feed loading">Loading activities...</div>;
  }

  if (error) {
    return <div className="activity-feed error">Error loading feed: {error}</div>;
  }

  return (
    <div className="activity-feed">
      <div className="feed-header">
        <h2>Activity Feed</h2>
        {user && (
          <div className="feed-tabs">
            <button 
              className={feedType === 'personalized' ? 'active' : ''}
              onClick={() => setFeedType('personalized')}
            >
              Following
            </button>
            <button 
              className={feedType === 'global' ? 'active' : ''}
              onClick={() => setFeedType('global')}
            >
              Discover
            </button>
          </div>
        )}
      </div>

      <div className="activities">
        {(!activities || activities.length === 0) ? (
          <div className="no-activities">
            No activities to show. 
            {feedType === 'personalized' && ' Try following some users or check out the Discover feed!'}
          </div>
        ) : (
          (activities || []).map((activity) => (
            <div key={activity.id} className="activity-item">
              <div className="activity-content">
                <div className="activity-text">
                  {formatActivityText(activity)}
                </div>
                
                {activity.additionalData?.review && (
                  <div className="activity-review">
                    "{activity.additionalData.review}"
                  </div>
                )}
                
                <div className="activity-timestamp">
                  {activity.timestamp?.toDate?.()?.toLocaleDateString() || 'Recently'}
                </div>
              </div>

              <div className="activity-engagement">
                <div className="engagement-stats">
                  <span className="likes">
                    {activity.engagement?.likeCount || 0} likes
                  </span>
                  <span className="comments">
                    {activity.engagement?.commentCount || 0} comments
                  </span>
                </div>

                {user && (
                  <div className="engagement-actions">
                    <button
                      className={`like-button ${activity.engagement?.hasUserLiked ? 'liked' : ''}`}
                      onClick={() => handleLikeToggle(activity.id, activity.engagement?.hasUserLiked)}
                      disabled={likeLoading}
                    >
                      {activity.engagement?.hasUserLiked ? '❤️' : '🤍'} Like
                    </button>
                    <button className="comment-button">
                      💬 Comment
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ActivityFeed;
