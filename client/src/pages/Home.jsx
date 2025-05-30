import { useEffect, useState } from "react";
import Carousel from "../features/common/components/Carousel";
import AlbumCard from "../features/music/components/AlbumCard";
import SongCard from "../features/music/components/SongCard";
import { spotifyApi } from "../api/spotify";
import { homeStyles } from './Home.styles';

function Home() {
  const [albums, setAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const [albumsData, songsData] = await Promise.all([
          spotifyApi.getTopAlbums(),
          spotifyApi.getTopSongs()
        ]);
        setAlbums(albumsData);
        setSongs(songsData);
        setError(null);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to load music data. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div style={homeStyles.loading}>Loading...</div>;
  }

  if (error) {
    return <div style={homeStyles.error}>{error}</div>;
  }

  return (
    <div>
      <div style={homeStyles.hero}>
        <div style={homeStyles.heroOverlay} className="hero-overlay" />
        <div style={homeStyles.heroContent} className="hero-content">
          <h1 style={homeStyles.heroTitle}>
            Discover. Rate. Share.
          </h1>
          <p style={homeStyles.heroSubtitle}>
            Your personal music journey starts here.<br />
            Track your favorite tracks, rate your top albums,<br />
            and showcase your unique taste in music.
          </p>
          <button 
            style={homeStyles.heroButton}
            onClick={() => window.scrollTo({ top: document.querySelector('.carousel-container').offsetTop, behavior: 'smooth' })}
          >
            Explore Top Music
          </button>
        </div>
      </div>

      <h2 style={homeStyles.sectionTitle}>Top Albums</h2>
      <div style={{...homeStyles.carouselContainer, className: 'carousel-container'}}>
        <Carousel
          items={albums}
          renderItem={(album, { dragged }) => (
            <AlbumCard
              key={album.id}
              album={album}
              onClick={e => {
                if (dragged) {
                  e.preventDefault();
                  e.stopPropagation();
                  return;
                }
                // Handle album click (e.g., open album details)
                alert(`Clicked ${album.title}`);
              }}
            />
          )}
        />
      </div>

      <h2 style={{ ...homeStyles.sectionTitle, ...homeStyles.songsSection }}>Top Songs</h2>
      <div style={homeStyles.carouselContainer}>
        <Carousel
          items={songs}
          renderItem={(song, { dragged }) => (
            <SongCard
              song={song}
              onClick={e => {
                if (dragged) {
                  e.preventDefault();
                  e.stopPropagation();
                  return;
                }
                // Handle song click (e.g., play song or open details)
                alert(`Clicked ${song.title}`);
              }}
            />
          )}
        />
      </div>
    </div>
  );
}

export default Home;