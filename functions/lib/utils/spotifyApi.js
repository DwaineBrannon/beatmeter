"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAlbumsFromPlaylist = exports.TOP_ALBUMS_PLAYLIST_IDS = exports.getSpotifyToken = void 0;
const axios_1 = __importDefault(require("axios"));
/**
 * Get Spotify access token using client credentials
 * Uses either Firebase Functions config or .env for credentials
 * Throws if credentials are missing
 */
const getSpotifyToken = async () => {
    try {
        const clientId = process.env.SPOTIFY_CLIENT_ID;
        const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
        if (!clientId || !clientSecret) {
            throw new Error('Spotify credentials not configured');
        }
        const res = await axios_1.default.post('https://accounts.spotify.com/api/token', new URLSearchParams({ grant_type: 'client_credentials' }), {
            headers: {
                Authorization: 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64'),
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        return res.data.access_token;
    }
    catch (error) {
        console.error('Error getting Spotify token:', error);
        throw new Error('Failed to get Spotify access token');
    }
};
exports.getSpotifyToken = getSpotifyToken;
/**
 * === SPOTIFY PLAYLIST CONFIGURATION ===
 *
 * To change the playlists used for the Home page's Top Albums,
 * update the playlist IDs below. You can add/remove playlist IDs as needed.
 * These IDs are used in API calls to fetch album data from Spotify.
 */
exports.TOP_ALBUMS_PLAYLIST_IDS = [
    '37i9dQZF1DXcBWIGoYBM5M',
    '37i9dQZF1DXcBWIGoYBM5M',
    '37i9dQZF1DXcBWIGoYBM5M',
    '37i9dQZF1DXcBWIGoYBM5M',
    '37i9dQZF1DXcBWIGoYBM5M', // Top 50 Australia
];
/**
 * Fetch albums from a specific Spotify playlist
 * @param playlistId Spotify playlist ID
 * @param token Spotify access token
 */
const getAlbumsFromPlaylist = async (playlistId, token) => {
    const res = await axios_1.default.get(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    // Extract album info from each track
    const items = res.data.items;
    const albums = items
        .map((item) => item.track?.album)
        .filter(Boolean); // filter out null/undefined just in case
    return albums; // now an array of album objects!
};
exports.getAlbumsFromPlaylist = getAlbumsFromPlaylist;
//# sourceMappingURL=spotifyApi.js.map