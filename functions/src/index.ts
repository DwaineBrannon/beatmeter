import { onRequest } from 'firebase-functions/v2/https';
import { beforeUserCreated } from 'firebase-functions/v2/identity';
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import axios from 'axios';
import * as dotenv from 'dotenv';

// Load environment variables for local development
dotenv.config();

admin.initializeApp();

/**
 * Get Spotify access token using client credentials
 */
const getSpotifyToken = async (): Promise<string> => {
  try {
    const config = functions.config();
    const clientId = config.spotify?.client_id || process.env.SPOTIFY_CLIENT_ID;
    const clientSecret = config.spotify?.client_secret || process.env.SPOTIFY_CLIENT_SECRET;
    
    if (!clientId || !clientSecret) {
      throw new Error('Spotify credentials not configured');
    }
    
    const res = await axios.post(
      "https://accounts.spotify.com/api/token",
      new URLSearchParams({
        grant_type: "client_credentials",
      }),
      {
        headers: {
          Authorization: "Basic " + Buffer.from(
            clientId + ":" + clientSecret
          ).toString("base64"),
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return res.data.access_token;
  } catch (error) {
    console.error("Error getting Spotify token:", error);
    throw new Error('Failed to get Spotify access token');
  }
};

/**
 * Unified API handler for all music routes
 * Handles routes like /api/music/albums/{id}, /api/music/search, etc.
 */
export const api = onRequest({ cors: true }, async (req, res) => {
  // Add manual CORS headers for emulator reliability
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle preflight OPTIONS request
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
    
    // Handle /music/albums/{id} routes
    if (pathParts[0] === 'music' && pathParts[1] === 'albums' && pathParts[2]) {
      const albumId = pathParts[2];
      
      // Handle specific album by ID
      if (pathParts.length === 3) {
        const token = await getSpotifyToken();
        const response = await axios.get(
          `https://api.spotify.com/v1/albums/${albumId}`,
          {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          }
        );

        // Helper function to convert milliseconds to mm:ss format
        const millisToMinutesAndSeconds = (millis: number): string => {
          const minutes = Math.floor(millis / 60000);
          const seconds = ((millis % 60000) / 1000).toFixed(0);
          return minutes + ":" + (parseInt(seconds) < 10 ? '0' : '') + seconds;
        };

        // Transform the data to include track durations in mm:ss format
        const transformedAlbum = {
          ...response.data,
          tracks: {
            ...response.data.tracks,
            items: response.data.tracks.items.map((track: any) => ({
              ...track,
              duration_formatted: millisToMinutesAndSeconds(track.duration_ms)
            }))
          }
        };        res.json(transformedAlbum);
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
      const query = req.query.q as string;
      const type = (req.query.type as string) || 'album';
      const limit = parseInt(req.query.limit as string) || 20;
      
      if (!query) {
        res.status(400).json({ error: 'Query parameter is required' });
        return;
      }
      
      const token = await getSpotifyToken();
      const response = await axios.get(
        `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=${type}&limit=${limit}`,
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      );
      
      res.json(response.data);
      return;
    }
    
    // Handle /music/new-releases routes
    if (pathParts[0] === 'music' && pathParts[1] === 'new-releases') {
      const limit = parseInt(req.query.limit as string) || 20;
      
      const token = await getSpotifyToken();
      const response = await axios.get(
        `https://api.spotify.com/v1/browse/new-releases?limit=${limit}`,
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      );
      
      res.json(response.data);
      return;
    }
    
    // Handle /music/top-songs routes
    if (pathParts[0] === 'music' && pathParts[1] === 'top-songs') {
      const country = (req.query.country as string) || 'US';
      const limit = parseInt(req.query.limit as string) || 20;
      const token = await getSpotifyToken();
      // Use Spotify's top tracks playlist for the US (or specified country)
      // The playlist ID for US Top 50: 37i9dQZEVXbLRQDuF5jeBp
      // For other countries, you may need to map country codes to playlist IDs
      const playlistId = country === 'US' ? '37i9dQZEVXbLRQDuF5jeBp' : '37i9dQZEVXbMDoHDwVN2tF';
      const response = await axios.get(
        `https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=${limit}`,
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      );
      res.json({ tracks: response.data.items });
      return;
    }
    // Update /music/top-albums to use new releases as a proxy for top albums
    if (pathParts[0] === 'music' && pathParts[1] === 'top-albums') {
      const limit = parseInt(req.query.limit as string) || 20;
      const token = await getSpotifyToken();
      const response = await axios.get(
        `https://api.spotify.com/v1/browse/new-releases?limit=${limit}`,
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      );
      res.json(response.data);
      return;
    }
    
    // Handle /users/me/collection CRUD routes
    if (pathParts[0] === 'users' && pathParts[1] === 'me' && pathParts[2] === 'collection') {
      // Require Authorization header with Bearer token
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
      } catch (err) {
        res.status(401).json({ error: 'Invalid or expired token' });
        return;
      }
      const uid = decoded.uid;
      const userDoc = admin.firestore().collection('userprofiles').doc(uid);

      // GET /api/users/me/collection
      if (method === 'GET' && pathParts.length === 3) {
        const doc = await userDoc.get();
        const data = doc.exists ? doc.data() : null;
        res.json(data?.musicCollection || []);
        return;
      }
      // POST /api/users/me/collection
      if (method === 'POST' && pathParts.length === 3) {
        const albumData = req.body;
        await userDoc.update({
          musicCollection: admin.firestore.FieldValue.arrayUnion(albumData)
        });
        res.json({ success: true });
        return;
      }
      // PUT /api/users/me/collection/:itemId/rating
      if (method === 'PUT' && pathParts.length === 5 && pathParts[4] === 'rating') {
        const itemId = pathParts[3];
        const { rating } = req.body;
        const doc = await userDoc.get();
        if (!doc.exists) {
          res.status(404).json({ error: 'User collection not found' });
          return;
        }
        const collection = doc.data()?.musicCollection || [];
        const updated = collection.map((item: any) =>
          item.albumId === itemId ? { ...item, rating } : item
        );
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
        const updated = collection.filter((item: any) => item.albumId !== itemId);
        await userDoc.update({ musicCollection: updated });
        res.json({ success: true });
        return;
      }
      res.status(404).json({ error: 'Route not found' });
      return;
    }
    
    // Handle /users/me/ratelater CRUD routes
    if (pathParts[0] === 'users' && pathParts[1] === 'me' && pathParts[2] === 'ratelater') {
      // Require Authorization header with Bearer token
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
      } catch (err) {
        res.status(401).json({ error: 'Invalid or expired token' });
        return;
      }
      const uid = decoded.uid;
      const userDoc = admin.firestore().collection('userprofiles').doc(uid);

      // POST /api/users/me/ratelater
      if (method === 'POST' && pathParts.length === 3) {
        const albumData = req.body;
        await userDoc.update({
          rateLater: admin.firestore.FieldValue.arrayUnion(albumData)
        });
        res.json({ success: true });
        return;
      }
      // GET /api/users/me/ratelater
      if (method === 'GET' && pathParts.length === 3) {
        const doc = await userDoc.get();
        const data = doc.exists ? doc.data() : null;
        res.json(data?.rateLater || []);
        return;
      }
      // DELETE /api/users/me/ratelater/:itemId
      if (method === 'DELETE' && pathParts.length === 4) {
        const itemId = pathParts[3];
        const doc = await userDoc.get();
        if (!doc.exists) {
          res.status(404).json({ error: 'User rateLater not found' });
          return;
        }
        const rateLater = doc.data()?.rateLater || [];
        const updated = rateLater.filter((item: any) => item.albumId !== itemId);
        await userDoc.update({ rateLater: updated });
        res.json({ success: true });
        return;
      }
      res.status(404).json({ error: 'Route not found' });
      return;
    }

    // Handle /music/albums/:albumId/songs/ratings (PUT)
    if (pathParts[0] === 'music' && pathParts[1] === 'albums' && pathParts[2] && pathParts[3] === 'songs' && pathParts[4] === 'ratings' && method === 'PUT') {
      // Require Authorization header with Bearer token
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
      } catch (err) {
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
      const updated = collection.map((item: any) =>
        item.albumId === albumId ? { ...item, songRatings } : item
      );
      await userDoc.update({ musicCollection: updated });
      res.json({ success: true });
      return;
    }
    
    // If no route matches, return 404
    res.status(404).json({ error: 'Route not found' });
    
  } catch (error) {
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
export const createUserProfile = beforeUserCreated(async (event) => {
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
  } catch (error) {
    console.error(`Error creating profile for user ${uid}:`, error);
  }
});
