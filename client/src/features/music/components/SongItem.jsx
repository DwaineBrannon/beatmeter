import React from 'react';
import styled from 'styled-components';
import StarRating from './StarRating'; // Assuming StarRating.jsx is in the same directory

const SongItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid ${props => props.theme.colors.ui.secondary || '#444'};

  &:last-child {
    border-bottom: none;
  }
`;

const SongTitle = styled.p`
  margin: 0;
  font-size: 1rem;
  color: ${props => props.theme.colors.text.primary || '#fff'};
`;

const SongDuration = styled.span`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.text.secondary || 'rgba(255,255,255,0.7)'};
  margin-left: 15px;
`;

const SongInfo = styled.div`
  display: flex;
  align-items: center;
`;

const SongItem = ({ track, currentRating, onRateSong }) => {
  if (!track) {
    return null; // Or some placeholder/error
  }

  return (
    <SongItemContainer>
      <SongInfo>
        <SongTitle>{track.title || 'Unknown Title'}</SongTitle>
        {track.duration && <SongDuration>{track.duration}</SongDuration>}
      </SongInfo>
      <StarRating
        initialRating={currentRating}
        onRate={(rating) => onRateSong(track.id, rating)}
        size={20} // Adjust size as needed
      />
    </SongItemContainer>
  );
};

export default SongItem;
