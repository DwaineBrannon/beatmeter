import { 
  collection, 
  doc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  getDoc, 
  getDocs, 
  query, 
  where, 
  orderBy, 
  limit, 
  serverTimestamp 
} from 'firebase/firestore';
import { firestore } from '../../config/firebase';
import { executeFirestoreOperation } from '../../utils/firebaseHelpers';

const COLLECTION_NAME = 'activities';

/**
 * Activity types enum
 */
export const ACTIVITY_TYPES = {
  NEW_RATING: 'new_rating',
  NEW_LIST: 'new_list',
  FOLLOWED_USER: 'followed_user',
  UPDATED_LIST: 'updated_list',
  NEW_REVIEW: 'new_review',
  NEW_NOTE: 'new_note'
};

/**
 * Create a new activity
 * @param {Object} activityData - Activity data
 * @param {string} activityData.userId - User ID who performed the action
 * @param {string} activityData.actionType - Type of action (from ACTIVITY_TYPES)
 * @param {string} activityData.targetId - ID of the target (rating ID, list ID, user ID)
 * @param {string} activityData.userDisplayName - Display name of the user
 * @param {Object} activityData.additionalData - Additional context data
 * @returns {Promise<string>} - Document ID
 */
export const createActivity = async (activityData) => {
  return executeFirestoreOperation(async () => {
    const activityDoc = {
      userId: activityData.userId,
      actionType: activityData.actionType,
      targetId: activityData.targetId,
      userDisplayName: activityData.userDisplayName,
      additionalData: activityData.additionalData || {},
      timestamp: serverTimestamp()
    };

    const docRef = await addDoc(collection(firestore, COLLECTION_NAME), activityDoc);
    return docRef.id;
  }, { operationName: 'Create Activity' });
};

/**
 * Update an existing activity
 * @param {string} activityId - Activity document ID
 * @param {Object} updateData - Data to update
 * @returns {Promise<void>}
 */
export const updateActivity = async (activityId, updateData) => {
  return executeFirestoreOperation(async () => {
    const activityRef = doc(firestore, COLLECTION_NAME, activityId);
    await updateDoc(activityRef, updateData);
  }, { operationName: 'Update Activity' });
};

/**
 * Delete an activity
 * @param {string} activityId - Activity document ID
 * @returns {Promise<void>}
 */
export const deleteActivity = async (activityId) => {
  return executeFirestoreOperation(async () => {
    const activityRef = doc(firestore, COLLECTION_NAME, activityId);
    await deleteDoc(activityRef);
  }, { operationName: 'Delete Activity' });
};

/**
 * Get a specific activity by ID
 * @param {string} activityId - Activity document ID
 * @returns {Promise<Object|null>} - Activity data or null if not found
 */
export const getActivityById = async (activityId) => {
  return executeFirestoreOperation(async () => {
    const activityRef = doc(firestore, COLLECTION_NAME, activityId);
    const activitySnap = await getDoc(activityRef);
    
    if (activitySnap.exists()) {
      return { id: activitySnap.id, ...activitySnap.data() };
    }
    return null;
  }, { operationName: 'Get Activity By ID' });
};

/**
 * Get activities for a specific user
 * @param {string} userId - User ID
 * @param {number} limitCount - Number of activities to fetch
 * @returns {Promise<Array>} - Array of activity objects
 */
export const getUserActivities = async (userId, limitCount = 20) => {
  return executeFirestoreOperation(async () => {
    const activitiesRef = collection(firestore, COLLECTION_NAME);
    const q = query(
      activitiesRef,
      where('userId', '==', userId),
      orderBy('timestamp', 'desc'),
      limit(limitCount)
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  }, { operationName: 'Get User Activities' });
};

/**
 * Get activities by type
 * @param {string} actionType - Activity type (from ACTIVITY_TYPES)
 * @param {number} limitCount - Number of activities to fetch
 * @returns {Promise<Array>} - Array of activity objects
 */
export const getActivitiesByType = async (actionType, limitCount = 20) => {
  return executeFirestoreOperation(async () => {
    const activitiesRef = collection(firestore, COLLECTION_NAME);
    const q = query(
      activitiesRef,
      where('actionType', '==', actionType),
      orderBy('timestamp', 'desc'),
      limit(limitCount)
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  }, { operationName: 'Get Activities By Type' });
};

/**
 * Get recent activities across all users (global feed)
 * @param {number} limitCount - Number of activities to fetch
 * @returns {Promise<Array>} - Array of activity objects
 */
export const getRecentActivities = async (limitCount = 50) => {
  return executeFirestoreOperation(async () => {
    const activitiesRef = collection(firestore, COLLECTION_NAME);
    const q = query(
      activitiesRef,
      orderBy('timestamp', 'desc'),
      limit(limitCount)
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  }, { operationName: 'Get Recent Activities' });
};

/**
 * Get activity feed for a user (activities from people they follow)
 * @param {Array} followingUserIds - Array of user IDs that the current user follows
 * @param {number} limitCount - Number of activities to fetch
 * @returns {Promise<Array>} - Array of activity objects
 */
export const getFollowingActivityFeed = async (followingUserIds, limitCount = 50) => {
  return executeFirestoreOperation(async () => {
    if (!followingUserIds || followingUserIds.length === 0) {
      return [];
    }

    const activitiesRef = collection(firestore, COLLECTION_NAME);
    
    // Firestore 'in' queries are limited to 10 values, so we need to batch them
    const batchSize = 10;
    const batches = [];
    
    for (let i = 0; i < followingUserIds.length; i += batchSize) {
      const batch = followingUserIds.slice(i, i + batchSize);
      const q = query(
        activitiesRef,
        where('userId', 'in', batch),
        orderBy('timestamp', 'desc'),
        limit(limitCount)
      );
      batches.push(getDocs(q));
    }
    
    const results = await Promise.all(batches);
    const allActivities = [];
    
    results.forEach(querySnapshot => {
      querySnapshot.docs.forEach(doc => {
        allActivities.push({ id: doc.id, ...doc.data() });
      });
    });
    
    // Sort all activities by timestamp and limit
    return allActivities
      .sort((a, b) => b.timestamp?.toMillis() - a.timestamp?.toMillis())
      .slice(0, limitCount);
  }, { operationName: 'Get Following Activity Feed' });
};

/**
 * Create activity for a new rating
 * @param {Object} ratingData - Rating data
 * @param {Object} albumData - Album data
 * @returns {Promise<string>} - Activity document ID
 */
export const createRatingActivity = async (ratingData, albumData) => {
  return createActivity({
    userId: ratingData.userId,
    actionType: ACTIVITY_TYPES.NEW_RATING,
    targetId: ratingData.id,
    userDisplayName: ratingData.userDisplayName,
    additionalData: {
      albumName: albumData.name,
      albumArtist: albumData.artist,
      albumArt: albumData.albumArt,
      rating: ratingData.rating,
      review: ratingData.review
    }
  });
};

/**
 * Create activity for a new list
 * @param {Object} listData - List data
 * @returns {Promise<string>} - Activity document ID
 */
export const createListActivity = async (listData) => {
  return createActivity({
    userId: listData.userId,
    actionType: ACTIVITY_TYPES.NEW_LIST,
    targetId: listData.id,
    userDisplayName: listData.userDisplayName,
    additionalData: {
      listName: listData.name,
      listDescription: listData.description,
      albumCount: listData.albumIds?.length || 0
    }
  });
};

/**
 * Create activity for following a user
 * @param {string} followerId - ID of user doing the following
 * @param {string} followingId - ID of user being followed
 * @param {string} followerDisplayName - Display name of follower
 * @param {string} followingDisplayName - Display name of user being followed
 * @returns {Promise<string>} - Activity document ID
 */
export const createFollowActivity = async (followerId, followingId, followerDisplayName, followingDisplayName) => {
  return createActivity({
    userId: followerId,
    actionType: ACTIVITY_TYPES.FOLLOWED_USER,
    targetId: followingId,
    userDisplayName: followerDisplayName,
    additionalData: {
      followedUserDisplayName: followingDisplayName
    }
  });
};

/**
 * Delete activities related to a specific target
 * @param {string} targetId - Target ID (rating ID, list ID, etc.)
 * @param {string} actionType - Activity type to delete
 * @returns {Promise<void>}
 */
export const deleteActivitiesByTarget = async (targetId, actionType) => {
  return executeFirestoreOperation(async () => {
    const activitiesRef = collection(firestore, COLLECTION_NAME);
    const q = query(
      activitiesRef,
      where('targetId', '==', targetId),
      where('actionType', '==', actionType)
    );
    
    const querySnapshot = await getDocs(q);
    const deletePromises = querySnapshot.docs.map(doc => deleteDoc(doc.ref));
    await Promise.all(deletePromises);
  }, { operationName: 'Delete Activities By Target' });
};
