import { 
  followUser as followUserInDB, 
  unfollowUser as unfollowUserInDB, 
  isFollowing, 
  getUserFollowing, 
  getUserFollowers,
  getFollowerCount,
  getFollowingCount 
} from '../database/followService.js';
import { 
  createFollowActivity 
} from '../database/activityService.js';
import { 
  createOrUpdateUserProfile 
} from '../features/auth/services/userProfileService.js';
import { executeFirestoreOperation } from '../../utils/firebaseHelpers.js';

/**
 * Follow a user and update follower/following counts
 * @param {string} followerId - ID of user doing the following
 * @param {string} followingId - ID of user being followed
 * @param {string} followerDisplayName - Display name of follower
 * @param {string} followingDisplayName - Display name of user being followed
 * @returns {Promise<string>} - Follow document ID
 */
export const followUser = async (followerId, followingId, followerDisplayName, followingDisplayName) => {
  return executeFirestoreOperation(async () => {
    // 1. Create the follow relationship
    const followId = await followUserInDB(followerId, followingId);
    
    // 2. Update follower counts
    await updateUserFollowerCounts(followingId, followerId);
    
    // 3. Create activity for the feed
    await createFollowActivity(followerId, followingId, followerDisplayName, followingDisplayName);
    
    return followId;
  }, { operationName: 'Follow User' });
};

/**
 * Unfollow a user and update follower/following counts
 * @param {string} followerId - ID of user doing the unfollowing
 * @param {string} followingId - ID of user being unfollowed
 * @returns {Promise<void>}
 */
export const unfollowUser = async (followerId, followingId) => {
  return executeFirestoreOperation(async () => {
    // 1. Remove the follow relationship
    await unfollowUserInDB(followerId, followingId);
    
    // 2. Update follower counts
    await updateUserFollowerCounts(followingId, followerId);
    
    // Note: We don't remove follow activities to maintain history
  }, { operationName: 'Unfollow User' });
};

/**
 * Update follower and following counts for users
 * @param {string} followingUserId - User who was followed/unfollowed
 * @param {string} followerUserId - User who followed/unfollowed
 * @returns {Promise<void>}
 */
const updateUserFollowerCounts = async (followingUserId, followerUserId) => {
  return executeFirestoreOperation(async () => {
    const [
      followingUserFollowerCount,
      followerUserFollowingCount
    ] = await Promise.all([
      getFollowerCount(followingUserId),
      getFollowingCount(followerUserId)
    ]);
    
    // Update both users' counts
    await Promise.all([
      createOrUpdateUserProfile(followingUserId, { 
        followerCount: followingUserFollowerCount 
      }, true),
      createOrUpdateUserProfile(followerUserId, { 
        followingCount: followerUserFollowingCount 
      }, true)
    ]);
  }, { operationName: 'Update User Follower Counts' });
};

/**
 * Get comprehensive user social data
 * @param {string} userId - User ID
 * @param {string} currentUserId - Current user ID (for follow status)
 * @returns {Promise<Object>} - User social data
 */
export const getUserSocialData = async (userId, currentUserId = null) => {
  return executeFirestoreOperation(async () => {
    const [
      followers,
      following,
      followerCount,
      followingCount,
      isCurrentUserFollowing
    ] = await Promise.all([
      getUserFollowers(userId, 10), // Get first 10 followers
      getUserFollowing(userId, 10), // Get first 10 following
      getFollowerCount(userId),
      getFollowingCount(userId),
      currentUserId && currentUserId !== userId ? isFollowing(currentUserId, userId) : Promise.resolve(false)
    ]);
    
    return {
      followers,
      following,
      followerCount,
      followingCount,
      isCurrentUserFollowing
    };
  }, { operationName: 'Get User Social Data' });
};

/**
 * Get users that both users follow (mutual follows)
 * @param {string} userId1 - First user ID
 * @param {string} userId2 - Second user ID
 * @returns {Promise<Array>} - Array of mutual follow user IDs
 */
export const getMutualFollows = async (userId1, userId2) => {
  return executeFirestoreOperation(async () => {
    const [user1Following, user2Following] = await Promise.all([
      getUserFollowing(userId1),
      getUserFollowing(userId2)
    ]);
    
    const user1FollowingIds = user1Following.map(follow => follow.followingId);
    const user2FollowingIds = user2Following.map(follow => follow.followingId);
    
    const mutualFollowIds = user1FollowingIds.filter(id => user2FollowingIds.includes(id));
    return mutualFollowIds;
  }, { operationName: 'Get Mutual Follows' });
};

/**
 * Get follow recommendations for a user
 * This is a simple implementation - in production you might want more sophisticated algorithms
 * @param {string} userId - User ID
 * @param {number} limit - Number of recommendations
 * @returns {Promise<Array>} - Array of recommended user IDs
 */
export const getFollowRecommendations = async (userId, limit = 10) => {
  return executeFirestoreOperation(async () => {
    // Get users that people the current user follows also follow
    const userFollowing = await getUserFollowing(userId);
    const followingIds = userFollowing.map(follow => follow.followingId);
    
    if (followingIds.length === 0) {
      return [];
    }
    
    // Get who those users follow
    const allRecommendations = new Set();
    
    for (const followingId of followingIds.slice(0, 5)) { // Limit to prevent too many queries
      const theirFollowing = await getUserFollowing(followingId, 20);
      theirFollowing.forEach(follow => {
        // Don't recommend the user themselves or people they already follow
        if (follow.followingId !== userId && !followingIds.includes(follow.followingId)) {
          allRecommendations.add(follow.followingId);
        }
      });
    }
    
    return Array.from(allRecommendations).slice(0, limit);
  }, { operationName: 'Get Follow Recommendations' });
};

/**
 * Check if two users have any connection (mutual follows, etc.)
 * @param {string} userId1 - First user ID
 * @param {string} userId2 - Second user ID
 * @returns {Promise<Object>} - Connection status
 */
export const getUserConnection = async (userId1, userId2) => {
  return executeFirestoreOperation(async () => {
    const [
      user1FollowsUser2,
      user2FollowsUser1,
      mutualFollows
    ] = await Promise.all([
      isFollowing(userId1, userId2),
      isFollowing(userId2, userId1),
      getMutualFollows(userId1, userId2)
    ]);
    
    return {
      user1FollowsUser2,
      user2FollowsUser1,
      mutualFollows,
      mutualFollowCount: mutualFollows.length,
      hasConnection: user1FollowsUser2 || user2FollowsUser1 || mutualFollows.length > 0
    };
  }, { operationName: 'Get User Connection' });
};
