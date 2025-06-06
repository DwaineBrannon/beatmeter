/**
 * Music collection service for handling album and collection operations
 */

/**
 * Add an album to a user's collection
 * @param {object} albumData - Album data to add to collection
 * @returns {Promise<object>} - Added album data
 */
export const addToCollection = async (albumData) => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
    
    const response = await fetch('/api/users/me/collection', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(albumData),
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("Error adding to collection:", error);
    throw error; // Rethrow so the calling function can handle it
  }
};

/**
 * Get a user's collection
 * @returns {Promise<Array>} - Collection of albums
 */
export const getUserCollection = async () => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
    
    const response = await fetch('/api/users/me/collection', {
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("Error fetching collection:", error);
    throw error; // Rethrow so the calling function can handle it
  }
};

/**
 * Update an album rating in the user's collection
 * @param {string} itemId - ID of the album
 * @param {number} rating - New rating
 * @returns {Promise<object>} - Updated album data
 */
export const updateCollectionItemRating = async (itemId, rating) => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
    
    const response = await fetch(`/api/users/me/collection/${itemId}/rating`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ rating }),
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("Error updating item rating:", error);
    throw error; // Rethrow so the calling function can handle it
  }
};

/**
 * Remove an album from the user's collection
 * @param {string} itemId - ID of the album to remove
 * @returns {Promise<object>} - Result of the operation
 */
export const removeFromCollection = async (itemId) => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
    
    const response = await fetch(`/api/users/me/collection/${itemId}`, {
      method: 'DELETE',
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("Error removing from collection:", error);
    throw error; // Rethrow so the calling function can handle it
  }
};

/**
 * Update song ratings for an album
 * @param {string} albumId - ID of the album
 * @param {object} songRatings - Object mapping song IDs to ratings
 * @returns {Promise<object>} - Updated album data with song ratings
 */
export const updateSongRatings = async (albumId, songRatings) => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
    
    const response = await fetch(`/api/music/albums/${albumId}/songs/ratings`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ songRatings }),
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("Error updating song ratings:", error);
    throw error; // Rethrow so the calling function can handle it
  }
};

/**
 * Add an album to a user's "Rate Later" list
 * @param {object} albumData - Album data to add to the Rate Later list
 * @returns {Promise<object>} - Added album data
 */
export const addToRateLater = async (albumData) => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
    
    const response = await fetch('/api/users/me/ratelater', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        albumId: albumData.albumId,
        name: albumData.name,
        artistName: albumData.artistName,
        imageUrl: albumData.imageUrl,
      }),
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("Error adding to Rate Later list:", error);
    throw error; // Rethrow so the calling function can handle it
  }
};
