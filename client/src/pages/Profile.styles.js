import styled from 'styled-components';

// Styled components that properly use the theme through ThemeProvider
export const ProfilePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${props => props.theme.spacing.large || '20px'};
  background-color: ${props => props.theme.colors.background.secondary || '#f4f4f4'};
`;

export const ProfileHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.large || '20px'};
  width: 100%;
  max-width: 800px;
`;

export const ProfilePicture = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: ${props => props.theme.spacing.medium || '20px'};
  object-fit: cover;
  border: 3px solid ${props => props.theme.colors.accent || '#007bff'};
`;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserNameText = styled.h1`
  margin: 0;
  font-size: 2rem;
  font-weight: bold;
  color: ${props => props.theme.colors.text.primary || '#111'};
`;

export const UserBioText = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.colors.text.secondary || '#555'};
  margin-top: ${props => props.theme.spacing.small || '8px'};
`;

export const EditProfileButton = styled.button`
  padding: ${props => props.theme.spacing.small} ${props => props.theme.spacing.medium};
  background-color: ${props => props.theme.colors.accent || '#007bff'};
  color: ${props => props.theme.colors.text.primary || 'white'};
  border: none;
  border-radius: ${props => props.theme.borderRadius.small || '4px'};
  cursor: pointer;
  margin-top: ${props => props.theme.spacing.medium || '10px'};
  font-weight: 600;
  
  &:hover {
    background-color: #0056b3;
  }
`;

export const FollowButton = styled.button`
  padding: ${props => props.theme.spacing.small} ${props => props.theme.spacing.medium};
  color: ${props => props.theme.colors.text.primary || 'white'};
  border: none;
  border-radius: ${props => props.theme.borderRadius.small || '4px'};
  cursor: pointer;
  margin-top: ${props => props.theme.spacing.medium || '10px'};
  font-weight: 600;
  background-color: ${props => props.isFollowing 
    ? '#ccc' 
    : props.theme.colors.accent || '#28a745'};
  
  &:hover {
    background-color: ${props => props.isFollowing ? '#bbb' : '#1e7e34'};
  }
`;

export const ProfileStatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 400px;
  margin-bottom: ${props => props.theme.spacing.large || '20px'};
  gap: ${props => props.theme.spacing.medium || '16px'};
`;

export const StatItemText = styled.div`
  font-size: 1rem;
  color: ${props => props.theme.colors.text.secondary || '#333'};
  text-align: center;
`;

export const ContentSectionContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: ${props => props.theme.spacing.large || '20px'};
`;

export const SectionTitleText = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: ${props => props.theme.spacing.medium || '15px'};
  color: ${props => props.theme.colors.text.primary || '#222'};
`;

export const ContentFiltersContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${props => props.theme.spacing.medium || '20px'};
  gap: ${props => props.theme.spacing.small || '8px'};
`;

export const FilterButton = styled.button`
  padding: ${props => props.theme.spacing.small} ${props => props.theme.spacing.medium};
  background-color: ${props => props.isActive 
    ? props.theme.colors.accent || '#007bff'
    : props.theme.colors.background.primary || '#f0f0f0'};
  border: 1px solid ${props => props.isActive 
    ? props.theme.colors.accent || '#007bff'
    : props.theme.colors.background.accent || '#ccc'};
  border-radius: ${props => props.theme.borderRadius.small || '4px'};
  cursor: pointer;
  color: ${props => props.isActive 
    ? props.theme.colors.text.primary || 'white'
    : props.theme.colors.text.secondary || '#333'};
  
  &:hover {
    background-color: ${props => props.isActive 
      ? '#0056b3'
      : '#e0e0e0'};
  }
`;

export const PostsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.medium || '15px'};
`;

export const PostItemContainer = styled.div`
  padding: ${props => props.theme.spacing.medium || '15px'};
  border: 1px solid ${props => props.theme.colors.background.accent || '#ddd'};
  border-radius: ${props => props.theme.borderRadius.medium || '8px'};
  background-color: ${props => props.theme.colors.background.primary || '#fff'};
  box-shadow: ${props => props.theme.shadows.small};
`;

export const PostTitleText = styled.h3`
  margin: 0 0 ${props => props.theme.spacing.small || '10px'} 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary || '#333'};
`;

export const PostContentText = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.colors.text.secondary || '#444'};
  line-height: 1.6;
`;

export const MusicGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: ${props => props.theme.spacing.medium || '15px'};
`;

export const AlbumItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${props => props.theme.spacing.small};
  background-color: ${props => props.theme.colors.background.primary || '#fff'};
  border-radius: ${props => props.theme.borderRadius.medium || '8px'};
  box-shadow: ${props => props.theme.shadows.small};
`;

export const AlbumItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: ${props => props.theme.borderRadius.small || '4px'};
  margin-bottom: ${props => props.theme.spacing.small || '5px'};
`;

export const AlbumItemTitleText = styled.h4`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.text.primary || '#333'};
  font-weight: 500;
`;

// Music List styles for horizontal album items
export const MusicListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.medium || '15px'};
`;

export const MusicListItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: ${props => props.theme.spacing.medium || '15px'};
  border: 1px solid ${props => props.theme.colors.background.accent || '#ddd'};
  border-radius: ${props => props.theme.borderRadius.medium || '8px'};
  background-color: ${props => props.theme.colors.background.primary || '#fff'};
  box-shadow: ${props => props.theme.shadows.small};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: ${props => props.theme.shadows.medium || '0 4px 8px rgba(0,0,0,0.1)'};
    transform: translateY(-2px);
  }
`;

export const MusicListAlbumImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: ${props => props.theme.borderRadius.small || '4px'};
  margin-right: ${props => props.theme.spacing.medium || '15px'};
  flex-shrink: 0;
`;

export const MusicListAlbumInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const MusicListAlbumTitle = styled.h4`
  font-size: 1.1rem;
  color: ${props => props.theme.colors.text.primary || '#333'};
  font-weight: 600;
  margin: 0 0 ${props => props.theme.spacing.small || '5px'} 0;
`;

export const MusicListAlbumArtist = styled.p`
  font-size: 0.95rem;
  color: ${props => props.theme.colors.text.secondary || '#666'};
  margin: 0;
  font-weight: 400;
`;

// Legacy styles removed - now using styled-components above
