import axios from 'axios';

/**
 * Get Spotify access token using client credentials
 * Uses either Firebase Functions config or .env for credentials
 * Throws if credentials are missing
 */
export const getSpotifyToken = async (): Promise<string> => {
  try {
    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
    if (!clientId || !clientSecret) {
      throw new Error('Spotify credentials not configured');
    }
    const res = await axios.post(
      'https://accounts.spotify.com/api/token',
      new URLSearchParams({ grant_type: 'client_credentials' }),
      {
        headers: {
          Authorization: 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64'),
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
    return res.data.access_token;
  } catch (error) {
    console.error('Error getting Spotify token:', error);
    throw new Error('Failed to get Spotify access token');
  }
};

/**
 * === SPOTIFY PLAYLIST CONFIGURATION ===
 *
 * To change the playlists used for the Home page's Top Albums,
 * update the playlist IDs below. You can add/remove playlist IDs as needed.
 * These IDs are used in API calls to fetch album data from Spotify.
 */
export const TOP_ALBUMS_PLAYLIST_IDS = [
  '37i9dQZF1DXcBWIGoYBM5M', // Top 50 Global
  '37i9dQZF1DXcBWIGoYBM5M', // Top 50 US
  '37i9dQZF1DXcBWIGoYBM5M', // Top 50 UK
  '37i9dQZF1DXcBWIGoYBM5M', // Top 50 Canada
  '37i9dQZF1DXcBWIGoYBM5M', // Top 50 Australia
];

/**
 * Fetch albums from a specific Spotify playlist
 * @param playlistId Spotify playlist ID
 * @param token Spotify access token
 */
export const getAlbumsFromPlaylist = async (playlistId: string, token: string) => {
  const res = await axios.get(
    `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  // You can process res.data.items to extract album info as needed
  return res.data;
};
