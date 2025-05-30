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
import { profileStyles as styles } from './Profile.styles'; // Updated import

function Profile() {
  const { username } = useParams();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState("All");

  // Simulate login state for development
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

      fetchData();
    } else {
      // Simulate mock data for development
      const mockUserData = {
        name: "GagaLover",
        profilePicture: "https://via.placeholder.com/150",
        bio: "Gaga is Queen. Wish she wasn't a zionist.. :(",
        followersCount: 69,
        followingCount: 420,
        isFollowing: false,
        loggedAlbums: [
          { id: 1, title: "Mock Album 1", cover: "https://via.placeholder.com/100" },
          { id: 2, title: "Mock Album 2", cover: "https://via.placeholder.com/100" },
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
    <div style={styles.profilePageContainer}>
      <div style={styles.profileHeaderContainer}>
        <img src={userData.profilePicture} alt={`${userData.name}'s profile`} style={styles.profilePicture} />
        <div style={styles.userInfoContainer}>
          <h2 style={styles.userNameText}>{userData.name}</h2>
          <p style={styles.userBioText}>{userData.bio}</p>
          {isCurrentUser ? (
            <button style={styles.editProfileButton}>Edit Profile</button>
          ) : (
            <button 
              style={{
                ...styles.followButtonBase,
                ...(userData.isFollowing ? styles.followButtonActiveState : styles.followButtonInactiveState)
              }}
            >
              {userData.isFollowing ? "Unfollow" : "Follow"}
            </button>
          )}
        </div>
      </div>

      <div style={styles.profileStatsContainer}>
        <p style={styles.statItemText}>Followers: {userData.followersCount}</p>
        <p style={styles.statItemText}>Following: {userData.followingCount}</p>
      </div>

      <div style={styles.contentSectionContainer}> 
        <h3 style={styles.sectionTitleText}>Posts</h3>
        <div style={styles.contentFiltersContainer}>
          <button 
            style={filter === "All" ? {...styles.filterButton, ...styles.filterButtonActive} : styles.filterButton} 
            onClick={() => setFilter("All")}
          >
            All
          </button>
          <button 
            style={filter === "Reviews" ? {...styles.filterButton, ...styles.filterButtonActive} : styles.filterButton} 
            onClick={() => setFilter("Reviews")}
          >
            Reviews
          </button>
          <button 
            style={filter === "Notes" ? {...styles.filterButton, ...styles.filterButtonActive} : styles.filterButton} 
            onClick={() => setFilter("Notes")}
          >
            Notes
          </button>
        </div>
        <div style={styles.postsListContainer}>
          {filteredPosts.map((post) => (
            <div key={post.id} style={styles.postItemContainer}>
              <h4 style={styles.postTitleText}>{post.title}</h4>
              <p style={styles.postContentText}>{post.content}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.contentSectionContainer}>
        <h3 style={styles.sectionTitleText}>Music</h3>
        <div style={styles.musicGridContainer}>
          {userData.loggedAlbums.map((album) => (
            <div key={album.id} style={styles.albumItemContainer}>
              <img src={album.cover} alt={album.title} style={styles.albumItemImage}/>
              <p style={styles.albumItemTitleText}>{album.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;