import { apiClient } from '@/lib/axios';
import { getIdToken } from '../../utils/authHelpers';

/**
 * Database service for managing featured playlists via API
 */

/**
 * Get all featured playlists (admin only)
 */
export const getFeaturedPlaylists = async () => {
  const token = await getIdToken();
  const response = await apiClient.get('/admin/featured-playlists', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

/**
 * Get public featured playlists (for home page)
 */
export const getPublicFeaturedPlaylists = async () => {
  const response = await apiClient.get('/featured-playlists');
  return response.data;
};

/**
 * Add or update a featured playlist (admin only)
 */
export const setFeaturedPlaylist = async playlistData => {
  const token = await getIdToken();
  const response = await apiClient.post(
    '/admin/featured-playlists',
    playlistData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

/**
 * Update a featured playlist (admin only)
 */
export const updateFeaturedPlaylist = async (playlistId, updates) => {
  const token = await getIdToken();
  const response = await axios.put(
    `${API_BASE_URL}/admin/featured-playlists/${playlistId}`,
    updates,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  );
  return response.data;
};

/**
 * Remove a featured playlist (admin only)
 */
export const removeFeaturedPlaylist = async playlistId => {
  const token = await getIdToken();
  const response = await apiClient.delete(
    `/admin/featured-playlists/${playlistId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
