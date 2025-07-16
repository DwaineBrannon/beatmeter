import { useState, useEffect } from 'react';
import { getUserPosts, deletePost } from '../services/database/postService';
import { useAuth } from '../features/auth/context/AuthContext';

/**
 * Custom hook for managing user posts
 * @param {string} userId - User ID to fetch posts for
 * @param {string} filter - Post type filter ('All', 'Reviews', 'Notes')
 * @returns {Object} Posts data and functions
 */
export const useUserPosts = (userId, filter = 'All') => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { currentUser } = useAuth();

  const fetchPosts = async () => {
    if (!userId) {
      setPosts([]);
      setLoading(false);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const filterType = filter === 'All' ? null : filter;
      const fetchedPosts = await getUserPosts(userId, 20, filterType);
      setPosts(fetchedPosts || []); // Ensure we always have an array
      setError(null); // Clear any previous errors on success
    } catch (err) {
      console.error('Error fetching posts:', err);
      // Check if it's a Firebase index error
      if (err.message && err.message.includes('requires an index')) {
        console.warn('Firebase index missing for posts query. Posts will not load until index is created.');
        setError(null); // Don't show error to user, just log it
        setPosts([]);
      } else if (err.message && !err.message.includes('No posts found')) {
        setError('Failed to load posts');
        setPosts([]);
      } else {
        setError(null);
        setPosts([]);
      }
    } finally {
      setLoading(false);
    }
  };

  const refreshPosts = () => {
    fetchPosts();
  };

  const handleDeletePost = async (postId) => {
    if (!currentUser || !postId) {
      console.error('Cannot delete post: missing user or post ID');
      return false;
    }

    try {
      await deletePost(postId);
      // Remove the post from local state
      setPosts(prevPosts => prevPosts.filter(post => post.id !== postId));
      return true;
    } catch (err) {
      console.error('Error deleting post:', err);
      setError('Failed to delete post');
      return false;
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [userId, filter]);

  return {
    posts,
    loading,
    error,
    refreshPosts,
    deletePost: handleDeletePost
  };
};
