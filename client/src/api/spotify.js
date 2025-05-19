import axios from 'axios';

const API_URL = 'http://localhost:3001/api/spotify';

export const spotifyApi = {
  getTopAlbums: async () => {
    const res = await axios.get(`${API_URL}/top-albums`);
    return res.data.albums;
  },

  getTopSongs: async () => {
    const res = await axios.get(`${API_URL}/top-songs`);
    return res.data.songs;
  }
}; 