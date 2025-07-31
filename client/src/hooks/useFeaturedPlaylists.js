import { useState, useEffect, useCallback } from 'react';
import { getAllFeaturedPlaylists, addFeaturedPlaylist, updateFeaturedPlaylistData, deleteFeaturedPlaylist, togglePlaylistStatus } from '../services/featuredPlaylistService';

/**
 * Hook for managing featured playlists data
 */
export const useFeaturedPlaylists = () => {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPlaylists = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await getAllFeaturedPlaylists();
      setPlaylists(data);
    } catch (err) {
      console.error('Error fetching featured playlists:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const addPlaylist = useCallback(async (spotifyUrl, title, description) => {
    setError(null);
    
    try {
      const newPlaylist = await addFeaturedPlaylist(spotifyUrl, title, description);
      await fetchPlaylists(); // Refresh the list
      return newPlaylist;
    } catch (err) {
      console.error('Error adding playlist:', err);
      setError(err.message);
      throw err;
    }
  }, [fetchPlaylists]);

  const updatePlaylist = useCallback(async (playlistId, updates) => {
    setError(null);
    
    try {
      const updatedPlaylist = await updateFeaturedPlaylistData(playlistId, updates);
      setPlaylists(prev => prev.map(p => p.id === playlistId ? { ...p, ...updates } : p));
      return updatedPlaylist;
    } catch (err) {
      console.error('Error updating playlist:', err);
      setError(err.message);
      throw err;
    }
  }, []);

  const deletePlaylist = useCallback(async (playlistId) => {
    setError(null);
    
    try {
      await deleteFeaturedPlaylist(playlistId);
      setPlaylists(prev => prev.filter(p => p.id !== playlistId));
    } catch (err) {
      console.error('Error deleting playlist:', err);
      setError(err.message);
      throw err;
    }
  }, []);

  const toggleStatus = useCallback(async (playlistId) => {
    setError(null);
    
    try {
      const updatedPlaylist = await togglePlaylistStatus(playlistId);
      setPlaylists(prev => prev.map(p => p.id === playlistId ? { ...p, isActive: !p.isActive } : p));
      return updatedPlaylist;
    } catch (err) {
      console.error('Error toggling playlist status:', err);
      setError(err.message);
      throw err;
    }
  }, []);

  useEffect(() => {
    fetchPlaylists();
  }, [fetchPlaylists]);

  return {
    playlists,
    loading,
    error,
    refetch: fetchPlaylists,
    addPlaylist,
    updatePlaylist,
    deletePlaylist,
    toggleStatus
  };
};
