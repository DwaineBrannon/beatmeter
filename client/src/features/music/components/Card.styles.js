import { theme } from '../../../styles/theme';

export const cardStyles = {
  container: {
    minWidth: 180,
    maxWidth: 200,
    background: theme.colors.background.secondary,
    borderRadius: theme.borderRadius.medium,
    boxShadow: theme.shadows.small,
    overflow: 'hidden',
    textAlign: 'center',
    margin: `0 ${theme.spacing.medium}`
  },
  image: {
    width: '100%',
    height: 180,
    objectFit: 'cover'
  },
  content: {
    padding: theme.spacing.medium
  },
  title: {
    fontWeight: 'bold',
    color: theme.colors.text.primary
  },
  subtitle: {
    color: theme.colors.text.secondary
  }
}; 