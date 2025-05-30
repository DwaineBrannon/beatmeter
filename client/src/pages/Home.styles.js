import styled, { keyframes } from 'styled-components';

// Animations
const fadeIn = keyframes`
  from { 
    opacity: 0; 
    transform: translateY(20px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
`;

const waveMove = keyframes`
  0% {
    background-position: 0 0, 0 50px, 50px -50px, -50px 0px;
  }
  100% {
    background-position: 100px 100px, 100px 150px, 150px 50px, 50px 100px;
  }
`;

export const Hero = styled.div`
  position: relative;
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #6B46C1 0%, #805AD5 50%, #9F7AEA 100%);
  color: white;
  overflow: hidden;
  padding: 2rem;
`;

export const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background: linear-gradient(135deg, rgba(155, 89, 182, 0.7) 0%, rgba(142, 68, 173, 0.7) 100%);
  opacity: 1;
  pointer-events: none;
  animation: ${waveMove} 20s linear infinite;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  animation: ${fadeIn} 1s ease-out;
`;

export const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(45deg, #fff, #E9D8FD);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

export const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  line-height: 1.8;
  margin-bottom: 2.5rem;
  opacity: 0.9;
`;

export const HeroButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: #6B46C1;
  background: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(107, 70, 193, 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(107, 70, 193, 0.3);
    background: #F7FAFC;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin: 2rem 0 1rem;
  padding-left: 1rem;
  color: ${props => props.theme.colors.text.primary || '#fff'};
`;

export const CarouselContainer = styled.div`
  padding: 1rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  background: rgba(15, 10, 26, 0.13);
  border-radius: ${props => props.theme.borderRadius.large || '24px'};
  box-shadow: 0 4px 24px rgba(72, 187, 120, 0.15), 0 4px 24px rgba(128, 90, 213, 0.15);
  border: none;
`;

export const SongsSection = styled(SectionTitle)`
  margin-top: 3rem;
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-size: 1.2rem;
  color: ${props => props.theme.colors.text.primary || '#fff'};
`;

export const Error = styled.div`
  color: #ff6b6b;
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
`;

export const HomeContainer = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.colors.background.primary || 'rgba(22, 25, 27, 0.95)'};
`;

// Legacy styles removed - now using styled-components above