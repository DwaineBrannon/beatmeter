import styled from 'styled-components';

export const SorterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: ${props => props.theme.spacing.medium};
  font-family: 'Roboto', sans-serif;
`;

export const SorterHeader = styled.h1`
  font-size: 2rem;
  margin-bottom: ${props => props.theme.spacing.medium};
  text-align: center;
  font-family: 'Roboto', sans-serif;
  color: ${props => props.theme.colors.text.primary};
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 120px;
  gap: 10px;
  align-items: center;
`;

export const SorterButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  background-color: ${props => props.theme.colors.surface.secondary};
  min-height: 48px;
  color: ${props => props.theme.colors.text.primary};
  border: none;
  border-radius: ${props => props.theme.borderRadius.small};
  transition: background-color ${props => props.theme.transitions.normal};
  font-family: 'Roboto', sans-serif;
  
  &:hover {
    background-color: ${props => props.theme.buttons.secondary.hoverBackground};
  }
`;

export const FinalRankingContainer = styled.div`
  width: 100%;
  max-width: 500px;
  background: linear-gradient(to right, rgb(125, 163, 216), rgb(246, 220, 182));
  color: #fff;
  border-radius: ${props => props.theme.borderRadius.medium};
  padding: ${props => props.theme.spacing.medium};
  margin-bottom: ${props => props.theme.spacing.medium};
  position: relative;
  box-shadow: 0 8px 24px 0 rgba(0,0,0,0.25);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${props => props.theme.spacing.medium};
  min-height: 220px;
`;

export const RankingContent = styled.div`
  flex: 1;
`;

export const RankingTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 8px;
  font-weight: bold;
  color: ${props => props.theme.colors.text.primary};
`;

export const SongInfo = styled.div`
  margin-bottom: 12px;
`;

export const SongTitle = styled.div`
  font-weight: bold;
  font-size: 1.1rem;
  margin-bottom: 2px;
  color: ${props => props.theme.colors.text.primary};
  text-shadow: 2px 2px 6px rgba(0,0,0,.75);
`;

export const ArtistName = styled.div`
  font-size: 1rem;
  margin-bottom: 12px;
  text-shadow: 2px 2px 6px rgba(0,0,0,.75);
  color: ${props => props.theme.colors.text.secondary};
`;

export const AlbumCover = styled.img`
  width: 120px;
  height: 120px;
  border-radius: ${props => props.theme.borderRadius.medium};
  object-fit: cover;
  margin-left: 12px;
  box-shadow: ${props => props.theme.shadows.small};
`;

export const ComparisonContainer = styled.div`
  width: 100%;
  max-width: 500px;
  min-height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255,255,255,0.01);
`;

export const ComparisonControls = styled.div`
  min-height: 48px;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`;
