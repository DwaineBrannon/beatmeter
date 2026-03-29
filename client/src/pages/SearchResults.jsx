// Unified search results page for both music and users
import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import AlbumCard from '../features/music/components/AlbumCard';
import { searchUsers } from '../services/database/userSearchService';
import { useAuth } from '../features/auth/context/AuthContext';
import { apiUrl } from '../utils/api';

// Styled Components
const SearchPageContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const SearchHeader = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  color: rgba(255, 255, 255, 0.9);
`;

const SearchQuery = styled.span`
  color: ${props => props.theme.colors.accent || '#1db954'};
`;

const TabContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const Tab = styled.button`
  background: none;
  border: none;
  color: ${props =>
    props.$active
      ? props.theme.colors.accent || '#1db954'
      : 'rgba(255, 255, 255, 0.7)'};
  font-size: 1rem;
  font-weight: ${props => (props.$active ? '600' : '400')};
  padding: 10px 0;
  border-bottom: 2px solid
    ${props =>
      props.$active ? props.theme.colors.accent || '#1db954' : 'transparent'};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    color: ${props => props.theme.colors.text.primary || '#fff'};
  }
`;

const ResultsContainer = styled.div`
  min-height: 400px;
`;

const SectionTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: rgba(255, 255, 255, 0.9);
`;

const UserResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
`;

const UserCard = styled.div`
  background: rgba(30, 30, 30, 0.6);
  border-radius: 12px;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background: rgba(40, 40, 40, 0.8);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`;

const UserHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 10px;
`;

const UserAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(255, 255, 255, 0.1);
`;

const UserInfo = styled.div`
  flex: 1;
`;

const UserName = styled.h4`
  margin: 0;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
`;

const UserBio = styled.p`
  margin: 10px 0 0 0;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const MusicResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

const LoadingSpinner = styled.div`
  text-align: center;
  padding: 40px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.1rem;
`;

const ErrorMessage = styled.div`
  background: rgba(255, 0, 0, 0.1);
  border: 1px solid rgba(255, 0, 0, 0.3);
  color: #ff6b6b;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const NoResults = styled.div`
  text-align: center;
  padding: 40px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.1rem;
`;

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const query = searchParams.get('q') || '';
  const tab = searchParams.get('tab') || 'all';

  const [userResults, setUserResults] = useState([]);
  const [musicResults, setMusicResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Search both users and music
  const performSearch = async () => {
    if (!query.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const promises = [];

      // Search users
      if (tab === 'all' || tab === 'users') {
        promises.push(searchUsers(query, 20));
      } else {
        promises.push(Promise.resolve([]));
      }

      // Search music
      if (tab === 'all' || tab === 'music') {
        const musicSearchPromise = fetch(
          apiUrl(
            `/music/search?q=${encodeURIComponent(query)}&type=album&limit=20`
          )
        )
          .then(res => {
            if (!res.ok) throw new Error('Music search failed');
            return res.json();
          })
          .then(data => data.albums || []);

        promises.push(musicSearchPromise);
      } else {
        promises.push(Promise.resolve([]));
      }

      const [users, music] = await Promise.all(promises);

      setUserResults(users);
      setMusicResults(music);
    } catch (err) {
      console.error('Search error:', err);
      setError('Failed to search. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      performSearch();
    }
  }, [query, tab]);

  const handleTabChange = newTab => {
    const params = new URLSearchParams(searchParams);
    params.set('tab', newTab);
    navigate(`/search?${params.toString()}`);
  };

  const handleUserClick = user => {
    navigate(`/profile/${user.displayName}`);
  };

  const hasResults = userResults.length > 0 || musicResults.length > 0;
  const showUsers =
    (tab === 'all' || tab === 'users') && userResults.length > 0;
  const showMusic =
    (tab === 'all' || tab === 'music') && musicResults.length > 0;

  return (
    <SearchPageContainer>
      <SearchHeader>
        Search Results for "<SearchQuery>{query}</SearchQuery>"
      </SearchHeader>

      <TabContainer>
        <Tab $active={tab === 'all'} onClick={() => handleTabChange('all')}>
          All
        </Tab>
        <Tab $active={tab === 'users'} onClick={() => handleTabChange('users')}>
          Users ({userResults.length})
        </Tab>
        <Tab $active={tab === 'music'} onClick={() => handleTabChange('music')}>
          Music ({musicResults.length})
        </Tab>
      </TabContainer>

      <ResultsContainer>
        {error && <ErrorMessage>{error}</ErrorMessage>}

        {loading ? (
          <LoadingSpinner>Searching...</LoadingSpinner>
        ) : !hasResults && query ? (
          <NoResults>
            No results found for "{query}". Try searching with different
            keywords.
          </NoResults>
        ) : (
          <>
            {showUsers && (
              <>
                <SectionTitle>Users</SectionTitle>
                <UserResultsGrid>
                  {userResults.map(user => (
                    <UserCard
                      key={user.id}
                      onClick={() => handleUserClick(user)}
                    >
                      <UserHeader>
                        <UserAvatar
                          src={user.profilePicture || 'https://placehold.co/50'}
                          alt={`${user.displayName}'s avatar`}
                        />
                        <UserInfo>
                          <UserName>{user.displayName}</UserName>
                        </UserInfo>
                      </UserHeader>
                      {user.bio && <UserBio>{user.bio}</UserBio>}
                    </UserCard>
                  ))}
                </UserResultsGrid>
              </>
            )}

            {showMusic && (
              <>
                <SectionTitle>Music</SectionTitle>
                <MusicResultsGrid>
                  {musicResults.map(album => (
                    <AlbumCard key={album.id} album={album} variant='grid' />
                  ))}
                </MusicResultsGrid>
              </>
            )}
          </>
        )}
      </ResultsContainer>
    </SearchPageContainer>
  );
};

export default SearchResults;
