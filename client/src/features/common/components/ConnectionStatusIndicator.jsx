import { useState, useEffect } from 'react';
import styled from 'styled-components';

const ConnectivityBanner = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 8px 16px;
  background-color: ${props => props.isOnline ? '#2ecc71' : '#e74c3c'};
  color: white;
  text-align: center;
  font-size: 14px;
  z-index: 1000;
  display: ${props => props.show ? 'block' : 'none'};
  transition: transform 0.3s ease;
  transform: ${props => props.show ? 'translateY(0)' : 'translateY(100%)'};
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 0 8px;
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;

function ConnectionStatusIndicator() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showBanner, setShowBanner] = useState(false);
  const [hasSeenOfflineBanner, setHasSeenOfflineBanner] = useState(false);
  
  // Function to handle online/offline events
  const handleOnlineStatusChange = () => {
    const online = navigator.onLine;
    setIsOnline(online);
    
    // Show banner when:
    // 1. User goes offline
    // 2. User comes back online (but only if they've seen the offline banner)
    if (!online || (online && hasSeenOfflineBanner)) {
      setShowBanner(true);
      
      if (!online) {
        setHasSeenOfflineBanner(true);
      }
      
      // Auto-hide banner after some time if online
      if (online) {
        setTimeout(() => setShowBanner(false), 5000);
      }
    }
  };
  
  useEffect(() => {
    // Set up event listeners
    window.addEventListener('online', handleOnlineStatusChange);
    window.addEventListener('offline', handleOnlineStatusChange);
    
    // Clean up
    return () => {
      window.removeEventListener('online', handleOnlineStatusChange);
      window.removeEventListener('offline', handleOnlineStatusChange);
    };
  }, [hasSeenOfflineBanner]);
  
  if (!showBanner) return null;
  
  return (
    <ConnectivityBanner isOnline={isOnline} show={showBanner}>
      {isOnline ? 'You are back online! Content will now update automatically.' : 'You are currently offline. Some features may not be available.'}
      <CloseButton onClick={() => setShowBanner(false)}>×</CloseButton>
    </ConnectivityBanner>
  );
}

export default ConnectionStatusIndicator;
