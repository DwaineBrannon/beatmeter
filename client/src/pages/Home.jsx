import { useEffect, useState } from "react";
import Carousel from "../features/common/components/Carousel";
import AlbumCard from "../features/music/components/AlbumCard";
import SongCard from "../features/music/components/SongCard";
import { spotifyApi } from "../api/spotify";
import {
  HomeContainer,
  Hero,
  HeroOverlay,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroButton,
  SectionTitle,
  CarouselContainer,
  SongsSection,
  Loading,
  Error
} from './Home.styles';

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
    return <Loading>Loading...</Loading>;
  }

  if (error) {
    return <Error>{error}</Error>;
  }

  return (
    <HomeContainer>
      <Hero>
        <HeroOverlay />
        <HeroContent>
          <HeroTitle>
            Discover. Rate. Share.
          </HeroTitle>
          <HeroSubtitle>
            Your personal music journey starts here.<br />
            Track your favorite tracks, rate your top albums,<br />
            and showcase your unique taste in music.
          </HeroSubtitle>
          <HeroButton 
            onClick={() => window.scrollTo({ top: document.querySelector('.carousel-container')?.offsetTop || 0, behavior: 'smooth' })}
          >
            Explore Top Music
          </HeroButton>
        </HeroContent>
      </Hero>      <SectionTitle>Top Albums</SectionTitle>
      <CarouselContainer>
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
      </CarouselContainer>

      <SongsSection>Top Songs</SongsSection>
      <CarouselContainer>
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
      </CarouselContainer>
    </HomeContainer>
  );
}

export default Home;