import { useState, useEffect, useCallback } from 'react';
import { 
  followUser,
  unfollowUser,
  getUserSocialData,
  getMutualFollows,
  getFollowRecommendations,
  getUserConnection
} from '../services/socialService.js';
import { 
  isFollowing,
  getUserFollowing,
  getUserFollowers
} from '../services/database/followService.js';
import { useAuth } from '../features/auth/context/AuthContext.jsx';

/**
 * Hook for managing follow/unfollow functionality
 */
export const useFollowUser = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const followUserWithFeedback = useCallback(async (targetUserId, targetUserDisplayName) => {
    if (!user) {
      throw new Error('User must be logged in to follow others');
    }

    if (user.uid === targetUserId) {
      throw new Error('Users cannot follow themselves');
    }

    setLoading(true);
    setError(null);
    
    try {
      const followId = await followUser(
        user.uid, 
        targetUserId, 
        user.displayName || 'Anonymous',
        targetUserDisplayName
      );
      return followId;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [user]);

  const unfollowUserWithFeedback = useCallback(async (targetUserId) => {
    if (!user) {
      throw new Error('User must be logged in to unfollow others');
    }

    setLoading(true);
    setError(null);
    
    try {
      await unfollowUser(user.uid, targetUserId);
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [user]);

  return {
    followUser: followUserWithFeedback,
    unfollowUser: unfollowUserWithFeedback,
    loading,
    error
  };
};

/**
 * Hook for checking if current user is following another user
 */
export const useIsFollowing = (targetUserId) => {
  const { user } = useAuth();
  const [isFollowingUser, setIsFollowingUser] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const checkFollowStatus = useCallback(async () => {
    if (!user || !targetUserId || user.uid === targetUserId) {
      setIsFollowingUser(false);
      return;
    }

    setLoading(true);
    setError(null);
    
    try {
      const followStatus = await isFollowing(user.uid, targetUserId);
      setIsFollowingUser(followStatus);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [user, targetUserId]);

  useEffect(() => {
    checkFollowStatus();
  }, [checkFollowStatus]);

  return {
    isFollowing: isFollowingUser,
    loading,
    error,
    refetch: checkFollowStatus
  };
};

/**
 * Hook for fetching comprehensive user social data
 */
export const useUserSocialData = (userId) => {
  const { user } = useAuth();
  const [socialData, setSocialData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchSocialData = useCallback(async () => {
    if (!userId) return;

    setLoading(true);
    setError(null);
    
    try {
      const data = await getUserSocialData(userId, user?.uid);
      setSocialData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [userId, user?.uid]);

  useEffect(() => {
    fetchSocialData();
  }, [fetchSocialData]);

  return {
    socialData,
    loading,
    error,
    refetch: fetchSocialData
  };
};

/**
 * Hook for fetching user's followers
 */
export const useUserFollowers = (userId, limit = 50) => {
  const [followers, setFollowers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchFollowers = useCallback(async () => {
    if (!userId) return;

    setLoading(true);
    setError(null);
    
    try {
      const followersData = await getUserFollowers(userId, limit);
      setFollowers(followersData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [userId, limit]);

  useEffect(() => {
    fetchFollowers();
  }, [fetchFollowers]);

  return {
    followers,
    loading,
    error,
    refetch: fetchFollowers
  };
};

/**
 * Hook for fetching users that a user is following
 */
export const useUserFollowing = (userId, limit = 50) => {
  const [following, setFollowing] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchFollowing = useCallback(async () => {
    if (!userId) return;

    setLoading(true);
    setError(null);
    
    try {
      const followingData = await getUserFollowing(userId, limit);
      setFollowing(followingData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [userId, limit]);

  useEffect(() => {
    fetchFollowing();
  }, [fetchFollowing]);

  return {
    following,
    loading,
    error,
    refetch: fetchFollowing
  };
};

/**
 * Hook for fetching mutual follows between current user and another user
 */
export const useMutualFollows = (targetUserId) => {
  const { user } = useAuth();
  const [mutualFollows, setMutualFollows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMutualFollows = useCallback(async () => {
    if (!user || !targetUserId || user.uid === targetUserId) {
      setMutualFollows([]);
      return;
    }

    setLoading(true);
    setError(null);
    
    try {
      const mutuals = await getMutualFollows(user.uid, targetUserId);
      setMutualFollows(mutuals);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [user, targetUserId]);

  useEffect(() => {
    fetchMutualFollows();
  }, [fetchMutualFollows]);

  return {
    mutualFollows,
    mutualCount: mutualFollows.length,
    loading,
    error,
    refetch: fetchMutualFollows
  };
};

/**
 * Hook for fetching follow recommendations
 */
export const useFollowRecommendations = (limit = 10) => {
  const { user } = useAuth();
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRecommendations = useCallback(async () => {
    if (!user) {
      setRecommendations([]);
      return;
    }

    setLoading(true);
    setError(null);
    
    try {
      const recs = await getFollowRecommendations(user.uid, limit);
      setRecommendations(recs);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [user, limit]);

  useEffect(() => {
    fetchRecommendations();
  }, [fetchRecommendations]);

  return {
    recommendations,
    loading,
    error,
    refetch: fetchRecommendations
  };
};

/**
 * Hook for getting connection status between current user and another user
 */
export const useUserConnection = (targetUserId) => {
  const { user } = useAuth();
  const [connection, setConnection] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchConnection = useCallback(async () => {
    if (!user || !targetUserId || user.uid === targetUserId) {
      setConnection(null);
      return;
    }

    setLoading(true);
    setError(null);
    
    try {
      const connectionData = await getUserConnection(user.uid, targetUserId);
      setConnection(connectionData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [user, targetUserId]);

  useEffect(() => {
    fetchConnection();
  }, [fetchConnection]);

  return {
    connection,
    loading,
    error,
    refetch: fetchConnection
  };
};
