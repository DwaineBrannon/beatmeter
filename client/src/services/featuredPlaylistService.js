import { getFeaturedPlaylists, setFeaturedPlaylist, updateFeaturedPlaylist, removeFeaturedPlaylist, getPublicFeaturedPlaylists as getPublicPlaylistsFromAPI } from './database/featuredPlaylistService';

/**
 * High-level service for managing featured playlists
 * Handles business logic and playlist data parsing
 */

/**
 * Parse Spotify playlist URL to extract playlist ID
 */
const parseSpotifyPlaylistUrl = (url) => {
  const patterns = [
    /spotify:playlist:([a-zA-Z0-9]+)/,
    /open\.spotify\.com\/playlist\/([a-zA-Z0-9]+)/,
    /^([a-zA-Z0-9]+)$/ // Direct playlist ID
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) {
      return match[1];
    }
  }
  
  throw new Error('Invalid Spotify playlist URL format');
};

/**
 * Get all featured playlists (admin only)
 */
export const getAllFeaturedPlaylists = async () => {
  return await getFeaturedPlaylists();
};

/**
 * Get public featured playlists (for home page)
 */
export const getPublicFeaturedPlaylists = async () => {
  return await getPublicPlaylistsFromAPI();
};

/**
 * Add a featured playlist from Spotify URL
 */
export const addFeaturedPlaylist = async (spotifyUrl, title = '', description = '') => {
  const playlistId = parseSpotifyPlaylistUrl(spotifyUrl);
  
  // TODO: In a real implementation, you'd call Spotify API here to get playlist metadata
  // For now, we'll store the basic info
  const playlistData = {
    id: playlistId,
    spotifyUrl: `https://open.spotify.com/playlist/${playlistId}`,
    title: title || `Playlist ${playlistId}`,
    description: description || '',
    type: 'playlist',
    isActive: true
  };
  
  return await setFeaturedPlaylist(playlistData);
};

/**
 * Update featured playlist metadata
 */
export const updateFeaturedPlaylistData = async (playlistId, updates) => {
  return await updateFeaturedPlaylist(playlistId, {
    ...updates,
    id: playlistId // Ensure ID doesn't change
  });
};

/**
 * Remove a featured playlist
 */
export const deleteFeaturedPlaylist = async (playlistId) => {
  return await removeFeaturedPlaylist(playlistId);
};

/**
 * Toggle playlist active status
 */
export const togglePlaylistStatus = async (playlistId) => {
  const currentPlaylists = await getFeaturedPlaylists();
  const playlist = currentPlaylists.find(p => p.id === playlistId);
  
  if (!playlist) {
    throw new Error('Playlist not found');
  }
  
  return await updateFeaturedPlaylist(playlistId, {
    isActive: !playlist.isActive
  });
};
