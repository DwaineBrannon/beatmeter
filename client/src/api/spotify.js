// Spotify API utility for Beatmeter web client
// Handles all music-related API calls to the backend (Firebase Functions)
import axios from 'axios';

// Firebase Functions URLs
const isDev = import.meta.env.DEV;
const FUNCTIONS_BASE = isDev 
  ? 'http://localhost:5001/beatmeter-baf5a/us-central1' // Firebase emulator
  : 'https://us-central1-beatmeter-baf5a.cloudfunctions.net'; // Production

export const spotifyApi = {
  // Fetch new album releases from backend
  getNewReleases: async (limit = 20, offset = 0) => {
    const res = await axios.get(`/api/music/new-releases?limit=${limit}&offset=${offset}`);
    return res.data;
  },

  // Search for music (albums, artists, tracks) via backend
  searchMusic: async (query, type = 'album', limit = 20, offset = 0) => {
    const res = await axios.get(`/api/music/search?q=${encodeURIComponent(query)}&type=${type}&limit=${limit}&offset=${offset}`);
    return res.data;
  },

  // Get top albums (uses new releases as a proxy)
  getTopAlbums: async () => {
    const res = await axios.get(`/api/music/top-albums`);
    // Return albums array or fallback to items/data
    return res.data.albums || res.data.items || res.data;
  },

  // Get top songs (from Spotify Top 50 playlist)
  getTopSongs: async () => {
    const res = await axios.get(`/api/music/top-songs`);
    // Ensure each song has an albumId property for consistency
    return (res.data.tracks || res.data.songs || res.data.items || []).map(song => ({
      ...song,
      albumId: song.albumId || song.id
    }));
  },

  // Get album details by Spotify album ID
  getAlbumById: async (albumId) => {
    const res = await axios.get(`/api/music/albums/${albumId}`);
    return res.data;
  }
};