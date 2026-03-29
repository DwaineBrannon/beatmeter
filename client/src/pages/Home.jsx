import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Carousel from '../features/common/components/Carousel';
import AlbumCard from '../features/music/components/AlbumCard';
import SongCard from '../features/music/components/SongCard';
import PlaylistCard from '../features/music/components/PlaylistCard';
import { musicApi } from '@features/music/api/musicApi';
import { useHomeFeaturedPlaylists } from '../hooks/useHomeFeaturedPlaylists';
import { doc, getDoc } from 'firebase/firestore';
import { firestore } from '../config/firebase';
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
  Error,
} from './Home.styles';

function Home() {
  // Get featured playlists
  const {
    playlists: featuredPlaylists,
    loading: playlistsLoading,
    error: playlistsError,
  } = useHomeFeaturedPlaylists();

  // Fetch all home data in parallel using useQuery
  const { data, isLoading, error } = useQuery({
    queryKey: ['homeData'],
    queryFn: async () => {
      // Fetch Weekly Favorites from Firestore
      const favoritesRef = doc(
        firestore,
        'featuredPlaylists',
        'weekly_favorites'
      );

      const [favoritesSnap, albumsResponse, songsResponse] = await Promise.all([
        getDoc(favoritesRef),
        musicApi.getTopAlbums(),
        musicApi.getTopSongs(),
      ]);

      let weeklyFavorites = [];
      if (favoritesSnap.exists()) {
        weeklyFavorites = favoritesSnap.data().albums || [];
      }

      return {
        albums: Array.isArray(albumsResponse) ? albumsResponse : [],
        songs: Array.isArray(songsResponse) ? songsResponse : [],
        weeklyFavorites,
      };
    },
    staleTime: 1000 * 60 * 30, // 30 minutes
  });

  const { albums = [], songs = [], weeklyFavorites = [] } = data || {};

  if (isLoading) {
    return <Loading>Loading...</Loading>;
  }

  if (error) {
    return <Error>Failed to load music data. Please try again.</Error>;
  }

  return (
    <HomeContainer>
      <Hero>
        <HeroOverlay />
        <HeroContent>
          <HeroTitle>Discover. Rate. Share.</HeroTitle>
          <HeroSubtitle>
            Your personal music journey starts here.
            <br />
            Track your favorite tracks, rate your top albums,
            <br />
            and showcase your unique taste in music.
          </HeroSubtitle>
          <HeroButton
            onClick={() =>
              window.scrollTo({
                top:
                  document.querySelector('.carousel-container')?.offsetTop || 0,
                behavior: 'smooth',
              })
            }
          >
            Explore Top Music
          </HeroButton>
        </HeroContent>
      </Hero>

      {/* Weekly Favorites Section */}
      {weeklyFavorites.length > 0 && (
        <>
          <SectionTitle>Our Favorites This Week</SectionTitle>
          <CarouselContainer>
            <Carousel
              items={weeklyFavorites}
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
                  }}
                />
              )}
            />
          </CarouselContainer>
        </>
      )}

      {/* Featured Playlists Section */}
      {featuredPlaylists.length > 0 && !playlistsLoading && (
        <>
          <SectionTitle>Featured Playlists</SectionTitle>
          <CarouselContainer>
            <Carousel
              items={featuredPlaylists}
              renderItem={(playlist, { dragged }) => (
                <PlaylistCard
                  key={playlist.id}
                  playlist={playlist}
                  onClick={e => {
                    if (dragged) {
                      e.preventDefault();
                      e.stopPropagation();
                      return;
                    }
                    // PlaylistCard will handle opening Spotify
                  }}
                />
              )}
            />
          </CarouselContainer>
        </>
      )}

      <SectionTitle>Top Albums</SectionTitle>
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
                // AlbumCard component will handle navigation internally
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
                // If the song is part of an album, navigate to that album
                if (song.albumId) {
                  window.location.href = `/album/${song.albumId}`;
                } else {
                  console.log(
                    `Song clicked: ${song.title}, but no album ID available`
                  );
                }
              }}
            />
          )}
        />
      </CarouselContainer>
    </HomeContainer>
  );
}

export default Home;
