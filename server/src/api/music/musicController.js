/**
 * @fileoverview Music controller for BeatMeter Web application
 * @node
 */

// Global Node.js declarations for IntelliSense
/* global require, process, Buffer, module */

const axios = require('axios');

// Get Spotify access token using client credentials
const getSpotifyToken = async () => {
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
};

// Get new releases from Spotify
const getNewReleases = async (req, res) => {
  try {
    const { limit = 20, offset = 0 } = req.query;
    const token = await getSpotifyToken();
    
    const response = await axios.get(
      `https://api.spotify.com/v1/browse/new-releases?limit=${limit}&offset=${offset}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    );
    
    res.json({
      albums: response.data.albums.items,
      total: response.data.albums.total
    });
  } catch (error) {
    console.error('Error fetching new releases:', error);
    res.status(500).json({ 
      error: 'Failed to fetch new releases',
      message: error.message 
    });
  }
};

// Search for music on Spotify
const searchMusic = async (req, res) => {
  try {
    const { q, type = 'album', limit = 20, offset = 0 } = req.query;
    
    if (!q) {
      return res.status(400).json({ error: 'Search query is required' });
    }
    
    const token = await getSpotifyToken();
    
    const response = await axios.get(
      `https://api.spotify.com/v1/search?q=${encodeURIComponent(q)}&type=${type}&limit=${limit}&offset=${offset}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    );
    
    res.json({
      albums: response.data.albums?.items || [],
      tracks: response.data.tracks?.items || [],
      artists: response.data.artists?.items || [],
      playlists: response.data.playlists?.items || []
    });
  } catch (error) {
    console.error('Error searching music:', error);
    res.status(500).json({ 
      error: 'Failed to search music',
      message: error.message 
    });
  }
};

// Get top songs (using new releases and fetching first track from each album)
const getTopSongs = async (req, res) => {
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
    }));    // Get the first track for each album to display as a song
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
          artist: firstTrack.artists.map(a => a.name).join(", "),
          albumId: song.id // Add the albumId explicitly so songs can link to their albums
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
};

// Get top albums
const getTopAlbums = async (req, res) => {
  try {
    const token = await getSpotifyToken();
    
    // Use new releases instead of a specific playlist
    const albumsRes = await axios.get(
      'https://api.spotify.com/v1/browse/new-releases?limit=30',
      { 
        headers: { 
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        } 
      }
    );

    const albums = albumsRes.data.albums.items.map(album => ({
      title: album.name,
      artist: album.artists.map(artist => artist.name).join(', '),
      img: album.images[0]?.url,
      id: album.id,
      release_date: album.release_date,
      external_urls: album.external_urls
    }));

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
};

// Get a specific album by ID
const getAlbumById = async (req, res) => {
  try {
    const { albumId } = req.params;
    const token = await getSpotifyToken();

    const response = await axios.get(
      `https://api.spotify.com/v1/albums/${albumId}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    );

    // Transform the response to match the structure expected by the frontend
    const albumDetails = {
      id: response.data.id,
      name: response.data.name,
      artistName: response.data.artists.map(artist => artist.name).join(', '),
      imageUrl: response.data.images[0]?.url,
      tracks: response.data.tracks.items.map(track => ({
        id: track.id,
        title: track.name,
        duration: millisToMinutesAndSeconds(track.duration_ms), // Convert duration
        // Add other track details if needed
      })),
      // Add other album details if needed (e.g., release date, genres)
    };

    res.json(albumDetails);
  } catch (error) {
    console.error(`Error fetching album ${req.params.albumId}:`, error);
    res.status(500).json({ 
      error: 'Failed to fetch album details',
      message: error.message 
    });
  }
};

// Helper function to convert milliseconds to mm:ss format
function millisToMinutesAndSeconds(millis) {
  const minutes = Math.floor(millis / 60000);
  const seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

module.exports = {
  getNewReleases,
  searchMusic,
  getTopSongs,
  getTopAlbums,
  getAlbumById // Export the new function
};
