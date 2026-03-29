import React, { useState } from 'react';
import styled from 'styled-components';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const PlaylistManager = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 2rem;
`;

const QuickAddSection = styled.div`
  background: ${props => props.theme.colors.surface.secondary};
  padding: 1.5rem;
  border-radius: 12px;
`;

const PlaylistGrid = styled.div`
  background: ${props => props.theme.colors.surface.secondary};
  padding: 1.5rem;
  border-radius: 12px;
`;

const QuickAddButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 1rem;
`;

const GenreButton = styled.button`
  padding: 1rem;
  background: ${props => props.theme.colors.accent};
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

const PlaylistPreview = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  background: ${props => props.theme.colors.surface.primary};
  border-radius: 8px;
  margin-bottom: 0.5rem;
  border-left: 4px solid ${props => (props.isActive ? '#1db954' : '#ccc')};
`;

const PlaylistInfo = styled.div`
  flex: 1;
  margin-right: 1rem;
`;

const PlaylistActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ActionButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  transition: all 0.2s ease;

  &.toggle {
    background: ${props => (props.isActive ? '#dc3545' : '#28a745')};
    color: white;
  }

  &.delete {
    background: #dc3545;
    color: white;
  }

  &.preview {
    background: #6c757d;
    color: white;
  }

  &:hover {
    opacity: 0.8;
  }
`;

// Enhanced Admin Dashboard Component
const EnhancedPlaylistManager = () => {
  const [playlists, setPlaylists] = useState([]);

  const curated = {
    'Chill Vibes': 'https://open.spotify.com/playlist/37i9dQZF1DWU0ScTcjJBdj',
    'Workout Hits': 'https://open.spotify.com/playlist/37i9dQZF1DWUVpAXiEPK8P',
    'Indie Rock': 'https://open.spotify.com/playlist/37i9dQZF1DX2Nc3B70tvx0',
    'Hip Hop Central':
      'https://open.spotify.com/playlist/37i9dQZF1DX0XUsuxWHRQd',
    'Pop Rising': 'https://open.spotify.com/playlist/37i9dQZF1DWUa8ZRTMdJGJ',
    'Electronic Focus':
      'https://open.spotify.com/playlist/37i9dQZF1DX0r3x8OtiwEM',
  };

  const handleQuickAdd = async (title, url) => {
    try {
      await addFeaturedPlaylist(url, title, `Curated ${title} playlist`);
      // Refresh playlists
    } catch (error) {
      console.error('Failed to add playlist:', error);
    }
  };

  const handleDragEnd = result => {
    if (!result.destination) return;

    // Reorder playlists logic here
    const items = Array.from(playlists);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setPlaylists(items);
    // Update order in database
  };

  return (
    <PlaylistManager>
      <QuickAddSection>
        <h3>Quick Add Curated Playlists</h3>
        <QuickAddButtons>
          {Object.entries(curated).map(([title, url]) => (
            <GenreButton key={title} onClick={() => handleQuickAdd(title, url)}>
              + {title}
            </GenreButton>
          ))}
        </QuickAddButtons>
      </QuickAddSection>

      <PlaylistGrid>
        <h3>Active Playlists (Drag to Reorder)</h3>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId='playlists'>
            {provided => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {playlists.map((playlist, index) => (
                  <Draggable
                    key={playlist.id}
                    draggableId={playlist.id}
                    index={index}
                  >
                    {provided => (
                      <PlaylistPreview
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        isActive={playlist.isActive}
                      >
                        <PlaylistInfo>
                          <h4>{playlist.title}</h4>
                          <p>{playlist.description}</p>
                        </PlaylistInfo>
                        <PlaylistActions>
                          <ActionButton
                            className='preview'
                            onClick={() =>
                              window.open(playlist.spotifyUrl, '_blank')
                            }
                          >
                            Preview
                          </ActionButton>
                          <ActionButton
                            className='toggle'
                            isActive={playlist.isActive}
                          >
                            {playlist.isActive ? 'Hide' : 'Show'}
                          </ActionButton>
                          <ActionButton className='delete'>Delete</ActionButton>
                        </PlaylistActions>
                      </PlaylistPreview>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </PlaylistGrid>
    </PlaylistManager>
  );
};

export default EnhancedPlaylistManager;
