// User Profile Page
// Will show user profile, their picture
// Will also show folling/followers count
// will also show their bio. If it is the user's profile, it will show the option to edit the bio, profile pic, and name
// and also the option to follow/unfollow the user
// Will also show the user's posts, which can be clicked to view the post in detail
// The user's posts can be filtered by Reviews/Notes/All
// Reviews will show the user's reviews, Notes will show the user's notes, which are kind of like tweets. short blurb posts
// All will show both reviews and notes
// there will also be a feed called "Music" which will show the albums that have been logged by the user, in a grid or list layout. 

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ProfilePageContainer,
  ProfileHeaderContainer,
  ProfilePicture,
  UserInfoContainer,
  UserNameText,
  UserBioText,
  EditProfileButton,
  FollowButton,
  ProfileStatsContainer,
  StatItemText,
  ContentSectionContainer,
  SectionTitleText,
  ContentFiltersContainer,
  FilterButton,
  PostsListContainer,
  PostItemContainer,
  PostTitleText,
  PostContentText,
  MusicGridContainer,
  AlbumItemContainer,
  AlbumItemImage,
  AlbumItemTitleText,
  MusicListContainer,
  MusicListItemContainer,
  MusicListAlbumImage,
  MusicListAlbumInfo,
  MusicListAlbumTitle,
  MusicListAlbumArtist
} from './Profile.styles';

function Profile() {
  const { username } = useParams();
  const navigate = useNavigate();  const [userData, setUserData] = useState(null);
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState("All");
  const [musicView, setMusicView] = useState("Grid"); // "Grid" or "List"

  // Simulated login state for development
  const [isLoggedIn] = useState(true); // Change to false to simulate logged-out state
  const loggedInUsername = "testUser"; // Replace with the logged-in user's username

  useEffect(() => {
    // Redirect to the logged-in user's profile if no username is provided
    if (!username && isLoggedIn) {
      // navigate(`/profile/${loggedInUsername}`); // Temporarily commented out for development
    } else if (!username && !isLoggedIn) {
      setUserData(null); // Clear any existing user data
      return; // Stop further execution
    }
  }, [username, isLoggedIn, loggedInUsername, navigate]);

  useEffect(() => {
    if (username) {
      // Fetch user data and posts based on username
      async function fetchData() {
        try {
          const userResponse = await fetch(`/api/users/${username}`);
          const userText = await userResponse.text();
          console.log("User API Response:", userText);
          const user = JSON.parse(userText);
          setUserData(user);

          const postsResponse = await fetch(`/api/users/${username}/posts`);
          const postsText = await postsResponse.text();
          console.log("Posts API Response:", postsText);
          const userPosts = JSON.parse(postsText);
          setPosts(userPosts);
        } catch (error) {
          console.error("Error fetching profile data:", error);
        }
      }

      fetchData();    } else {
      // Simulate mock data for development
      const mockUserData = {
        name: "GagaLover",
        profilePicture: "https://via.placeholder.com/150",
        bio: "Gaga is Queen. Wish she wasn't a zionist.. :(",
        followersCount: 69,
        followingCount: 420,
        isFollowing: false,        loggedAlbums: [
          { id: 1, title: "Chromatica", artist: "Lady Gaga", cover: "https://via.placeholder.com/100" },
          { id: 2, title: "Born This Way", artist: "Lady Gaga", cover: "https://via.placeholder.com/100" },
          { id: 3, title: "The Fame Monster", artist: "Lady Gaga", cover: "https://via.placeholder.com/100" },
          { id: 4, title: "ARTPOP", artist: "Lady Gaga", cover: "https://via.placeholder.com/100" },
        ],
      };

      const mockPosts = [
        { id: 1, title: "Mock Post 1", content: "This is a mock review.", type: "Reviews" },
        { id: 2, title: "Mock Post 2", content: "This is a mock note.", type: "Notes" },
      ];

      setUserData(mockUserData);
      setPosts(mockPosts);
    }
  }, [username]);

  const filteredPosts = posts.filter((post) => {
    if (filter === "All") return true;
    return post.type === filter;
  });

  if (!userData) return <div>Loading...</div>;

  const isCurrentUser = isLoggedIn && username === loggedInUsername;
  return (
    <ProfilePageContainer>
      <ProfileHeaderContainer>
        <ProfilePicture src={userData.profilePicture} alt={`${userData.name}'s profile`} />
        <UserInfoContainer>
          <UserNameText>{userData.name}</UserNameText>
          <UserBioText>{userData.bio}</UserBioText>
          {isCurrentUser ? (
            <EditProfileButton>Edit Profile</EditProfileButton>
          ) : (
            <FollowButton isFollowing={userData.isFollowing}>
              {userData.isFollowing ? "Unfollow" : "Follow"}
            </FollowButton>
          )}
        </UserInfoContainer>
      </ProfileHeaderContainer>

      <ProfileStatsContainer>
        <StatItemText>Followers: {userData.followersCount}</StatItemText>
        <StatItemText>Following: {userData.followingCount}</StatItemText>
      </ProfileStatsContainer>

      <ContentSectionContainer> 
        <SectionTitleText>Posts</SectionTitleText>
        <ContentFiltersContainer>
          <FilterButton 
            isActive={filter === "All"} 
            onClick={() => setFilter("All")}
          >
            All
          </FilterButton>
          <FilterButton 
            isActive={filter === "Reviews"} 
            onClick={() => setFilter("Reviews")}
          >
            Reviews
          </FilterButton>
          <FilterButton 
            isActive={filter === "Notes"} 
            onClick={() => setFilter("Notes")}
          >
            Notes
          </FilterButton>
        </ContentFiltersContainer>
        <PostsListContainer>
          {filteredPosts.map((post) => (
            <PostItemContainer key={post.id}>
              <PostTitleText>{post.title}</PostTitleText>
              <PostContentText>{post.content}</PostContentText>
            </PostItemContainer>
          ))}
        </PostsListContainer>
      </ContentSectionContainer>      <ContentSectionContainer>
        <SectionTitleText>Music</SectionTitleText>        <ContentFiltersContainer>
          <FilterButton 
            isActive={musicView === "Grid"} 
            onClick={() => setMusicView("Grid")}
          >
            Music
          </FilterButton>
          <FilterButton 
            isActive={musicView === "List"} 
            onClick={() => setMusicView("List")}
          >
            Want to Listen
          </FilterButton>
        </ContentFiltersContainer>        {musicView === "Grid" ? (
          <MusicListContainer>
            {userData.loggedAlbums.map((album) => (
              <MusicListItemContainer key={album.id}>
                <MusicListAlbumImage src={album.cover} alt={album.title}/>
                <MusicListAlbumInfo>
                  <MusicListAlbumTitle>{album.title}</MusicListAlbumTitle>
                  <MusicListAlbumArtist>{album.artist}</MusicListAlbumArtist>
                </MusicListAlbumInfo>
              </MusicListItemContainer>
            ))}
          </MusicListContainer>
        ) : (
          <MusicListContainer>
            {userData.loggedAlbums.map((album) => (
              <MusicListItemContainer key={album.id}>
                <MusicListAlbumImage src={album.cover} alt={album.title}/>
                <MusicListAlbumInfo>
                  <MusicListAlbumTitle>{album.title}</MusicListAlbumTitle>
                  <MusicListAlbumArtist>{album.artist}</MusicListAlbumArtist>
                </MusicListAlbumInfo>
              </MusicListItemContainer>
            ))}
          </MusicListContainer>
        )}
      </ContentSectionContainer>
    </ProfilePageContainer>
  );
}

export default Profile;