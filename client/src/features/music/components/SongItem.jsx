import React from 'react';
import styled from 'styled-components';
import StarRating from './StarRating'; // Assuming StarRating.jsx is in the same directory

const SongItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid ${props => props.theme.colors.surface.secondary || 'rgba(92, 226, 62, 0.97)'};
  transition: background-color 0.2s ease;
  width: 100%; /* Ensure full width */

  &:hover {
    background-color: ${props => props.theme.colors.surface.secondary || 'rgba(36, 195, 116, 0.95)'};
  }

  &:last-child {
    border-bottom: none;
  }
`;

const SongTitle = styled.p`
  margin: 0;
  font-size: 1rem;
  color: ${props => props.theme.colors.text.primary || '#fff'};
  font-weight: 500;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const SongDuration = styled.span`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.text.secondary || 'rgba(255,255,255,0.7)'};
  margin-left: 15px;
  min-width: 45px; /* Ensure space for the duration */
  text-align: right;
`;

const SongNumber = styled.span`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.text.secondary || 'rgba(255,255,255,0.7)'};
  margin-right: 16px;
  min-width: 20px;
  text-align: right;
`;

const SongInfo = styled.div`
  display: flex;
  align-items: center;
  flex: 1; /* Take up available space */
  min-width: 0; /* Allow text to truncate if needed */
  margin-right: 20px; /* Add space between song info and rating */
`;

const SongItem = ({ track, currentRating, onRateSong, index }) => {
  if (!track) {
    return null; // Or some placeholder/error
  }

  return (
    <SongItemContainer>      <SongInfo>
        {typeof index === 'number' && <SongNumber>{index + 1}</SongNumber>}
        <SongTitle>{track.title || 'Unknown Title'}</SongTitle>
        {track.duration && <SongDuration>{track.duration}</SongDuration>}
      </SongInfo>
      <div style={{ minWidth: '120px', display: 'flex', justifyContent: 'flex-end' }}>
        <StarRating
          initialRating={currentRating}
          onRate={(rating) => onRateSong(track.id, rating)}
          size={20} // Adjust size as needed
          showClearOption={true} // Allow users to clear ratings
        />
      </div>
    </SongItemContainer>
  );
};

export default SongItem;
