import { 
  createOrUpdateAlbum, 
  getAlbumById, 
  updateAlbumRating, 
  removeAlbumRating 
} from '../database/albumService.js';
import { 
  createRating, 
  updateRating as updateRatingData, 
  deleteRating, 
  getUserAlbumRating 
} from '../database/ratingService.js';
import { 
  createRatingActivity, 
  deleteActivitiesByTarget, 
  ACTIVITY_TYPES 
} from '../database/activityService.js';
import { executeFirestoreOperation } from '../../utils/firebaseHelpers.js';

/**
 * Complete workflow to rate an album
 * This handles album creation, rating creation, activity creation, and album stats update
 * @param {Object} albumData - Album data from Spotify
 * @param {Object} ratingData - Rating data
 * @returns {Promise<Object>} - Created rating with ID
 */
export const rateAlbum = async (albumData, ratingData) => {
  return executeFirestoreOperation(async () => {
    // 1. Create or update album document
    await createOrUpdateAlbum(albumData);
    
    // 2. Check if user has already rated this album
    const existingRating = await getUserAlbumRating(ratingData.userId, albumData.spotifyId);
    if (existingRating) {
      throw new Error('User has already rated this album. Use updateAlbumRating instead.');
    }
    
    // 3. Create the rating
    const ratingId = await createRating({
      ...ratingData,
      albumId: albumData.spotifyId
    });
    
    // 4. Update album rating statistics
    await updateAlbumRating(albumData.spotifyId, ratingData.rating);
    
    // 5. Create activity for the feed
    const ratingWithId = { ...ratingData, id: ratingId, albumId: albumData.spotifyId };
    await createRatingActivity(ratingWithId, albumData);
    
    return ratingWithId;
  }, { operationName: 'Rate Album' });
};

/**
 * Update an existing album rating
 * @param {string} ratingId - Rating document ID
 * @param {Object} updateData - Updated rating data
 * @param {Object} albumData - Album data
 * @returns {Promise<void>}
 */
export const updateExistingAlbumRating = async (ratingId, updateData, albumData) => {
  return executeFirestoreOperation(async () => {
    // 1. Get the existing rating to compare values
    const existingRating = await getUserAlbumRating(updateData.userId, albumData.spotifyId);
    if (!existingRating) {
      throw new Error('Rating not found');
    }
    
    // 2. Update the rating document
    await updateRatingData(ratingId, updateData);
    
    // 3. Update album statistics if rating value changed
    if (updateData.rating !== undefined && updateData.rating !== existingRating.rating) {
      await updateAlbumRating(albumData.spotifyId, updateData.rating, existingRating.rating);
    }
    
    // Note: We don't create a new activity for rating updates to avoid spam
  }, { operationName: 'Update Album Rating' });
};

/**
 * Delete an album rating and clean up related data
 * @param {string} ratingId - Rating document ID
 * @param {string} albumId - Album ID
 * @param {number} ratingValue - Rating value to remove from stats
 * @returns {Promise<void>}
 */
export const deleteAlbumRating = async (ratingId, albumId, ratingValue) => {
  return executeFirestoreOperation(async () => {
    // 1. Delete the rating
    await deleteRating(ratingId);
    
    // 2. Update album statistics
    await removeAlbumRating(albumId, ratingValue);
    
    // 3. Delete related activities
    await deleteActivitiesByTarget(ratingId, ACTIVITY_TYPES.NEW_RATING);
  }, { operationName: 'Delete Album Rating' });
};

/**
 * Get comprehensive album data with user's rating
 * @param {string} albumId - Album ID
 * @param {string} userId - User ID (optional)
 * @returns {Promise<Object>} - Album data with user rating
 */
export const getAlbumWithUserRating = async (albumId, userId = null) => {
  return executeFirestoreOperation(async () => {
    const [albumData, userRating] = await Promise.all([
      getAlbumById(albumId),
      userId ? getUserAlbumRating(userId, albumId) : Promise.resolve(null)
    ]);
    
    return {
      ...albumData,
      userRating
    };
  }, { operationName: 'Get Album With User Rating' });
};

/**
 * Import album data from Spotify and create album document if it doesn't exist
 * @param {Object} spotifyAlbumData - Raw Spotify album data
 * @returns {Promise<Object>} - Normalized album data
 */
export const importAlbumFromSpotify = async (spotifyAlbumData) => {
  return executeFirestoreOperation(async () => {
    // Normalize Spotify data to our album schema
    const albumData = {
      spotifyId: spotifyAlbumData.id,
      name: spotifyAlbumData.name,
      artist: spotifyAlbumData.artists?.[0]?.name || 'Unknown Artist',
      releaseDate: spotifyAlbumData.release_date,
      genres: spotifyAlbumData.genres || [],
      trackCount: spotifyAlbumData.total_tracks,
      duration: spotifyAlbumData.tracks?.items?.reduce((total, track) => total + track.duration_ms, 0) || 0,
      spotifyUrl: spotifyAlbumData.external_urls?.spotify,
      albumArt: spotifyAlbumData.images?.[0]?.url,
      averageRating: 0,
      totalRatings: 0
    };
    
    // Create or update the album
    await createOrUpdateAlbum(albumData);
    
    return albumData;
  }, { operationName: 'Import Album From Spotify' });
};

/**
 * Batch import multiple albums from Spotify
 * @param {Array} spotifyAlbumsData - Array of Spotify album data
 * @returns {Promise<Array>} - Array of normalized album data
 */
export const batchImportAlbumsFromSpotify = async (spotifyAlbumsData) => {
  return executeFirestoreOperation(async () => {
    const importPromises = (spotifyAlbumsData || []).map(albumData => 
      importAlbumFromSpotify(albumData)
    );
    
    return Promise.all(importPromises);
  }, { operationName: 'Batch Import Albums From Spotify' });
};
