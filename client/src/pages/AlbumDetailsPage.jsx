// filepath: c:\Users\Brody Roze\beatmeterweb\client\src\pages\AlbumDetailsPage.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import StarRating from '../features/music/components/StarRating';
import SongItem from '../features/music/components/SongItem';
import { addToCollection, updateSongRatings, addToRateLater } from '../features/music/services/collectionService';
import { useAuth } from '../features/auth/context/AuthContext';
import { createPost, POST_TYPES } from '../services/database/postService';
import { spotifyApi } from '../api/spotify';
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

// Fetch album details using the spotify API utility
const fetchAlbumDetails = async (albumId) => {
  console.log(`Fetching details for album ID: ${albumId}`);
  
  try {
    const data = await spotifyApi.getAlbumById(albumId);
    return data;
  } catch (error) {
    console.error("Could not fetch album details:", error);
    throw error;
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
  const [showReviewModal, setShowReviewModal] = React.useState(false);
  const [reviewText, setReviewText] = React.useState('');
  const [isCreatingReview, setIsCreatingReview] = React.useState(false);

  React.useEffect(() => {
    const loadAlbumData = async () => {
      try {
        setLoading(true);
        setError(null);
        const details = await fetchAlbumDetails(albumId);
        if (details) {
          // Ensure tracks is always an array
          const safeDetails = {
            ...details,
            tracks: Array.isArray(details.tracks) 
              ? details.tracks 
              : (details.tracks?.items || []),
            // Ensure imageUrl is available - fallback to images array if needed
            imageUrl: details.imageUrl || details.images?.[0]?.url || null,
            // Ensure artistName is available
            artistName: details.artistName || details.artists?.[0]?.name || 'Unknown Artist'
          };
          
          console.log('Album details loaded:', safeDetails);
          setAlbum(safeDetails);
          
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
      
      // Show review modal if user has rated the album
      if (albumRating && albumRating > 0) {
        setShowReviewModal(true);
        return; // Don't add to collection yet, wait for review
      }
      
      // If no rating, just add to collection without review
      await addToCollectionAndCreateReview();
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

  const addToCollectionAndCreateReview = async (reviewContent = '') => {
    try {
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
      
      // Create a review post if there's a rating and review content
      if (albumRating && albumRating > 0 && reviewContent.trim() && currentUser) {
        try {
          await createPost({
            userId: currentUser.uid,
            userDisplayName: currentUser.displayName || 'Anonymous',
            type: POST_TYPES.REVIEW,
            title: `${album.name} - ${album.artistName}`,
            content: reviewContent.trim(),
            albumId: album.id,
            albumData: {
              title: album.name,
              artist: album.artistName,
              cover: album.imageUrl
            },
            rating: albumRating
          });
          console.log('Review post created successfully');
        } catch (reviewError) {
          console.error('Error creating review post:', reviewError);
          // Don't fail the collection addition if review creation fails
        }
      }
      
      // For now, just simulate success
      setAddedToCollection(true);
      
      // Show success message and optionally redirect
      setTimeout(() => {
        setAddedToCollection(false);
        // Success Message to user
        alert('Album added to your collection successfully!');
      }, 3000);
    } catch (error) {
      throw error; // Re-throw to be handled by the calling function
    }
  };

  const handleReviewSubmit = async () => {
    setIsCreatingReview(true);
    try {
      await addToCollectionAndCreateReview(reviewText);
      setShowReviewModal(false);
      setReviewText('');
    } catch (error) {
      console.error('Error submitting review:', error);
      setApiError('Failed to add album and create review. Please try again.');
    } finally {
      setIsCreatingReview(false);
    }
  };

  const handleReviewCancel = async () => {
    setShowReviewModal(false);
    setReviewText('');
    // Still add to collection even without review
    try {
      await addToCollectionAndCreateReview('');
    } catch (error) {
      console.error('Error adding to collection:', error);
      setApiError('Failed to add album to collection. Please try again.');
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
        {album.imageUrl ? (
          <AlbumCover 
            src={album.imageUrl} 
            alt={album.name}
            onError={(e) => {
              console.log('Image failed to load:', album.imageUrl);
              e.target.style.display = 'none';
              // Show fallback
              e.target.nextSibling?.style?.setProperty('display', 'flex');
            }}
          />
        ) : null}
        <div style={{ 
          width: '100%', 
          height: '100%', 
          backgroundColor: '#333', 
          display: album.imageUrl ? 'none' : 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          color: '#666',
          borderRadius: '8px',
          fontSize: '14px'
        }}>
          {album.imageUrl ? 'Image failed to load' : 'No Image Available'}
        </div>
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
          {album.tracks && Array.isArray(album.tracks) ? (
            album.tracks.map((track, index) => (
              <SongItem
                key={track.id}
                track={track}
                index={index}
                currentRating={songRatings[track.id] !== undefined ? songRatings[track.id] : null}
                onRateSong={handleRateSong}
              />
            ))
          ) : (
            <div>No tracks available</div>
          )}
        </TracksList>
      </AlbumContent>

      {/* Review Modal */}
      {showReviewModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '10px',
            maxWidth: '500px',
            width: '90%',
            maxHeight: '90vh',
            overflow: 'auto'
          }}>
            <h3 style={{ marginBottom: '1rem', color: '#333' }}>
              Write a Review for "{album.name}"
            </h3>
            <p style={{ marginBottom: '1rem', color: '#666', fontSize: '0.9rem' }}>
              You rated this album {albumRating} stars. Share your thoughts about it!
            </p>
            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              placeholder="What did you think about this album? Share your thoughts..."
              style={{
                width: '100%',
                minHeight: '120px',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '5px',
                fontSize: '1rem',
                resize: 'vertical',
                marginBottom: '1rem'
              }}
              maxLength={2000}
            />
            <div style={{ fontSize: '0.875rem', color: '#666', marginBottom: '1rem' }}>
              {reviewText.length}/2000 characters
            </div>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
              <button
                onClick={handleReviewCancel}
                disabled={isCreatingReview}
                style={{
                  padding: '0.75rem 1.5rem',
                  border: 'none',
                  borderRadius: '5px',
                  backgroundColor: '#f8f9fa',
                  color: '#333',
                  cursor: 'pointer'
                }}
              >
                Skip Review
              </button>
              <button
                onClick={handleReviewSubmit}
                disabled={isCreatingReview || !reviewText.trim()}
                style={{
                  padding: '0.75rem 1.5rem',
                  border: 'none',
                  borderRadius: '5px',
                  backgroundColor: '#007bff',
                  color: 'white',
                  cursor: 'pointer',
                  opacity: isCreatingReview || !reviewText.trim() ? 0.6 : 1
                }}
              >
                {isCreatingReview ? 'Creating Review...' : 'Create Review & Add to Collection'}
              </button>
            </div>
          </div>
        </div>
      )}
    </PageContainer>
  );
}

export default AlbumDetailsPage;
