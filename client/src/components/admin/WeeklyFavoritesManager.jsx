import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { musicApi } from '../../api/music';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { firestore } from '../../config/firebase';

const Container = styled.div`
  background: ${props => props.theme.colors.surface.secondary};
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: 1rem;
`;

const SearchContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.border.primary};
  background: ${props => props.theme.colors.surface.primary};
  color: ${props => props.theme.colors.text.primary};
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  border: none;
  background: ${props =>
    props.variant === 'danger'
      ? props.theme.colors.status.error
      : props.theme.colors.accent.primary};
  color: white;
  cursor: pointer;
  font-weight: 600;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;

const AlbumItem = styled.div`
  background: ${props => props.theme.colors.surface.primary};
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
`;

const AlbumImage = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 4px;
`;

const AlbumName = styled.div`
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ArtistName = styled.div`
  font-size: 0.9rem;
  color: ${props => props.theme.colors.text.secondary};
`;

const RemoveButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchResults = styled.div`
  margin-top: 1rem;
  border-top: 1px solid ${props => props.theme.colors.border.primary};
  padding-top: 1rem;
`;

const ResultItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  border-bottom: 1px solid ${props => props.theme.colors.border.primary};

  &:last-child {
    border-bottom: none;
  }
`;

const AddButton = styled(Button)`
  padding: 0.25rem 0.75rem;
  font-size: 0.9rem;
`;

const WeeklyFavoritesManager = () => {
  const [favorites, setFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    try {
      const docRef = doc(firestore, 'featuredPlaylists', 'weekly_favorites');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setFavorites(docSnap.data().albums || []);
      }
    } catch (error) {
      console.error('Error loading favorites:', error);
    }
  };

  const handleSearch = async e => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setLoading(true);
    try {
      const results = await musicApi.searchMusic(searchQuery, 'album');
      // Handle different response structures (MusicBrainz vs Spotify)
      const albums = results.albums?.items || results.albums || [];
      setSearchResults(albums);
    } catch (error) {
      console.error('Error searching:', error);
    } finally {
      setLoading(false);
    }
  };

  const addAlbum = async album => {
    // Normalize album data
    const newAlbum = {
      id: album.id,
      name: album.name || album.title,
      artist:
        album.artist ||
        album.artistName ||
        (album.artists ? album.artists[0].name : 'Unknown'),
      imageUrl: album.imageUrl || (album.images && album.images[0]?.url) || '',
    };

    // Avoid duplicates
    if (favorites.some(f => f.id === newAlbum.id)) return;

    const newFavorites = [...favorites, newAlbum];
    setFavorites(newFavorites);
    await saveFavorites(newFavorites);
    setSearchResults([]); // Clear search results
    setSearchQuery('');
  };

  const removeAlbum = async albumId => {
    const newFavorites = favorites.filter(a => a.id !== albumId);
    setFavorites(newFavorites);
    await saveFavorites(newFavorites);
  };

  const saveFavorites = async newFavorites => {
    setSaving(true);
    try {
      const docRef = doc(firestore, 'featuredPlaylists', 'weekly_favorites');
      await setDoc(
        docRef,
        {
          title: 'Our Favorites This Week',
          type: 'manual_album_list',
          albums: newFavorites,
          updatedAt: new Date().toISOString(),
        },
        { merge: true }
      );
    } catch (error) {
      console.error('Error saving favorites:', error);
      alert('Failed to save changes');
    } finally {
      setSaving(false);
    }
  };

  return (
    <Container>
      <Title>Manage "Our Favorites This Week"</Title>

      <SearchContainer>
        <form
          onSubmit={handleSearch}
          style={{ display: 'flex', gap: '1rem', flex: 1 }}
        >
          <Input
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder='Search for albums to add...'
          />
          <Button type='submit' disabled={loading}>
            {loading ? 'Searching...' : 'Search'}
          </Button>
        </form>
      </SearchContainer>

      {searchResults.length > 0 && (
        <SearchResults>
          <h3>Search Results</h3>
          {searchResults.map(album => (
            <ResultItem key={album.id}>
              <img
                src={album.imageUrl || (album.images && album.images[0]?.url)}
                alt={album.name}
                style={{ width: 40, height: 40, borderRadius: 4 }}
              />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600 }}>{album.name}</div>
                <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                  {album.artist || (album.artists ? album.artists[0].name : '')}
                </div>
              </div>
              <AddButton onClick={() => addAlbum(album)}>Add</AddButton>
            </ResultItem>
          ))}
        </SearchResults>
      )}

      <h3 style={{ marginTop: '2rem', color: 'white' }}>
        Current Selection ({favorites.length})
      </h3>
      <ListContainer>
        {favorites.map(album => (
          <AlbumItem key={album.id}>
            <RemoveButton onClick={() => removeAlbum(album.id)}>×</RemoveButton>
            <AlbumImage src={album.imageUrl} alt={album.name} />
            <AlbumName>{album.name}</AlbumName>
            <ArtistName>{album.artist}</ArtistName>
          </AlbumItem>
        ))}
      </ListContainer>
    </Container>
  );
};

export default WeeklyFavoritesManager;
