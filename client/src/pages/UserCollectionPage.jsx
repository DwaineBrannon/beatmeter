import React from 'react';
import { useNavigate } from 'react-router-dom';
import UserCollection from '../features/music/components/UserCollection';
import { PageContainer } from './AlbumDetailsPage.styles';
import styled from 'styled-components';
import { getUserCollection, updateCollectionItemRating, removeFromCollection } from '../features/music/services/collectionService';

const CollectionPageContainer = styled(PageContainer)`
  max-width: 800px;
`;

const CollectionHeader = styled.h1`
  margin-bottom: 20px;
  font-size: 2rem;
`;

const CollectionDescription = styled.p`
  margin-bottom: 30px;
  color: rgba(255, 255, 255, 0.7);
`;

const EmptyStateContainer = styled.div`
  text-align: center;
  padding: 40px 20px;
  background-color: rgba(30, 30, 30, 0.6);
  border-radius: 8px;
`;

const EmptyStateText = styled.p`
  margin-bottom: 20px;
  font-size: 1.1rem;
`;

const EmptyStateButton = styled.button`
  background-color: #1db954;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #1ed760;
  }
`;

function UserCollectionPage() {
  const navigate = useNavigate();
  const [collection, setCollection] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [retryCount, setRetryCount] = React.useState(0);
  
  React.useEffect(() => {
    const loadCollection = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Use our service to fetch the collection
        const data = await getUserCollection();
        setCollection(data);
      } catch (err) {
        console.error('Error loading collection:', err);
        
        let errorMessage = 'Failed to load your collection. Please try again later.';
        if (err.name === 'AbortError') {
          errorMessage = 'Request timed out. The server might be experiencing high load.';
        }
        
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    loadCollection();
  }, [retryCount]);

  const handleRetry = () => {
    setRetryCount(prev => prev + 1);
  };

  const handleRateItem = async (itemId, rating) => {
    try {
      // Optimistically update the UI first for better UX
      setCollection(prevCollection => 
        prevCollection.map(item => 
          item.id === itemId ? { ...item, rating } : item
        )
      );
      
      // Then make the API call
      await updateCollectionItemRating(itemId, rating);
    } catch (error) {
      console.error('Error updating rating:', error);
      
      // Revert the optimistic update on error
      // You might want to reload the collection or just show an error message
      setError('Failed to update rating. Please try again.');
      
      // Auto-clear the error after a few seconds
      setTimeout(() => setError(null), 5000);
    }
  };

  const handleRemoveItem = async (itemId) => {
    try {
      // Optimistically update the UI first for better UX
      const previousCollection = [...collection];
      setCollection(prevCollection => 
        prevCollection.filter(item => item.id !== itemId)
      );
      
      // Then make the API call
      await removeFromCollection(itemId);
    } catch (error) {
      console.error('Error removing item:', error);
      
      // Revert the optimistic update on error
      setCollection(previousCollection);
      setError('Failed to remove album from collection. Please try again.');
      
      // Auto-clear the error after a few seconds
      setTimeout(() => setError(null), 5000);
    }
  };
  
  const handleBrowseMusic = () => {
    navigate('/music');
  };
  const EmptyState = () => (
    <EmptyStateContainer>
      <EmptyStateText>Your collection is empty. Start rating albums to add them to your collection!</EmptyStateText>
      <EmptyStateButton onClick={() => navigate('/music')}>Browse Music</EmptyStateButton>
    </EmptyStateContainer>
  );

  return (
    <CollectionPageContainer>
      <CollectionHeader>Your Collection</CollectionHeader>
      <CollectionDescription>
        Albums you've rated and added to your collection appear here.
      </CollectionDescription>
      
      {!loading && !error && collection.length === 0 ? (
        <EmptyState />
      ) : (
        <UserCollection 
          items={collection}
          isLoading={loading}
          error={error}
          onRetry={handleRetry}
          onRateItem={handleRateItem}
          onRemoveItem={handleRemoveItem}
        />
      )}
    </CollectionPageContainer>
  );
}

export default UserCollectionPage;
