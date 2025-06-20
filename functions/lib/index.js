"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserProfile = exports.api = void 0;
const https_1 = require("firebase-functions/v2/https");
const identity_1 = require("firebase-functions/v2/identity");
const admin = __importStar(require("firebase-admin"));
const functions = __importStar(require("firebase-functions"));
const axios_1 = __importDefault(require("axios"));
const dotenv = __importStar(require("dotenv"));
// Load environment variables for local development
dotenv.config();
admin.initializeApp();
/**
 * Get Spotify access token using client credentials
 */
const getSpotifyToken = async () => {
    try {
        const config = functions.config();
        const clientId = config.spotify?.client_id || process.env.SPOTIFY_CLIENT_ID;
        const clientSecret = config.spotify?.client_secret || process.env.SPOTIFY_CLIENT_SECRET;
        if (!clientId || !clientSecret) {
            throw new Error('Spotify credentials not configured');
        }
        const res = await axios_1.default.post("https://accounts.spotify.com/api/token", new URLSearchParams({
            grant_type: "client_credentials",
        }), {
            headers: {
                Authorization: "Basic " + Buffer.from(clientId + ":" + clientSecret).toString("base64"),
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });
        return res.data.access_token;
    }
    catch (error) {
        console.error("Error getting Spotify token:", error);
        throw new Error('Failed to get Spotify access token');
    }
};
/**
 * Unified API handler for all music routes
 * Handles routes like /api/music/albums/{id}, /api/music/search, etc.
 */
exports.api = (0, https_1.onRequest)({ cors: true }, async (req, res) => {
    try {
        const path = req.path;
        const method = req.method;
        console.log(`API Request: ${method} ${path}`);
        // Parse the path to determine the route
        const pathParts = path.split('/').filter(part => part !== '');
        // Handle /music/albums/{id} routes
        if (pathParts[0] === 'music' && pathParts[1] === 'albums' && pathParts[2]) {
            const albumId = pathParts[2];
            // Handle specific album by ID
            if (pathParts.length === 3) {
                const token = await getSpotifyToken();
                const response = await axios_1.default.get(`https://api.spotify.com/v1/albums/${albumId}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                // Helper function to convert milliseconds to mm:ss format
                const millisToMinutesAndSeconds = (millis) => {
                    const minutes = Math.floor(millis / 60000);
                    const seconds = ((millis % 60000) / 1000).toFixed(0);
                    return minutes + ":" + (parseInt(seconds) < 10 ? '0' : '') + seconds;
                };
                // Transform the data to include track durations in mm:ss format
                const transformedAlbum = {
                    ...response.data,
                    tracks: {
                        ...response.data.tracks,
                        items: response.data.tracks.items.map((track) => ({
                            ...track,
                            duration_formatted: millisToMinutesAndSeconds(track.duration_ms)
                        }))
                    }
                };
                res.json(transformedAlbum);
                return;
            }
            // Handle album songs/ratings routes
            if (pathParts[3] === 'songs' && pathParts[4] === 'ratings') {
                // This would be handled by your Firestore logic
                // For now, return empty array
                res.json([]);
                return;
            }
        }
        // Handle /music/search routes
        if (pathParts[0] === 'music' && pathParts[1] === 'search') {
            const query = req.query.q;
            const type = req.query.type || 'album';
            const limit = parseInt(req.query.limit) || 20;
            if (!query) {
                res.status(400).json({ error: 'Query parameter is required' });
                return;
            }
            const token = await getSpotifyToken();
            const response = await axios_1.default.get(`https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=${type}&limit=${limit}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            res.json(response.data);
            return;
        }
        // Handle /music/new-releases routes
        if (pathParts[0] === 'music' && pathParts[1] === 'new-releases') {
            const limit = parseInt(req.query.limit) || 20;
            const token = await getSpotifyToken();
            const response = await axios_1.default.get(`https://api.spotify.com/v1/browse/new-releases?limit=${limit}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            res.json(response.data);
            return;
        }
        // Handle /music/top-albums routes  
        if (pathParts[0] === 'music' && pathParts[1] === 'top-albums') {
            const limit = parseInt(req.query.limit) || 20;
            const token = await getSpotifyToken();
            const response = await axios_1.default.get(`https://api.spotify.com/v1/browse/featured-playlists?limit=${limit}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            res.json(response.data);
            return;
        }
        // If no route matches, return 404
        res.status(404).json({ error: 'Route not found' });
    }
    catch (error) {
        console.error('API Error:', error);
        res.status(500).json({
            error: 'Internal server error',
            details: error instanceof Error ? error.message : 'Unknown error'
        });
    }
});
/**
 * When a new user is created in Firebase Authentication,
 * this function automatically creates a corresponding document
 * in the userprofiles collection with the same ID.
 */
exports.createUserProfile = (0, identity_1.beforeUserCreated)(async (event) => {
    const user = event.data;
    if (!user) {
        console.error('No user data provided');
        return;
    }
    const uid = user.uid;
    const email = user.email || '';
    const displayName = user.displayName || '';
    const photoURL = user.photoURL || '';
    console.log(`Creating profile for user: ${uid}, ${displayName}`);
    // Basic profile data
    const profileData = {
        uid: uid,
        email: email,
        displayName: displayName,
        photoURL: photoURL,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        // Initialize with empty collections
        musicCollection: [],
        rateLater: [],
        followers: [],
        following: [],
        profileComplete: false
    };
    // Create user document in Firestore
    try {
        await admin.firestore()
            .collection('userprofiles')
            .doc(uid)
            .set(profileData);
        console.log(`Profile created for user: ${uid}`);
    }
    catch (error) {
        console.error(`Error creating profile for user ${uid}:`, error);
    }
});
//# sourceMappingURL=index.js.map