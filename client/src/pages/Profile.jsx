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
import { useAuth } from "../features/auth/context/AuthContext";
import { useOnboarding } from "../features/auth/hooks/useOnboarding";
import { useFollowUser, useIsFollowing } from "../hooks/useSocialData";
import { isFollowing } from "../services/database/followService";
import { firestore } from "../config/firebase";
import { doc, getDoc, collection, query, where, getDocs, setDoc } from "firebase/firestore";
import { executeFirestoreOperation, logFirebaseError } from "../utils/firebaseHelpers";
import EditProfileModal from "../features/auth/components/EditProfileModal";
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
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState("All");
  const [musicView, setMusicView] = useState("Grid"); // "Grid" or "List"
  // Use the real auth context instead of simulated login state
  const { currentUser } = useAuth();
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  
  // Follow functionality hooks
  const { followUser, unfollowUser, loading: followLoading, error: followError } = useFollowUser();
  const [targetUserId, setTargetUserId] = useState(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  
  // Function to refresh profile data
  const refreshProfileData = () => {
    setRefreshTrigger(prev => prev + 1);
  };
  
  // Use onboarding hook to check if profile is complete
  // If viewing own profile and profile is incomplete, redirect to profile setup
  const isOwnProfile = username === currentUser?.displayName;
  useOnboarding({ 
    redirectOnIncomplete: isOwnProfile,
    redirectPath: '/profile-setup'
  });
  
  const isLoggedIn = !!currentUser;
  const loggedInUsername = currentUser?.displayName || "Guest";

  // Handle follow/unfollow actions
  const handleFollowToggle = async () => {
    if (!currentUser || !targetUserId || !userData) {
      console.error('Missing required data for follow action:', {
        currentUser: !!currentUser,
        targetUserId,
        userData: !!userData
      });
      return;
    }

    console.log('Starting follow action:', {
      action: userData.isFollowing ? 'unfollow' : 'follow',
      currentUserId: currentUser.uid,
      targetUserId,
      targetUsername: username
    });

    try {
      if (userData.isFollowing) {
        console.log('Unfollowing user...');
        await unfollowUser(targetUserId);
        console.log('Successfully unfollowed user');
        // Update local state immediately
        setUserData(prev => ({
          ...prev,
          isFollowing: false,
          followersCount: Math.max(0, prev.followersCount - 1)
        }));
      } else {
        console.log('Following user...');
        await followUser(targetUserId, username);
        console.log('Successfully followed user');
        // Update local state immediately
        setUserData(prev => ({
          ...prev,
          isFollowing: true,
          followersCount: prev.followersCount + 1
        }));
      }
    } catch (error) {
      console.error('Error toggling follow status:', error);
      // Optionally show user-friendly error message
    }
  };
  useEffect(() => {
    // Redirect to the logged-in user's profile if no username is provided
    if (!username && isLoggedIn) {
      navigate(`/profile/${currentUser.displayName}`);
    } else if (!username && !isLoggedIn) {
      setUserData(null); // Clear any existing user data
      navigate('/login'); // Redirect to login if not logged in
      return; // Stop further execution
    }
  }, [username, isLoggedIn, currentUser, navigate]);
  
  useEffect(() => {
    if (username) {      
      // Fetch user data and posts based on username for all profiles (including own)
      async function fetchData() {
        try {
          console.log("Fetching profile data for:", username);
          
          // Query userprofiles collection to find the user with the matching displayName
          const usersRef = collection(firestore, 'userprofiles');
          const q = query(usersRef, where("displayName", "==", username));
          
          // Use the utility function for better error handling
          const querySnapshot = await executeFirestoreOperation(
            () => getDocs(q),
            {
              timeoutMs: 15000,
              operationName: `Fetch profile for ${username}`
            }
          );
          
          // Check if the profile belongs to the current user
          const isOwnProfile = currentUser && currentUser.displayName === username;
          
          if (!querySnapshot.empty) {
            const userDoc = querySnapshot.docs[0];
            const userData = userDoc.data();
            
            // Store the target user's ID for follow functionality
            setTargetUserId(userDoc.id);
            
            // Check if current user is following this user (only for other users)
            let isCurrentUserFollowing = false;
            if (currentUser && !isOwnProfile) {
              try {
                console.log('Checking follow status between:', currentUser.uid, 'and', userDoc.id);
                isCurrentUserFollowing = await isFollowing(currentUser.uid, userDoc.id);
                console.log('Follow status result:', isCurrentUserFollowing);
              } catch (error) {
                console.error('Error checking follow status:', error);
              }
            }
            
            console.log('Setting user data:', {
              name: userData.displayName,
              bio: userData.bio,
              actualBio: userData.bio,
              followersCount: userData.followerCount || 0,
              followingCount: userData.followingCount || 0,
              isFollowing: isCurrentUserFollowing
            });
            
            console.log('Raw Firestore userData:', userData);
            
            setUserData({
              name: userData.displayName || 'User',
              profilePicture: userData.profilePicture || 'https://via.placeholder.com/150',
              bio: userData.bio || (isOwnProfile ? 'Click "Edit Profile" to add your bio' : 'No bio available'),
              actualBio: userData.bio || '', // Store actual bio value
              followersCount: userData.followerCount || 0,
              followingCount: userData.followingCount || 0,
              isFollowing: isCurrentUserFollowing,
              loggedAlbums: userData.musicCollection || [],
              profileSetup: !!(userData.bio && userData.profilePicture) // Track if profile has been set up
            });

            // Fetch posts (this would need to be implemented with a Firestore collection)
            // For now, we'll use mock data
            const mockPosts = [
              { id: 1, title: "First Post", content: "This is a review.", type: "Reviews" },
              { id: 2, title: "Quick Note", content: "This is a note.", type: "Notes" },
            ];
            setPosts(mockPosts);
          } else if (isOwnProfile) {
            // If viewing own profile but no document found with matching displayName
            // This might happen if the user just signed up and their profile was created by the cloud function
            // but their displayName wasn't properly set
            
            // First, try to find the profile by UID instead
            const userByIdRef = doc(firestore, 'userprofiles', currentUser.uid);
            const userByIdSnapshot = await executeFirestoreOperation(
              () => getDoc(userByIdRef),
              {
                timeoutMs: 10000,
                operationName: `Fetch profile by UID for ${currentUser.uid}`
              }
            );
            
            if (userByIdSnapshot.exists()) {
              // Found the user by UID, now update the displayName if needed
              const userProfileData = userByIdSnapshot.data();
              
              if (!userProfileData.displayName && currentUser.displayName) {
                // Update the displayName if it's not set but available in auth
                await executeFirestoreOperation(
                  () => setDoc(userByIdRef, {
                    displayName: currentUser.displayName
                  }, { merge: true }),
                  {
                    timeoutMs: 8000,
                    operationName: 'Update displayName in profile'
                  }
                );
                
                userProfileData.displayName = currentUser.displayName;
              }
              
              setUserData({
                name: userProfileData.displayName || currentUser.displayName || 'User',
                profilePicture: userProfileData.profilePicture || currentUser.photoURL || 'https://via.placeholder.com/150',
                bio: userProfileData.bio || 'Click "Edit Profile" to add your bio',
                actualBio: userProfileData.bio || '', // Store actual bio value
                followersCount: userProfileData.followerCount || 0,
                followingCount: userProfileData.followingCount || 0,
                isFollowing: false,
                loggedAlbums: userProfileData.musicCollection || [],
                profileSetup: !!(userProfileData.bio && userProfileData.profilePicture)
              });
              setPosts([]);
              
              // Redirect to the correct URL with the displayName if needed
              if (userProfileData.displayName && userProfileData.displayName !== username) {
                navigate(`/profile/${userProfileData.displayName}`);
              }
            } else {
              // No profile found at all, might happen if cloud function failed or user is new
              console.log("No user profile found, showing empty profile view");
              setUserData({
                name: currentUser.displayName || 'User',
                profilePicture: currentUser.photoURL || 'https://via.placeholder.com/150',
                bio: 'Click "Edit Profile" to add your bio',
                actualBio: '', // No bio for new profile
                followersCount: 0,
                followingCount: 0,
                isFollowing: false,
                loggedAlbums: [],
                profileSetup: false
              });
              setPosts([]);
            }
          } else {
            console.error("User not found");
            // Handle user not found case
            navigate('/'); // Redirect to home if user not found
          }
        } catch (error) {
          logFirebaseError(error, "Fetching profile data");
          
          // Show user-friendly error message
          setUserData({
            name: "Error",
            profilePicture: 'https://via.placeholder.com/150',
            bio: 'There was a problem loading this profile. Please try refreshing the page.',
            actualBio: '', // No bio for error state
            followersCount: 0,
            followingCount: 0,
            isFollowing: false,
            loggedAlbums: [],
            profileSetup: false
          });
        }
      }

      fetchData();
    } else {
      // Fallback mock data for development
      const mockUserData = {
        name: "GagaLover",
        profilePicture: "https://via.placeholder.com/150",
        bio: "Gaga is Queen. Wish she wasn't a zionist.. :(",
        actualBio: "Gaga is Queen. Wish she wasn't a zionist.. :(", // Same as display bio for mock data
        followersCount: 69,
        followingCount: 420,
        isFollowing: false,
        loggedAlbums: [
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
  }, [username, currentUser, navigate, isOwnProfile, refreshTrigger]);

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
        <UserInfoContainer>          <UserNameText>{userData.name}</UserNameText>
          <UserBioText>{userData.bio}</UserBioText>
          {isCurrentUser && !userData.profileSetup && (
            <UserBioText style={{ color: "#e67e22", fontStyle: "italic", marginTop: "5px" }}>
              Your profile is not fully set up yet. Click "Edit Profile" to complete your profile.
            </UserBioText>
          )}
          {isCurrentUser ? (
            <EditProfileButton onClick={() => setIsEditProfileModalOpen(true)}>
              {userData.profileSetup ? "Edit Profile" : "Complete Profile Setup"}
            </EditProfileButton>
          ) : (
            <>
              <FollowButton 
                $isFollowing={userData.isFollowing}
                onClick={handleFollowToggle}
                disabled={followLoading}
              >
                {followLoading ? 'Loading...' : (userData.isFollowing ? "Following" : "Follow")}
              </FollowButton>
              {followError && (
                <div style={{ color: '#e74c3c', fontSize: '14px', marginTop: '5px' }}>
                  Error: {followError}
                </div>
              )}
            </>
          )}
            {isEditProfileModalOpen && (
            <EditProfileModal 
              isOpen={isEditProfileModalOpen}
              onClose={(refresh) => {
                setIsEditProfileModalOpen(false);
                // Refresh the profile data after modal closes to get updated information
                if (refresh) {
                  console.log('Refreshing profile data after modal close');
                  refreshProfileData();
                }
              }}
              userData={{
                name: userData.name,
                bio: userData.actualBio || '', // Use actualBio for editing, not the display text
                profilePicture: userData.profilePicture,
                isNewProfile: !userData.profileSetup
              }}
            />
          )}
        </UserInfoContainer>
      </ProfileHeaderContainer>

      <ProfileStatsContainer>
        <StatItemText>Followers: {userData.followersCount}</StatItemText>
        <StatItemText>Following: {userData.followingCount}</StatItemText>
      </ProfileStatsContainer>

      <ContentSectionContainer> 
        <SectionTitleText>Posts</SectionTitleText>
        <ContentFiltersContainer>          <FilterButton 
            $isActive={filter === "All"} 
            onClick={() => setFilter("All")}
          >
            All
          </FilterButton>
          <FilterButton 
            $isActive={filter === "Reviews"} 
            onClick={() => setFilter("Reviews")}
          >
            Reviews
          </FilterButton>
          <FilterButton 
            $isActive={filter === "Notes"} 
            onClick={() => setFilter("Notes")}
          >
            Notes
          </FilterButton>
        </ContentFiltersContainer>        <PostsListContainer>
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <PostItemContainer key={post.id}>
                <PostTitleText>{post.title}</PostTitleText>
                <PostContentText>{post.content}</PostContentText>
              </PostItemContainer>
            ))
          ) : (
            <div style={{ textAlign: 'center', padding: '20px', color: '#777' }}>
              {isCurrentUser ? "You haven't created any posts yet." : "This user hasn't created any posts yet."}
            </div>
          )}
        </PostsListContainer>
      </ContentSectionContainer>      <ContentSectionContainer>
        <SectionTitleText>Music</SectionTitleText>        <ContentFiltersContainer>          <FilterButton 
            $isActive={musicView === "Grid"} 
            onClick={() => setMusicView("Grid")}
          >
            Music
          </FilterButton>
          <FilterButton 
            $isActive={musicView === "List"} 
            onClick={() => setMusicView("List")}
          >
            Want to Listen
          </FilterButton>
        </ContentFiltersContainer>{userData.loggedAlbums && userData.loggedAlbums.length > 0 ? (
          musicView === "Grid" ? (
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
          )
        ) : (
          <div style={{ textAlign: 'center', padding: '20px', color: '#777' }}>
            {isCurrentUser ? 
              "You haven't logged any music yet. Start adding albums to your collection!" :
              "This user hasn't logged any music yet."}
          </div>
        )}
      </ContentSectionContainer>
    </ProfilePageContainer>
  );
}

export default Profile;