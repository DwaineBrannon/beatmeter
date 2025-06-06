import React from 'react';
import { useParams } from 'react-router-dom';
// import styled from 'styled-components'; // No longer needed here
import StarRating from '../features/music/components/StarRating';
import SongItem from '../features/music/components/SongItem';
import {
  PageContainer,
  AlbumTitle,
  AlbumArtist,
  AlbumRatingSection,
  TracksList,
  AlbumCoverContainer,
  AlbumCover,
  AlbumContent,
  TracksHeader
} from './AlbumDetailsPage.styles'; // Import styled components



// Placeholder for album data - replace with actual data fetching
const fetchAlbumDetails = async (albumId) => {
  // In a real app, you would fetch this from an API
  console.log(`Fetching details for album ID: ${albumId}`);
  
  // Fetch from the backend API
  try {
    const response = await fetch(`/api/music/albums/${albumId}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data; // The backend should return data in the expected format
  } catch (error) {
    console.error("Could not fetch album details:", error);
    return null; // Or handle error appropriately
  }
};

function AlbumDetailsPage() {
  const { albumId } = useParams(); // Get albumId from URL
  const [album, setAlbum] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);  // State for ratings
  const [songRatings, setSongRatings] = React.useState({}); // E.g., { songId1: rating, songId2: rating }
  const [albumRating, setAlbumRating] = React.useState(null);

  React.useEffect(() => {
    const loadAlbumData = async () => {
      try {
        setLoading(true);
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
        setError('Failed to load album details.');
      } finally {
        setLoading(false);
      }
    };

    if (albumId) {
      loadAlbumData();
    }
  }, [albumId]);  // Calculate average album rating from song ratings
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
    // Later: Persist this rating (e.g., API call)
    console.log(`Rated song ${songId} with ${rating} stars`);
  };
  // We no longer need handleRateAlbum as album rating is now always calculated from song ratings

  if (loading) {
    return <PageContainer>Loading album details...</PageContainer>;
  }

  if (error) {
    return <PageContainer>Error: {error}</PageContainer>;
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
        
        <p style={{ fontSize: '0.9rem', marginTop: '5px', color: 'rgba(255,255,255,0.7)' }}>
          (Average of song ratings)
        </p>
      </AlbumRatingSection>

      <AlbumContent>
        <TracksHeader>Tracks</TracksHeader>        <TracksList>
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
      {/* Song notes field will go inside SongItem later */}
    </PageContainer>
  );
}

export default AlbumDetailsPage;
