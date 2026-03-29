import { useState, useCallback } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  rateAlbum,
  updateExistingAlbumRating,
  deleteAlbumRating,
  getAlbumWithUserRating,
} from '@services/musicService.js';
import {
  getAlbumRatings,
  getUserRatings,
  getRecentRatings,
} from '@services/database/ratingService.js';
import {
  getTopRatedAlbums,
  getRecentAlbums,
  searchAlbums,
} from '@services/database/albumService.js';
import { useAuth } from '@features/auth/context/AuthContext.jsx';

/**
 * Hook for rating an album
 */
export const useAlbumRating = () => {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const rateMutation = useMutation({
    mutationFn: async ({ albumData, ratingData }) => {
      if (!user) throw new Error('User must be logged in to rate albums');
      return rateAlbum(albumData, {
        ...ratingData,
        userId: user.uid,
        userDisplayName: user.displayName || 'Anonymous',
      });
    },
    onSuccess: (_, { albumData }) => {
      queryClient.invalidateQueries([
        'album',
        albumData.id || albumData.spotifyId,
      ]);
      queryClient.invalidateQueries(['userRatings', user?.uid]);
    },
  });

  const updateMutation = useMutation({
    mutationFn: async ({ ratingId, updateData, albumData }) => {
      if (!user) throw new Error('User must be logged in to update ratings');
      return updateExistingAlbumRating(
        ratingId,
        { ...updateData, userId: user.uid },
        albumData
      );
    },
    onSuccess: (_, { albumData }) => {
      queryClient.invalidateQueries([
        'album',
        albumData.id || albumData.spotifyId,
      ]);
      queryClient.invalidateQueries(['userRatings', user?.uid]);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async ({ ratingId, albumId, ratingValue }) => {
      return deleteAlbumRating(ratingId, albumId, ratingValue);
    },
    onSuccess: (_, { albumId }) => {
      queryClient.invalidateQueries(['album', albumId]);
      queryClient.invalidateQueries(['userRatings', user?.uid]);
    },
  });

  return {
    rateAlbum: (albumData, ratingData) =>
      rateMutation.mutateAsync({ albumData, ratingData }),
    updateRating: (ratingId, updateData, albumData) =>
      updateMutation.mutateAsync({ ratingId, updateData, albumData }),
    deleteRating: (ratingId, albumId, ratingValue) =>
      deleteMutation.mutateAsync({ ratingId, albumId, ratingValue }),
    loading:
      rateMutation.isPending ||
      updateMutation.isPending ||
      deleteMutation.isPending,
    error:
      rateMutation.error?.message ||
      updateMutation.error?.message ||
      deleteMutation.error?.message,
  };
};

/**
 * Hook for fetching album data with user rating
 */
export const useAlbumWithRating = albumId => {
  const { user } = useAuth();

  const {
    data: album,
    isLoading: loading,
    error,
    refetch,
  } = useQuery({
    queryKey: ['album', albumId, user?.uid],
    queryFn: () => getAlbumWithUserRating(albumId, user?.uid),
    enabled: !!albumId,
  });

  return {
    album,
    loading,
    error: error?.message,
    refetch,
  };
};

/**
 * Hook for fetching album ratings
 */
export const useAlbumRatings = (albumId, limit = 20) => {
  const {
    data: ratings = [],
    isLoading: loading,
    error,
    refetch,
  } = useQuery({
    queryKey: ['albumRatings', albumId, limit],
    queryFn: () => getAlbumRatings(albumId, limit),
    enabled: !!albumId,
  });

  return {
    ratings,
    loading,
    error: error?.message,
    refetch,
  };
};

/**
 * Hook for fetching user's ratings
 */
export const useUserRatings = (userId, limit = 50) => {
  const {
    data: ratings = [],
    isLoading: loading,
    error,
    refetch,
  } = useQuery({
    queryKey: ['userRatings', userId, limit],
    queryFn: () => getUserRatings(userId, limit),
    enabled: !!userId,
  });

  return {
    ratings,
    loading,
    error: error?.message,
    refetch,
  };
};

/**
 * Hook for fetching top rated albums
 */
export const useTopRatedAlbums = (limit = 20) => {
  const {
    data: albums = [],
    isLoading: loading,
    error,
    refetch,
  } = useQuery({
    queryKey: ['topRatedAlbums', limit],
    queryFn: () => getTopRatedAlbums(limit),
  });

  return {
    albums,
    loading,
    error: error?.message,
    refetch,
  };
};

/**
 * Hook for fetching recent albums
 */
export const useRecentAlbums = (limit = 20) => {
  const {
    data: albums = [],
    isLoading: loading,
    error,
    refetch,
  } = useQuery({
    queryKey: ['recentAlbums', limit],
    queryFn: () => getRecentAlbums(limit),
  });

  return {
    albums,
    loading,
    error: error?.message,
    refetch,
  };
};

/**
 * Hook for searching albums
 */
export const useAlbumSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const {
    data: results = [],
    isLoading: loading,
    error,
  } = useQuery({
    queryKey: ['searchAlbums', searchTerm],
    queryFn: () => searchAlbums(searchTerm.trim()),
    enabled: !!searchTerm && searchTerm.trim().length > 0,
  });

  const searchAlbumsWithTerm = useCallback(term => {
    setSearchTerm(term);
  }, []);

  const clearSearch = useCallback(() => {
    setSearchTerm('');
  }, []);

  return {
    results,
    loading,
    error: error?.message,
    searchAlbums: searchAlbumsWithTerm,
    clearSearch,
  };
};

/**
 * Hook for fetching recent ratings across all users
 */
export const useRecentRatings = (limit = 20) => {
  const {
    data: ratings = [],
    isLoading: loading,
    error,
    refetch,
  } = useQuery({
    queryKey: ['recentRatings', limit],
    queryFn: () => getRecentRatings(limit),
  });

  return {
    ratings,
    loading,
    error: error?.message,
    refetch,
  };
};
