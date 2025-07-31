import { useState, useEffect } from 'react';
import { getPublicFeaturedPlaylists } from '../services/featuredPlaylistService';

/**
 * Hook for fetching active featured playlists for public display
 */
export const useHomeFeaturedPlaylists = () => {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const activePlaylists = await getPublicFeaturedPlaylists();
        setPlaylists(activePlaylists);
      } catch (err) {
        console.error('Error fetching featured playlists:', err);
        setError(err.message);
        setPlaylists([]); // Set empty array on error
      } finally {
        setLoading(false);
      }
    };

    fetchPlaylists();
  }, []);

  return { playlists, loading, error };
};
