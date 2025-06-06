import styled from 'styled-components';
// I want the Album details to show up as a centered page, similar to how music albums are displayed in Spotify or Apple Music.
// This will include the album title, artist, rating section, and a list of tracks.

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
  min-width: 600px; /* Ensure minimum width for smaller screens */
  margin: 0 auto;
  padding: 40px 20px;
  color: ${props => props.theme.colors.text.primary || '#fff'};
`;

export const AlbumCoverContainer = styled.div`
  margin-bottom: 24px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  overflow: hidden;
  width: 300px;
  height: 300px;
`;

export const AlbumCover = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const AlbumTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 8px;
  text-align: center;
`;

export const AlbumArtist = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 16px;
  color: ${props => props.theme.colors.text.secondary || 'rgba(255,255,255,0.7)'};
  text-align: center;
`;

export const AlbumRatingSection = styled.div`
  margin-top: 16px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  h3 {
    margin-bottom: 10px;
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

export const AlbumContent = styled.div`
  width: 100%;
  max-width: 800px; /* Increased from 700px */
  min-width: 550px; /* Ensure minimum width */
  margin-top: 24px;
`;

export const TracksHeader = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 16px;
  border-bottom: 1px solid ${props => props.theme.colors.surface.secondary || 'rgba(255,255,255,0.1)'};
  padding-bottom: 8px;
  width: 100%;
`;

export const TracksList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 0;
  width: 100%;
  background-color: ${props => props.theme.colors.surface.primary || 'rgba(0,0,0,0.2)'};
  border-radius: 8px;
  min-width: 500px; /* Ensure minimum width */
`;

export const ActionButton = styled.button`
  background-color: ${props => props.theme.colors.accent || '#1db954'};
  color: white;
  border: none;
  border-radius: ${props => props.theme.borderRadius.medium || '25px'};
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 10px;
  
  &:hover:not(:disabled) {
    background-color: #1ed760;
    transform: translateY(-2px);
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

export const ActionButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

export const RateLaterButton = styled(ActionButton)`
  background-color: ${props => props.theme.colors.secondary || '#7b68ee'};
  
  &:hover:not(:disabled) {
    background-color: #8a77ff;
  }
`;
