import styled from 'styled-components';

export const PageContainer = styled.div`
  padding: 20px;
  color: ${props => props.theme.colors.text.primary || '#fff'};
`;

export const AlbumTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

export const AlbumArtist = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: ${props => props.theme.colors.text.secondary || 'rgba(255,255,255,0.7)'};
`;

export const AlbumRatingSection = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h3 {
    margin-bottom: 10px;
    font-size: 1.2rem;
  }
`;

export const TracksList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
`;
