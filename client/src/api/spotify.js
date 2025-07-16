// Spotify API utility for Beatmeter web client
// Handles all music-related API calls to the backend (Firebase Functions)
import axios from 'axios';

// Firebase Functions URLs - Use environment variables
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 
  (import.meta.env.DEV 
    ? 'http://localhost:5001/beatmeter-baf5a/us-central1/api'
    : 'https://us-central1-beatmeter-baf5a.cloudfunctions.net/api');

export const spotifyApi = {
  // Fetch new album releases from backend
  getNewReleases: async (limit = 20, offset = 0) => {
    const res = await axios.get(`${API_BASE_URL}/music/new-releases?limit=${limit}&offset=${offset}`);
    return res.data;
  },

  // Search for music (albums, artists, tracks) via backend
  searchMusic: async (query, type = 'album', limit = 20, offset = 0) => {
    const res = await axios.get(`${API_BASE_URL}/music/search?q=${encodeURIComponent(query)}&type=${type}&limit=${limit}&offset=${offset}`);
    return res.data;
  },

  // Get top albums (uses new releases as a proxy)
  getTopAlbums: async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/music/top-albums`);
      
      // The backend returns albums array directly
      const albumsData = Array.isArray(res.data) ? res.data : [];
      
      return albumsData;
    } catch (error) {
      console.error('Error fetching top albums:', error);
      return [];
    }
  },

  // Get top songs (from Spotify Top 50 playlist)
  getTopSongs: async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/music/top-songs`);
      
      // Backend now returns the tracks array directly
      const data = res.data;
      const songs = Array.isArray(data) ? data : [];
      return songs.map(song => ({
        ...song,
        albumId: song.albumId || song.id
      }));
    } catch (error) {
      console.error('Error fetching top songs:', error);
      return [];
    }
  },

  // Get album details by Spotify album ID
  getAlbumById: async (albumId) => {
    try {
      const res = await axios.get(`${API_BASE_URL}/music/albums/${albumId}`);
      return res.data;
    } catch (error) {
      console.error('Error fetching album details:', error);
      throw error;
    }
  }
};