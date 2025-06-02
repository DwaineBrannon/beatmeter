/**
 * @fileoverview Backend server for BeatMeter Web application
 * @node
 */

// Global Node.js declarations for IntelliSense
/* global require, process, __dirname */

const dotenv = require("dotenv");
const path = require("path");
const express = require("express");
const cors = require("cors");

// Load environment variables from .env in the root directory
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

// Check if Spotify credentials are set
if (!process.env.SPOTIFY_CLIENT_ID || !process.env.SPOTIFY_CLIENT_SECRET) {
  console.error("Error: Spotify credentials not found in .env file");
  console.error("Please ensure .env exists in the root directory with valid SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET");
  process.exit(1);
}

const app = express();
app.use(cors({
  origin: 'http://localhost:5173' // Frontend port
}));
app.use(express.json());

const PORT = 3001;

// Import routes
const musicRoutes = require('./api/music/musicRoutes');

// Use routes
app.use('/api/music', musicRoutes);
app.use('/api/spotify', musicRoutes); // For backward compatibility

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});

//