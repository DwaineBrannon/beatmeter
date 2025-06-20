import axios from 'axios';

// Firebase Functions URLs
const isDev = import.meta.env.DEV;
const FUNCTIONS_BASE = isDev 
  ? 'http://localhost:5001/beatmeter-baf5a/us-central1' // Firebase emulator
  : 'https://us-central1-beatmeter-baf5a.cloudfunctions.net'; // Production

export const spotifyApi = {
  getNewReleases: async (limit = 20, offset = 0) => {
    const res = await axios.get(`/api/music/new-releases?limit=${limit}&offset=${offset}`);
    return res.data;
  },

  searchMusic: async (query, type = 'album', limit = 20, offset = 0) => {
    const res = await axios.get(`/api/music/search?q=${encodeURIComponent(query)}&type=${type}&limit=${limit}&offset=${offset}`);
    return res.data;
  },

  getTopAlbums: async () => {
    const res = await axios.get(`/api/music/top-albums`);
    return res.data.albums || res.data.items || res.data;
  },

  getTopSongs: async () => {
    const res = await axios.get(`/api/music/top-songs`);
    // Make sure all songs have an albumId property
    return (res.data.tracks || res.data.songs || res.data.items || []).map(song => ({
      ...song,
      albumId: song.albumId || song.id
    }));
  },

  getAlbumById: async (albumId) => {
    const res = await axios.get(`/api/music/albums/${albumId}`);
    return res.data;
  }
};