import { 
  createList as createListInDB,
  updateList as updateListInDB,
  deleteList as deleteListInDB,
  getListById,
  getUserLists,
  getPublicLists,
  addAlbumToList,
  removeAlbumFromList,
  reorderListAlbums
} from '../database/listService.js';
import { 
  createListActivity,
  deleteActivitiesByTarget,
  ACTIVITY_TYPES
} from '../database/activityService.js';
import { 
  getAlbumById 
} from '../database/albumService.js';
import { executeFirestoreOperation } from '../../utils/firebaseHelpers.js';

/**
 * Create a new list and associated activity
 * @param {Object} listData - List data
 * @param {string} userDisplayName - Display name of user creating the list
 * @returns {Promise<Object>} - Created list with ID
 */
export const createList = async (listData, userDisplayName) => {
  return executeFirestoreOperation(async () => {
    // 1. Create the list
    const listId = await createListInDB(listData);
    
    // 2. Create activity if the list is public
    if (listData.isPublic !== false) {
      const listWithId = { ...listData, id: listId, userDisplayName };
      await createListActivity(listWithId);
    }
    
    return { ...listData, id: listId };
  }, { operationName: 'Create List' });
};

/**
 * Update an existing list
 * @param {string} listId - List document ID
 * @param {Object} updateData - Data to update
 * @returns {Promise<void>}
 */
export const updateList = async (listId, updateData) => {
  return executeFirestoreOperation(async () => {
    await updateListInDB(listId, updateData);
  }, { operationName: 'Update List' });
};

/**
 * Delete a list and clean up related data
 * @param {string} listId - List document ID
 * @returns {Promise<void>}
 */
export const deleteList = async (listId) => {
  return executeFirestoreOperation(async () => {
    // 1. Delete the list
    await deleteListInDB(listId);
    
    // 2. Delete related activities
    await deleteActivitiesByTarget(listId, ACTIVITY_TYPES.NEW_LIST);
  }, { operationName: 'Delete List' });
};

/**
 * Get list with enriched album data
 * @param {string} listId - List document ID
 * @returns {Promise<Object|null>} - List with album details
 */
export const getListWithAlbumDetails = async (listId) => {
  return executeFirestoreOperation(async () => {
    const list = await getListById(listId);
    if (!list) {
      return null;
    }
    
    // Get full album data for each album in the list
    const albumPromises = list.albumIds.map(albumId => getAlbumById(albumId));
    const albums = await Promise.all(albumPromises);
    
    // Filter out null results (albums that don't exist)
    const validAlbums = albums.filter(album => album !== null);
    
    return {
      ...list,
      albums: validAlbums,
      albumCount: validAlbums.length
    };
  }, { operationName: 'Get List With Album Details' });
};

/**
 * Get user's lists with album counts
 * @param {string} userId - User ID
 * @param {number} limit - Number of lists to fetch
 * @returns {Promise<Array>} - Array of lists with album counts
 */
export const getUserListsWithCounts = async (userId, limit = 50) => {
  return executeFirestoreOperation(async () => {
    const lists = await getUserLists(userId, limit);
    
    // Add album count to each list
    const listsWithCounts = lists.map(list => ({
      ...list,
      albumCount: list.albumIds ? list.albumIds.length : 0
    }));
    
    return listsWithCounts;
  }, { operationName: 'Get User Lists With Counts' });
};

/**
 * Get public lists with album counts and preview albums
 * @param {number} limit - Number of lists to fetch
 * @returns {Promise<Array>} - Array of public lists with additional data
 */
export const getPublicListsWithPreviews = async (limit = 20) => {
  return executeFirestoreOperation(async () => {
    const lists = await getPublicLists(limit);
    
    // Enrich each list with album count and preview albums
    const enrichedLists = await Promise.all(
      lists.map(async (list) => {
        const albumCount = list.albumIds ? list.albumIds.length : 0;
        
        // Get first 3 albums for preview
        const previewAlbumIds = list.albumIds ? list.albumIds.slice(0, 3) : [];
        const previewAlbums = await Promise.all(
          previewAlbumIds.map(albumId => getAlbumById(albumId))
        );
        
        return {
          ...list,
          albumCount,
          previewAlbums: previewAlbums.filter(album => album !== null)
        };
      })
    );
    
    return enrichedLists;
  }, { operationName: 'Get Public Lists With Previews' });
};

/**
 * Add album to list with validation
 * @param {string} listId - List document ID
 * @param {string} albumId - Album ID to add
 * @param {string} userId - User ID (for authorization check)
 * @returns {Promise<void>}
 */
export const addAlbumToUserList = async (listId, albumId, userId) => {
  return executeFirestoreOperation(async () => {
    // 1. Verify list ownership
    const list = await getListById(listId);
    if (!list) {
      throw new Error('List not found');
    }
    if (list.userId !== userId) {
      throw new Error('Unauthorized: You can only modify your own lists');
    }
    
    // 2. Verify album exists
    const album = await getAlbumById(albumId);
    if (!album) {
      throw new Error('Album not found');
    }
    
    // 3. Add album to list
    await addAlbumToList(listId, albumId);
  }, { operationName: 'Add Album To User List' });
};

/**
 * Remove album from list with validation
 * @param {string} listId - List document ID
 * @param {string} albumId - Album ID to remove
 * @param {string} userId - User ID (for authorization check)
 * @returns {Promise<void>}
 */
export const removeAlbumFromUserList = async (listId, albumId, userId) => {
  return executeFirestoreOperation(async () => {
    // 1. Verify list ownership
    const list = await getListById(listId);
    if (!list) {
      throw new Error('List not found');
    }
    if (list.userId !== userId) {
      throw new Error('Unauthorized: You can only modify your own lists');
    }
    
    // 2. Remove album from list
    await removeAlbumFromList(listId, albumId);
  }, { operationName: 'Remove Album From User List' });
};

/**
 * Reorder albums in a user's list
 * @param {string} listId - List document ID
 * @param {Array} newAlbumOrder - New ordered array of album IDs
 * @param {string} userId - User ID (for authorization check)
 * @returns {Promise<void>}
 */
export const reorderUserListAlbums = async (listId, newAlbumOrder, userId) => {
  return executeFirestoreOperation(async () => {
    // 1. Verify list ownership
    const list = await getListById(listId);
    if (!list) {
      throw new Error('List not found');
    }
    if (list.userId !== userId) {
      throw new Error('Unauthorized: You can only modify your own lists');
    }
    
    // 2. Validate that all album IDs in new order exist in current list
    const currentAlbumIds = new Set(list.albumIds || []);
    const newAlbumIds = new Set(newAlbumOrder);
    
    if (currentAlbumIds.size !== newAlbumIds.size || 
        !Array.from(currentAlbumIds).every(id => newAlbumIds.has(id))) {
      throw new Error('Invalid album order: album IDs do not match current list');
    }
    
    // 3. Reorder albums
    await reorderListAlbums(listId, newAlbumOrder);
  }, { operationName: 'Reorder User List Albums' });
};

/**
 * Duplicate a public list to user's library
 * @param {string} sourceListId - Source list ID to duplicate
 * @param {string} userId - User ID creating the duplicate
 * @param {string} userDisplayName - User display name
 * @param {Object} customizations - Custom name/description for the new list
 * @returns {Promise<Object>} - Created list
 */
export const duplicateList = async (sourceListId, userId, userDisplayName, customizations = {}) => {
  return executeFirestoreOperation(async () => {
    // 1. Get source list
    const sourceList = await getListById(sourceListId);
    if (!sourceList) {
      throw new Error('Source list not found');
    }
    if (!sourceList.isPublic) {
      throw new Error('Cannot duplicate private lists');
    }
    
    // 2. Create new list with source data
    const newListData = {
      userId,
      name: customizations.name || `${sourceList.name} (Copy)`,
      description: customizations.description || sourceList.description,
      albumIds: [...(sourceList.albumIds || [])],
      isPublic: customizations.isPublic !== undefined ? customizations.isPublic : false
    };
    
    const newList = await createList(newListData, userDisplayName);
    
    return newList;
  }, { operationName: 'Duplicate List' });
};

/**
 * Get list statistics for a user
 * @param {string} userId - User ID
 * @returns {Promise<Object>} - List statistics
 */
export const getUserListStatistics = async (userId) => {
  return executeFirestoreOperation(async () => {
    const userLists = await getUserLists(userId, 100);
    
    const totalLists = userLists.length;
    const publicLists = userLists.filter(list => list.isPublic).length;
    const privateLists = totalLists - publicLists;
    const totalAlbums = userLists.reduce((sum, list) => sum + (list.albumIds?.length || 0), 0);
    const averageAlbumsPerList = totalLists > 0 ? Math.round(totalAlbums / totalLists) : 0;
    
    return {
      totalLists,
      publicLists,
      privateLists,
      totalAlbums,
      averageAlbumsPerList
    };
  }, { operationName: 'Get User List Statistics' });
};
