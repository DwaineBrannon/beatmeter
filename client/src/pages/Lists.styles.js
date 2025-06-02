// Styles for the Lists page
import styled from 'styled-components';
export const ListsPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${props => props.theme.spacing.large || '20px'};
  background-color: ${props => props.theme.colors.background.secondary || '#f4f4f4'};
`;

// need to bring in navbar component
export const ListsHeader = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${props => props.theme.colors.text.primary || '#111'};
  margin-bottom: ${props => props.theme.spacing.medium || '20px'};
`;
export const ListsContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${props => props.theme.spacing.large || '20px'};
  width: 100%;
  max-width: 1200px;
`;

export const PlaylistCard = styled.div`
  background-color: ${props => props.theme.colors.surface.primary || '#fff'};
  border-radius: ${props => props.theme.borderRadius.medium || '8px'};
  box-shadow: ${props => props.theme.shadows.medium || '0 2px 4px rgba(0, 0, 0, 0.1)'};
  width: 300px;
  overflow: hidden;
  transition: transform ${props => props.theme.transitions.normal || '0.3s'};
  
  &:hover {
    transform: translateY(-5px);
  }
`;
export const PlaylistDescription = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.colors.text.secondary || '#666'};
  margin: ${props => props.theme.spacing.small || '10px'} 0;
`;
export const PlaylistImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const PlaylistInfo = styled.div`
  padding: ${props => props.theme.spacing.medium || '15px'};
`;
export const PlaylistTitle = styled.h3`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.text.primary || '#111'};
  margin: ${props => props.theme.spacing.small || '10px'} 0;
`;
export const PlaylistCardButton = styled.button`
  background-color: ${props => props.theme.colors.primary || '#6200ea'};
  color: #fff;
  border: none;
  border-radius: ${props => props.theme.borderRadius.small || '4px'};
  padding: ${props => props.theme.spacing.small || '10px'} ${props => props.theme.spacing.medium || '15px'};
  cursor: pointer;
  font-size: 1rem;
  transition: background-color ${props => props.theme.transitions.normal || '0.3s'};
  
  &:hover {
    background-color: ${props => props.theme.colors.primaryHover || '#3700b3'};
  }
`;