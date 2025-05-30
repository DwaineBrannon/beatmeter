import styled, { css } from 'styled-components';

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  padding: ${props => props.theme.spacing.medium} 0;
  overflow: hidden;
`;

export const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100px;
  pointer-events: none;
  z-index: 1;
  
  ${props => props.left && css`
    left: 0;
    background: linear-gradient(to right, ${props.theme.colors.background.primary}cc, transparent);
  `}
  
  ${props => props.right && css`
    right: 0;
    background: linear-gradient(to left, ${props.theme.colors.background.primary}cc, transparent);
  `}
`;

export const ScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
  gap: ${props => props.theme.spacing.large};
  padding: 0 ${props => props.theme.spacing.xlarge};
  user-select: none;
  justify-content: flex-start;
  cursor: ${props => props.isDragging ? 'grabbing' : 'grab'};
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CarouselContent = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.large};
`;

export const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  background: ${props => props.theme.colors.surface.secondary}cc;
  color: ${props => props.theme.colors.text.primary};
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  min-width: 48px;
  min-height: 48px;
  padding: 0;
  cursor: pointer;
  opacity: ${props => props.show ? 0.9 : 0};
  transition: all ${props => props.theme.transitions.normal};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${props => props.theme.spacing.large};
  line-height: 1;
  box-shadow: ${props => props.theme.shadows.small};
  aspect-ratio: 1;
  pointer-events: ${props => props.show ? 'auto' : 'none'};
  visibility: ${props => props.show ? 'visible' : 'hidden'};
  
  ${props => props.left && css`
    left: ${props.theme.spacing.medium};
  `}
  
  ${props => props.right && css`
    right: ${props.theme.spacing.medium};
  `}
  
  &:hover {
    opacity: ${props => props.show ? 1 : 0};
    transform: translateY(-50%) scale(1.1);
    background: ${props => props.theme.colors.surface.secondary}e6;
    box-shadow: ${props => props.theme.shadows.medium};
  }
`;
