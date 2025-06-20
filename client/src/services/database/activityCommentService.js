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

const COLLECTION_NAME = 'activityComments';

/**
 * Create a comment on an activity
 * @param {Object} commentData - Comment data
 * @param {string} commentData.activityId - Activity document ID
 * @param {string} commentData.userId - User ID who is commenting
 * @param {string} commentData.commentText - Comment text
 * @param {string} commentData.userDisplayName - Display name of commenter
 * @returns {Promise<string>} - Document ID
 */
export const createActivityComment = async (commentData) => {
  return executeFirestoreOperation(async () => {
    if (!commentData.commentText || commentData.commentText.trim().length === 0) {
      throw new Error('Comment text cannot be empty');
    }

    const commentDoc = {
      activityId: commentData.activityId,
      userId: commentData.userId,
      commentText: commentData.commentText.trim(),
      userDisplayName: commentData.userDisplayName,
      timestamp: serverTimestamp()
    };

    const docRef = await addDoc(collection(firestore, COLLECTION_NAME), commentDoc);
    return docRef.id;
  }, { operationName: 'Create Activity Comment' });
};

/**
 * Update a comment
 * @param {string} commentId - Comment document ID
 * @param {Object} updateData - Data to update
 * @returns {Promise<void>}
 */
export const updateActivityComment = async (commentId, updateData) => {
  return executeFirestoreOperation(async () => {
    const commentRef = doc(firestore, COLLECTION_NAME, commentId);
    const updates = {
      ...updateData,
      timestamp: serverTimestamp() // Update timestamp when editing
    };
    
    await updateDoc(commentRef, updates);
  }, { operationName: 'Update Activity Comment' });
};

/**
 * Delete a comment
 * @param {string} commentId - Comment document ID
 * @returns {Promise<void>}
 */
export const deleteActivityComment = async (commentId) => {
  return executeFirestoreOperation(async () => {
    const commentRef = doc(firestore, COLLECTION_NAME, commentId);
    await deleteDoc(commentRef);
  }, { operationName: 'Delete Activity Comment' });
};

/**
 * Get a specific comment by ID
 * @param {string} commentId - Comment document ID
 * @returns {Promise<Object|null>} - Comment data or null if not found
 */
export const getActivityCommentById = async (commentId) => {
  return executeFirestoreOperation(async () => {
    const commentRef = doc(firestore, COLLECTION_NAME, commentId);
    const commentSnap = await getDoc(commentRef);
    
    if (commentSnap.exists()) {
      return { id: commentSnap.id, ...commentSnap.data() };
    }
    return null;
  }, { operationName: 'Get Activity Comment By ID' });
};

/**
 * Get comments for an activity
 * @param {string} activityId - Activity document ID
 * @param {number} limitCount - Number of comments to fetch
 * @returns {Promise<Array>} - Array of comment objects
 */
export const getActivityComments = async (activityId, limitCount = 50) => {
  return executeFirestoreOperation(async () => {
    const commentsRef = collection(firestore, COLLECTION_NAME);
    const q = query(
      commentsRef,
      where('activityId', '==', activityId),
      orderBy('timestamp', 'asc'), // Comments ordered chronologically
      limit(limitCount)
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  }, { operationName: 'Get Activity Comments' });
};

/**
 * Get comment count for an activity
 * @param {string} activityId - Activity document ID
 * @returns {Promise<number>} - Number of comments
 */
export const getActivityCommentCount = async (activityId) => {
  return executeFirestoreOperation(async () => {
    const commentsRef = collection(firestore, COLLECTION_NAME);
    const q = query(
      commentsRef,
      where('activityId', '==', activityId)
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.size;
  }, { operationName: 'Get Activity Comment Count' });
};

/**
 * Get comments by a specific user
 * @param {string} userId - User ID
 * @param {number} limitCount - Number of comments to fetch
 * @returns {Promise<Array>} - Array of comment objects
 */
export const getUserActivityComments = async (userId, limitCount = 50) => {
  return executeFirestoreOperation(async () => {
    const commentsRef = collection(firestore, COLLECTION_NAME);
    const q = query(
      commentsRef,
      where('userId', '==', userId),
      orderBy('timestamp', 'desc'),
      limit(limitCount)
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  }, { operationName: 'Get User Activity Comments' });
};

/**
 * Get recent comments across all activities
 * @param {number} limitCount - Number of comments to fetch
 * @returns {Promise<Array>} - Array of comment objects
 */
export const getRecentActivityComments = async (limitCount = 20) => {
  return executeFirestoreOperation(async () => {
    const commentsRef = collection(firestore, COLLECTION_NAME);
    const q = query(
      commentsRef,
      orderBy('timestamp', 'desc'),
      limit(limitCount)
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  }, { operationName: 'Get Recent Activity Comments' });
};

/**
 * Delete all comments for an activity (when activity is deleted)
 * @param {string} activityId - Activity document ID
 * @returns {Promise<void>}
 */
export const deleteActivityComments = async (activityId) => {
  return executeFirestoreOperation(async () => {
    const commentsRef = collection(firestore, COLLECTION_NAME);
    const q = query(
      commentsRef,
      where('activityId', '==', activityId)
    );
    
    const querySnapshot = await getDocs(q);
    const deletePromises = querySnapshot.docs.map(doc => deleteDoc(doc.ref));
    await Promise.all(deletePromises);
  }, { operationName: 'Delete Activity Comments' });
};
