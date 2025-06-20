import { useState, useEffect, useCallback } from 'react';
import { 
  getPersonalizedFeed,
  getGlobalFeed,
  getUserActivityFeed,
  getTrendingActivities,
  getAlbumActivityFeed,
  getFeedStatistics
} from '../services/feedService.js';
import { 
  likeActivity,
  unlikeActivity,
  hasUserLikedActivity
} from '../services/database/activityLikeService.js';
import { 
  createActivityComment,
  getActivityComments,
  updateActivityComment,
  deleteActivityComment
} from '../services/database/activityCommentService.js';
import { useAuth } from '../features/auth/context/AuthContext.jsx';

/**
 * Hook for fetching personalized activity feed
 */
export const usePersonalizedFeed = (limit = 20) => {
  const { user } = useAuth();
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchFeed = useCallback(async () => {
    if (!user) {
      setActivities([]);
      return;
    }

    setLoading(true);
    setError(null);
    
    try {
      const feedData = await getPersonalizedFeed(user.uid, limit);
      setActivities(feedData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [user, limit]);

  useEffect(() => {
    fetchFeed();
  }, [fetchFeed]);

  return {
    activities,
    loading,
    error,
    refetch: fetchFeed
  };
};

/**
 * Hook for fetching global activity feed
 */
export const useGlobalFeed = (limit = 20) => {
  const { user } = useAuth();
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchFeed = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const feedData = await getGlobalFeed(limit, user?.uid);
      setActivities(feedData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [user?.uid, limit]);

  useEffect(() => {
    fetchFeed();
  }, [fetchFeed]);

  return {
    activities,
    loading,
    error,
    refetch: fetchFeed
  };
};

/**
 * Hook for fetching user's activity feed
 */
export const useUserActivityFeed = (userId, limit = 20) => {
  const { user } = useAuth();
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchFeed = useCallback(async () => {
    if (!userId) return;

    setLoading(true);
    setError(null);
    
    try {
      const feedData = await getUserActivityFeed(userId, limit, user?.uid);
      setActivities(feedData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [userId, limit, user?.uid]);

  useEffect(() => {
    fetchFeed();
  }, [fetchFeed]);

  return {
    activities,
    loading,
    error,
    refetch: fetchFeed
  };
};

/**
 * Hook for fetching trending activities
 */
export const useTrendingActivities = (limit = 20) => {
  const { user } = useAuth();
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTrending = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const trendingData = await getTrendingActivities(limit, user?.uid);
      setActivities(trendingData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [user?.uid, limit]);

  useEffect(() => {
    fetchTrending();
  }, [fetchTrending]);

  return {
    activities,
    loading,
    error,
    refetch: fetchTrending
  };
};

/**
 * Hook for fetching album-specific activity feed
 */
export const useAlbumActivityFeed = (albumId, limit = 20) => {
  const { user } = useAuth();
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchFeed = useCallback(async () => {
    if (!albumId) return;

    setLoading(true);
    setError(null);
    
    try {
      const feedData = await getAlbumActivityFeed(albumId, limit, user?.uid);
      setActivities(feedData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [albumId, limit, user?.uid]);

  useEffect(() => {
    fetchFeed();
  }, [fetchFeed]);

  return {
    activities,
    loading,
    error,
    refetch: fetchFeed
  };
};

/**
 * Hook for managing activity likes
 */
export const useActivityLike = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const likeActivityWithFeedback = useCallback(async (activityId) => {
    if (!user) {
      throw new Error('User must be logged in to like activities');
    }

    setLoading(true);
    setError(null);
    
    try {
      const likeId = await likeActivity(activityId, user.uid);
      return likeId;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [user]);

  const unlikeActivityWithFeedback = useCallback(async (activityId) => {
    if (!user) {
      throw new Error('User must be logged in to unlike activities');
    }

    setLoading(true);
    setError(null);
    
    try {
      await unlikeActivity(activityId, user.uid);
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [user]);

  return {
    likeActivity: likeActivityWithFeedback,
    unlikeActivity: unlikeActivityWithFeedback,
    loading,
    error
  };
};

/**
 * Hook for managing activity comments
 */
export const useActivityComments = (activityId) => {
  const { user } = useAuth();
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchComments = useCallback(async () => {
    if (!activityId) return;

    setLoading(true);
    setError(null);
    
    try {
      const commentsData = await getActivityComments(activityId);
      setComments(commentsData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [activityId]);

  const addComment = useCallback(async (commentText) => {
    if (!user) {
      throw new Error('User must be logged in to comment');
    }

    if (!commentText || commentText.trim().length === 0) {
      throw new Error('Comment text cannot be empty');
    }

    try {
      const commentId = await createActivityComment({
        activityId,
        userId: user.uid,
        commentText: commentText.trim(),
        userDisplayName: user.displayName || 'Anonymous'
      });
      
      // Refresh comments
      await fetchComments();
      return commentId;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  }, [user, activityId, fetchComments]);

  const updateComment = useCallback(async (commentId, newText) => {
    if (!user) {
      throw new Error('User must be logged in to update comments');
    }

    try {
      await updateActivityComment(commentId, { commentText: newText.trim() });
      
      // Refresh comments
      await fetchComments();
    } catch (err) {
      setError(err.message);
      throw err;
    }
  }, [user, fetchComments]);

  const deleteComment = useCallback(async (commentId) => {
    if (!user) {
      throw new Error('User must be logged in to delete comments');
    }

    try {
      await deleteActivityComment(commentId);
      
      // Refresh comments
      await fetchComments();
    } catch (err) {
      setError(err.message);
      throw err;
    }
  }, [user, fetchComments]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  return {
    comments,
    loading,
    error,
    addComment,
    updateComment,
    deleteComment,
    refetch: fetchComments
  };
};

/**
 * Hook for checking if user has liked an activity
 */
export const useActivityLikeStatus = (activityId) => {
  const { user } = useAuth();
  const [hasLiked, setHasLiked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const checkLikeStatus = useCallback(async () => {
    if (!user || !activityId) {
      setHasLiked(false);
      return;
    }

    setLoading(true);
    setError(null);
    
    try {
      const likeStatus = await hasUserLikedActivity(activityId, user.uid);
      setHasLiked(likeStatus);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [user, activityId]);

  useEffect(() => {
    checkLikeStatus();
  }, [checkLikeStatus]);

  return {
    hasLiked,
    loading,
    error,
    refetch: checkLikeStatus
  };
};

/**
 * Hook for fetching feed statistics
 */
export const useFeedStatistics = () => {
  const { user } = useAuth();
  const [statistics, setStatistics] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchStatistics = useCallback(async () => {
    if (!user) {
      setStatistics(null);
      return;
    }

    setLoading(true);
    setError(null);
    
    try {
      const stats = await getFeedStatistics(user.uid);
      setStatistics(stats);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchStatistics();
  }, [fetchStatistics]);

  return {
    statistics,
    loading,
    error,
    refetch: fetchStatistics
  };
};
