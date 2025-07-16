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
import { createActivity, ACTIVITY_TYPES } from './activityService';

const COLLECTION_NAME = 'posts';

/**
 * Post types enum
 */
export const POST_TYPES = {
  REVIEW: 'Reviews',
  NOTE: 'Notes'
};

/**
 * Create a new post
 * @param {Object} postData - Post data
 * @param {string} postData.userId - User ID who created the post
 * @param {string} postData.userDisplayName - Display name of the user
 * @param {string} postData.type - Type of post (Reviews or Notes)
 * @param {string} postData.title - Post title
 * @param {string} postData.content - Post content
 * @param {string} [postData.albumId] - Associated album ID (for reviews)
 * @param {Object} [postData.albumData] - Album metadata (title, artist, cover)
 * @param {number} [postData.rating] - Rating for album reviews (1-10)
 * @returns {Promise<string>} - Document ID
 */
export const createPost = async (postData) => {
  return executeFirestoreOperation(async () => {
    const postDoc = {
      userId: postData.userId,
      userDisplayName: postData.userDisplayName,
      type: postData.type,
      title: postData.title,
      content: postData.content,
      albumId: postData.albumId || null,
      albumData: postData.albumData || null,
      rating: postData.rating || null,
      likesCount: 0,
      commentsCount: 0,
      timestamp: serverTimestamp(),
      updatedAt: serverTimestamp()
    };

    const docRef = await addDoc(collection(firestore, COLLECTION_NAME), postDoc);
    
    // Create activity for the new post
    await createActivity({
      userId: postData.userId,
      actionType: postData.type === POST_TYPES.REVIEW ? 'new_review' : 'new_note',
      targetId: docRef.id,
      userDisplayName: postData.userDisplayName,
      additionalData: {
        postTitle: postData.title,
        postType: postData.type,
        albumData: postData.albumData
      }
    });
    
    return docRef.id;
  }, { operationName: 'Create Post' });
};

/**
 * Update an existing post
 * @param {string} postId - Post document ID
 * @param {Object} updateData - Data to update
 * @returns {Promise<void>}
 */
export const updatePost = async (postId, updateData) => {
  return executeFirestoreOperation(async () => {
    const postRef = doc(firestore, COLLECTION_NAME, postId);
    await updateDoc(postRef, {
      ...updateData,
      updatedAt: serverTimestamp()
    });
  }, { operationName: 'Update Post' });
};

/**
 * Delete a post
 * @param {string} postId - Post document ID
 * @returns {Promise<void>}
 */
export const deletePost = async (postId) => {
  return executeFirestoreOperation(async () => {
    const postRef = doc(firestore, COLLECTION_NAME, postId);
    await deleteDoc(postRef);
  }, { operationName: 'Delete Post' });
};

/**
 * Get a specific post by ID
 * @param {string} postId - Post document ID
 * @returns {Promise<Object|null>} - Post data or null if not found
 */
export const getPostById = async (postId) => {
  return executeFirestoreOperation(async () => {
    const postRef = doc(firestore, COLLECTION_NAME, postId);
    const postSnap = await getDoc(postRef);
    
    if (postSnap.exists()) {
      return { id: postSnap.id, ...postSnap.data() };
    }
    return null;
  }, { operationName: 'Get Post By ID' });
};

/**
 * Get posts for a specific user
 * @param {string} userId - User ID
 * @param {number} limitCount - Number of posts to fetch
 * @param {string} [filterType] - Filter by post type ('Reviews', 'Notes', or null for all)
 * @returns {Promise<Array>} - Array of post objects
 */
export const getUserPosts = async (userId, limitCount = 20, filterType = null) => {
  return executeFirestoreOperation(async () => {
    let q = query(
      collection(firestore, COLLECTION_NAME),
      where('userId', '==', userId),
      orderBy('timestamp', 'desc'),
      limit(limitCount)
    );

    // Add type filter if specified
    if (filterType && filterType !== 'All') {
      q = query(
        collection(firestore, COLLECTION_NAME),
        where('userId', '==', userId),
        where('type', '==', filterType),
        orderBy('timestamp', 'desc'),
        limit(limitCount)
      );
    }

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }, { operationName: 'Get User Posts' });
};

/**
 * Get all posts from users that the current user follows (for feed)
 * @param {Array} followingUserIds - Array of user IDs that the current user follows
 * @param {number} limitCount - Number of posts to fetch
 * @returns {Promise<Array>} - Array of post objects
 */
export const getFollowingUsersPosts = async (followingUserIds, limitCount = 20) => {
  if (!followingUserIds || followingUserIds.length === 0) {
    return [];
  }

  return executeFirestoreOperation(async () => {
    // Firestore 'in' queries are limited to 10 items, so we need to batch them
    const batches = [];
    for (let i = 0; i < followingUserIds.length; i += 10) {
      const batch = followingUserIds.slice(i, i + 10);
      const q = query(
        collection(firestore, COLLECTION_NAME),
        where('userId', 'in', batch),
        orderBy('timestamp', 'desc'),
        limit(limitCount)
      );
      batches.push(getDocs(q));
    }

    const results = await Promise.all(batches);
    const allPosts = [];
    
    results.forEach(querySnapshot => {
      querySnapshot.docs.forEach(doc => {
        allPosts.push({ id: doc.id, ...doc.data() });
      });
    });

    // Sort all posts by timestamp and limit the results
    return allPosts
      .sort((a, b) => (b.timestamp?.toDate() || new Date()) - (a.timestamp?.toDate() || new Date()))
      .slice(0, limitCount);
  }, { operationName: 'Get Following Users Posts' });
};

/**
 * Get recent posts (public feed)
 * @param {number} limitCount - Number of posts to fetch
 * @param {string} [filterType] - Filter by post type ('Reviews', 'Notes', or null for all)
 * @returns {Promise<Array>} - Array of post objects
 */
export const getRecentPosts = async (limitCount = 20, filterType = null) => {
  return executeFirestoreOperation(async () => {
    let q = query(
      collection(firestore, COLLECTION_NAME),
      orderBy('timestamp', 'desc'),
      limit(limitCount)
    );

    // Add type filter if specified
    if (filterType && filterType !== 'All') {
      q = query(
        collection(firestore, COLLECTION_NAME),
        where('type', '==', filterType),
        orderBy('timestamp', 'desc'),
        limit(limitCount)
      );
    }

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }, { operationName: 'Get Recent Posts' });
};

/**
 * Like a post
 * @param {string} postId - Post document ID
 * @returns {Promise<void>}
 */
export const likePost = async (postId) => {
  return executeFirestoreOperation(async () => {
    const postRef = doc(firestore, COLLECTION_NAME, postId);
    const postDoc = await getDoc(postRef);
    
    if (postDoc.exists()) {
      const currentLikes = postDoc.data().likesCount || 0;
      await updateDoc(postRef, {
        likesCount: currentLikes + 1
      });
    }
  }, { operationName: 'Like Post' });
};

/**
 * Unlike a post
 * @param {string} postId - Post document ID
 * @returns {Promise<void>}
 */
export const unlikePost = async (postId) => {
  return executeFirestoreOperation(async () => {
    const postRef = doc(firestore, COLLECTION_NAME, postId);
    const postDoc = await getDoc(postRef);
    
    if (postDoc.exists()) {
      const currentLikes = postDoc.data().likesCount || 0;
      await updateDoc(postRef, {
        likesCount: Math.max(0, currentLikes - 1)
      });
    }
  }, { operationName: 'Unlike Post' });
};
