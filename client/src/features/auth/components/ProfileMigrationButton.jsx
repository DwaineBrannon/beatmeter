import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { migrateUserProfile } from '../utils/profileMigration';
import styled from 'styled-components';

const MigrationButton = styled.button`
  padding: 0.75rem 1rem;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  margin: 1rem 0;
  
  &:hover {
    background-color: #218838;
  }
  
  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
`;

const StatusMessage = styled.div`
  padding: 0.5rem;
  margin: 0.5rem 0;
  border-radius: 4px;
  
  &.success {
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
  }
  
  &.error {
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
  }
`;

/**
 * Temporary component to fix existing user profiles that are stuck in onboarding loop
 * This can be removed after all existing users have been migrated
 */
function ProfileMigrationButton() {
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleMigration = async () => {
    if (!currentUser) {
      setMessage('No user logged in');
      setMessageType('error');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      const success = await migrateUserProfile(currentUser.uid, currentUser);
      
      if (success) {
        setMessage('Profile successfully migrated! You can now use the app normally.');
        setMessageType('success');
        
        // Refresh the page after 2 seconds to clear the onboarding state
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        setMessage('Migration completed, but no changes were needed.');
        setMessageType('success');
      }
      
    } catch (error) {
      console.error('Migration error:', error);
      setMessage('Failed to migrate profile. Please try again.');
      setMessageType('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '1rem', textAlign: 'center' }}>
      <h3>Profile Migration</h3>
      <p>If you're stuck in the profile setup loop, click the button below to fix your account:</p>
      
      <MigrationButton 
        onClick={handleMigration} 
        disabled={loading}
      >
        {loading ? 'Migrating...' : 'Fix My Profile'}
      </MigrationButton>
      
      {message && (
        <StatusMessage className={messageType}>
          {message}
        </StatusMessage>
      )}
    </div>
  );
}

export default ProfileMigrationButton;
