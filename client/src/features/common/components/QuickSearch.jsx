// Quick search dropdown component for navbar
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useUnifiedSearch } from '../../../hooks/useSearch.js';
import { useAuth } from '../../auth/context/AuthContext.jsx';

const SearchContainer = styled.div`
  position: relative;
  flex: 1;
  max-width: 400px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 8px 16px;
  border-radius: ${props => props.theme.borderRadius.medium || '12px'};
  border: 1px solid
    ${props => props.theme.colors.background.accent || 'rgba(255,255,255,0.1)'};
  background: rgba(255, 255, 255, 0.05);
  color: ${props => props.theme.colors.text.primary || '#fff'};
  font-size: 0.9rem;
  transition: all 0.2s;
  outline: none;

  &:focus {
    border-color: rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.08);
  }

  &::placeholder {
    color: ${props =>
      props.theme.colors.text.secondary || 'rgba(255,255,255,0.7)'};
  }
`;

const SearchDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #232323;
  border-radius: ${props => props.theme.borderRadius.medium || '12px'};
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  margin-top: 4px;
  max-height: 400px;
  overflow-y: auto;
`;

const SearchSection = styled.div`
  padding: 12px 0;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

const SectionHeader = styled.div`
  padding: 8px 16px;
  font-size: 0.8rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const SearchResult = styled.div`
  padding: 12px 16px;
  cursor: pointer;
  transition: background 0.2s;
  display: flex;
  align-items: center;
  gap: 12px;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
`;

const ResultImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: ${props => (props.$round ? '50%' : '4px')};
  object-fit: cover;
`;

const ResultInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

const ResultTitle = styled.div`
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ResultSubtitle = styled.div`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ShowAllButton = styled.button`
  width: 100%;
  padding: 12px 16px;
  background: none;
  border: none;
  color: ${props => props.theme.colors.accent || '#1db954'};
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
`;

const QuickSearch = ({ value, onChange, onSubmit }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const { users, music, loading, search } = useUnifiedSearch();

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(value);
    }, 300);

    return () => clearTimeout(timer);
  }, [value]);

  // Perform search when debounced query changes
  useEffect(() => {
    if (debouncedQuery.trim().length >= 2) {
      search(debouncedQuery, { userLimit: 3, musicLimit: 3 });
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [debouncedQuery, search]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = e => {
    onChange(e.target.value);
  };

  const handleInputFocus = () => {
    if (debouncedQuery.trim().length >= 2) {
      setIsOpen(true);
    }
  };

  const handleUserClick = user => {
    navigate(`/profile/${user.displayName}`);
    setIsOpen(false);
    onChange('');
  };

  const handleMusicClick = album => {
    navigate(`/album/${album.id}`);
    setIsOpen(false);
    onChange('');
  };

  const handleShowAllResults = () => {
    navigate(`/search?q=${encodeURIComponent(value)}`);
    setIsOpen(false);
    onChange('');
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    if (value.trim()) {
      navigate(`/search?q=${encodeURIComponent(value.trim())}`);
      setIsOpen(false);
      onChange('');
    }
  };

  const hasResults = users.length > 0 || music.length > 0;

  return (
    <SearchContainer ref={dropdownRef}>
      <form onSubmit={handleFormSubmit}>
        <SearchInput
          type='search'
          placeholder='Search...'
          value={value}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
      </form>

      {isOpen && debouncedQuery.trim().length >= 2 && (
        <SearchDropdown>
          {loading ? (
            <SearchResult>
              <ResultInfo>
                <ResultTitle>Searching...</ResultTitle>
              </ResultInfo>
            </SearchResult>
          ) : hasResults ? (
            <>
              {users.length > 0 && (
                <SearchSection>
                  <SectionHeader>Users</SectionHeader>
                  {users.map(user => (
                    <SearchResult
                      key={user.id}
                      onClick={() => handleUserClick(user)}
                    >
                      <ResultImage
                        src={user.profilePicture || 'https://placehold.co/40'}
                        alt={user.displayName}
                        $round
                      />
                      <ResultInfo>
                        <ResultTitle>{user.displayName}</ResultTitle>
                        {user.bio && (
                          <ResultSubtitle>{user.bio}</ResultSubtitle>
                        )}
                      </ResultInfo>
                    </SearchResult>
                  ))}
                </SearchSection>
              )}

              {music.length > 0 && (
                <SearchSection>
                  <SectionHeader>Music</SectionHeader>
                  {music.slice(0, 3).map(album => (
                    <SearchResult
                      key={album.id}
                      onClick={() => handleMusicClick(album)}
                    >
                      <ResultImage
                        src={
                          album.images?.[2]?.url ||
                          album.imageUrl ||
                          'https://placehold.co/40'
                        }
                        alt={album.name}
                      />
                      <ResultInfo>
                        <ResultTitle>{album.name}</ResultTitle>
                        <ResultSubtitle>
                          {album.artists?.[0]?.name || album.artistName}
                        </ResultSubtitle>
                      </ResultInfo>
                    </SearchResult>
                  ))}
                </SearchSection>
              )}

              <ShowAllButton onClick={handleShowAllResults}>
                Show all results for "{debouncedQuery}"
              </ShowAllButton>
            </>
          ) : (
            <SearchResult>
              <ResultInfo>
                <ResultTitle>No results found</ResultTitle>
                <ResultSubtitle>Try a different search term</ResultSubtitle>
              </ResultInfo>
            </SearchResult>
          )}
        </SearchDropdown>
      )}
    </SearchContainer>
  );
};

export default QuickSearch;
