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
exports.api = void 0;
const https_1 = require("firebase-functions/v2/https");
const admin = __importStar(require("firebase-admin"));
const axios_1 = __importDefault(require("axios"));
const spotifyApi_1 = require("./utils/spotifyApi");
const common_1 = require("./utils/common");
exports.api = (0, https_1.onRequest)({ cors: true, secrets: ["SPOTIFY_CLIENT_ID", "SPOTIFY_CLIENT_SECRET"] }, async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
        res.status(204).send('');
        return;
    }
    try {
        const path = req.path;
        const method = req.method;
        console.log(`API Request: ${method} ${path}`);
        // Parse the path to determine the route
        const pathParts = path.split('/').filter(part => part !== '');
        // --- MUSIC ROUTES ---
        // Handle /music/albums/{id} routes
        if (pathParts[0] === 'music' && pathParts[1] === 'albums' && pathParts[2]) {
            const albumId = pathParts[2];
            // Handle specific album by ID
            if (pathParts.length === 3) {
                const token = await (0, spotifyApi_1.getSpotifyToken)();
                const response = await axios_1.default.get(`https://api.spotify.com/v1/albums/${albumId}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                // Transform the data to include track durations in mm:ss format
                const transformedAlbum = {
                    ...response.data,
                    tracks: {
                        ...response.data.tracks,
                        items: response.data.tracks.items.map((track) => ({
                            ...track,
                            duration_formatted: (0, common_1.millisToMinutesAndSeconds)(track.duration_ms)
                        }))
                    }
                };
                res.json(transformedAlbum);
                return;
            }
            // Handle album songs/ratings routes (stubbed for now)
            if (pathParts[3] === 'songs' && pathParts[4] === 'ratings') {
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
            const token = await (0, spotifyApi_1.getSpotifyToken)();
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
            const token = await (0, spotifyApi_1.getSpotifyToken)();
            const response = await axios_1.default.get(`https://api.spotify.com/v1/browse/new-releases?limit=${limit}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            res.json(response.data);
            return;
        }
        // Handle /music/top-songs routes (uses Spotify Top 50 playlist)
        if (pathParts[0] === 'music' && pathParts[1] === 'top-songs') {
            const country = req.query.country || 'US';
            const limit = parseInt(req.query.limit) || 20;
            const token = await (0, spotifyApi_1.getSpotifyToken)();
            const playlistId = country === 'US' ? '37i9dQZEVXbLRQDuF5jeBp' : '37i9dQZEVXbMDoHDwVN2tF';
            const response = await axios_1.default.get(`https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=${limit}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            res.json({ tracks: response.data.items });
            return;
        }
        // Update /music/top-albums to use new releases as a proxy for top albums
        if (pathParts[0] === 'music' && pathParts[1] === 'top-albums') {
            const limit = parseInt(req.query.limit) || 20;
            const token = await (0, spotifyApi_1.getSpotifyToken)();
            const response = await axios_1.default.get(`https://api.spotify.com/v1/browse/new-releases?limit=${limit}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            res.json(response.data);
            return;
        }
        // --- USER COLLECTION ROUTES ---
        if (pathParts[0] === 'users' && pathParts[1] === 'me' && pathParts[2] === 'collection') {
            const authHeader = req.headers.authorization || '';
            const match = authHeader.match(/^Bearer (.*)$/);
            if (!match) {
                res.status(401).json({ error: 'Missing or invalid Authorization header' });
                return;
            }
            const idToken = match[1];
            let decoded;
            try {
                decoded = await admin.auth().verifyIdToken(idToken);
            }
            catch (err) {
                res.status(401).json({ error: 'Invalid or expired token' });
                return;
            }
            const uid = decoded.uid;
            const userDoc = admin.firestore().collection('userprofiles').doc(uid);
            if (method === 'GET' && pathParts.length === 3) {
                const doc = await userDoc.get();
                const data = doc.exists ? doc.data() : null;
                res.json(data?.musicCollection || []);
                return;
            }
            if (method === 'POST' && pathParts.length === 3) {
                const albumData = req.body;
                await userDoc.update({
                    musicCollection: admin.firestore.FieldValue.arrayUnion(albumData)
                });
                res.json({ success: true });
                return;
            }
            if (method === 'PUT' && pathParts.length === 5 && pathParts[4] === 'rating') {
                const itemId = pathParts[3];
                const { rating } = req.body;
                const doc = await userDoc.get();
                if (!doc.exists) {
                    res.status(404).json({ error: 'User collection not found' });
                    return;
                }
                const collection = doc.data()?.musicCollection || [];
                const updated = collection.map((item) => item.albumId === itemId ? { ...item, rating } : item);
                await userDoc.update({ musicCollection: updated });
                res.json({ success: true });
                return;
            }
            if (method === 'DELETE' && pathParts.length === 4) {
                const itemId = pathParts[3];
                const doc = await userDoc.get();
                if (!doc.exists) {
                    res.status(404).json({ error: 'User collection not found' });
                    return;
                }
                const collection = doc.data()?.musicCollection || [];
                const updated = collection.filter((item) => item.albumId !== itemId);
                await userDoc.update({ musicCollection: updated });
                res.json({ success: true });
                return;
            }
            res.status(404).json({ error: 'Route not found' });
            return;
        }
        // Handle /users/me/ratelater CRUD routes (requires Firebase Auth)
        if (pathParts[0] === 'users' && pathParts[1] === 'me' && pathParts[2] === 'ratelater') {
            const authHeader = req.headers.authorization || '';
            const match = authHeader.match(/^Bearer (.*)$/);
            if (!match) {
                res.status(401).json({ error: 'Missing or invalid Authorization header' });
                return;
            }
            const idToken = match[1];
            let decoded;
            try {
                decoded = await admin.auth().verifyIdToken(idToken);
            }
            catch (err) {
                res.status(401).json({ error: 'Invalid or expired token' });
                return;
            }
            const uid = decoded.uid;
            const userDoc = admin.firestore().collection('userprofiles').doc(uid);
            if (method === 'POST' && pathParts.length === 3) {
                const albumData = req.body;
                await userDoc.update({
                    rateLater: admin.firestore.FieldValue.arrayUnion(albumData)
                });
                res.json({ success: true });
                return;
            }
            if (method === 'GET' && pathParts.length === 3) {
                const doc = await userDoc.get();
                const data = doc.exists ? doc.data() : null;
                res.json(data?.rateLater || []);
                return;
            }
            if (method === 'DELETE' && pathParts.length === 4) {
                const itemId = pathParts[3];
                const doc = await userDoc.get();
                if (!doc.exists) {
                    res.status(404).json({ error: 'User rateLater not found' });
                    return;
                }
                const rateLater = doc.data()?.rateLater || [];
                const updated = rateLater.filter((item) => item.albumId !== itemId);
                await userDoc.update({ rateLater: updated });
                res.json({ success: true });
                return;
            }
            res.status(404).json({ error: 'Route not found' });
            return;
        }
        // Handle /music/albums/:albumId/songs/ratings (PUT, update song ratings for album in user collection)
        if (pathParts[0] === 'music' && pathParts[1] === 'albums' && pathParts[2] && pathParts[3] === 'songs' && pathParts[4] === 'ratings' && method === 'PUT') {
            const authHeader = req.headers.authorization || '';
            const match = authHeader.match(/^Bearer (.*)$/);
            if (!match) {
                res.status(401).json({ error: 'Missing or invalid Authorization header' });
                return;
            }
            const idToken = match[1];
            let decoded;
            try {
                decoded = await admin.auth().verifyIdToken(idToken);
            }
            catch (err) {
                res.status(401).json({ error: 'Invalid or expired token' });
                return;
            }
            const uid = decoded.uid;
            const userDoc = admin.firestore().collection('userprofiles').doc(uid);
            const albumId = pathParts[2];
            const { songRatings } = req.body;
            const doc = await userDoc.get();
            if (!doc.exists) {
                res.status(404).json({ error: 'User collection not found' });
                return;
            }
            const collection = doc.data()?.musicCollection || [];
            const updated = collection.map((item) => item.albumId === albumId ? { ...item, songRatings } : item);
            await userDoc.update({ musicCollection: updated });
            res.json({ success: true });
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
//# sourceMappingURL=api.js.map