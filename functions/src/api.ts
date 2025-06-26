import { onRequest } from 'firebase-functions/v2/https';
import * as admin from 'firebase-admin';
import axios from 'axios';
import { getSpotifyToken } from './utils/spotifyApi';
import { millisToMinutesAndSeconds } from './utils/common';


export const api = onRequest({ cors: true, secrets: ["SPOTIFY_CLIENT_ID", "SPOTIFY_CLIENT_SECRET"] }, async (req, res) => {
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
        const token = await getSpotifyToken();
        const response = await axios.get(
          `https://api.spotify.com/v1/albums/${albumId}`,
          {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          }
        );

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
    
    // Handle /music/top-songs routes (uses provided playlist for debugging)
    if (pathParts[0] === 'music' && pathParts[1] === 'top-songs') {
      const limit = parseInt(req.query.limit as string) || 20;
      const token = await getSpotifyToken();
      // Use the playlist ID you provided
      const playlistId = '37i9dQZF1DX4zbZrYRGVam';
      try {
        const response = await axios.get(
          `https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=${limit}`,
          {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          }
        );
        res.json({ tracks: response.data.items });
      } catch (err: any) {
        // Log the full error object for debugging (stringify data for clarity)
        console.error('Spotify API error:', {
          message: err.message,
          status: err?.response?.status,
          headers: err?.response?.headers,
          data: JSON.stringify(err?.response?.data, null, 2)
        });
        res.status(500).json({
          error: 'Failed to fetch playlist from Spotify',
          details: {
            message: err.message,
            status: err?.response?.status,
            headers: err?.response?.headers,
            data: err?.response?.data
          }
        });
      }
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
      } catch (err) {
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
      } catch (err) {
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
        const updated = rateLater.filter((item: any) => item.albumId !== itemId);
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
