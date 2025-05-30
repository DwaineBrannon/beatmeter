import { useState } from 'react';
import styled from 'styled-components';

const AlbumCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: none;
  box-shadow: none;
  border: none;
  margin: 0 12px;
  cursor: pointer;
`;

const AlbumImage = styled.img`
  width: 160px;
  height: 160px;
  border-radius: ${props => props.theme.borderRadius.large || '16px'};
  box-shadow: ${props => props.hovered
    ? '0 0 24px 4px #48BB78'
    : '0 4px 16px 0 rgba(128, 90, 213, 0.15)'};
  transition: box-shadow 0.3s, transform 0.3s;
  object-fit: cover;
`;

const AlbumInfo = styled.div`
  margin-top: 12px;
  text-align: center;
`;

const AlbumTitle = styled.div`
  font-weight: 700;
  color: ${props => props.theme.colors.text.primary || '#fff'};
  font-size: 18px;
  font-family: 'Inter', system-ui, sans-serif;
  text-shadow: ${props => props.hovered
    ? '0 2px 8px #805AD5, 0 4px 16px #48BB78'
    : 'none'};
  letter-spacing: -0.5px;
  transition: text-shadow 0.3s;
`;

const AlbumArtist = styled.div`
  color: ${props => props.theme.colors.text.primary || '#fff'};
  font-size: 15px;
  font-family: 'Inter', system-ui, sans-serif;
  text-shadow: ${props => props.hovered
    ? '0 2px 8px #48BB78, 0 4px 16px #805AD5'
    : 'none'};
  opacity: 0.95;
  transition: text-shadow 0.3s;
`;

function AlbumCard({ album, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <AlbumCardContainer
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AlbumImage
        src={album.img}
        alt={album.title}
        draggable={false}
        hovered={hovered}
      />
      <AlbumInfo>
        <AlbumTitle hovered={hovered}>
          {album.title}
        </AlbumTitle>
        <AlbumArtist hovered={hovered}>
          {album.artist}
        </AlbumArtist>
      </AlbumInfo>
    </AlbumCardContainer>
  );
}

export default AlbumCard;