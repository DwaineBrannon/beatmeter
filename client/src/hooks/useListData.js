import { useState, useEffect, useCallback } from 'react';
import { 
  createList,
  updateList,
  deleteList,
  getListWithAlbumDetails,
  getUserListsWithCounts,
  getPublicListsWithPreviews,
  addAlbumToUserList,
  removeAlbumFromUserList,
  reorderUserListAlbums,
  duplicateList,
  getUserListStatistics
} from '../services/listService.js';
import { useAuth } from '../features/auth/context/AuthContext.jsx';

/**
 * Hook for managing list creation, updates, and deletion
 */
export const useListManagement = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createNewList = useCallback(async (listData) => {
    if (!user) {
      throw new Error('User must be logged in to create lists');
    }

    setLoading(true);
    setError(null);
    
    try {
      const newList = await createList({
        ...listData,
        userId: user.uid
      }, user.displayName || 'Anonymous');
      return newList;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [user]);

  const updateExistingList = useCallback(async (listId, updateData) => {
    if (!user) {
      throw new Error('User must be logged in to update lists');
    }

    setLoading(true);
    setError(null);
    
    try {
      await updateList(listId, updateData);
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [user]);

  const deleteExistingList = useCallback(async (listId) => {
    if (!user) {
      throw new Error('User must be logged in to delete lists');
    }

    setLoading(true);
    setError(null);
    
    try {
      await deleteList(listId);
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [user]);

  const duplicateExistingList = useCallback(async (sourceListId, customizations = {}) => {
    if (!user) {
      throw new Error('User must be logged in to duplicate lists');
    }

    setLoading(true);
    setError(null);
    
    try {
      const duplicatedList = await duplicateList(
        sourceListId,
        user.uid,
        user.displayName || 'Anonymous',
        customizations
      );
      return duplicatedList;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [user]);

  return {
    createList: createNewList,
    updateList: updateExistingList,
    deleteList: deleteExistingList,
    duplicateList: duplicateExistingList,
    loading,
    error
  };
};

/**
 * Hook for fetching a single list with full album details
 */
export const useListWithAlbums = (listId) => {
  const [list, setList] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchList = useCallback(async () => {
    if (!listId) return;

    setLoading(true);
    setError(null);
    
    try {
      const listData = await getListWithAlbumDetails(listId);
      setList(listData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [listId]);

  useEffect(() => {
    fetchList();
  }, [fetchList]);

  return {
    list,
    loading,
    error,
    refetch: fetchList
  };
};

/**
 * Hook for fetching user's lists with counts
 */
export const useUserLists = (userId, limit = 50) => {
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchLists = useCallback(async () => {
    if (!userId) return;

    setLoading(true);
    setError(null);
    
    try {
      const listsData = await getUserListsWithCounts(userId, limit);
      setLists(listsData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [userId, limit]);

  useEffect(() => {
    fetchLists();
  }, [fetchLists]);

  return {
    lists,
    loading,
    error,
    refetch: fetchLists
  };
};

/**
 * Hook for fetching public lists with previews
 */
export const usePublicLists = (limit = 20) => {
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchLists = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const listsData = await getPublicListsWithPreviews(limit);
      setLists(listsData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [limit]);

  useEffect(() => {
    fetchLists();
  }, [fetchLists]);

  return {
    lists,
    loading,
    error,
    refetch: fetchLists
  };
};

/**
 * Hook for managing albums in a list
 */
export const useListAlbumManagement = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addAlbum = useCallback(async (listId, albumId) => {
    if (!user) {
      throw new Error('User must be logged in to modify lists');
    }

    setLoading(true);
    setError(null);
    
    try {
      await addAlbumToUserList(listId, albumId, user.uid);
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [user]);

  const removeAlbum = useCallback(async (listId, albumId) => {
    if (!user) {
      throw new Error('User must be logged in to modify lists');
    }

    setLoading(true);
    setError(null);
    
    try {
      await removeAlbumFromUserList(listId, albumId, user.uid);
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [user]);

  const reorderAlbums = useCallback(async (listId, newAlbumOrder) => {
    if (!user) {
      throw new Error('User must be logged in to modify lists');
    }

    setLoading(true);
    setError(null);
    
    try {
      await reorderUserListAlbums(listId, newAlbumOrder, user.uid);
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [user]);

  return {
    addAlbum,
    removeAlbum,
    reorderAlbums,
    loading,
    error
  };
};

/**
 * Hook for checking if an album is in any of the user's lists
 */
export const useAlbumInLists = (albumId) => {
  const { user } = useAuth();
  const [listsContainingAlbum, setListsContainingAlbum] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const checkAlbumInLists = useCallback(async () => {
    if (!user || !albumId) {
      setListsContainingAlbum([]);
      return;
    }

    setLoading(true);
    setError(null);
    
    try {
      const userLists = await getUserListsWithCounts(user.uid, 100);
      const listsWithAlbum = userLists.filter(list => 
        list.albumIds && list.albumIds.includes(albumId)
      );
      setListsContainingAlbum(listsWithAlbum);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [user, albumId]);

  useEffect(() => {
    checkAlbumInLists();
  }, [checkAlbumInLists]);

  return {
    listsContainingAlbum,
    isInAnyList: listsContainingAlbum.length > 0,
    loading,
    error,
    refetch: checkAlbumInLists
  };
};

/**
 * Hook for getting current user's list statistics
 */
export const useUserListStatistics = () => {
  const { user } = useAuth();
  const [statistics, setStatistics] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchStatistics = useCallback(async () => {
    if (!user) {
      setStatistics(null);
      return;
    }

    setLoading(true);
    setError(null);
    
    try {
      const stats = await getUserListStatistics(user.uid);
      setStatistics(stats);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchStatistics();
  }, [fetchStatistics]);

  return {
    statistics,
    loading,
    error,
    refetch: fetchStatistics
  };
};

/**
 * Hook for managing a specific list (combines fetching and management)
 */
export const useListManager = (listId) => {
  const { list, loading: fetchLoading, error: fetchError, refetch } = useListWithAlbums(listId);
  const { 
    updateList, 
    deleteList, 
    loading: manageLoading, 
    error: manageError 
  } = useListManagement();
  const { 
    addAlbum, 
    removeAlbum, 
    reorderAlbums, 
    loading: albumLoading, 
    error: albumError 
  } = useListAlbumManagement();

  const updateAndRefresh = useCallback(async (updateData) => {
    await updateList(listId, updateData);
    await refetch();
  }, [updateList, listId, refetch]);

  const addAlbumAndRefresh = useCallback(async (albumId) => {
    await addAlbum(listId, albumId);
    await refetch();
  }, [addAlbum, listId, refetch]);

  const removeAlbumAndRefresh = useCallback(async (albumId) => {
    await removeAlbum(listId, albumId);
    await refetch();
  }, [removeAlbum, listId, refetch]);

  const reorderAndRefresh = useCallback(async (newOrder) => {
    await reorderAlbums(listId, newOrder);
    await refetch();
  }, [reorderAlbums, listId, refetch]);

  return {
    list,
    loading: fetchLoading || manageLoading || albumLoading,
    error: fetchError || manageError || albumError,
    updateList: updateAndRefresh,
    deleteList: () => deleteList(listId),
    addAlbum: addAlbumAndRefresh,
    removeAlbum: removeAlbumAndRefresh,
    reorderAlbums: reorderAndRefresh,
    refetch
  };
};
