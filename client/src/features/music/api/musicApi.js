// Music API utility for Beatmeter web client
// Handles all music-related API calls to the backend (Firebase Functions)
// Powered by MusicBrainz (via backend proxy)
import { apiClient } from '@/lib/axios';

export const musicApi = {
  // Fetch new album releases from backend
  getNewReleases: async (limit = 20, offset = 0) => {
    const res = await apiClient.get('/music/new-releases', {
      params: { limit, offset }
    });
    return res.data;
  },

  // Search for music (albums, artists, tracks) via backend
  searchMusic: async (query, type = 'album', limit = 20, offset = 0) => {
    const res = await apiClient.get('/music/search', {
      params: {
        q: query,
        type,
        limit,
        offset
      }
    });
    return res.data;
  },

  // Get top albums (uses new releases as a proxy)
  getTopAlbums: async () => {
    try {
      const res = await apiClient.get('/music/top-albums');

      // The backend returns albums array directly
      const albumsData = Array.isArray(res.data) ? res.data : [];

      return albumsData;
    } catch (error) {
      console.error('Error fetching top albums:', error);
      return [];
    }
  },

  // Get top songs (uses search for popular/recent tracks)
  getTopSongs: async () => {
    try {
      const res = await apiClient.get('/music/top-songs');

      // Backend now returns the tracks array directly
      const data = res.data;
      const songs = Array.isArray(data) ? data : [];
      return songs.map(song => ({
        ...song,
        albumId: song.album?.id || song.albumId, // Handle MusicBrainz structure
      }));
    } catch (error) {
      console.error('Error fetching top songs:', error);
      return [];
    }
  },

  // Get album details by ID
  getAlbumById: async albumId => {
    try {
      const res = await apiClient.get(`/music/albums/${albumId}`);
      return res.data;
    } catch (error) {
      console.error('Error fetching album details:', error);
      throw error;
    }
  },
};
