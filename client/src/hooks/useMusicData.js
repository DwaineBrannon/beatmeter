import { useState, useEffect, useCallback } from 'react';
import { 
  rateAlbum,
  updateExistingAlbumRating,
  deleteAlbumRating,
  getAlbumWithUserRating
} from '../services/musicService.js';
import { 
  getAlbumRatings,
  getUserRatings,
  getRecentRatings
} from '../services/database/ratingService.js';
import { 
  getTopRatedAlbums,
  getRecentAlbums,
  searchAlbums
} from '../services/database/albumService.js';
import { useAuth } from '../features/auth/context/AuthContext.jsx';

/**
 * Hook for rating an album
 */
export const useAlbumRating = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const rateAlbumWithFeedback = useCallback(async (albumData, ratingData) => {
    if (!user) {
      throw new Error('User must be logged in to rate albums');
    }

    setLoading(true);
    setError(null);
    
    try {
      const result = await rateAlbum(albumData, {
        ...ratingData,
        userId: user.uid,
        userDisplayName: user.displayName || 'Anonymous'
      });
      return result;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [user]);

  const updateRating = useCallback(async (ratingId, updateData, albumData) => {
    if (!user) {
      throw new Error('User must be logged in to update ratings');
    }

    setLoading(true);
    setError(null);
    
    try {
      await updateExistingAlbumRating(ratingId, {
        ...updateData,
        userId: user.uid
      }, albumData);
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [user]);

  const deleteRating = useCallback(async (ratingId, albumId, ratingValue) => {
    setLoading(true);
    setError(null);
    
    try {
      await deleteAlbumRating(ratingId, albumId, ratingValue);
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    rateAlbum: rateAlbumWithFeedback,
    updateRating,
    deleteRating,
    loading,
    error
  };
};

/**
 * Hook for fetching album data with user rating
 */
export const useAlbumWithRating = (albumId) => {
  const { user } = useAuth();
  const [album, setAlbum] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAlbum = useCallback(async () => {
    if (!albumId) return;

    setLoading(true);
    setError(null);
    
    try {
      const albumData = await getAlbumWithUserRating(albumId, user?.uid);
      setAlbum(albumData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [albumId, user?.uid]);

  useEffect(() => {
    fetchAlbum();
  }, [fetchAlbum]);

  return {
    album,
    loading,
    error,
    refetch: fetchAlbum
  };
};

/**
 * Hook for fetching album ratings
 */
export const useAlbumRatings = (albumId, limit = 20) => {
  const [ratings, setRatings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRatings = useCallback(async () => {
    if (!albumId) return;

    setLoading(true);
    setError(null);
    
    try {
      const ratingsData = await getAlbumRatings(albumId, limit);
      setRatings(ratingsData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [albumId, limit]);

  useEffect(() => {
    fetchRatings();
  }, [fetchRatings]);

  return {
    ratings,
    loading,
    error,
    refetch: fetchRatings
  };
};

/**
 * Hook for fetching user's ratings
 */
export const useUserRatings = (userId, limit = 50) => {
  const [ratings, setRatings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRatings = useCallback(async () => {
    if (!userId) return;

    setLoading(true);
    setError(null);
    
    try {
      const ratingsData = await getUserRatings(userId, limit);
      setRatings(ratingsData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [userId, limit]);

  useEffect(() => {
    fetchRatings();
  }, [fetchRatings]);

  return {
    ratings,
    loading,
    error,
    refetch: fetchRatings
  };
};

/**
 * Hook for fetching top rated albums
 */
export const useTopRatedAlbums = (limit = 20) => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAlbums = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const albumsData = await getTopRatedAlbums(limit);
      setAlbums(albumsData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [limit]);

  useEffect(() => {
    fetchAlbums();
  }, [fetchAlbums]);

  return {
    albums,
    loading,
    error,
    refetch: fetchAlbums
  };
};

/**
 * Hook for fetching recent albums
 */
export const useRecentAlbums = (limit = 20) => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAlbums = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const albumsData = await getRecentAlbums(limit);
      setAlbums(albumsData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [limit]);

  useEffect(() => {
    fetchAlbums();
  }, [fetchAlbums]);

  return {
    albums,
    loading,
    error,
    refetch: fetchAlbums
  };
};

/**
 * Hook for searching albums
 */
export const useAlbumSearch = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchAlbumsWithTerm = useCallback(async (searchTerm, limit = 20) => {
    if (!searchTerm || searchTerm.trim().length === 0) {
      setResults([]);
      return;
    }

    setLoading(true);
    setError(null);
    
    try {
      const searchResults = await searchAlbums(searchTerm.trim(), limit);
      setResults(searchResults);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const clearSearch = useCallback(() => {
    setResults([]);
    setError(null);
  }, []);

  return {
    results,
    loading,
    error,
    searchAlbums: searchAlbumsWithTerm,
    clearSearch
  };
};

/**
 * Hook for fetching recent ratings across all users
 */
export const useRecentRatings = (limit = 20) => {
  const [ratings, setRatings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRatings = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const ratingsData = await getRecentRatings(limit);
      setRatings(ratingsData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [limit]);

  useEffect(() => {
    fetchRatings();
  }, [fetchRatings]);

  return {
    ratings,
    loading,
    error,
    refetch: fetchRatings
  };
};
