// This is essentially going to be a navigatable GUI for the spotify API
// Users will be able to use this to search for music, albums, artists, and playlists
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import AlbumCard from '../features/music/components/AlbumCard';
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
  ErrorMessage
} from './Music.styles';

const Music = () => {
  const [searchParams] = useSearchParams();
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  
  const itemsPerPage = 20;
  const maxPages = 5; // 100 items total (20 per page * 5 pages)
  // Function to fetch top global albums from your backend
  const fetchTopAlbums = async (page = 1) => {
    setLoading(true);
    setError(null);
    
    try {
      const offset = (page - 1) * itemsPerPage;
      
      const response = await fetch(
        `/api/music/new-releases?limit=${itemsPerPage}&offset=${offset}`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch albums');
      }
      
      const data = await response.json();
      setAlbums(data.albums);
    } catch (error) {
      setError('Failed to load albums. Please try again.');
      console.error('Error fetching albums:', error);
    } finally {
      setLoading(false);
    }
  };

  // Function to search for music via your backend
  const searchMusic = async (query) => {
    if (!query.trim()) return;
    
    setIsSearching(true);
    setError(null);
    
    try {
      const response = await fetch(
        `/api/music/search?q=${encodeURIComponent(query)}&type=album&limit=${itemsPerPage}`
      );
      
      if (!response.ok) {
        throw new Error('Failed to search');
      }
      
      const data = await response.json();
      setSearchResults(data.albums);
    } catch (error) {
      setError('Failed to search. Please try again.');
      console.error('Error searching:', error);
    } finally {
      setIsSearching(false);
    }
  };
  // Load initial data
  useEffect(() => {
    fetchTopAlbums(currentPage);
  }, [currentPage]);

  // Handle search from URL parameters (e.g., from NavBar search)
  useEffect(() => {
    const searchQuery = searchParams.get('search');
    if (searchQuery) {
      setSearchTerm(searchQuery);
      searchMusic(searchQuery);
    }
  }, [searchParams]);

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      searchMusic(searchTerm);
    }
  };

  // Handle clear search
  const clearSearch = () => {
    setSearchTerm('');
    setSearchResults([]);
    setIsSearching(false);
  };

  // Determine which data to display
  const displayData = searchResults.length > 0 ? searchResults : albums;
  const showPagination = searchResults.length === 0;

  // Handle page change
  const handlePageChange = (newPage) => {
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
            type="text"
            placeholder="Search for albums, artists, or songs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <SearchButton type="submit" disabled={isSearching}>
            {isSearching ? 'Searching...' : 'Search'}
          </SearchButton>
          {searchResults.length > 0 && (
            <SearchButton type="button" onClick={clearSearch}>
              Clear
            </SearchButton>
          )}
        </form>
      </SearchContainer>

      <ContentContainer>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        
        {loading || isSearching ? (
          <LoadingSpinner>Loading...</LoadingSpinner>
        ) : (
          <>            <GridContainer>
              {displayData.map((album) => (              <AlbumCard 
                  key={album.id}
                  album={album}
                  variant="grid"
                  // The AlbumCard component will handle navigation internally
                />
              ))}
            </GridContainer>

            {showPagination && (
              <PaginationContainer>
                <PaginationButton 
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  ← Previous
                </PaginationButton>
                
                <PageInfo>
                  Page {currentPage} of {maxPages}
                </PageInfo>
                
                <PaginationButton 
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === maxPages}
                >
                  Next →
                </PaginationButton>
              </PaginationContainer>
            )}
          </>
        )}
      </ContentContainer>
    </MusicPageContainer>
  );
};

export default Music;