import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; // Add this import

const AlbumCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.variant === 'grid' ? 'stretch' : 'center'};
  background: ${props => props.variant === 'grid' ? 'transparent' : 'none'};
  box-shadow: ${props => props.variant === 'grid' 
    ? '0 4px 12px rgba(0, 0, 0, 0.1)' 
    : 'none'};
  border: none;
  border-radius: ${props => props.variant === 'grid' 
    ? '12px' 
    : props.theme.borderRadius.large || '16px'};
  margin: ${props => props.variant === 'grid' ? '0' : '0 12px'};
  padding: ${props => props.variant === 'grid' ? '0' : '0'};
  cursor: pointer;
  overflow: ${props => props.variant === 'grid' ? 'hidden' : 'visible'};
  transition: ${props => props.variant === 'grid' 
    ? 'transform 0.3s, box-shadow 0.3s' 
    : 'none'};
    
  ${props => props.variant === 'grid' && `
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }
  `}
`;

const AlbumImage = styled.img`
  width: ${props => props.variant === 'grid' ? '100%' : '160px'};
  height: ${props => props.variant === 'grid' ? '250px' : '160px'};
  border-radius: ${props => props.variant === 'grid' 
    ? '0' 
    : props.theme.borderRadius.large || '16px'};
  box-shadow: ${props => props.variant === 'grid' 
    ? 'none'
    : props.hovered
      ? '0 0 24px 4px #48BB78'
      : '0 4px 16px 0 rgba(128, 90, 213, 0.15)'};
  transition: box-shadow 0.3s, transform 0.3s;
  object-fit: cover;
`;

const AlbumInfo = styled.div`
  margin-top: ${props => props.variant === 'grid' ? '0' : '12px'};
  padding: ${props => props.variant === 'grid' ? '15px' : '0'};
  text-align: ${props => props.variant === 'grid' ? 'left' : 'center'};
  width: 100%;
`;

const AlbumTitle = styled.h3`
  font-weight: ${props => props.variant === 'grid' ? '600' : '700'};
  color: ${props => props.variant === 'grid' 
    ? props.theme.colors.text.primary || '#fff'
    : props.theme.colors.text.primary || '#fff'};
  font-size: ${props => props.variant === 'grid' ? '1.1rem' : '18px'};
  font-family: 'Inter', system-ui, sans-serif;
  text-shadow: ${props => props.variant === 'grid' 
    ? 'none'
    : props.hovered
      ? '0 2px 8px #805AD5, 0 4px 16px #48BB78'
      : 'none'};
  letter-spacing: ${props => props.variant === 'grid' ? 'normal' : '-0.5px'};
  transition: text-shadow 0.3s;
  margin: ${props => props.variant === 'grid' ? '0 0 8px 0' : '0'};
  overflow: ${props => props.variant === 'grid' ? 'hidden' : 'visible'};
  text-overflow: ${props => props.variant === 'grid' ? 'ellipsis' : 'unset'};
  white-space: ${props => props.variant === 'grid' ? 'nowrap' : 'normal'};
`;

const AlbumArtist = styled.p`
  color: ${props => props.variant === 'grid' 
    ? props.theme.colors.text.secondary || 'rgba(255,255,255,0.7)'
    : props.theme.colors.text.primary || '#fff'};
  font-size: ${props => props.variant === 'grid' ? '0.9rem' : '15px'};
  font-family: 'Inter', system-ui, sans-serif;
  text-shadow: ${props => props.variant === 'grid' 
    ? 'none'
    : props.hovered
      ? '0 2px 8px #48BB78, 0 4px 16px #805AD5'
      : 'none'};
  opacity: 0.95;
  transition: text-shadow 0.3s;
  margin: ${props => props.variant === 'grid' ? '0' : '0'};
  overflow: ${props => props.variant === 'grid' ? 'hidden' : 'visible'};
  text-overflow: ${props => props.variant === 'grid' ? 'ellipsis' : 'unset'};
  white-space: ${props => props.variant === 'grid' ? 'nowrap' : 'normal'};
`;

function AlbumCard({ album, onClick, variant = 'carousel' }) {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  // Handle different data structures - Spotify API vs custom data
  const imageUrl = album.img || (album.images && album.images[0]?.url) || 'https://via.placeholder.com/300';
  const title = album.title || album.name;
  const artist = album.artist || (album.artists ? album.artists.map(a => a.name).join(', ') : '');
  const albumId = album.id; // Assuming album.id is the unique identifier

  const handleCardClick = () => {
    if (albumId) {
      navigate(`/album/${albumId}`);
    } else {
      console.warn('Album ID is missing, cannot navigate to details page.');
    }
    if (onClick) {
      onClick(); // Call original onClick if it exists
    }
  };

  return (
    <AlbumCardContainer
      variant={variant}
      onClick={handleCardClick} // Updated onClick handler
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AlbumImage
        variant={variant}
        src={imageUrl}
        alt={title}
        draggable={false}
        hovered={hovered}
      />
      <AlbumInfo variant={variant}>
        <AlbumTitle variant={variant} hovered={hovered}>
          {title}
        </AlbumTitle>
        <AlbumArtist variant={variant} hovered={hovered}>
          {artist}
        </AlbumArtist>
      </AlbumInfo>
    </AlbumCardContainer>
  );
}

export default AlbumCard;