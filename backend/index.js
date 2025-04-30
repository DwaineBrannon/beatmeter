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
    return res.data.access_token;
}

app.get("/api/spotify/top-albums", async (req, res) => {
  try {
    const token = await getSpotifyToken();
    // Example: Get new releases (you can change this endpoint)
    const albumsRes = await axios.get(
      "https://api.spotify.com/v1/browse/new-releases?limit=30",
      { headers: { Authorization: "Bearer " + token } }
    );
    const albums = albumsRes.data.albums.items.map((item) => ({
      title: item.name,
      artist: item.artists.map((a) => a.name).join(", "),
      img: item.images[0]?.url,
    }));
    res.json({ albums });
  } catch (err) {
    console.error("Albums error:", err.response?.data || err.message || err);
    res.status(500).json({ error: "Failed to fetch albums" });
  }
});

app.get("/api/spotify/top-songs", async (req, res) => {
  try {
    const token = await getSpotifyToken();

    // Using Global Top 50 playlist
    const playlistId = "37i9dQZEVXbMDoHDwVN2tF";
    
    // Log the URL we're hitting (for debugging)
    console.log("Fetching playlist:", `https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=10`);
    
    const tracksRes = await axios.get(
      `https://api.spotify.com/v1/playlists/${playlistId}/tracks?limit=10`,
      { headers: { Authorization: "Bearer " + token } }
    );
    
    // Log the response data (for debugging)
    console.log("Spotify response:", tracksRes.data);

    const songs = tracksRes.data.items.map((item) => ({
      title: item.track.name,
      artist: item.track.artists.map((a) => a.name).join(", "),
      img: item.track.album.images[0]?.url,
    }));
    res.json({ songs });
  } catch (err) {
    // More detailed error logging
    console.error("Songs error:", {
      status: err.response?.status,
      data: err.response?.data,
      message: err.message
    });
    res.status(500).json({ error: "Failed to fetch songs" });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});