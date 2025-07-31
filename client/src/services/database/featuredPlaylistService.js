import axios from 'axios';
import { getIdToken } from '../../utils/authHelpers';

/**
 * Database service for managing featured playlists via API
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 
  (import.meta.env.DEV 
    ? 'http://localhost:5001/beatmeter-baf5a/us-central1/api'
    : 'https://us-central1-beatmeter-baf5a.cloudfunctions.net/api');

/**
 * Get all featured playlists (admin only)
 */
export const getFeaturedPlaylists = async () => {
  const token = await getIdToken();
  const response = await axios.get(`${API_BASE_URL}/admin/featured-playlists`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  return response.data;
};

/**
 * Get public featured playlists (for home page)
 */
export const getPublicFeaturedPlaylists = async () => {
  const response = await axios.get(`${API_BASE_URL}/featured-playlists`);
  return response.data;
};

/**
 * Add or update a featured playlist (admin only)
 */
export const setFeaturedPlaylist = async (playlistData) => {
  const token = await getIdToken();
  const response = await axios.post(`${API_BASE_URL}/admin/featured-playlists`, playlistData, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });
  return response.data;
};

/**
 * Update a featured playlist (admin only)
 */
export const updateFeaturedPlaylist = async (playlistId, updates) => {
  const token = await getIdToken();
  const response = await axios.put(`${API_BASE_URL}/admin/featured-playlists/${playlistId}`, updates, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });
  return response.data;
};

/**
 * Remove a featured playlist (admin only)
 */
export const removeFeaturedPlaylist = async (playlistId) => {
  const token = await getIdToken();
  const response = await axios.delete(`${API_BASE_URL}/admin/featured-playlists/${playlistId}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  return response.data;
};
