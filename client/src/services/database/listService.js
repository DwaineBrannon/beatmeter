import { 
  collection, 
  doc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  getDoc, 
  getDocs, 
  query, 
  where, 
  orderBy, 
  limit, 
  serverTimestamp 
} from 'firebase/firestore';
import { firestore } from '../../config/firebase';
import { executeFirestoreOperation } from '../../utils/firebaseHelpers';

const COLLECTION_NAME = 'lists';

/**
 * Create a new list
 * @param {Object} listData - List data
 * @param {string} listData.userId - User ID
 * @param {string} listData.name - List name
 * @param {string} listData.description - List description
 * @param {Array} listData.albumIds - Array of album IDs
 * @param {boolean} listData.isPublic - Whether the list is public
 * @returns {Promise<string>} - Document ID
 */
export const createList = async (listData) => {
  return executeFirestoreOperation(async () => {
    const listDoc = {
      userId: listData.userId,
      name: listData.name,
      description: listData.description || '',
      albumIds: listData.albumIds || [],
      isPublic: listData.isPublic !== undefined ? listData.isPublic : true,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    };

    const docRef = await addDoc(collection(firestore, COLLECTION_NAME), listDoc);
    return docRef.id;
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
    const listRef = doc(firestore, COLLECTION_NAME, listId);
    const updates = {
      ...updateData,
      updatedAt: serverTimestamp()
    };
    
    await updateDoc(listRef, updates);
  }, { operationName: 'Update List' });
};

/**
 * Delete a list
 * @param {string} listId - List document ID
 * @returns {Promise<void>}
 */
export const deleteList = async (listId) => {
  return executeFirestoreOperation(async () => {
    const listRef = doc(firestore, COLLECTION_NAME, listId);
    await deleteDoc(listRef);
  }, { operationName: 'Delete List' });
};

/**
 * Get a specific list by ID
 * @param {string} listId - List document ID
 * @returns {Promise<Object|null>} - List data or null if not found
 */
export const getListById = async (listId) => {
  return executeFirestoreOperation(async () => {
    const listRef = doc(firestore, COLLECTION_NAME, listId);
    const listSnap = await getDoc(listRef);
    
    if (listSnap.exists()) {
      return { id: listSnap.id, ...listSnap.data() };
    }
    return null;
  }, { operationName: 'Get List By ID' });
};

/**
 * Get all lists by a specific user
 * @param {string} userId - User ID
 * @param {number} limitCount - Number of lists to fetch
 * @returns {Promise<Array>} - Array of list objects
 */
export const getUserLists = async (userId, limitCount = 50) => {
  return executeFirestoreOperation(async () => {
    const listsRef = collection(firestore, COLLECTION_NAME);
    const q = query(
      listsRef,
      where('userId', '==', userId),
      orderBy('updatedAt', 'desc'),
      limit(limitCount)
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  }, { operationName: 'Get User Lists' });
};

/**
 * Get public lists
 * @param {number} limitCount - Number of lists to fetch
 * @returns {Promise<Array>} - Array of public list objects
 */
export const getPublicLists = async (limitCount = 20) => {
  return executeFirestoreOperation(async () => {
    const listsRef = collection(firestore, COLLECTION_NAME);
    const q = query(
      listsRef,
      where('isPublic', '==', true),
      orderBy('updatedAt', 'desc'),
      limit(limitCount)
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  }, { operationName: 'Get Public Lists' });
};

/**
 * Add an album to a list
 * @param {string} listId - List document ID
 * @param {string} albumId - Album ID to add
 * @returns {Promise<void>}
 */
export const addAlbumToList = async (listId, albumId) => {
  return executeFirestoreOperation(async () => {
    const listRef = doc(firestore, COLLECTION_NAME, listId);
    const listSnap = await getDoc(listRef);
    
    if (!listSnap.exists()) {
      throw new Error('List not found');
    }
    
    const listData = listSnap.data();
    const currentAlbumIds = listData.albumIds || [];
    
    if (!currentAlbumIds.includes(albumId)) {
      const updatedAlbumIds = [...currentAlbumIds, albumId];
      await updateDoc(listRef, {
        albumIds: updatedAlbumIds,
        updatedAt: serverTimestamp()
      });
    }
  }, { operationName: 'Add Album To List' });
};

/**
 * Remove an album from a list
 * @param {string} listId - List document ID
 * @param {string} albumId - Album ID to remove
 * @returns {Promise<void>}
 */
export const removeAlbumFromList = async (listId, albumId) => {
  return executeFirestoreOperation(async () => {
    const listRef = doc(firestore, COLLECTION_NAME, listId);
    const listSnap = await getDoc(listRef);
    
    if (!listSnap.exists()) {
      throw new Error('List not found');
    }
    
    const listData = listSnap.data();
    const currentAlbumIds = listData.albumIds || [];
    const updatedAlbumIds = currentAlbumIds.filter(id => id !== albumId);
    
    await updateDoc(listRef, {
      albumIds: updatedAlbumIds,
      updatedAt: serverTimestamp()
    });
  }, { operationName: 'Remove Album From List' });
};

/**
 * Reorder albums in a list
 * @param {string} listId - List document ID
 * @param {Array} newAlbumIds - New ordered array of album IDs
 * @returns {Promise<void>}
 */
export const reorderListAlbums = async (listId, newAlbumIds) => {
  return executeFirestoreOperation(async () => {
    const listRef = doc(firestore, COLLECTION_NAME, listId);
    await updateDoc(listRef, {
      albumIds: newAlbumIds,
      updatedAt: serverTimestamp()
    });
  }, { operationName: 'Reorder List Albums' });
};

/**
 * Search public lists by name
 * @param {string} searchTerm - Search term
 * @param {number} limitCount - Number of results to return
 * @returns {Promise<Array>} - Array of list objects
 */
export const searchPublicLists = async (searchTerm, limitCount = 20) => {
  return executeFirestoreOperation(async () => {
    const listsRef = collection(firestore, COLLECTION_NAME);
    
    // Note: Firestore doesn't support full-text search natively
    // This is a basic implementation. For better search, consider using Algolia or similar
    const searchTermLower = searchTerm.toLowerCase();
    
    const q = query(
      listsRef,
      where('isPublic', '==', true),
      limit(limitCount * 2) // Fetch more to filter
    );
    const querySnapshot = await getDocs(q);
    
    const results = querySnapshot.docs
      .map(doc => ({ id: doc.id, ...doc.data() }))
      .filter(list => 
        list.name?.toLowerCase().includes(searchTermLower) ||
        list.description?.toLowerCase().includes(searchTermLower)
      )
      .slice(0, limitCount);
    
    return results;
  }, { operationName: 'Search Public Lists' });
};
