import { 
  getRecentActivities,
  getFollowingActivityFeed,
  getUserActivities,
  getActivitiesByType,
  ACTIVITY_TYPES
} from '../database/activityService.js';
import { 
  getActivityLikeCount,
  hasUserLikedActivity
} from '../database/activityLikeService.js';
import { 
  getActivityComments,
  getActivityCommentCount
} from '../database/activityCommentService.js';
import { 
  getUserFollowing
} from '../database/followService.js';
import { executeFirestoreOperation } from '../../utils/firebaseHelpers.js';

/**
 * Get personalized feed for a user (activities from people they follow)
 * @param {string} userId - User ID
 * @param {number} limit - Number of activities to fetch
 * @returns {Promise<Array>} - Array of activity objects with engagement data
 */
export const getPersonalizedFeed = async (userId, limit = 20) => {
  try {
    return await executeFirestoreOperation(async () => {
      // 1. Get list of users the current user follows
      const following = await getUserFollowing(userId, 100); // Get up to 100 follows
      const followingIds = following.map(follow => follow.followingId);
      
      // 2. Get activities from followed users
      let activities = [];
      if (followingIds.length > 0) {
        activities = await getFollowingActivityFeed(followingIds, limit);
      }
      
      // 3. If not enough activities from follows, supplement with global feed
      if (activities.length < limit) {
        const globalActivities = await getRecentActivities(limit - activities.length);
        // Filter out activities from users already in the feed
        const existingUserIds = new Set(activities.map(a => a.userId));
        const supplementalActivities = globalActivities.filter(
          activity => !existingUserIds.has(activity.userId)
        );
        activities = [...activities, ...supplementalActivities];
      }
      
      // 4. Enrich activities with engagement data
      const enrichedActivities = await enrichActivitiesWithEngagement(activities, userId);
      
      return Array.isArray(enrichedActivities) ? enrichedActivities : [];
    }, { operationName: 'Get Personalized Feed' });
  } catch (error) {
    console.error('Error in getPersonalizedFeed:', error);
    return []; // Return empty array on error
  }
};

/**
 * Get global activity feed (recent activities from all users)
 * @param {number} limit - Number of activities to fetch
 * @param {string} userId - Current user ID (for like status)
 * @returns {Promise<Array>} - Array of activity objects with engagement data
 */
export const getGlobalFeed = async (limit = 20, userId = null) => {
  try {
    return await executeFirestoreOperation(async () => {
      const activities = await getRecentActivities(limit);
      const enrichedActivities = await enrichActivitiesWithEngagement(activities, userId);
      
      return Array.isArray(enrichedActivities) ? enrichedActivities : [];
    }, { operationName: 'Get Global Feed' });
  } catch (error) {
    console.error('Error in getGlobalFeed:', error);
    return []; // Return empty array on error
  }
};

/**
 * Get user's activity feed (their own activities)
 * @param {string} userId - User ID
 * @param {number} limit - Number of activities to fetch
 * @param {string} viewerUserId - ID of user viewing the feed (for like status)
 * @returns {Promise<Array>} - Array of activity objects with engagement data
 */
export const getUserActivityFeed = async (userId, limit = 20, viewerUserId = null) => {
  return executeFirestoreOperation(async () => {
    const activities = await getUserActivities(userId, limit);
    const enrichedActivities = await enrichActivitiesWithEngagement(activities, viewerUserId);
    
    return enrichedActivities;
  }, { operationName: 'Get User Activity Feed' });
};

/**
 * Get activities by type with engagement data
 * @param {string} activityType - Activity type from ACTIVITY_TYPES
 * @param {number} limit - Number of activities to fetch
 * @param {string} userId - Current user ID (for like status)
 * @returns {Promise<Array>} - Array of activity objects with engagement data
 */
export const getActivitiesByTypeWithEngagement = async (activityType, limit = 20, userId = null) => {
  return executeFirestoreOperation(async () => {
    const activities = await getActivitiesByType(activityType, limit);
    const enrichedActivities = await enrichActivitiesWithEngagement(activities, userId);
    
    return enrichedActivities;
  }, { operationName: 'Get Activities By Type With Engagement' });
};

/**
 * Enrich activities with engagement data (likes, comments, user like status)
 * @param {Array} activities - Array of activity objects
 * @param {string} userId - Current user ID (for like status)
 * @returns {Promise<Array>} - Enriched activity objects
 */
const enrichActivitiesWithEngagement = async (activities, userId = null) => {
  return executeFirestoreOperation(async () => {
    if (!activities || activities.length === 0) {
      return [];
    }
    
    // Get engagement data for all activities in parallel
    const enrichmentPromises = activities.map(async (activity) => {
      const [
        likeCount,
        commentCount,
        hasUserLiked,
        recentComments
      ] = await Promise.all([
        getActivityLikeCount(activity.id),
        getActivityCommentCount(activity.id),
        userId ? hasUserLikedActivity(activity.id, userId) : Promise.resolve(false),
        getActivityComments(activity.id, 3) // Get first 3 comments
      ]);
      
      return {
        ...activity,
        engagement: {
          likeCount,
          commentCount,
          hasUserLiked,
          recentComments
        }
      };
    });
    
    return Promise.all(enrichmentPromises);
  }, { operationName: 'Enrich Activities With Engagement' });
};

/**
 * Get trending activities (activities with high engagement)
 * This is a simple implementation - in production you might want more sophisticated algorithms
 * @param {number} limit - Number of activities to fetch
 * @param {string} userId - Current user ID (for like status)
 * @returns {Promise<Array>} - Array of trending activity objects
 */
export const getTrendingActivities = async (limit = 20, userId = null) => {
  return executeFirestoreOperation(async () => {
    // Get recent activities and calculate engagement scores
    const recentActivities = await getRecentActivities(limit * 3); // Get more to filter
    const activitiesWithEngagement = await enrichActivitiesWithEngagement(recentActivities, userId);
    
    // Calculate engagement score and sort by it
    const trendingActivities = activitiesWithEngagement
      .map(activity => ({
        ...activity,
        engagementScore: (activity.engagement.likeCount * 2) + activity.engagement.commentCount
      }))
      .filter(activity => activity.engagementScore > 0)
      .sort((a, b) => b.engagementScore - a.engagementScore)
      .slice(0, limit);
    
    return trendingActivities;
  }, { operationName: 'Get Trending Activities' });
};

/**
 * Get activity feed for a specific album (all activities related to that album)
 * @param {string} albumId - Album ID
 * @param {number} limit - Number of activities to fetch
 * @param {string} userId - Current user ID (for like status)
 * @returns {Promise<Array>} - Array of activity objects related to the album
 */
export const getAlbumActivityFeed = async (albumId, limit = 20, userId = null) => {
  return executeFirestoreOperation(async () => {
    // Get rating activities for this album
    const ratingActivities = await getActivitiesByType(ACTIVITY_TYPES.NEW_RATING, limit * 2);
    
    // Filter activities related to this album
    const albumActivities = ratingActivities.filter(activity => 
      activity.additionalData?.albumId === albumId || 
      activity.targetId?.includes(albumId)
    ).slice(0, limit);
    
    const enrichedActivities = await enrichActivitiesWithEngagement(albumActivities, userId);
    
    return enrichedActivities;
  }, { operationName: 'Get Album Activity Feed' });
};

/**
 * Get feed statistics for analytics
 * @param {string} userId - User ID
 * @returns {Promise<Object>} - Feed statistics
 */
export const getFeedStatistics = async (userId) => {
  return executeFirestoreOperation(async () => {
    const [
      userActivities,
      following,
      recentActivities
    ] = await Promise.all([
      getUserActivities(userId, 100),
      getUserFollowing(userId, 100),
      getRecentActivities(50)
    ]);
    
    // Calculate various statistics
    const userActivityCount = userActivities.length;
    const followingCount = following.length;
    const globalActivityCount = recentActivities.length;
    
    // Activity type breakdown for user
    const activityTypeBreakdown = userActivities.reduce((acc, activity) => {
      acc[activity.actionType] = (acc[activity.actionType] || 0) + 1;
      return acc;
    }, {});
    
    return {
      userActivityCount,
      followingCount,
      globalActivityCount,
      activityTypeBreakdown,
      hasPersonalizedContent: followingCount > 0
    };
  }, { operationName: 'Get Feed Statistics' });
};
