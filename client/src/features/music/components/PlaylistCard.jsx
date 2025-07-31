import React from 'react';
import styled from 'styled-components';

const PlaylistCardContainer = styled.div`
  background: ${props => props.theme.colors.surface.secondary || 'rgba(30, 30, 30, 0.8)'};
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid ${props => props.theme.colors.border.primary || 'rgba(255, 255, 255, 0.1)'};
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  &:hover {
    transform: translateY(-4px);
    border-color: ${props => props.theme.colors.accent.primary || '#6366f1'};
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  }
`;

const PlaylistTitle = styled.h3`
  color: ${props => props.theme.colors.text.primary || '#ffffff'};
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1.3;
`;

const PlaylistDescription = styled.p`
  color: ${props => props.theme.colors.text.secondary || '#b0b0b0'};
  margin: 0 0 1rem 0;
  font-size: 0.9rem;
  line-height: 1.4;
  flex-grow: 1;
`;

const PlaylistMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;

const PlaylistType = styled.span`
  background: ${props => props.theme.colors.accent.primary || '#6366f1'};
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
`;

const SpotifyIcon = styled.div`
  width: 24px;
  height: 24px;
  background: #1db954;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.8rem;
  font-weight: bold;
`;

function PlaylistCard({ playlist, onClick }) {
  const handleClick = () => {
    if (onClick) {
      onClick(playlist);
    } else {
      // Default action: open Spotify playlist
      window.open(playlist.spotifyUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <PlaylistCardContainer onClick={handleClick}>
      <div>
        <PlaylistTitle>{playlist.title}</PlaylistTitle>
        {playlist.description && (
          <PlaylistDescription>{playlist.description}</PlaylistDescription>
        )}
      </div>
      
      <PlaylistMeta>
        <PlaylistType>{playlist.type || 'Playlist'}</PlaylistType>
        <SpotifyIcon title="Open in Spotify">♫</SpotifyIcon>
      </PlaylistMeta>
    </PlaylistCardContainer>
  );
}

export default PlaylistCard;
