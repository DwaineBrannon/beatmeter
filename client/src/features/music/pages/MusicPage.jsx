// This is essentially going to be a navigatable GUI for the spotify API
// Users will be able to use this to search for music, albums, artists, and playlists
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import AlbumCard from '../components/AlbumCard';
import { musicApi } from '@features/music/api/musicApi';
import {
  MusicPageContainer,
  MusicHeader,
  SearchContainer,
  SearchInput,
  SearchButton,
  ContentContainer,
  GridContainer,
  PaginationContainer,
  PaginationButton,
  PageInfo,
  LoadingSpinner,
  ErrorMessage,
} from './MusicPage.styles';

const Music = () => {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSearch, setActiveSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  // Query for top albums (default view)
  const {
    data: topAlbums = [],
    isLoading: isLoadingTop,
    error: topError
  } = useQuery({
    queryKey: ['topAlbums'],
    queryFn: async () => {
      const data = await musicApi.getTopAlbums();
      return Array.isArray(data) ? data : [];
    },
    enabled: !activeSearch, // Only fetch when not searching
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  // Query for search results
  const {
    data: searchResults = [],
    isLoading: isSearching,
    error: searchError
  } = useQuery({
    queryKey: ['searchMusic', activeSearch],
    queryFn: async () => {
      if (!activeSearch) return [];
      const data = await musicApi.searchMusic(activeSearch, 'album', itemsPerPage, 0);
      return data.albums?.items || data.items || data || [];
    },
    enabled: !!activeSearch, // Only fetch when searching
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  // Handle search from URL parameters
  useEffect(() => {
    const query = searchParams.get('search') || searchParams.get('q');
    if (query) {
      setSearchTerm(query);
      setActiveSearch(query);
    }
  }, [searchParams]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setActiveSearch(searchTerm);
    }
  };

  const clearSearch = () => {
    setSearchTerm('');
    setActiveSearch('');
  };

  const isLoading = isLoadingTop || isSearching;
  const error = topError || searchError;
  const displayAlbums = activeSearch ? searchResults : topAlbums;

  // Pagination logic (client-side for now as per original code)
  const totalItems = displayAlbums.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = displayAlbums.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
    setSearchTerm('');
    setSearchResults([]);
    setIsSearching(false);
  };
  // Determine which data to display
  const displayData = searchResults.length > 0 ? searchResults : albums || [];
  const showPagination = searchResults.length === 0;

  // Handle page change
  const handlePageChange = newPage => {
    if (newPage >= 1 && newPage <= maxPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <MusicPageContainer>
      <MusicHeader>Discover Music</MusicHeader>

      <SearchContainer>
        <form onSubmit={handleSearch}>
          <SearchInput
            type='text'
            placeholder='Search for albums, artists, or songs...'
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <SearchButton type='submit' disabled={isSearching}>
            {isSearching ? 'Searching...' : 'Search'}
          </SearchButton>
          {activeSearch && (
            <SearchButton type='button' onClick={clearSearch}>
              Clear
            </SearchButton>
          )}
        </form>
      </SearchContainer>

      <ContentContainer>
        {error && <ErrorMessage>{error.message || 'An error occurred'}</ErrorMessage>}

        {isLoading ? (
          <LoadingSpinner>Loading...</LoadingSpinner>
        ) : (
          <>
            <GridContainer>
              {currentItems.map(album => (
                <AlbumCard
                  key={album.id}
                  album={album}
                  variant='grid'
                />
              ))}
            </GridContainer>

            <PaginationContainer>
              <PaginationButton
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
              >
                ← Previous
              </PaginationButton>

              <PageInfo>
                Page {currentPage} of {totalPages}
              </PageInfo>

              <PaginationButton
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next →
              </PaginationButton>
            </PaginationContainer>
          </>
        )}
      </ContentContainer>
    </MusicPageContainer>
  );
};

export default Music;
