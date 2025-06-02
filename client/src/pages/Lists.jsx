// This file will display user generated playlists, as well as Playlists we generate, with music reccomendations
// bring in navbar
import React from 'react';

// show navbar component
import {
  ListsPageContainer,
  ListsHeader,
  ListsContentContainer,
  PlaylistCard,
  PlaylistImage,
  PlaylistInfo,
  PlaylistTitle,
  PlaylistDescription,
} from './Lists.styles';

const Lists = () => {
  // Your component logic here
  

  return (
    <>
      
      <ListsPageContainer>
        <ListsHeader>Your Lists</ListsHeader>
        <ListsContentContainer>
          {/* Your playlist content here */}
            <PlaylistCard>
                <PlaylistImage src="https://via.placeholder.com/150" alt="Playlist Cover" />
                <PlaylistInfo>
                <PlaylistTitle>Chill Vibes</PlaylistTitle>
                <PlaylistDescription>A collection of relaxing tunes.</PlaylistDescription>
                </PlaylistInfo>
            </PlaylistCard>
        </ListsContentContainer>
      </ListsPageContainer>
    </>
  );
};

export default Lists;
