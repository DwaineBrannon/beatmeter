import React, { useState } from 'react';
import styled from 'styled-components';
import { PLAYLIST_PRESETS, applyPreset } from '../../config/homePagePlaylists';
import { useFeaturedPlaylists } from '../../hooks/useFeaturedPlaylists';

const PresetManager = styled.div`
  background: ${props => props.theme.colors.surface.secondary};
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
`;

const PresetGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;

const PresetCard = styled.div`
  background: ${props => props.theme.colors.surface.primary};
  border-radius: 8px;
  padding: 1.25rem;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 2px solid transparent;

  &:hover {
    border-color: ${props => props.theme.colors.accent};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  &.applying {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const PresetTitle = styled.h3`
  color: ${props => props.theme.colors.text.primary};
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
  font-weight: 600;
`;

const PresetDescription = styled.p`
  color: ${props => props.theme.colors.text.secondary};
  margin: 0 0 1rem 0;
  font-size: 0.9rem;
  line-height: 1.4;
`;

const PlaylistList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const PlaylistItem = styled.li`
  color: ${props => props.theme.colors.text.secondary};
  font-size: 0.8rem;
  padding: 0.2rem 0;

  &:before {
    content: '♪ ';
    color: ${props => props.theme.colors.accent};
    margin-right: 0.5rem;
  }
`;

const ApplyButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background: ${props => props.theme.colors.accent};
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 1rem;

  &:hover:not(:disabled) {
    background: ${props =>
      props.theme.colors.accentHover || props.theme.colors.accent};
    transform: translateY(-1px);
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
  }
`;

const StatusMessage = styled.div`
  padding: 1rem;
  border-radius: 6px;
  margin-top: 1rem;
  font-weight: 500;

  &.success {
    background: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
  }

  &.error {
    background: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
  }
`;

const QuickPresetManager = () => {
  const [applyingPreset, setApplyingPreset] = useState(null);
  const [statusMessage, setStatusMessage] = useState(null);
  const playlistService = useFeaturedPlaylists();

  const presetDescriptions = {
    default: 'Balanced mix of popular genres for general audience',
    weekend: 'Relaxed and upbeat vibes perfect for weekend listening',
    fitness: 'High-energy playlists to motivate your workout',
    focus: 'Calm, instrumental music ideal for work and study',
    party: 'Upbeat hits guaranteed to get people moving',
    evening: 'Mellow tunes for winding down after a long day',
  };

  const handleApplyPreset = async presetName => {
    setApplyingPreset(presetName);
    setStatusMessage(null);

    try {
      await applyPreset(presetName, playlistService);
      setStatusMessage({
        type: 'success',
        text: `Successfully applied "${presetName}" preset! Home page playlists updated.`,
      });
    } catch (error) {
      console.error('Error applying preset:', error);
      setStatusMessage({
        type: 'error',
        text: `Failed to apply preset: ${error.message}`,
      });
    } finally {
      setApplyingPreset(null);
    }
  };

  return (
    <PresetManager>
      <h2>Quick Playlist Presets</h2>
      <p>
        Instantly change home page playlists with one click. Each preset
        contains 6 carefully curated playlists.
      </p>

      {statusMessage && (
        <StatusMessage className={statusMessage.type}>
          {statusMessage.text}
        </StatusMessage>
      )}

      <PresetGrid>
        {Object.entries(PLAYLIST_PRESETS).map(([presetName, playlists]) => (
          <PresetCard
            key={presetName}
            className={applyingPreset === presetName ? 'applying' : ''}
            onClick={() => !applyingPreset && handleApplyPreset(presetName)}
          >
            <PresetTitle>
              {presetName.charAt(0).toUpperCase() + presetName.slice(1)}
            </PresetTitle>
            <PresetDescription>
              {presetDescriptions[presetName]}
            </PresetDescription>
            <PlaylistList>
              {playlists.slice(0, 4).map((playlist, index) => (
                <PlaylistItem key={index}>{playlist}</PlaylistItem>
              ))}
              {playlists.length > 4 && (
                <PlaylistItem>+ {playlists.length - 4} more...</PlaylistItem>
              )}
            </PlaylistList>
            <ApplyButton disabled={applyingPreset === presetName}>
              {applyingPreset === presetName
                ? 'Applying...'
                : 'Apply This Preset'}
            </ApplyButton>
          </PresetCard>
        ))}
      </PresetGrid>

      <div style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: '#666' }}>
        <strong>Note:</strong> Applying a preset will replace all current home
        page playlists. You can always switch back or manually adjust individual
        playlists below.
      </div>
    </PresetManager>
  );
};

export default QuickPresetManager;
