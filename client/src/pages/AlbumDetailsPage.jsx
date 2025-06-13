// filepath: c:\Users\Brody Roze\beatmeterweb\client\src\pages\AlbumDetailsPage.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import StarRating from '../features/music/components/StarRating';
import SongItem from '../features/music/components/SongItem';
import { addToCollection, updateSongRatings, addToRateLater } from '../features/music/services/collectionService';
import { useAuth } from '../features/auth/context/AuthContext';
import {
  PageContainer,
  AlbumTitle,
  AlbumArtist,
  AlbumRatingSection,
  TracksList,
  AlbumCoverContainer,
  AlbumCover,
  AlbumContent,
  TracksHeader,
  ActionButton,
  ActionButtonsContainer,
  RateLaterButton
} from './AlbumDetailsPage.styles';

// Placeholder for album data - replace with actual data fetching
const fetchAlbumDetails = async (albumId) => {
  // In a real app, you would fetch this from an API
  console.log(`Fetching details for album ID: ${albumId}`);
  
  // Fetch from the backend API with timeout handling
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 second timeout
    
    const response = await fetch(`/api/music/albums/${albumId}`, {
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data; // The backend should return data in the expected format
  } catch (error) {
    console.error("Could not fetch album details:", error);
    if (error.name === 'AbortError') {
      throw new Error('Request timed out. The server might be experiencing high load.');
    }
    throw error; // Rethrow so the calling function can handle it
  }
};

function AlbumDetailsPage() {
  const { albumId } = useParams();
  const navigate = useNavigate();
  const [album, setAlbum] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [retryCount, setRetryCount] = React.useState(0);  const [songRatings, setSongRatings] = React.useState({});
  const [albumRating, setAlbumRating] = React.useState(null);
  const { currentUser } = useAuth();
  const isAuthenticated = !!currentUser;
  const [addedToCollection, setAddedToCollection] = React.useState(false);
  const [addedToRateLater, setAddedToRateLater] = React.useState(false);
  const [apiError, setApiError] = React.useState(null);

  React.useEffect(() => {
    const loadAlbumData = async () => {
      try {
        setLoading(true);
        setError(null);
        const details = await fetchAlbumDetails(albumId);
        if (details) {
          setAlbum(details);
          // Initialize ratings if they come from the backend/data source
          setAlbumRating(details.initialAlbumRating || null);
          setSongRatings(details.initialSongRatings || {});
        } else {
          setError('Album not found');
        }
      } catch (err) {
        console.error("Error fetching album details:", err);
        setError('Failed to load album details. API may be temporarily unavailable.');
      } finally {
        setLoading(false);
      }
    };

    if (albumId) {
      loadAlbumData();
    }
  }, [albumId, retryCount]);
  
  // Calculate average album rating from song ratings
  React.useEffect(() => {
    if (album && album.tracks && album.tracks.length > 0) {
      const ratedSongs = Object.values(songRatings).filter(rating => rating !== null && rating > 0);
      if (ratedSongs.length > 0) {
        const totalRating = ratedSongs.reduce((sum, rating) => sum + rating, 0);
        const average = totalRating / ratedSongs.length;
        // Always update album rating based on song ratings
        // This ensures album rating reflects the current song ratings
        setAlbumRating(Math.round(average * 2) / 2); // Round to nearest 0.5
      } else {
        setAlbumRating(null); // No ratings yet
      }
    }
  }, [songRatings, album]);

  const handleRateSong = (songId, rating) => {
    setSongRatings(prevRatings => ({
      ...prevRatings,
      [songId]: rating,
    }));
    
    // Persist this rating if needed
    try {
      // Update song rating in the backend (this is optional for now)
      console.log(`Rated song ${songId} with ${rating} stars`);
      // In production, uncomment:
      // updateSongRatings(albumId, { ...songRatings, [songId]: rating });
    } catch (error) {
      console.error('Error saving song rating:', error);
    }
  };
  
  const handleAddToCollection = async () => {
    try {
      setApiError(null);
      console.log(`Adding album ${album.name} to user's collection with rating: ${albumRating}`);
      
      // For demo purposes, we'll simulate the API call
      // In production, uncomment the following:
      /*
      await addToCollection({
        albumId: album.id,
        name: album.name,
        artistName: album.artistName,
        imageUrl: album.imageUrl,
        rating: albumRating,
        songRatings: songRatings
      });
      */
      
      // For now, just simulate success
      setAddedToCollection(true);
      
      // Show success message and optionally redirect
      setTimeout(() => {
        setAddedToCollection(false);
        // Success Message to user
        alert('Album added to your collection successfully!');
      }, 3000);
    } catch (error) {
      console.error('Error adding album to collection:', error);
      
      // Display appropriate error message based on the error
      if (error.name === 'AbortError') {
        setApiError('Request timed out. Please try again later.');
      } else {
        setApiError('Failed to add album to collection. Please try again.');
      }
      
      // Clear error after a few seconds
      setTimeout(() => {
        setApiError(null);
      }, 5000);
    }
  };

  const handleAddToRateLater = async () => {
    try {
      setApiError(null);
      console.log(`Adding album ${album.name} to user's Rate Later list`);
      
      // For demo purposes, we'll simulate the API call
      // In production, uncomment the following:
      /*
      await addToRateLater({
        albumId: album.id,
        name: album.name,
        artistName: album.artistName,
        imageUrl: album.imageUrl
      });
      */
      
      // For now, just simulate success
      setAddedToRateLater(true);
      
      // Show success message and optionally reset after a few seconds
      setTimeout(() => {
        setAddedToRateLater(false);
        // Optional: redirect to rate later page
        // navigate('/rate-later');
      }, 3000);
    } catch (error) {
      console.error('Error adding album to Rate Later list:', error);
      
      // Display appropriate error message based on the error
      if (error.name === 'AbortError') {
        setApiError('Request timed out. Please try again later.');
      } else {
        setApiError('Failed to add album to Rate Later list. Please try again.');
      }
      
      // Clear error after a few seconds
      setTimeout(() => {
        setApiError(null);
      }, 5000);
    }
  };

  const handleRetry = () => {
    setRetryCount(prevCount => prevCount + 1);
  };

  if (loading) {
    return <PageContainer>Loading album details...</PageContainer>;
  }

  if (error) {
    return (
      <PageContainer>
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <h2>Error</h2>
          <p>{error}</p>
          <ActionButton onClick={handleRetry}>
            Retry Loading
          </ActionButton>
        </div>
      </PageContainer>
    );
  }

  if (!album) {
    return <PageContainer>Album not found.</PageContainer>;
  }
  
  return (
    <PageContainer>
      <AlbumCoverContainer>
        <AlbumCover src={album.imageUrl} alt={album.name} />
      </AlbumCoverContainer>
      
      <AlbumTitle>{album.name}</AlbumTitle>
      <AlbumArtist>{album.artistName}</AlbumArtist>
      
      <AlbumRatingSection>
        <h3>Album Rating</h3>
        <StarRating
          initialRating={albumRating}
          readOnly={true} // Make it read-only since rating is calculated from songs
          size={30} // Adjust size as needed
        />      
        <ActionButtonsContainer>
          <ActionButton
            onClick={handleAddToCollection}
            disabled={!albumRating || !isAuthenticated}
          >
            {addedToCollection ? 'Added to Collection' : 'Add to Collection'}
          </ActionButton>
          <RateLaterButton
            onClick={handleAddToRateLater}
            disabled={!isAuthenticated}
          >
            {addedToRateLater ? 'Added to Rate Later' : 'Rate Later'}
          </RateLaterButton>
        </ActionButtonsContainer>
        {apiError && (
          <p style={{ color: '#ff6b6b', margin: '10px 0', fontSize: '0.9rem' }}>
            {apiError}
          </p>
        )}
        <p style={{ fontSize: '0.9rem', marginTop: '5px', color: 'rgba(255,255,255,0.7)' }}>
          (Average of song ratings)
        </p>
      </AlbumRatingSection>

      <AlbumContent>
        <TracksHeader>Tracks</TracksHeader>
        <TracksList>
          {album.tracks.map((track, index) => (
            <SongItem
              key={track.id}
              track={track}
              index={index}
              currentRating={songRatings[track.id] !== undefined ? songRatings[track.id] : null}
              onRateSong={handleRateSong}
            />
          ))}
        </TracksList>
      </AlbumContent>
    </PageContainer>
  );
}

export default AlbumDetailsPage;
