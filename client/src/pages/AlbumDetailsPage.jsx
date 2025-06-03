import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import StarRating from '../features/music/components/StarRating'; // Import StarRating
import SongItem from '../features/music/components/SongItem'; // Import SongItem

// Basic styled components for layout - you can expand these or use existing ones
const PageContainer = styled.div`
  padding: 20px;
  color: ${props => props.theme.colors.text.primary || '#fff'};
`;

const AlbumTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;
`;

const AlbumArtist = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: ${props => props.theme.colors.text.secondary || 'rgba(255,255,255,0.7)'};
`;

const AlbumRatingSection = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h3 {
    margin-bottom: 10px;
    font-size: 1.2rem;
  }
`;

const TracksList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
`;

// Placeholder for album data - replace with actual data fetching
const fetchAlbumDetails = async (albumId) => {
  // In a real app, you would fetch this from an API
  console.log(`Fetching details for album ID: ${albumId}`);
  // Simulating an API call with a delay
  await new Promise(resolve => setTimeout(resolve, 500)); 

  // Example album data structure (adjust to your needs)
  if (albumId === "1") { // Example ID
    return {
      id: "1",
      name: "Example Album Title",
      artistName: "Example Artist Name",
      imageUrl: "https://via.placeholder.com/300",
      tracks: [
        { id: "t1", title: "Track 1", duration: "3:45" },
        { id: "t2", title: "Track 2", duration: "4:15" },
        { id: "t3", title: "Track 3", duration: "2:50" },
      ],
      // Simulate pre-existing ratings if needed for testing
      // initialAlbumRating: 4, 
      // initialSongRatings: { t1: 5, t2: 3 }
    };
  }
  return null; // Or handle not found appropriately
};

function AlbumDetailsPage() {
  const { albumId } = useParams(); // Get albumId from URL
  const [album, setAlbum] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  // State for ratings
  const [songRatings, setSongRatings] = React.useState({}); // E.g., { songId1: rating, songId2: rating }
  const [albumRating, setAlbumRating] = React.useState(0);

  React.useEffect(() => {
    const loadAlbumData = async () => {
      try {
        setLoading(true);
        const details = await fetchAlbumDetails(albumId);
        if (details) {
          setAlbum(details);
          // Initialize ratings if they come from the backend/data source
          setAlbumRating(details.initialAlbumRating || 0);
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
  }, [albumId]);

  // Calculate average album rating from song ratings
  React.useEffect(() => {
    if (album && album.tracks && album.tracks.length > 0) {
      const ratedSongs = Object.values(songRatings).filter(rating => rating > 0);
      if (ratedSongs.length > 0) {
        const totalRating = ratedSongs.reduce((sum, rating) => sum + rating, 0);
        const average = totalRating / ratedSongs.length;
        // Set album rating based on average, but allow user override later
        // For now, we directly set it. You might want to only set it if albumRating is 0 or not user-set.
        setAlbumRating(Math.round(average * 2) / 2); // Round to nearest 0.5
      } else {
        // If no songs are rated, you might want to reset album rating or keep user's explicit rating
        // setAlbumRating(0); // Or keep existing albumRating
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

  const handleRateAlbum = (rating) => {
    setAlbumRating(rating);
    // Later: Persist this rating
    console.log(`Rated album with ${rating} stars`);
  };

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
      <img src={album.imageUrl} alt={album.name} style={{ width: '300px', height: '300px', marginBottom: '20px' }} />
      <AlbumTitle>{album.name}</AlbumTitle>
      <AlbumArtist>{album.artistName}</AlbumArtist>

      <AlbumRatingSection>
        <h3>Rate this Album:</h3>
        <StarRating
          initialRating={albumRating}
          onRate={handleRateAlbum}
          size={30} // Adjust size as needed
        />
      </AlbumRatingSection>

      <h3>Tracks:</h3>
      <TracksList>
        {album.tracks.map(track => (
          <SongItem
            key={track.id}
            track={track}
            currentRating={songRatings[track.id] || 0}
            onRateSong={handleRateSong}
          />
        ))}
      </TracksList>
      {/* Song notes field will go inside SongItem later */}
    </PageContainer>
  );
}

export default AlbumDetailsPage;
