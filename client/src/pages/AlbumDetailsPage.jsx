// filepath: c:\Users\Brody Roze\beatmeterweb\client\src\pages\AlbumDetailsPage.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import StarRating from '../features/music/components/StarRating';
import SongItem from '../features/music/components/SongItem';
import {
  addToCollection,
  updateSongRatings,
  addToRateLater,
} from '../features/music/services/collectionService';
import { useAuth } from '../features/auth/context/AuthContext';
import { createPost, POST_TYPES } from '../services/database/postService';
import { musicApi } from '@features/music/api/musicApi';
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
  RateLaterButton,
} from './AlbumDetailsPage.styles';

// Fetch album details using the spotify API utility
const fetchAlbumDetails = async albumId => {
  console.log(`Fetching details for album ID: ${albumId}`);

  try {
    const data = await musicApi.getAlbumById(albumId);
    return data;
  } catch (error) {
    console.error('Could not fetch album details:', error);
    throw error;
  }
};

function AlbumDetailsPage() {
  const { albumId } = useParams();
  const navigate = useNavigate();
  const [album, setAlbum] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [retryCount, setRetryCount] = React.useState(0);
  const [songRatings, setSongRatings] = React.useState({});
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
              : details.tracks?.items || [],
          };
          setAlbum(safeDetails);
        }
      } catch (error) {
        console.error('Error loading album:', error);
        setError(error.message);
        if (retryCount < 3) {
          setTimeout(() => {
            setRetryCount(prev => prev + 1);
            loadAlbumData();
          }, 1000);
        }
      } finally {
        setLoading(false);
      }
    };

    if (albumId) {
      loadAlbumData();
    }
  }, [albumId, retryCount]);

  const handleRateSong = (trackId, rating) => {
    if (!isAuthenticated) return;

    setSongRatings(prev => ({
      ...prev,
      [trackId]: rating,
    }));

    // Calculate average album rating
    const updatedRatings = { ...songRatings, [trackId]: rating };
    const ratingsArray = Object.values(updatedRatings).filter(
      r => r !== null && r !== undefined
    );
    if (ratingsArray.length > 0) {
      const average =
        ratingsArray.reduce((sum, r) => sum + r, 0) / ratingsArray.length;
      setAlbumRating(Math.round(average * 10) / 10);
    }
  };

  const handleAddToCollection = async () => {
    if (!isAuthenticated || !albumRating) {
      setApiError('Please rate at least one song before adding to collection');
      return;
    }

    setShowReviewModal(true);
  };

  const handleAddToRateLater = async () => {
    if (!isAuthenticated) {
      setApiError('Please log in to add albums to your rate later list');
      return;
    }

    try {
      await addToRateLater(currentUser.uid, {
        id: album.id,
        name: album.name,
        artistName: album.artistName,
        imageUrl: album.imageUrl,
        type: 'album',
      });
      setAddedToRateLater(true);
      setApiError(null);
    } catch (error) {
      console.error('Error adding to rate later:', error);
      setApiError('Failed to add to rate later. Please try again.');
    }
  };

  const handleReviewSubmit = async () => {
    if (!reviewText.trim() || !albumRating) return;

    setIsCreatingReview(true);
    try {
      // First add to collection
      await addToCollection(currentUser.uid, {
        id: album.id,
        name: album.name,
        artistName: album.artistName,
        imageUrl: album.imageUrl,
        rating: albumRating,
        dateAdded: new Date().toISOString(),
        type: 'album',
      });

      // Then create the review post
      await createPost({
        userId: currentUser.uid,
        userName: currentUser.displayName || 'Anonymous',
        userPhotoURL: currentUser.photoURL || null,
        type: POST_TYPES.ALBUM_REVIEW,
        content: reviewText,
        albumData: {
          id: album.id,
          name: album.name,
          artistName: album.artistName,
          imageUrl: album.imageUrl,
          rating: albumRating,
        },
        createdAt: new Date().toISOString(),
      });

      setAddedToCollection(true);
      setShowReviewModal(false);
      setReviewText('');
      setApiError(null);
    } catch (error) {
      console.error('Error creating review:', error);
      setApiError('Failed to create review. Please try again.');
    } finally {
      setIsCreatingReview(false);
    }
  };

  const handleReviewCancel = () => {
    setShowReviewModal(false);
    setReviewText('');
  };

  if (loading) {
    return (
      <PageContainer>
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <p>Loading album details...</p>
        </div>
      </PageContainer>
    );
  }

  if (error) {
    return (
      <PageContainer>
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <p style={{ color: '#ff6b6b' }}>Error loading album: {error}</p>
          <button
            onClick={() => setRetryCount(prev => prev + 1)}
            style={{ marginTop: '20px', padding: '10px 20px' }}
          >
            Retry
          </button>
        </div>
      </PageContainer>
    );
  }

  if (!album) {
    return (
      <PageContainer>
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <p>Album not found</p>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <AlbumCoverContainer>
        <AlbumCover
          src={album.imageUrl || 'https://placehold.co/300?text=No+Cover'}
          alt={album.name}
          onError={e => {
            e.target.onerror = null;
            e.target.src = 'https://placehold.co/300?text=No+Cover';
          }}
        />
      </AlbumCoverContainer>
      <AlbumTitle>{album.name}</AlbumTitle>
      <AlbumArtist>{album.artistName}</AlbumArtist>
      <AlbumRatingSection>
        <h3>Album Rating</h3>
        <StarRating initialRating={albumRating} readOnly={true} size={30} />
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
        <p
          style={{
            fontSize: '0.9rem',
            marginTop: '5px',
            color: 'rgba(255,255,255,0.7)',
          }}
        >
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
                currentRating={
                  songRatings[track.id] !== undefined
                    ? songRatings[track.id]
                    : null
                }
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
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '10px',
              maxWidth: '500px',
              width: '90%',
              maxHeight: '90vh',
              overflow: 'auto',
            }}
          >
            <h3 style={{ marginBottom: '1rem', color: '#333' }}>
              Write a Review for "{album.name}"
            </h3>
            <p
              style={{
                marginBottom: '1rem',
                color: '#666',
                fontSize: '0.9rem',
              }}
            >
              You rated this album {albumRating} stars. Share your thoughts
              about it!
            </p>
            <textarea
              value={reviewText}
              onChange={e => setReviewText(e.target.value)}
              placeholder='What did you think about this album? Share your thoughts...'
              style={{
                width: '100%',
                minHeight: '120px',
                padding: '0.75rem',
                border: '1px solid #ddd',
                borderRadius: '5px',
                fontSize: '1rem',
                resize: 'vertical',
                marginBottom: '1rem',
              }}
              maxLength={2000}
            />
            <div
              style={{
                fontSize: '0.875rem',
                color: '#666',
                marginBottom: '1rem',
              }}
            >
              {reviewText.length}/2000 characters
            </div>
            <div
              style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'flex-end',
              }}
            >
              <button
                onClick={handleReviewCancel}
                disabled={isCreatingReview}
                style={{
                  padding: '0.75rem 1.5rem',
                  border: 'none',
                  borderRadius: '5px',
                  backgroundColor: '#f8f9fa',
                  color: '#333',
                  cursor: 'pointer',
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
                  opacity: isCreatingReview || !reviewText.trim() ? 0.6 : 1,
                }}
              >
                {isCreatingReview
                  ? 'Creating Review...'
                  : 'Create Review & Add to Collection'}
              </button>
            </div>
          </div>
        </div>
      )}
    </PageContainer>
  );
}

export default AlbumDetailsPage;
