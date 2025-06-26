"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSpotifyToken = void 0;
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
//# sourceMappingURL=spotifyApi.js.map