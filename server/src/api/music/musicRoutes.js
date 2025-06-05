/**
 * @fileoverview Music routes for BeatMeter Web application
 * @node
 */

// Global Node.js declarations for IntelliSense
/* global require, module */

const express = require('express');
const router = express.Router();
const { getNewReleases, searchMusic, getTopSongs, getTopAlbums, getAlbumById } = require('./musicController');

// Get new releases (for Music page default view)
router.get('/new-releases', getNewReleases);

// Search for music (for Music page search functionality)
router.get('/search', searchMusic);

// Get details for a specific album
router.get('/albums/:albumId', getAlbumById); // New route for specific album

// Get top songs (for legacy API compatibility)
router.get('/top-songs', getTopSongs);

// Get top albums (for legacy API compatibility)
router.get('/top-albums', getTopAlbums);

module.exports = router;
