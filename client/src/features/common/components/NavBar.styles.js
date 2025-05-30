import styled, { css, keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

// Animations
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// Root navbar container
export const NavBarRoot = styled.nav`
  width: 100vw;
  left: 0;
  background: ${props => props.theme.colors.background.secondary || '#222'};
  border-bottom: 1px solid ${props => props.theme.colors.background.accent || 'rgba(255,255,255,0.1)'};
  position: sticky;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
`;

export const NavBarInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px ${props => props.theme.spacing.xlarge || '32px'};
  position: relative;

  @media (max-width: 767px) {
    padding: 12px 12px;
  }
`;

export const NavBarLeft = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.large || '24px'};
  flex: 1;
`;

export const NavBarLogo = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.text.primary || '#fff'};
  font-size: 1.8rem;
  font-weight: bold;
  letter-spacing: -0.5px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export const NavBarSearchForm = styled.form`
  flex: 1;
  max-width: 400px;

  @media (max-width: 767px) {
    max-width: 180px;
  }
`;

export const NavBarSearchInput = styled.input`
  width: 100%;
  padding: 8px 16px;
  border-radius: ${props => props.theme.borderRadius.medium || '12px'};
  border: 1px solid ${props => props.theme.colors.background.accent || 'rgba(255,255,255,0.1)'};
  background: rgba(255,255,255,0.05);
  color: ${props => props.theme.colors.text.primary || '#fff'};
  font-size: 0.9rem;
  transition: all 0.2s;
  outline: none;

  &:focus {
    border-color: rgba(255,255,255,0.2);
    background: rgba(255,255,255,0.08);
  }

  &::placeholder {
    color: ${props => props.theme.colors.text.secondary || 'rgba(255,255,255,0.7)'};
  }
`;

export const NavBarLinks = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.large || '24px'};
  align-items: center;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const NavBarLink = styled(Link)`
  color: ${props => props.theme.colors.text.secondary || 'rgba(255,255,255,0.7)'};
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.2s;
  padding: 4px 8px;
  border-radius: ${props => props.theme.borderRadius.small || '8px'};

  &:hover {
    color: ${props => props.theme.colors.text.primary || '#fff'};
    background: rgba(255,255,255,0.05);
  }
`;

export const NavBarLinkCTA = styled(NavBarLink)`
  background: ${props => props.theme.colors.background.accent || 'rgba(255,255,255,0.1)'};
  padding: 8px 16px;
  border-radius: ${props => props.theme.borderRadius.medium || '12px'};
  color: ${props => props.theme.colors.text.primary || '#fff'};
  font-weight: 500;

  &:hover {
    background: rgba(255,255,255,0.15);
  }
`;

export const NavBarDivider = styled.div`
  width: 1px;
  height: 20px;
  background: ${props => props.theme.colors.background.accent || 'rgba(255,255,255,0.1)'};
`;

// Hamburger menu
export const NavBarHamburger = styled.button`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1100;
  margin-left: 16px;

  span {
    display: block;
    width: 28px;
    height: 4px;
    background: #fff;
    border-radius: 2px;
    margin-bottom: 5px;
    transition: all 0.3s;

    &:last-child {
      width: 20px;
      margin-bottom: 0;
    }
  }

  ${props => props.$isOpen && css`
    span:nth-child(1) {
      transform: translateY(9px) rotate(45deg);
    }

    span:nth-child(2) {
      opacity: 0;
    }

    span:nth-child(3) {
      transform: translateY(-9px) rotate(-45deg);
      width: 28px;
    }
  `}

  @media (max-width: 767px) {
    display: flex;
  }
`;

export const NavBarOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.5);
  z-index: 1050;
  animation: ${fadeIn} 0.2s;
`;

export const NavBarMobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: ${props => props.open ? '0' : '-320px'};
  width: 280px;
  height: 100vh;
  background: ${props => props.theme.colors.background.secondary || '#222'};
  box-shadow: ${props => props.theme.shadows.medium || '0 4px 24px rgba(0,0,0,0.3)'};
  display: none;
  flex-direction: column;
  gap: 16px;
  padding: 48px 0 16px 0;
  z-index: 1200;
  border-top-left-radius: ${props => props.theme.borderRadius.large || '16px'};
  border-bottom-left-radius: ${props => props.theme.borderRadius.large || '16px'};
  transition: right 0.3s cubic-bezier(.4,0,.2,1);

  @media (max-width: 767px) {
    display: flex;
  }
`;

export const NavBarMobileLink = styled(Link)`
  color: ${props => props.theme.colors.text.primary || '#fff'};
  text-decoration: none;
  font-size: 1.1rem;
  padding: 14px 32px;
  border-radius: ${props => props.theme.borderRadius.small || '8px'};
  transition: background 0.2s;
  text-align: left;
  margin: 0;
  display: block;

  &:hover {
    background: rgba(255,255,255,0.08);
  }
`;

export const NavBarMobileLinkCTA = styled(NavBarMobileLink)`
  background: ${props => props.theme.colors.background.accent || 'rgba(255,255,255,0.1)'};
  color: ${props => props.theme.colors.text.primary || '#fff'};
  font-weight: 500;
  text-align: center;
  margin: 0 24px;
  border-radius: ${props => props.theme.borderRadius.medium || '12px'};
  padding: 14px 0;
`;

// User avatar styles
export const NavBarAvatarContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const NavBarAvatarBtn = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin-left: 12px;
  cursor: pointer;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: box-shadow 0.2s;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${props => props.theme.colors.background.accent || 'rgba(255,255,255,0.1)'};
  }
`;

export const NavBarAvatarImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${props => props.theme.colors.background.accent || 'rgba(255,255,255,0.1)'};
`;

export const NavBarAvatarPlaceholder = styled.span`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${props => props.theme.colors.background.accent || 'rgba(255,255,255,0.1)'};
  color: ${props => props.theme.colors.text.primary || '#fff'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.1rem;
  border: 2px solid ${props => props.theme.colors.background.accent || 'rgba(255,255,255,0.1)'};
`;

export const NavBarUserDropdown = styled.div`
  position: absolute;
  top: 48px;
  right: 0;
  min-width: 170px;
  background: #232323;
  border-radius: ${props => props.theme.borderRadius.medium || '12px'};
  box-shadow: 0 8px 32px rgba(0,0,0,0.25);
  z-index: 1300;
  display: flex;
  flex-direction: column;
  padding: 8px 0;
  animation: ${fadeIn} 0.18s;

  @media (max-width: 767px) {
    top: 56px;
    right: 0;
    left: auto;
    min-width: 170px;
  }
`;

export const NavBarUserDropdownLink = styled(Link)`
  color: ${props => props.theme.colors.text.secondary || 'rgba(255,255,255,0.7)'};
  text-decoration: none;
  padding: 12px 20px;
  font-size: 1rem;
  border: none;
  background: none;
  text-align: left;
  cursor: pointer;
  transition: background 0.18s, color 0.18s;
  border-radius: ${props => props.theme.borderRadius.small || '8px'};
  outline: none;

  &:hover {
    background: rgba(255,255,255,0.07);
    color: ${props => props.theme.colors.text.primary || '#fff'};
  }
`;

export const NavBarUserDropdownButton = styled.button`
  color: ${props => props.isLogout ? '#ff6b6b' : props.theme.colors.text.secondary || 'rgba(255,255,255,0.7)'};
  text-decoration: none;
  padding: 12px 20px;
  font-size: 1rem;
  border: none;
  background: none;
  text-align: left;
  cursor: pointer;
  transition: background 0.18s, color 0.18s;
  border-radius: ${props => props.theme.borderRadius.small || '8px'};
  outline: none;
  font-weight: ${props => props.isLogout ? '500' : 'normal'};

  &:hover {
    background: rgba(255,255,255,0.07);
    color: ${props => props.isLogout ? '#ff6b6b' : props.theme.colors.text.primary || '#fff'};
  }
`;

export const NavBarMobileAvatarContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 24px;
  z-index: 1301;
  display: none;

  @media (max-width: 767px) {
    display: block;
  }
`;
