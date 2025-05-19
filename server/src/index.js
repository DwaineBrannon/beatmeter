const dotenv = require("dotenv");
const path = require("path");
const express = require("express");
const axios = require("axios");
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

const PORT = 3001;

// Get Spotify access token using client credentials
async function getSpotifyToken() {
    try {
        const res = await axios.post(
            "https://accounts.spotify.com/api/token",
            new URLSearchParams({
                grant_type: "client_credentials",
            }),
            {
                headers: {
                    Authorization: "Basic " + Buffer.from(
                        process.env.SPOTIFY_CLIENT_ID + ":" + process.env.SPOTIFY_CLIENT_SECRET
                    ).toString("base64"),
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );
        return res.data.access_token;
    } catch (error) {
        console.error("Error getting Spotify token:");
        if (error.response) {
            console.error("Status:", error.response.status);
            console.error("Data:", error.response.data);
        } else {
            console.error(error.message);
        }
        throw new Error("Failed to get Spotify access token");
    }
}

// Top Songs endpoint
app.get("/api/spotify/top-songs", async (req, res) => {
  try {
    const token = await getSpotifyToken();
    console.log("Got Spotify token successfully");

    // Use the new-releases endpoint
    console.log("Fetching new releases...");
    const newReleasesRes = await axios.get(
      'https://api.spotify.com/v1/browse/new-releases?limit=20',
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    );

    console.log("Successfully fetched new releases data");
    const songs = newReleasesRes.data.albums.items.map((item) => ({
      id: item.id,
      title: item.name, // This is the album name, we need to get the first track
      artist: item.artists.map((a) => a.name).join(", "),
      img: item.images[0]?.url,
    }));

    // Get the first track for each album to display as a song
    const songsWithTracks = await Promise.all(songs.map(async (song) => {
      try {
        const albumTracksRes = await axios.get(
          `https://api.spotify.com/v1/albums/${song.id}/tracks?limit=1`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          }
        );
        const firstTrack = albumTracksRes.data.items[0];
        return {
          ...song,
          title: firstTrack.name, // Use the track name instead of album name
          artist: firstTrack.artists.map(a => a.name).join(", ")
        };
      } catch (err) {
        console.error(`Error fetching tracks for album ${song.id}:`, err);
        return song;
      }
    }));

    res.json({ songs: songsWithTracks });
  } catch (err) {
    console.error("Songs error details:");
    if (err.response) {
      console.error("Status:", err.response.status);
      console.error("Headers:", JSON.stringify(err.response.headers, null, 2));
      console.error("Data:", JSON.stringify(err.response.data, null, 2));
      console.error("Request URL:", err.config?.url);
      console.error("Request Headers:", JSON.stringify(err.config?.headers, null, 2));
    } else {
      console.error("Error message:", err.message);
    }
    res.status(500).json({ 
      error: "Failed to fetch songs",
      details: err.response?.data || err.message,
      status: err.response?.status
    });
  }
});

// Top Albums
app.get("/api/spotify/top-albums", async (req, res) => {
  try {
    const token = await getSpotifyToken();
    const playlistId = "7qWT4WcLgV6UUIPde0fqf9";

    const albumsRes = await axios.get(
      `https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=30`,
      { headers: { Authorization: "Bearer " + token } }
    );

    const seenAlbums = new Set();
    const albums = [];

    for (const item of albumsRes.data.items) {
      const albumName = item.track.album.name;
      if (!seenAlbums.has(albumName)) {
        albums.push({
          title: albumName,
          artist: item.track.artists[0]?.name || "Unknown Artist",
          img: item.track.album.images[0]?.url,
        });
        seenAlbums.add(albumName);
      }
    }

    res.json({ albums });
  } catch (err) {
    console.error("Error fetching albums:");
    if (err.response) {
      console.error("Status:", err.response.status);
      console.error("Data:", err.response.data);
    } else {
      console.error(err.message);
    }
    res.status(500).json({ 
      error: "Failed to fetch albums",
      details: err.response?.data || err.message 
    });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});

//