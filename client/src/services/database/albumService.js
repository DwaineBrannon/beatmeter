import { 
  collection, 
  doc, 
  updateDoc, 
  getDoc, 
  getDocs, 
  query, 
  orderBy, 
  limit, 
  serverTimestamp
} from 'firebase/firestore';
import { firestore } from '../../config/firebase';
import { executeFirestoreOperation } from '../../utils/firebaseHelpers';

const COLLECTION_NAME = 'albums';

/**
 * Create or update an album document
 * @param {Object} albumData - Album data from Spotify API
 * @returns {Promise<string>} - Document ID
 */
export const createOrUpdateAlbum = async (albumData) => {
  return executeFirestoreOperation(async () => {
    const albumRef = doc(firestore, COLLECTION_NAME, albumData.spotifyId);
    
    const albumDoc = {
      spotifyId: albumData.spotifyId,
      name: albumData.name,
      artist: albumData.artist,
      releaseDate: albumData.releaseDate,
      genres: albumData.genres || [],
      trackCount: albumData.trackCount,
      duration: albumData.duration,
      spotifyUrl: albumData.spotifyUrl,
      albumArt: albumData.albumArt,
      averageRating: albumData.averageRating || 0,
      totalRatings: albumData.totalRatings || 0,
      lastUpdated: serverTimestamp()
    };

    await updateDoc(albumRef, albumDoc, { merge: true });
    return albumData.spotifyId;
  }, { operationName: 'Create/Update Album' });
};

/**
 * Get album by Spotify ID
 * @param {string} spotifyId - Spotify album ID
 * @returns {Promise<Object|null>} - Album data or null if not found
 */
export const getAlbumById = async (spotifyId) => {
  return executeFirestoreOperation(async () => {
    const albumRef = doc(firestore, COLLECTION_NAME, spotifyId);
    const albumSnap = await getDoc(albumRef);
    
    if (albumSnap.exists()) {
      return { id: albumSnap.id, ...albumSnap.data() };
    }
    return null;
  }, { operationName: 'Get Album By ID' });
};

/**
 * Update album rating statistics
 * @param {string} albumId - Album ID
 * @param {number} newRating - New rating value
 * @param {number} oldRating - Old rating value (for updates, null for new ratings)
 * @returns {Promise<void>}
 */
export const updateAlbumRating = async (albumId, newRating, oldRating = null) => {
  return executeFirestoreOperation(async () => {
    const albumRef = doc(firestore, COLLECTION_NAME, albumId);
    const albumSnap = await getDoc(albumRef);
    
    if (!albumSnap.exists()) {
      throw new Error('Album not found');
    }
    
    const albumData = albumSnap.data();
    let { averageRating = 0, totalRatings = 0 } = albumData;
    
    if (oldRating === null) {
      // New rating
      const newTotal = totalRatings + 1;
      const newAverage = ((averageRating * totalRatings) + newRating) / newTotal;
      
      await updateDoc(albumRef, {
        averageRating: newAverage,
        totalRatings: newTotal,
        lastUpdated: serverTimestamp()
      });
    } else {
      // Update existing rating
      if (totalRatings > 0) {
        const newAverage = ((averageRating * totalRatings) - oldRating + newRating) / totalRatings;
        await updateDoc(albumRef, {
          averageRating: newAverage,
          lastUpdated: serverTimestamp()
        });
      }
    }
  }, { operationName: 'Update Album Rating' });
};

/**
 * Remove a rating from album statistics
 * @param {string} albumId - Album ID
 * @param {number} rating - Rating value to remove
 * @returns {Promise<void>}
 */
export const removeAlbumRating = async (albumId, rating) => {
  return executeFirestoreOperation(async () => {
    const albumRef = doc(firestore, COLLECTION_NAME, albumId);
    const albumSnap = await getDoc(albumRef);
    
    if (!albumSnap.exists()) {
      throw new Error('Album not found');
    }
    
    const albumData = albumSnap.data();
    let { averageRating = 0, totalRatings = 0 } = albumData;
    
    if (totalRatings > 1) {
      const newTotal = totalRatings - 1;
      const newAverage = ((averageRating * totalRatings) - rating) / newTotal;
      
      await updateDoc(albumRef, {
        averageRating: newAverage,
        totalRatings: newTotal,
        lastUpdated: serverTimestamp()
      });
    } else {
      // Last rating being removed
      await updateDoc(albumRef, {
        averageRating: 0,
        totalRatings: 0,
        lastUpdated: serverTimestamp()
      });
    }
  }, { operationName: 'Remove Album Rating' });
};

/**
 * Get top rated albums
 * @param {number} limitCount - Number of albums to fetch
 * @returns {Promise<Array>} - Array of album objects
 */
export const getTopRatedAlbums = async (limitCount = 20) => {
  return executeFirestoreOperation(async () => {
    const albumsRef = collection(firestore, COLLECTION_NAME);
    const q = query(
      albumsRef,
      orderBy('averageRating', 'desc'),
      orderBy('totalRatings', 'desc'),
      limit(limitCount)
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  }, { operationName: 'Get Top Rated Albums' });
};

/**
 * Get recently added albums
 * @param {number} limitCount - Number of albums to fetch
 * @returns {Promise<Array>} - Array of album objects
 */
export const getRecentAlbums = async (limitCount = 20) => {
  return executeFirestoreOperation(async () => {
    const albumsRef = collection(firestore, COLLECTION_NAME);
    const q = query(
      albumsRef,
      orderBy('lastUpdated', 'desc'),
      limit(limitCount)
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  }, { operationName: 'Get Recent Albums' });
};

/**
 * Search albums by name or artist
 * @param {string} searchTerm - Search term
 * @param {number} limitCount - Number of results to return
 * @returns {Promise<Array>} - Array of album objects
 */
export const searchAlbums = async (searchTerm, limitCount = 20) => {
  return executeFirestoreOperation(async () => {
    const albumsRef = collection(firestore, COLLECTION_NAME);
    
    // Note: Firestore doesn't support full-text search natively
    // This is a basic implementation. For better search, consider using Algolia or similar
    const searchTermLower = searchTerm.toLowerCase();
    
    const q = query(albumsRef, limit(limitCount));
    const querySnapshot = await getDocs(q);
    
    const results = querySnapshot.docs
      .map(doc => ({ id: doc.id, ...doc.data() }))
      .filter(album => 
        album.name?.toLowerCase().includes(searchTermLower) ||
        album.artist?.toLowerCase().includes(searchTermLower)
      );
    
    return results;
  }, { operationName: 'Search Albums' });
};
