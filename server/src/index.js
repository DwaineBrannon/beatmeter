const dotenv = require("dotenv");
const express = require("express");
const axios = require("axios");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(cors());

const PORT = 3001;

// spotify API credentials
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
                        (process.env.SPOTIFY_CLIENT_ID || "your_client_id") + ":" + (process.env.SPOTIFY_CLIENT_SECRET || "your_client_secret")
                    ).toString("base64"),
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );
        console.log("Token Response:", res.data); // Add this line
        return res.data.access_token;
    } catch (error) {
        console.error("Error getting token:", error.response ? error.response.data : error.message);
        throw error; // Re-throw the error to be caught in the main function
    }
}

// Top Albums
app.get("/api/spotify/top-albums", async (req, res) => {
  try {
    const token = await getSpotifyToken();
    // Extract playlist ID from the full URI
    const playlistId = "7qWT4WcLgV6UUIPde0fqf9"; // Remove spotify:playlist: prefix

    const albumsRes = await axios.get(
      `https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=30`,
      { headers: { Authorization: "Bearer " + token } }
    );

    const seenAlbums = new Set(); // To keep track of seen album names
    const albums = [];

    for (const item of albumsRes.data.items) {
      const albumName = item.track.album.name;
      if (!seenAlbums.has(albumName)) {
        albums.push({
          title: albumName,
          artist: item.track.artists[0]?.name || "Unknown Artist", // Show only the first artist
          img: item.track.album.images[0]?.url,
        });
        seenAlbums.add(albumName); // Add album name to the set
      }
    }

    res.json({ albums });
  } catch (err) {
    console.error("Albums error:", err.response?.data || err.message || err);
    res.status(500).json({ error: "Failed to fetch albums" });
  }
});

app.get("/api/spotify/top-songs", async (req, res) => {
  try {
    const token = await getSpotifyToken();

    // Use the /browse/featured-playlists endpoint to get a list of featured playlists
    const featuredPlaylistsRes = await axios.get(
      `https://api.spotify.com/v1/browse/featured-playlists?limit=1`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    );

    // Extract the playlist ID from the featured playlists response
    const playlistId = featuredPlaylistsRes.data.playlists.items[0].id;

    // Use the /playlists/{playlist_id} endpoint to get the details of the playlist
    const playlistRes = await axios.get(
      `https://api.spotify.com/v1/playlists/${playlistId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const songs = playlistRes.data.tracks.items.map((item) => ({
      title: item.track.name,
      artist: item.track.artists.map((a) => a.name).join(", "),
      img: item.track.album.images[0]?.url,
    }));
    res.json({ songs });
  } catch (err) {
    console.error("Songs error:", err);
    res.status(500).json({ error: "Failed to fetch songs" });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});

//