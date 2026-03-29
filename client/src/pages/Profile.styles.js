import styled from 'styled-components';

export const ProfilePageContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${props =>
    props.theme?.colors?.background?.secondary ||
    '#15202b'}; /* Dark Twitter-like bg */
  padding: ${props => props.theme?.spacing?.large || '20px'};
  min-height: 100vh;
  color: #fff;
`;

export const MainColumn = styled.main`
  width: 600px; /* Twitter width is usually around 600px */
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme?.spacing?.large || '18px'};
  border-left: 1px solid
    ${props => props.theme?.colors?.border?.primary || '#38444d'};
  border-right: 1px solid
    ${props => props.theme?.colors?.border?.primary || '#38444d'};
  min-height: 100vh;
`;

export const Banner = styled.div`
  width: 100%;
  height: 200px;
  background: ${props =>
    props.$headerUrl
      ? `url(${props.$headerUrl}) center/cover no-repeat`
      : `linear-gradient(135deg, ${props.theme?.colors?.primary || '#4b6cb7'}, ${props.theme?.colors?.accent || '#182848'})`};
  position: relative;
`;

export const ProfileHeaderContainer = styled.div`
  position: relative;
  display: block;
  width: 100%;
  background: transparent;
  margin-bottom: 0;
  padding-bottom: 10px;
`;

export const HeaderInner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  position: relative;
`;

export const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: -75px; /* Overlap banner */
  margin-bottom: 12px;
  position: relative;
  z-index: 10;
`;

export const ProfilePicture = styled.img`
  width: 134px;
  height: 134px;
  border-radius: 50%;
  border: 4px solid
    ${props => props.theme?.colors?.background?.secondary || '#15202b'};
  object-fit: cover;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const UserNameText = styled.h1`
  margin: 0;
  font-size: 1.8rem;
  font-weight: 800;
  color: ${props => props.theme?.colors?.text?.primary || '#fff'};
`;

export const UserBioText = styled.p`
  margin: 12px 0;
  font-size: 1rem;
  line-height: 1.5;
  color: ${props => props.theme?.colors?.text?.primary || '#fff'};
  white-space: pre-wrap;
`;

export const EditProfileButton = styled.button`
  padding: 8px 16px;
  background-color: transparent;
  color: ${props => props.theme?.colors?.text?.primary || '#fff'};
  border: 1px solid ${props => props.theme?.colors?.border?.primary || '#555'};
  border-radius: 20px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.95rem;
  transition: background-color 0.2s;
  margin-bottom: 10px; /* Align with bottom of profile pic */

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const FollowButton = styled.button`
  padding: 8px 20px;
  color: ${props =>
    props.$isFollowing ? props.theme?.colors?.text?.primary || '#fff' : '#000'};
  border: 1px solid
    ${props =>
      props.$isFollowing
        ? props.theme?.colors?.border?.primary || '#555'
        : 'transparent'};
  background: ${props => (props.$isFollowing ? 'transparent' : '#fff')};
  border-radius: 20px;
  cursor: pointer;
  font-weight: 700;
  font-size: 0.95rem;
  margin-bottom: 10px;

  &:hover {
    opacity: 0.9;
  }
`;

export const ProfileStatsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 4px;
  color: ${props => props.theme?.colors?.text?.secondary || '#8899a6'};
  font-size: 0.95rem;
`;

export const StatItemText = styled.div`
  font-size: 0.95rem;
  color: ${props => props.theme?.colors?.text?.secondary || '#8899a6'};

  strong {
    color: ${props => props.theme?.colors?.text?.primary || '#fff'};
    font-weight: 700;
  }
`;

// Nav tabs under profile header (Posts / Replies / Media / Likes)
export const NavTabsContainer = styled.div`
  display: flex;
  justify-content: space-between; /* Distribute evenly or use gap */
  border-bottom: 1px solid
    ${props => props.theme?.colors?.border?.primary || '#2f3336'};
  margin-top: 10px;
`;

export const NavTabButton = styled.button`
  background: transparent;
  border: none;
  padding: 16px 0;
  flex: 1;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  color: ${props =>
    props.$isActive
      ? props.theme?.colors?.text?.primary || '#fff'
      : props.theme?.colors?.text?.secondary || '#8899a6'};
  position: relative;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: ${props => (props.$isActive ? '60px' : '0')};
    height: 4px;
    background-color: #ff007f; /* Pink accent */
    border-radius: 2px;
    transition: width 0.2s;
  }
`;

export const ContentSectionContainer = styled.section`
  background: transparent;
  padding: 0;
`;

export const SectionTitleText = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 0 6px 0;
  padding: 0 16px;
`;

export const ContentFiltersContainer = styled.div`
  display: flex;
  gap: 8px;
  padding: 8px 16px 16px 16px;
`;

export const FilterButton = styled.button`
  padding: 6px 10px;
  background: ${props =>
    props.$isActive ? props.theme?.colors?.accent || '#1d9bf0' : 'transparent'};
  color: ${props =>
    props.$isActive
      ? '#fff'
      : props.theme?.colors?.text?.secondary || '#475569'};
  border: 1px solid
    ${props =>
      props.$isActive
        ? 'transparent'
        : props.theme?.colors?.background?.accent || '#e6e9ef'};
  border-radius: 16px;
  cursor: pointer;
  font-weight: 600;
`;

export const PostsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 8px 8px 8px;
`;

// Keep album/music related styles but slightly tweaked for the card background
export const MusicGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 12px;
  padding: 8px 16px 16px 16px;
`;

export const AlbumItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${props => props.theme?.spacing?.small || '8px'};
  background-color: transparent;
  border-radius: ${props => props.theme?.borderRadius?.small || '8px'};

  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
`;

export const AlbumItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 8px;
`;

export const AlbumItemTitleText = styled.h4`
  font-size: 0.95rem;
  color: ${props => props.theme?.colors?.text?.primary || '#0f1724'};
  font-weight: 600;
  margin: 0;
`;

export const MusicListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme?.spacing?.medium || '12px'};
  padding: 8px 16px 16px 16px;
`;

export const MusicListItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px;
  border-radius: ${props => props.theme?.borderRadius?.small || '8px'};
  transition: transform 0.15s ease;
  cursor: pointer;
  &:hover {
    transform: translateY(-3px);
  }
`;

export const MusicListAlbumImage = styled.img`
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 6px;
  flex-shrink: 0;
`;

export const MusicListAlbumInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MusicListAlbumTitle = styled.h4`
  font-size: 1rem;
  margin: 0;
  font-weight: 700;
`;

export const MusicListAlbumArtist = styled.p`
  margin: 2px 0 0 0;
  color: ${props => props.theme?.colors?.text?.secondary || '#64748b'};
`;

// Light utility styles (post card spacing) - PostItem component will inherit these via container structure
export const PostCard = styled.div`
  display: flex;
  gap: 12px;
  padding: 16px;
  background: transparent;
  border-bottom: 1px solid
    ${props => props.theme?.colors?.border?.primary || '#38444d'};
  align-items: flex-start;
  transition: background 0.12s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.03);
    cursor: pointer;
  }
`;
