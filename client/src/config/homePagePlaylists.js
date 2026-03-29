/**
 * Home Page Featured Playlists Configuration
 *
 * This file makes it easy to manage which playlists appear on the home page
 * without needing to use the admin dashboard for common changes.
 */

// Popular Spotify playlist IDs for quick reference
export const POPULAR_PLAYLISTS = {
  // Top Charts
  "Today's Top Hits": '37i9dQZF1DXcBWIGoYBM5M',
  'Global Top 50': '37i9dQZF1DXe6bgWzNBRZR',
  'Viral 50 - Global': '37i9dQZF1DX2L0iB23Enbq',

  // Hip Hop & Rap
  RapCaviar: '37i9dQZF1DX0XUsuxWHRQd',
  'Hip Hop Central': '37i9dQZF1DX2RxBh64BHjQ',
  'Most Necessary': '37i9dQZF1DWY4xASoD6yUz',

  // Rock & Alternative
  'Rock Classics': '37i9dQZF1DWXRqgorJj26U',
  'Alternative Rock': '37i9dQZF1DX873GaRGUmPl',
  'Indie Rock': '37i9dQZF1DX2Nc3B70tvx0',

  // Chill & Ambient
  'Chill Hits': '37i9dQZF1DX4WYpdgoIcn6',
  'Lo-Fi Beats': '37i9dQZF1DWWQRwui0ExPn',
  'Peaceful Piano': '37i9dQZF1DX4sWSpwq3LiO',

  // Electronic & Dance
  'Electronic/Dance': '37i9dQZF1DX4dyzvuaRJ0n',
  'Dance Hits': '37i9dQZF1DX0BcQWzuB7ZO',
  'Deep House Relax': '37i9dQZF1DWWvvyNmW9V9a',

  // Pop & Mainstream
  'Pop Rising': '37i9dQZF1DWUa8ZRTMdJGJ',
  'Pop Right Now': '37i9dQZF1DWQvQUuKB1vI8',
  'Indie Pop': '37i9dQZF1DX2Nc3B70tvx0',

  // Workout & Energy
  Workout: '37i9dQZF1DX76Wlfdnj7AP',
  'Power Workout': '37i9dQZF1DWUVpAXiEPK8P',
  Running: '37i9dQZF1DWYzpSJHStHHx',

  // Focus & Study
  'Deep Focus': '37i9dQZF1DWZeKCadgRdKQ',
  'Study Beats': '37i9dQZF1DX8Uebhn9wzrS',
  'Brain Food': '37i9dQZF1DWXLeA8Omikj7',
};

// Predefined playlist combinations for different moods/times
export const PLAYLIST_PRESETS = {
  // Default homepage setup
  default: [
    "Today's Top Hits",
    'RapCaviar',
    'Chill Hits',
    'Rock Classics',
    'Electronic/Dance',
    'Indie Pop',
  ],

  // Weekend vibes
  weekend: [
    'Global Top 50',
    'Dance Hits',
    'Chill Hits',
    'Indie Pop',
    'Lo-Fi Beats',
    'Pop Rising',
  ],

  // Workout focused
  fitness: [
    'Workout',
    'Power Workout',
    'Hip Hop Central',
    'Electronic/Dance',
    'Running',
    'Dance Hits',
  ],

  // Study/Work mode
  focus: [
    'Deep Focus',
    'Lo-Fi Beats',
    'Peaceful Piano',
    'Study Beats',
    'Brain Food',
    'Chill Hits',
  ],

  // Party time
  party: [
    "Today's Top Hits",
    'Dance Hits',
    'Hip Hop Central',
    'Electronic/Dance',
    'Pop Right Now',
    'Viral 50 - Global',
  ],

  // Chill evening
  evening: [
    'Chill Hits',
    'Lo-Fi Beats',
    'Peaceful Piano',
    'Indie Pop',
    'Deep House Relax',
    'Alternative Rock',
  ],
};

// Configuration for automatic playlist management
export const PLAYLIST_CONFIG = {
  // Maximum number of playlists to show on home page
  maxVisible: 6,

  // Default preset to use when app loads
  defaultPreset: 'default',

  // Whether to shuffle playlist order
  shuffleOrder: false,

  // Auto-rotation settings
  autoRotation: {
    enabled: false,
    intervalHours: 24,
    rotateToPreset: 'weekend', // Which preset to rotate to
  },

  // Time-based automatic presets (optional)
  timeBasedPresets: {
    enabled: false,
    schedule: {
      morning: { start: '06:00', preset: 'focus' },
      afternoon: { start: '12:00', preset: 'default' },
      evening: { start: '18:00', preset: 'evening' },
      weekend: { days: ['saturday', 'sunday'], preset: 'weekend' },
    },
  },
};

// Helper function to get playlist URL from ID
export const getPlaylistUrl = playlistId => {
  return `https://open.spotify.com/playlist/${playlistId}`;
};

// Helper function to create playlist data for the API
export const createPlaylistData = (
  playlistKey,
  customTitle = null,
  customDescription = null
) => {
  const playlistId = POPULAR_PLAYLISTS[playlistKey];
  if (!playlistId) {
    throw new Error(`Playlist "${playlistKey}" not found in POPULAR_PLAYLISTS`);
  }

  return {
    id: playlistId,
    spotifyUrl: getPlaylistUrl(playlistId),
    title: customTitle || playlistKey,
    description: customDescription || `Curated ${playlistKey} playlist`,
    type: 'playlist',
    isActive: true,
  };
};

// Function to apply a preset (use this in admin components)
export const applyPreset = async (presetName, playlistService) => {
  const preset = PLAYLIST_PRESETS[presetName];
  if (!preset) {
    throw new Error(`Preset "${presetName}" not found`);
  }

  try {
    // First, disable all current playlists
    const currentPlaylists = await playlistService.getAllFeaturedPlaylists();
    for (const playlist of currentPlaylists) {
      if (playlist.isActive) {
        await playlistService.togglePlaylistStatus(playlist.id);
      }
    }

    // Then add/enable playlists from the preset
    for (const playlistKey of preset) {
      const playlistData = createPlaylistData(playlistKey);
      try {
        await playlistService.addFeaturedPlaylist(
          playlistData.spotifyUrl,
          playlistData.title,
          playlistData.description
        );
      } catch (error) {
        // If playlist already exists, just enable it
        await playlistService.togglePlaylistStatus(playlistData.id);
      }
    }

    return true;
  } catch (error) {
    console.error('Error applying preset:', error);
    throw error;
  }
};

export default {
  POPULAR_PLAYLISTS,
  PLAYLIST_PRESETS,
  PLAYLIST_CONFIG,
  getPlaylistUrl,
  createPlaylistData,
  applyPreset,
};
