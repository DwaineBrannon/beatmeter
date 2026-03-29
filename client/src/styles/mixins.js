// Common styled component patterns and utilities

import styled, { css } from 'styled-components';

// Common button styles
export const buttonBase = css`
  border: none;
  border-radius: ${props => props.theme.borderRadius.small || '4px'};
  cursor: pointer;
  font-family: inherit;
  font-weight: 600;
  transition: all 0.2s ease;
  padding: ${props => props.theme.spacing.small || '8px'}
    ${props => props.theme.spacing.medium || '16px'};

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const cardBase = css`
  background-color: ${props => props.theme.colors.surface.primary || '#fff'};
  border-radius: ${props => props.theme.borderRadius.medium || '8px'};
  box-shadow: ${props =>
    props.theme.shadows.small || '0 2px 4px rgba(0,0,0,0.1)'};
  padding: ${props => props.theme.spacing.medium || '16px'};
`;

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const flexBetween = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// Responsive breakpoints
export const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
  large: '1200px',
};

export const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${breakpoints[label]}) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

// Common animations
export const fadeIn = css`
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const hoverLift = css`
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;
