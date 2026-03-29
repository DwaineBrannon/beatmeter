import React, { useState } from 'react';
import { useAuth } from '../features/auth/context/AuthContext';
import { useFeaturedPlaylists } from '../hooks/useFeaturedPlaylists';
import WeeklyFavoritesManager from '../components/admin/WeeklyFavoritesManager';
import styled from 'styled-components';

const AdminContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  color: ${props => props.theme.colors.text.secondary};
`;

const Section = styled.div`
  background: ${props => props.theme.colors.surface.secondary};
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const FormRow = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-end;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Label = styled.label`
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid ${props => props.theme.colors.border.primary};
  border-radius: 8px;
  background: ${props => props.theme.colors.surface.primary};
  color: ${props => props.theme.colors.text.primary};
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.accent.primary};
  }
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &.primary {
    background: ${props => props.theme.colors.accent.primary};
    color: white;

    &:hover:not(:disabled) {
      background: ${props => props.theme.colors.accent.secondary};
    }
  }

  &.secondary {
    background: ${props => props.theme.colors.surface.tertiary};
    color: ${props => props.theme.colors.text.primary};
    border: 1px solid ${props => props.theme.colors.border.primary};

    &:hover:not(:disabled) {
      background: ${props => props.theme.colors.surface.primary};
    }
  }

  &.danger {
    background: #e74c3c;
    color: white;

    &:hover:not(:disabled) {
      background: #c0392b;
    }
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const PlaylistList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const PlaylistItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: ${props => props.theme.colors.surface.primary};
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.border.primary};
`;

const PlaylistInfo = styled.div`
  flex: 1;
`;

const PlaylistTitle = styled.h3`
  color: ${props => props.theme.colors.text.primary};
  margin: 0 0 0.25rem 0;
  font-size: 1.1rem;
`;

const PlaylistMeta = styled.p`
  color: ${props => props.theme.colors.text.secondary};
  margin: 0;
  font-size: 0.9rem;
`;

const PlaylistActions = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const StatusBadge = styled.span`
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;

  &.active {
    background: #27ae60;
    color: white;
  }

  &.inactive {
    background: #95a5a6;
    color: white;
  }
`;

const ErrorMessage = styled.div`
  background: #e74c3c;
  color: white;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const LoadingMessage = styled.div`
  color: ${props => props.theme.colors.text.secondary};
  text-align: center;
  padding: 2rem;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 2rem;
  color: ${props => props.theme.colors.text.secondary};
`;

function AdminDashboard() {
  const { currentUser } = useAuth();
  const {
    playlists,
    loading,
    error,
    addPlaylist,
    deletePlaylist,
    toggleStatus,
  } = useFeaturedPlaylists();

  const [formData, setFormData] = useState({
    spotifyUrl: '',
    title: '',
    description: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Check if user is admin
  if (currentUser?.userRole !== 'admin') {
    return (
      <AdminContainer>
        <Header>
          <Title>Access Denied</Title>
          <Subtitle>You don't have permission to access this page.</Subtitle>
        </Header>
      </AdminContainer>
    );
  }

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (!formData.spotifyUrl.trim()) {
      alert('Please enter a Spotify playlist URL');
      return;
    }

    setIsSubmitting(true);

    try {
      await addPlaylist(
        formData.spotifyUrl.trim(),
        formData.title.trim() || undefined,
        formData.description.trim() || undefined
      );

      // Reset form
      setFormData({
        spotifyUrl: '',
        title: '',
        description: '',
      });

      alert('Playlist added successfully!');
    } catch (err) {
      alert(`Failed to add playlist: ${err.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async playlistId => {
    if (!confirm('Are you sure you want to delete this playlist?')) {
      return;
    }

    try {
      await deletePlaylist(playlistId);
      alert('Playlist deleted successfully!');
    } catch (err) {
      alert(`Failed to delete playlist: ${err.message}`);
    }
  };

  const handleToggleStatus = async playlistId => {
    try {
      await toggleStatus(playlistId);
    } catch (err) {
      alert(`Failed to toggle playlist status: ${err.message}`);
    }
  };

  return (
    <AdminContainer>
      <Header>
        <Title>Admin Dashboard</Title>
        <Subtitle>Manage featured playlists on the home page</Subtitle>
      </Header>

      <WeeklyFavoritesManager />

      {error && <ErrorMessage>{error}</ErrorMessage>}

      <Section>
        <SectionTitle>Add Featured Playlist</SectionTitle>
        <Form onSubmit={handleSubmit}>
          <FormRow>
            <FormGroup>
              <Label htmlFor='spotifyUrl'>Spotify Playlist URL *</Label>
              <Input
                type='text'
                id='spotifyUrl'
                name='spotifyUrl'
                value={formData.spotifyUrl}
                onChange={handleInputChange}
                placeholder='https://open.spotify.com/playlist/...'
                required
              />
            </FormGroup>
            <Button type='submit' className='primary' disabled={isSubmitting}>
              {isSubmitting ? 'Adding...' : 'Add Playlist'}
            </Button>
          </FormRow>
          <FormRow>
            <FormGroup>
              <Label htmlFor='title'>Custom Title (optional)</Label>
              <Input
                type='text'
                id='title'
                name='title'
                value={formData.title}
                onChange={handleInputChange}
                placeholder='Leave empty to use Spotify playlist name'
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor='description'>Description (optional)</Label>
              <Input
                type='text'
                id='description'
                name='description'
                value={formData.description}
                onChange={handleInputChange}
                placeholder='Brief description of the playlist'
              />
            </FormGroup>
          </FormRow>
        </Form>
      </Section>

      <Section>
        <SectionTitle>Current Featured Playlists</SectionTitle>

        {loading ? (
          <LoadingMessage>Loading playlists...</LoadingMessage>
        ) : playlists.length === 0 ? (
          <EmptyState>
            No featured playlists yet. Add your first playlist above!
          </EmptyState>
        ) : (
          <PlaylistList>
            {playlists.map(playlist => (
              <PlaylistItem key={playlist.id}>
                <PlaylistInfo>
                  <PlaylistTitle>{playlist.title}</PlaylistTitle>
                  <PlaylistMeta>
                    ID: {playlist.id} •
                    {playlist.description && ` ${playlist.description} • `}
                    <a
                      href={playlist.spotifyUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      style={{ color: '#1db954' }}
                    >
                      View on Spotify
                    </a>
                  </PlaylistMeta>
                </PlaylistInfo>
                <PlaylistActions>
                  <StatusBadge
                    className={playlist.isActive ? 'active' : 'inactive'}
                  >
                    {playlist.isActive ? 'Active' : 'Inactive'}
                  </StatusBadge>
                  <Button
                    className='secondary'
                    onClick={() => handleToggleStatus(playlist.id)}
                  >
                    {playlist.isActive ? 'Disable' : 'Enable'}
                  </Button>
                  <Button
                    className='danger'
                    onClick={() => handleDelete(playlist.id)}
                  >
                    Delete
                  </Button>
                </PlaylistActions>
              </PlaylistItem>
            ))}
          </PlaylistList>
        )}
      </Section>
    </AdminContainer>
  );
}

export default AdminDashboard;
