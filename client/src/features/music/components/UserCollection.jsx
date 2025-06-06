import React from 'react';
import styled from 'styled-components';
import StarRating from './StarRating';

// Styled components for the UserCollection component
const CollectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const CollectionItem = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(30, 30, 30, 0.6);
  border-radius: 8px;
  padding: 12px;
  gap: 15px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(40, 40, 40, 0.8);
  }
`;

const ItemCover = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 4px;
  object-fit: cover;
`;

const ItemDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ItemTitle = styled.h4`
  margin: 0;
  font-weight: 600;
`;

const ItemArtist = styled.p`
  margin: 3px 0 0 0;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
`;

const ItemRating = styled.div`
  min-width: 120px;
  text-align: right;
`;

const ActionButton = styled.button`
  background-color: #1db954;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #1ed760;
  }

  &:disabled {
    background-color: #565656;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.p`
  color: #ff6b6b;
  margin: 5px 0;
  font-size: 0.9rem;
`;

const LoadingIndicator = styled.div`
  text-align: center;
  padding: 20px;
  color: rgba(255, 255, 255, 0.7);
`;

/**
 * UserCollection component - displays a list of albums/items in the user's collection
 * This component can be reused across the application wherever we need to show user collection items
 */
const UserCollection = ({ 
  items, 
  isLoading,
  error,
  onRetry,
  onRateItem, 
  onRemoveItem,
  allowRating = true
}) => {
  if (isLoading) {
    return <LoadingIndicator>Loading your collection...</LoadingIndicator>;
  }

  if (error) {
    return (
      <div>
        <ErrorMessage>{error}</ErrorMessage>
        {onRetry && (
          <ActionButton onClick={onRetry}>
            Retry Loading
          </ActionButton>
        )}
      </div>
    );
  }

  if (!items || items.length === 0) {
    return <div>Your collection is empty.</div>;
  }

  return (
    <CollectionContainer>
      {items.map(item => (
        <CollectionItem key={item.id}>
          <ItemCover src={item.imageUrl} alt={item.name} />
          
          <ItemDetails>
            <ItemTitle>{item.name}</ItemTitle>
            <ItemArtist>{item.artistName}</ItemArtist>
          </ItemDetails>
          
          <ItemRating>
            {allowRating && (
              <StarRating
                initialRating={item.rating}
                readOnly={!onRateItem}
                size={16}
                onRating={rating => onRateItem && onRateItem(item.id, rating)}
              />
            )}
          </ItemRating>
          
          {onRemoveItem && (
            <ActionButton 
              onClick={() => onRemoveItem(item.id)}
              style={{ backgroundColor: '#e74c3c' }}
            >
              Remove
            </ActionButton>
          )}
        </CollectionItem>
      ))}
    </CollectionContainer>
  );
};

export default UserCollection;
