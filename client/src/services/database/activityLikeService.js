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

const COLLECTION_NAME = 'activityLikes';

/**
 * Like an activity
 * @param {string} activityId - Activity document ID
 * @param {string} userId - User ID who is liking
 * @returns {Promise<string>} - Document ID
 */
export const likeActivity = async (activityId, userId) => {
  return executeFirestoreOperation(async () => {
    // Check if user has already liked this activity
    const existingLike = await hasUserLikedActivity(activityId, userId);
    if (existingLike) {
      throw new Error('User has already liked this activity');
    }

    const likeDoc = {
      activityId,
      userId,
      timestamp: serverTimestamp()
    };

    const docRef = await addDoc(collection(firestore, COLLECTION_NAME), likeDoc);
    return docRef.id;
  }, { operationName: 'Like Activity' });
};

/**
 * Unlike an activity
 * @param {string} activityId - Activity document ID
 * @param {string} userId - User ID who is unliking
 * @returns {Promise<void>}
 */
export const unlikeActivity = async (activityId, userId) => {
  return executeFirestoreOperation(async () => {
    const likesRef = collection(firestore, COLLECTION_NAME);
    const q = query(
      likesRef,
      where('activityId', '==', activityId),
      where('userId', '==', userId)
    );
    
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) {
      throw new Error('Like not found');
    }
    
    // Delete all matching like documents (should only be one)
    const deletePromises = querySnapshot.docs.map(doc => deleteDoc(doc.ref));
    await Promise.all(deletePromises);
  }, { operationName: 'Unlike Activity' });
};

/**
 * Check if user has liked an activity
 * @param {string} activityId - Activity document ID
 * @param {string} userId - User ID
 * @returns {Promise<boolean>} - True if liked, false otherwise
 */
export const hasUserLikedActivity = async (activityId, userId) => {
  return executeFirestoreOperation(async () => {
    const likesRef = collection(firestore, COLLECTION_NAME);
    const q = query(
      likesRef,
      where('activityId', '==', activityId),
      where('userId', '==', userId),
      limit(1)
    );
    
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
  }, { operationName: 'Check User Liked Activity' });
};

/**
 * Get likes for an activity
 * @param {string} activityId - Activity document ID
 * @param {number} limitCount - Number of likes to fetch
 * @returns {Promise<Array>} - Array of like objects
 */
export const getActivityLikes = async (activityId, limitCount = 50) => {
  return executeFirestoreOperation(async () => {
    const likesRef = collection(firestore, COLLECTION_NAME);
    const q = query(
      likesRef,
      where('activityId', '==', activityId),
      orderBy('timestamp', 'desc'),
      limit(limitCount)
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  }, { operationName: 'Get Activity Likes' });
};

/**
 * Get like count for an activity
 * @param {string} activityId - Activity document ID
 * @returns {Promise<number>} - Number of likes
 */
export const getActivityLikeCount = async (activityId) => {
  return executeFirestoreOperation(async () => {
    const likesRef = collection(firestore, COLLECTION_NAME);
    const q = query(
      likesRef,
      where('activityId', '==', activityId)
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.size;
  }, { operationName: 'Get Activity Like Count' });
};

/**
 * Get activities liked by a user
 * @param {string} userId - User ID
 * @param {number} limitCount - Number of likes to fetch
 * @returns {Promise<Array>} - Array of like objects
 */
export const getUserActivityLikes = async (userId, limitCount = 50) => {
  return executeFirestoreOperation(async () => {
    const likesRef = collection(firestore, COLLECTION_NAME);
    const q = query(
      likesRef,
      where('userId', '==', userId),
      orderBy('timestamp', 'desc'),
      limit(limitCount)
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  }, { operationName: 'Get User Activity Likes' });
};

/**
 * Delete all likes for an activity (when activity is deleted)
 * @param {string} activityId - Activity document ID
 * @returns {Promise<void>}
 */
export const deleteActivityLikes = async (activityId) => {
  return executeFirestoreOperation(async () => {
    const likesRef = collection(firestore, COLLECTION_NAME);
    const q = query(
      likesRef,
      where('activityId', '==', activityId)
    );
    
    const querySnapshot = await getDocs(q);
    const deletePromises = querySnapshot.docs.map(doc => deleteDoc(doc.ref));
    await Promise.all(deletePromises);
  }, { operationName: 'Delete Activity Likes' });
};
