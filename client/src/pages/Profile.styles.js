import { theme } from '../styles/theme';

export const profileStyles = {
  profilePageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing.large || '20px',
    backgroundColor: theme.colors.background.secondary || '#f4f4f4', // Example theme usage
  },
  profileHeaderContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing.large || '20px',
    width: '100%',
    maxWidth: '800px', // Example constraint
  },
  profilePicture: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    marginRight: theme.spacing.medium || '20px',
    objectFit: 'cover',
    border: `3px solid ${theme.colors.accent || '#007bff'}`, // Example theme usage
  },
  userInfoContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  userNameText: {
    margin: 0,
    fontSize: '2rem', // Larger username
    fontWeight: 'bold',
    color: theme.colors.text.primary || '#111',
  },
  userBioText: {
    fontSize: '1rem',
    color: theme.colors.text.secondary || '#555',
    marginTop: theme.spacing.small || '8px',
  },
  editProfileButton: {
    padding: `${theme.spacing.small} ${theme.spacing.medium}`,
    backgroundColor: theme.colors.accent || '#007bff',
    color: theme.colors.text.primary || 'white',
    border: 'none',
    borderRadius: theme.borderRadius.small || '4px',
    cursor: 'pointer',
    marginTop: theme.spacing.medium || '10px',
    fontWeight: '600',
    '&:hover': {
      backgroundColor: '#0056b3', // Darker shade for hover
    },
  },
  followButtonBase: {
    padding: `${theme.spacing.small} ${theme.spacing.medium}`,
    color: theme.colors.text.primary || 'white',
    border: 'none',
    borderRadius: theme.borderRadius.small || '4px',
    cursor: 'pointer',
    marginTop: theme.spacing.medium || '10px',
    fontWeight: '600',
  },
  followButtonActiveState: { // When user is already following (button shows "Unfollow")
    backgroundColor: '#ccc',
    '&:hover': {
      backgroundColor: '#bbb',
    },
  },
  followButtonInactiveState: { // When user is not following (button shows "Follow")
    backgroundColor: theme.colors.accent || '#28a745',
    '&:hover': {
      backgroundColor: '#1e7e34', // Darker shade
    },
  },
  profileStatsContainer: {
    display: 'flex',
    justifyContent: 'space-around', // Or 'flex-start' with spacing
    width: '100%',
    maxWidth: '400px',
    marginBottom: theme.spacing.large || '20px',
    gap: theme.spacing.medium || '16px', // For spacing between stat items
  },
  statItemText: {
    fontSize: '1rem',
    color: theme.colors.text.secondary || '#333',
    textAlign: 'center',
  },
  contentSectionContainer: { // A general container for Posts and Music sections
    width: '100%',
    maxWidth: '800px', // Example constraint
    marginTop: theme.spacing.large || '20px',
  },
  sectionTitleText: {
    fontSize: '1.75rem',
    fontWeight: '600',
    marginBottom: theme.spacing.medium || '15px',
    color: theme.colors.text.primary || '#222',
  },
  contentFiltersContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing.medium || '20px',
    gap: theme.spacing.small || '8px',
  },
  filterButton: {
    padding: `${theme.spacing.small} ${theme.spacing.medium}`,
    backgroundColor: theme.colors.background.primary || '#f0f0f0',
    border: `1px solid ${theme.colors.background.accent || '#ccc'}`,
    borderRadius: theme.borderRadius.small || '4px',
    cursor: 'pointer',
    color: theme.colors.text.secondary || '#333',
    '&:hover': {
      backgroundColor: '#e0e0e0', // Slightly darker on hover
    },
  },
  filterButtonActive: {
    // These styles are merged with filterButton for the active one
    backgroundColor: theme.colors.accent || '#007bff',
    color: theme.colors.text.primary || 'white',
    borderColor: theme.colors.accent || '#007bff',
    '&:hover': {
      backgroundColor: '#0056b3', // Darker shade of accent for hover on active
    },
  },
  postsListContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.medium || '15px',
  },
  postItemContainer: {
    padding: theme.spacing.medium || '15px',
    border: `1px solid ${theme.colors.background.accent || '#ddd'}`,
    borderRadius: theme.borderRadius.medium || '8px',
    backgroundColor: theme.colors.background.primary || '#fff',
    boxShadow: theme.shadows.small,
  },
  postTitleText: {
    margin: `0 0 ${theme.spacing.small || '10px'} 0`,
    fontSize: '1.25rem',
    fontWeight: '600',
    color: theme.colors.text.primary || '#333',
  },
  postContentText: {
    fontSize: '1rem',
    color: theme.colors.text.secondary || '#444',
    lineHeight: '1.6',
  },
  musicGridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
    gap: theme.spacing.medium || '15px',
  },
  albumItemContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: theme.spacing.small,
    backgroundColor: theme.colors.background.primary || '#fff',
    borderRadius: theme.borderRadius.medium || '8px',
    boxShadow: theme.shadows.small,
  },
  albumItemImage: {
    width: '100px',
    height: '100px',
    objectFit: 'cover',
    borderRadius: theme.borderRadius.small || '4px',
    marginBottom: theme.spacing.small || '5px',
  },
  albumItemTitleText: {
    fontSize: '0.9rem',
    color: theme.colors.text.primary || '#333',
    fontWeight: '500',
  },
};
