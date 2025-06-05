import axios from 'axios';

// Using relative URLs for API endpoints
const API_BASE = '/api/music';
export const spotifyApi = {
  getTopAlbums: async () => {
    const res = await axios.get(`${API_BASE}/top-albums`);
    return res.data.albums;
  },
  getTopSongs: async () => {
    const res = await axios.get(`${API_BASE}/top-songs`);
    // Make sure all songs have an albumId property
    return res.data.songs.map(song => ({
      ...song,
      albumId: song.albumId || song.id // Use song.id as albumId if albumId is not already set
    }));
  }
};