// User search service for finding users in the app
import { collection, query, where, limit, getDocs, orderBy } from 'firebase/firestore';
import { firestore } from '../../config/firebase';
import { executeFirestoreOperation } from '../../utils/firebaseHelpers';

const COLLECTION_NAME = 'userprofiles';

/**
 * Search users by display name or bio
 * @param {string} searchTerm - Search term
 * @param {number} limitCount - Number of results to return
 * @returns {Promise<Array>} - Array of user profile objects
 */
export const searchUsers = async (searchTerm, limitCount = 20) => {
  return executeFirestoreOperation(async () => {
    const usersRef = collection(firestore, COLLECTION_NAME);
    
    // Note: Firestore doesn't support full-text search natively
    // This is a basic implementation. For better search, consider using Algolia or similar
    const searchTermLower = searchTerm.toLowerCase();
    
    // Search by displayName first (most relevant)
    const displayNameQuery = query(
      usersRef,
      where('displayName', '>=', searchTerm),
      where('displayName', '<=', searchTerm + '\uf8ff'),
      limit(limitCount)
    );
    
    const displayNameSnapshot = await getDocs(displayNameQuery);
    const displayNameResults = displayNameSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      matchType: 'displayName'
    }));
    
    // If we have enough results from displayName search, return them
    if (displayNameResults.length >= limitCount) {
      return displayNameResults.slice(0, limitCount);
    }
    
    // Otherwise, also search through all users and filter by bio/displayName
    const generalQuery = query(usersRef, limit(limitCount * 3)); // Fetch more to filter
    const generalSnapshot = await getDocs(generalQuery);
    
    const bioResults = generalSnapshot.docs
      .map(doc => ({ id: doc.id, ...doc.data() }))
      .filter(user => {
        const displayName = user.displayName?.toLowerCase() || '';
        const bio = user.bio?.toLowerCase() || '';
        
        // Skip if already found in displayName results
        if (displayNameResults.some(result => result.id === user.id)) {
          return false;
        }
        
        return displayName.includes(searchTermLower) || bio.includes(searchTermLower);
      })
      .map(user => ({ ...user, matchType: 'bio' }))
      .slice(0, limitCount - displayNameResults.length);
    
    // Combine results, prioritizing displayName matches
    const allResults = [...displayNameResults, ...bioResults];
    
    return allResults.slice(0, limitCount);
  }, { operationName: 'Search Users' });
};

/**
 * Get popular/recommended users (users with most followers or recent activity)
 * @param {number} limitCount - Number of users to return
 * @returns {Promise<Array>} - Array of user profile objects
 */
export const getPopularUsers = async (limitCount = 10) => {
  return executeFirestoreOperation(async () => {
    const usersRef = collection(firestore, COLLECTION_NAME);
    
    // For now, just get recent users. In the future, you could order by follower count
    const q = query(
      usersRef,
      orderBy('createdAt', 'desc'),
      limit(limitCount)
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  }, { operationName: 'Get Popular Users' });
};

/**
 * Get user suggestions based on mutual follows or similar interests
 * @param {string} currentUserId - Current user's ID
 * @param {number} limitCount - Number of suggestions to return
 * @returns {Promise<Array>} - Array of suggested user profiles
 */
export const getUserSuggestions = async (currentUserId, limitCount = 10) => {
  return executeFirestoreOperation(async () => {
    const usersRef = collection(firestore, COLLECTION_NAME);
    
    // Simple implementation: get recent users excluding current user
    // In the future, this could be more sophisticated based on mutual follows, etc.
    const q = query(
      usersRef,
      orderBy('createdAt', 'desc'),
      limit(limitCount * 2) // Fetch more to filter out current user
    );
    
    const querySnapshot = await getDocs(q);
    const suggestions = querySnapshot.docs
      .map(doc => ({ id: doc.id, ...doc.data() }))
      .filter(user => user.id !== currentUserId) // Exclude current user
      .slice(0, limitCount);
    
    return suggestions;
  }, { operationName: 'Get User Suggestions' });
};
