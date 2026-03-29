import { onRequest } from 'firebase-functions/v2/https';
import * as admin from 'firebase-admin';
import axios from 'axios';
import {
  searchReleaseGroups,
  getReleaseGroupById,
  getNewReleases,
  searchRecordings,
} from './utils/musicbrainzApi';
import { millisToMinutesAndSeconds } from './utils/common';

export const api = onRequest({ cors: true }, async (req, res) => {
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
        try {
          // 1. Check Cache (Firestore)
          const db = admin.firestore();
          const albumRef = db.collection('albums').doc(albumId);
          const albumDoc = await albumRef.get();

          if (albumDoc.exists) {
            const data = albumDoc.data();
            // Check if it has the detailed data we need (specifically tracks)
            // If it was created by a simple "rate" action, it might miss the tracklist.
            if (
              data &&
              data.tracks &&
              Array.isArray(data.tracks) &&
              data.tracks.length > 0
            ) {
              console.log(`Serving album ${albumId} from cache`);
              res.json(data);
              return;
            }
          }

          // 2. Fetch from API if not in cache or incomplete
          console.log(`Fetching album ${albumId} from MusicBrainz`);
          const album = await getReleaseGroupById(albumId);

          // Transform the data to flatten tracks structure and include track durations in mm:ss format
          const transformedAlbum = {
            ...album,
            // Standardize fields for our database
            id: albumId,
            mbid: albumId,
            name: album.title,
            artist: album.artists?.[0]?.name || 'Unknown Artist',
            releaseDate: album['first-release-date'],

            // Extract the best quality image URL (usually the first/largest one)
            imageUrl: album.images?.[0]?.url || null,
            albumArt: album.images?.[0]?.url || null, // Duplicate for compatibility

            // Also keep artist name easily accessible
            artistName: album.artists?.[0]?.name || 'Unknown Artist',

            tracks: album.tracks.items.map((track: any) => ({
              ...track,
              duration_formatted: millisToMinutesAndSeconds(track.duration_ms),
            })),

            trackCount: album.tracks.items.length,
            lastFetchedAt: admin.firestore.FieldValue.serverTimestamp(),
          };

          // 3. Save to Cache (Firestore)
          // We use set with merge: true to avoid overwriting existing ratings/stats if any
          await albumRef.set(transformedAlbum, { merge: true });

          res.json(transformedAlbum);
        } catch (error) {
          console.error(`Error handling album ${albumId}:`, error);
          res.status(500).json({ error: 'Failed to fetch album details' });
        }
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

      if (type === 'track') {
        const tracks = await searchRecordings(query, limit);
        res.json({ tracks: { items: tracks } });
      } else {
        // Default to album search
        const results = await searchReleaseGroups(query, limit);
        res.json(results);
      }
      return;
    }

    // Handle /music/new-releases routes
    if (pathParts[0] === 'music' && pathParts[1] === 'new-releases') {
      const limit = parseInt(req.query.limit as string) || 20;

      const results = await getNewReleases(limit);
      res.json(results);
      return;
    }

    // Handle /music/top-songs routes (uses search API for popular tracks)
    if (pathParts[0] === 'music' && pathParts[1] === 'top-songs') {
      const limit = parseInt(req.query.limit as string) || 20;

      try {
        // Use search API to get popular tracks (mocked by searching for recent tracks)
        const currentYear = new Date().getFullYear();
        const tracks = await searchRecordings(`date:${currentYear}`, limit);

        console.log(`Returning ${tracks.length} tracks from search`);
        res.json(tracks);
      } catch (err: any) {
        console.error('MusicBrainz API error:', err);
        res.status(500).json({
          error: 'Failed to fetch top songs',
          details: err.message,
        });
      }
      return;
    }
    // Update /music/top-albums to use new releases as a proxy for top albums
    if (pathParts[0] === 'music' && pathParts[1] === 'top-albums') {
      const limit = parseInt(req.query.limit as string) || 20;

      const results = await getNewReleases(limit);

      // Return just the albums array with imageUrl and artistName added for consistency
      const albums = (results.albums?.items || []).map((album: any) => ({
        ...album,
        imageUrl: album.images?.[0]?.url || null,
        artistName: album.artists?.[0]?.name || 'Unknown Artist',
      }));
      console.log(`Returning ${albums.length} albums`);
      res.json(albums);
      return;
    }

    // --- USER COLLECTION ROUTES ---
    if (
      pathParts[0] === 'users' &&
      pathParts[1] === 'me' &&
      pathParts[2] === 'collection'
    ) {
      const authHeader = req.headers.authorization || '';
      const match = authHeader.match(/^Bearer (.*)$/);
      if (!match) {
        res
          .status(401)
          .json({ error: 'Missing or invalid Authorization header' });
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
      const userDocRef = admin.firestore().collection('userprofiles').doc(uid);

      if (method === 'GET' && pathParts.length === 3) {
        const doc = await userDocRef.get();
        const data = doc.exists ? doc.data() : null;
        res.json(data?.musicCollection || []);
        return;
      }
      if (method === 'POST' && pathParts.length === 3) {
        const incoming = req.body || {};
        // Normalize payload to consistent schema expected by client profile UI
        const normalized = {
          albumId: incoming.albumId || incoming.id || null,
          title: incoming.title || incoming.name || '',
          artist: incoming.artist || incoming.artistName || '',
          cover: incoming.cover || incoming.imageUrl || '',
          rating: typeof incoming.rating === 'number' ? incoming.rating : null,
          songRatings: incoming.songRatings || null,
          addedAt: admin.firestore.FieldValue.serverTimestamp(),
        };

        const docSnap = await userDocRef.get();
        const current =
          (docSnap.exists && docSnap.data()?.musicCollection) || [];
        const idx = current.findIndex(
          (it: any) => it.albumId === normalized.albumId
        );

        if (idx >= 0) {
          // Update existing entry (avoid duplicates)
          const updated = current.map((it: any, i: number) =>
            i === idx
              ? {
                  ...it,
                  title: normalized.title || it.title,
                  artist: normalized.artist || it.artist,
                  cover: normalized.cover || it.cover,
                  // Only update rating/songRatings if provided
                  ...(normalized.rating !== null
                    ? { rating: normalized.rating }
                    : {}),
                  ...(normalized.songRatings
                    ? { songRatings: normalized.songRatings }
                    : {}),
                  // Keep original addedAt if present
                }
              : it
          );
          await userDocRef.update({ musicCollection: updated });
        } else {
          await userDocRef.update({
            musicCollection: admin.firestore.FieldValue.arrayUnion(normalized),
          });
        }
        res.json({ success: true });
        return;
      }
      if (
        method === 'PUT' &&
        pathParts.length === 5 &&
        pathParts[4] === 'rating'
      ) {
        const itemId = pathParts[3];
        const { rating } = req.body;
        const doc = await userDocRef.get();
        if (!doc.exists) {
          res.status(404).json({ error: 'User collection not found' });
          return;
        }
        const collection = doc.data()?.musicCollection || [];
        const updated = collection.map((item: any) =>
          item.albumId === itemId ? { ...item, rating } : item
        );
        await userDocRef.update({ musicCollection: updated });
        res.json({ success: true });
        return;
      }
      if (method === 'DELETE' && pathParts.length === 4) {
        const itemId = pathParts[3];
        const doc = await userDocRef.get();
        if (!doc.exists) {
          res.status(404).json({ error: 'User collection not found' });
          return;
        }
        const collection = doc.data()?.musicCollection || [];
        const updated = collection.filter(
          (item: any) => item.albumId !== itemId
        );
        await userDocRef.update({ musicCollection: updated });
        res.json({ success: true });
        return;
      }
      res.status(404).json({ error: 'Route not found' });
      return;
    }

    // Handle /users/me/ratelater CRUD routes (requires Firebase Auth)
    if (
      pathParts[0] === 'users' &&
      pathParts[1] === 'me' &&
      pathParts[2] === 'ratelater'
    ) {
      const authHeader = req.headers.authorization || '';
      const match = authHeader.match(/^Bearer (.*)$/);
      if (!match) {
        res
          .status(401)
          .json({ error: 'Missing or invalid Authorization header' });
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
          rateLater: admin.firestore.FieldValue.arrayUnion(albumData),
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
        const updated = rateLater.filter(
          (item: any) => item.albumId !== itemId
        );
        await userDoc.update({ rateLater: updated });
        res.json({ success: true });
        return;
      }
      res.status(404).json({ error: 'Route not found' });
      return;
    }

    // Handle /music/albums/:albumId/songs/ratings (PUT, update song ratings for album in user collection)
    if (
      pathParts[0] === 'music' &&
      pathParts[1] === 'albums' &&
      pathParts[2] &&
      pathParts[3] === 'songs' &&
      pathParts[4] === 'ratings' &&
      method === 'PUT'
    ) {
      const authHeader = req.headers.authorization || '';
      const match = authHeader.match(/^Bearer (.*)$/);
      if (!match) {
        res
          .status(401)
          .json({ error: 'Missing or invalid Authorization header' });
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

    // Handle /admin/featured-playlists routes (admin only)
    if (pathParts[0] === 'admin' && pathParts[1] === 'featured-playlists') {
      // Verify admin authentication
      const authHeader = req.headers.authorization || '';
      const match = authHeader.match(/^Bearer (.*)$/);
      if (!match) {
        res
          .status(401)
          .json({ error: 'Missing or invalid Authorization header' });
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

      // Check if user is admin
      const uid = decoded.uid;
      const userDoc = await admin
        .firestore()
        .collection('userprofiles')
        .doc(uid)
        .get();
      if (!userDoc.exists || userDoc.data()?.userRole !== 'admin') {
        res.status(403).json({ error: 'Admin access required' });
        return;
      }

      // Handle GET - Get all featured playlists
      if (method === 'GET' && pathParts.length === 2) {
        const playlistsSnapshot = await admin
          .firestore()
          .collection('featuredPlaylists')
          .get();
        const playlists = playlistsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        res.json(playlists);
        return;
      }

      // Handle POST - Add featured playlist
      if (method === 'POST' && pathParts.length === 2) {
        const playlistData = req.body;
        if (!playlistData.id) {
          res.status(400).json({ error: 'Playlist ID is required' });
          return;
        }

        const docRef = admin
          .firestore()
          .collection('featuredPlaylists')
          .doc(playlistData.id);
        await docRef.set({
          ...playlistData,
          updatedAt: admin.firestore.FieldValue.serverTimestamp(),
          createdAt: admin.firestore.FieldValue.serverTimestamp(),
        });

        res.json({ success: true, id: playlistData.id });
        return;
      }

      // Handle PUT - Update featured playlist
      if (method === 'PUT' && pathParts.length === 3) {
        const playlistId = pathParts[2];
        const updates = req.body;

        const docRef = admin
          .firestore()
          .collection('featuredPlaylists')
          .doc(playlistId);
        await docRef.update({
          ...updates,
          updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        });

        res.json({ success: true });
        return;
      }

      // Handle DELETE - Remove featured playlist
      if (method === 'DELETE' && pathParts.length === 3) {
        const playlistId = pathParts[2];

        const docRef = admin
          .firestore()
          .collection('featuredPlaylists')
          .doc(playlistId);
        await docRef.delete();

        res.json({ success: true });
        return;
      }
    }

    // Handle /featured-playlists routes (public, read-only)
    if (pathParts[0] === 'featured-playlists') {
      if (method === 'GET' && pathParts.length === 1) {
        const playlistsSnapshot = await admin
          .firestore()
          .collection('featuredPlaylists')
          .where('isActive', '==', true)
          .get();

        const playlists = playlistsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        res.json(playlists);
        return;
      }
    }

    // If no route matches, return 404
    res.status(404).json({ error: 'Route not found' });
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error',
    });
  }
});
