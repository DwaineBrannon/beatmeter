import { 
  collection, 
  addDoc, 
  deleteDoc, 
  getDocs, 
  query, 
  where, 
  orderBy, 
  limit, 
  serverTimestamp 
} from 'firebase/firestore';
import { firestore } from '../../config/firebase';
import { executeFirestoreOperation } from '../../utils/firebaseHelpers';

const COLLECTION_NAME = 'follows';

/**
 * Follow a user
 * @param {string} followerId - ID of user doing the following
 * @param {string} followingId - ID of user being followed
 * @returns {Promise<string>} - Document ID
 */
export const followUser = async (followerId, followingId) => {
  return executeFirestoreOperation(async () => {
    if (followerId === followingId) {
      throw new Error('Users cannot follow themselves');
    }

    // Check if already following
    const existingFollow = await isFollowing(followerId, followingId);
    if (existingFollow) {
      throw new Error('Already following this user');
    }

    const followDoc = {
      followerId,
      followingId,
      timestamp: serverTimestamp()
    };

    const docRef = await addDoc(collection(firestore, COLLECTION_NAME), followDoc);
    return docRef.id;
  }, { operationName: 'Follow User' });
};

/**
 * Unfollow a user
 * @param {string} followerId - ID of user doing the unfollowing
 * @param {string} followingId - ID of user being unfollowed
 * @returns {Promise<void>}
 */
export const unfollowUser = async (followerId, followingId) => {
  return executeFirestoreOperation(async () => {
    const followsRef = collection(firestore, COLLECTION_NAME);
    const q = query(
      followsRef,
      where('followerId', '==', followerId),
      where('followingId', '==', followingId)
    );
    
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) {
      throw new Error('Follow relationship not found');
    }
    
    // Delete all matching follow documents (should only be one)
    const deletePromises = querySnapshot.docs.map(doc => deleteDoc(doc.ref));
    await Promise.all(deletePromises);
  }, { operationName: 'Unfollow User' });
};

/**
 * Check if user A is following user B
 * @param {string} followerId - ID of potential follower
 * @param {string} followingId - ID of potential user being followed
 * @returns {Promise<boolean>} - True if following, false otherwise
 */
export const isFollowing = async (followerId, followingId) => {
  return executeFirestoreOperation(async () => {
    const followsRef = collection(firestore, COLLECTION_NAME);
    const q = query(
      followsRef,
      where('followerId', '==', followerId),
      where('followingId', '==', followingId),
      limit(1)
    );
    
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
  }, { operationName: 'Check Is Following' });
};

/**
 * Get users that a specific user is following
 * @param {string} userId - User ID
 * @param {number} limitCount - Number of follows to fetch
 * @returns {Promise<Array>} - Array of follow objects with following user info
 */
export const getUserFollowing = async (userId, limitCount = 50) => {
  return executeFirestoreOperation(async () => {
    const followsRef = collection(firestore, COLLECTION_NAME);
    const q = query(
      followsRef,
      where('followerId', '==', userId),
      orderBy('timestamp', 'desc'),
      limit(limitCount)
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  }, { operationName: 'Get User Following' });
};

/**
 * Get users that are following a specific user
 * @param {string} userId - User ID
 * @param {number} limitCount - Number of followers to fetch
 * @returns {Promise<Array>} - Array of follow objects with follower user info
 */
export const getUserFollowers = async (userId, limitCount = 50) => {
  return executeFirestoreOperation(async () => {
    const followsRef = collection(firestore, COLLECTION_NAME);
    const q = query(
      followsRef,
      where('followingId', '==', userId),
      orderBy('timestamp', 'desc'),
      limit(limitCount)
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  }, { operationName: 'Get User Followers' });
};

/**
 * Get follower count for a user
 * @param {string} userId - User ID
 * @returns {Promise<number>} - Number of followers
 */
export const getFollowerCount = async (userId) => {
  return executeFirestoreOperation(async () => {
    const followsRef = collection(firestore, COLLECTION_NAME);
    const q = query(
      followsRef,
      where('followingId', '==', userId)
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.size;
  }, { operationName: 'Get Follower Count' });
};

/**
 * Get following count for a user
 * @param {string} userId - User ID
 * @returns {Promise<number>} - Number of users being followed
 */
export const getFollowingCount = async (userId) => {
  return executeFirestoreOperation(async () => {
    const followsRef = collection(firestore, COLLECTION_NAME);
    const q = query(
      followsRef,
      where('followerId', '==', userId)
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.size;
  }, { operationName: 'Get Following Count' });
};

/**
 * Get mutual followers between two users
 * @param {string} userId1 - First user ID
 * @param {string} userId2 - Second user ID
 * @returns {Promise<Array>} - Array of mutual follower user IDs
 */
export const getMutualFollowers = async (userId1, userId2) => {
  return executeFirestoreOperation(async () => {
    const [user1Followers, user2Followers] = await Promise.all([
      getUserFollowers(userId1),
      getUserFollowers(userId2)
    ]);
    
    const user1FollowerIds = user1Followers.map(follow => follow.followerId);
    const user2FollowerIds = user2Followers.map(follow => follow.followerId);
    
    const mutualFollowerIds = user1FollowerIds.filter(id => user2FollowerIds.includes(id));
    return mutualFollowerIds;
  }, { operationName: 'Get Mutual Followers' });
};

/**
 * Get recent follows (for activity feed)
 * @param {number} limitCount - Number of recent follows to fetch
 * @returns {Promise<Array>} - Array of recent follow objects
 */
export const getRecentFollows = async (limitCount = 20) => {
  return executeFirestoreOperation(async () => {
    const followsRef = collection(firestore, COLLECTION_NAME);
    const q = query(
      followsRef,
      orderBy('timestamp', 'desc'),
      limit(limitCount)
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  }, { operationName: 'Get Recent Follows' });
};
