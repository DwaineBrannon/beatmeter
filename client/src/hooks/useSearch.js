// Hook for intelligent search functionality
import { useState, useCallback } from 'react';
import { searchUsers } from '../services/database/userSearchService';
import { apiUrl } from '../utils/api';

/**
 * Hook for performing unified search across music and users
 */
export const useUnifiedSearch = () => {
  const [results, setResults] = useState({
    users: [],
    music: [],
    loading: false,
    error: null
  });

  const search = useCallback(async (query, options = {}) => {
    const { 
      includeUsers = true, 
      includeMusic = true, 
      userLimit = 10, 
      musicLimit = 10 
    } = options;

    if (!query || query.trim().length === 0) {
      setResults({ users: [], music: [], loading: false, error: null });
      return;
    }

    setResults(prev => ({ ...prev, loading: true, error: null }));

    try {
      const promises = [];

      // Search users if requested
      if (includeUsers) {
        promises.push(searchUsers(query.trim(), userLimit));
      } else {
        promises.push(Promise.resolve([]));
      }

      // Search music if requested
      if (includeMusic) {
        const musicSearchPromise = fetch(
          apiUrl(`/music/search?q=${encodeURIComponent(query)}&type=album&limit=${musicLimit}`)
        ).then(res => {
          if (!res.ok) throw new Error('Music search failed');
          return res.json();
        }).then(data => data.albums || []);
        
        promises.push(musicSearchPromise);
      } else {
        promises.push(Promise.resolve([]));
      }

      const [users, music] = await Promise.all(promises);

      setResults({
        users,
        music,
        loading: false,
        error: null
      });

      return { users, music };
    } catch (err) {
      console.error('Search error:', err);
      setResults(prev => ({
        ...prev,
        loading: false,
        error: 'Search failed. Please try again.'
      }));
      throw err;
    }
  }, []);

  const clearResults = useCallback(() => {
    setResults({ users: [], music: [], loading: false, error: null });
  }, []);

  return {
    ...results,
    search,
    clearResults
  };
};

/**
 * Hook for search suggestions and popular content
 */
export const useSearchSuggestions = () => {
  const [suggestions, setSuggestions] = useState({
    popularUsers: [],
    loading: false,
    error: null
  });

  const loadPopularUsers = useCallback(async (limit = 5) => {
    setSuggestions(prev => ({ ...prev, loading: true, error: null }));

    try {
      const { getPopularUsers } = await import('../services/database/userSearchService');
      const popularUsers = await getPopularUsers(limit);

      setSuggestions({
        popularUsers,
        loading: false,
        error: null
      });

      return popularUsers;
    } catch (err) {
      console.error('Error loading suggestions:', err);
      setSuggestions(prev => ({
        ...prev,
        loading: false,
        error: 'Failed to load suggestions'
      }));
      throw err;
    }
  }, []);

  return {
    ...suggestions,
    loadPopularUsers
  };
};
