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

const COLLECTION_NAME = 'ratings';

/**
 * Create a new rating
 * @param {Object} ratingData - Rating data
 * @param {string} ratingData.userId - User ID
 * @param {string} ratingData.albumId - Album ID
 * @param {number} ratingData.rating - Rating value (1-10)
 * @param {string} ratingData.review - Review text
 * @param {string} ratingData.userDisplayName - User display name
 * @returns {Promise<string>} - Document ID
 */
export const createRating = async (ratingData) => {
  return executeFirestoreOperation(async () => {
    // Check if user has already rated this album
    const existingRating = await getUserAlbumRating(ratingData.userId, ratingData.albumId);
    if (existingRating) {
      throw new Error('User has already rated this album');
    }

    const ratingDoc = {
      userId: ratingData.userId,
      albumId: ratingData.albumId,
      rating: ratingData.rating,
      review: ratingData.review || '',
      userDisplayName: ratingData.userDisplayName,
      timestamp: serverTimestamp()
    };

    const docRef = await addDoc(collection(firestore, COLLECTION_NAME), ratingDoc);
    return docRef.id;
  }, { operationName: 'Create Rating' });
};

/**
 * Update an existing rating
 * @param {string} ratingId - Rating document ID
 * @param {Object} updateData - Data to update
 * @returns {Promise<void>}
 */
export const updateRating = async (ratingId, updateData) => {
  return executeFirestoreOperation(async () => {
    const ratingRef = doc(firestore, COLLECTION_NAME, ratingId);
    const updates = {
      ...updateData,
      timestamp: serverTimestamp()
    };
    
    await updateDoc(ratingRef, updates);
  }, { operationName: 'Update Rating' });
};

/**
 * Delete a rating
 * @param {string} ratingId - Rating document ID
 * @returns {Promise<void>}
 */
export const deleteRating = async (ratingId) => {
  return executeFirestoreOperation(async () => {
    const ratingRef = doc(firestore, COLLECTION_NAME, ratingId);
    await deleteDoc(ratingRef);
  }, { operationName: 'Delete Rating' });
};

/**
 * Get a specific rating by ID
 * @param {string} ratingId - Rating document ID
 * @returns {Promise<Object|null>} - Rating data or null if not found
 */
export const getRatingById = async (ratingId) => {
  return executeFirestoreOperation(async () => {
    const ratingRef = doc(firestore, COLLECTION_NAME, ratingId);
    const ratingSnap = await getDoc(ratingRef);
    
    if (ratingSnap.exists()) {
      return { id: ratingSnap.id, ...ratingSnap.data() };
    }
    return null;
  }, { operationName: 'Get Rating By ID' });
};

/**
 * Get user's rating for a specific album
 * @param {string} userId - User ID
 * @param {string} albumId - Album ID
 * @returns {Promise<Object|null>} - Rating data or null if not found
 */
export const getUserAlbumRating = async (userId, albumId) => {
  return executeFirestoreOperation(async () => {
    const ratingsRef = collection(firestore, COLLECTION_NAME);
    const q = query(
      ratingsRef,
      where('userId', '==', userId),
      where('albumId', '==', albumId),
      limit(1)
    );
    
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      return { id: doc.id, ...doc.data() };
    }
    return null;
  }, { operationName: 'Get User Album Rating' });
};

/**
 * Get all ratings for a specific album
 * @param {string} albumId - Album ID
 * @param {number} limitCount - Number of ratings to fetch
 * @returns {Promise<Array>} - Array of rating objects
 */
export const getAlbumRatings = async (albumId, limitCount = 20) => {
  return executeFirestoreOperation(async () => {
    const ratingsRef = collection(firestore, COLLECTION_NAME);
    const q = query(
      ratingsRef,
      where('albumId', '==', albumId),
      orderBy('timestamp', 'desc'),
      limit(limitCount)
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  }, { operationName: 'Get Album Ratings' });
};

/**
 * Get all ratings by a specific user
 * @param {string} userId - User ID
 * @param {number} limitCount - Number of ratings to fetch
 * @returns {Promise<Array>} - Array of rating objects
 */
export const getUserRatings = async (userId, limitCount = 50) => {
  return executeFirestoreOperation(async () => {
    const ratingsRef = collection(firestore, COLLECTION_NAME);
    const q = query(
      ratingsRef,
      where('userId', '==', userId),
      orderBy('timestamp', 'desc'),
      limit(limitCount)
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  }, { operationName: 'Get User Ratings' });
};

/**
 * Get recent ratings across all users
 * @param {number} limitCount - Number of ratings to fetch
 * @returns {Promise<Array>} - Array of rating objects
 */
export const getRecentRatings = async (limitCount = 20) => {
  return executeFirestoreOperation(async () => {
    const ratingsRef = collection(firestore, COLLECTION_NAME);
    const q = query(
      ratingsRef,
      orderBy('timestamp', 'desc'),
      limit(limitCount)
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  }, { operationName: 'Get Recent Ratings' });
};

/**
 * Get ratings with reviews (non-empty review text)
 * @param {number} limitCount - Number of ratings to fetch
 * @returns {Promise<Array>} - Array of rating objects with reviews
 */
export const getRatingsWithReviews = async (limitCount = 20) => {
  return executeFirestoreOperation(async () => {
    const ratingsRef = collection(firestore, COLLECTION_NAME);
    const q = query(
      ratingsRef,
      orderBy('timestamp', 'desc'),
      limit(limitCount * 2) // Fetch more to filter out empty reviews
    );
    
    const querySnapshot = await getDocs(q);
    const ratingsWithReviews = querySnapshot.docs
      .map(doc => ({ id: doc.id, ...doc.data() }))
      .filter(rating => rating.review && rating.review.trim().length > 0)
      .slice(0, limitCount);
    
    return ratingsWithReviews;
  }, { operationName: 'Get Ratings With Reviews' });
};
