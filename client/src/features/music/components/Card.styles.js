import styled from 'styled-components';

export const CardContainer = styled.div`
  min-width: 180px;
  max-width: 200px;
  background: ${props => props.theme.colors.background.secondary || '#1a1a1a'};
  border-radius: ${props => props.theme.borderRadius.medium || '12px'};
  box-shadow: ${props => props.theme.shadows.small || '0 2px 8px rgba(0,0,0,0.12)'};
  overflow: hidden;
  text-align: center;
  margin: 0 ${props => props.theme.spacing.medium || '16px'};
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.medium || '0 4px 24px rgba(0,0,0,0.3)'};
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: ${props => props.theme.spacing.medium || '16px'};
`;

export const CardTitle = styled.h3`
  font-weight: bold;
  color: ${props => props.theme.colors.text.primary || '#fff'};
  margin: 0 0 ${props => props.theme.spacing.small || '8px'} 0;
  font-size: 1rem;
`;

export const CardSubtitle = styled.p`
  color: ${props => props.theme.colors.text.secondary || 'rgba(255,255,255,0.7)'};
  margin: 0;
  font-size: 0.9rem;
`;

// Legacy styles removed - now using styled-components above