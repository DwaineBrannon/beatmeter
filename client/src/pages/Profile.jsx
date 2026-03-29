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

import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../features/auth/context/AuthContext';
import { useOnboarding } from '../features/auth/hooks/useOnboarding';
import { useFollowUser, useIsFollowing } from '../hooks/useSocialData';
import { useUserPosts } from '../hooks/usePostData';
import { isFollowing } from '../services/database/followService';
import { firestore } from '../config/firebase';
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
  setDoc,
} from 'firebase/firestore';
import {
  executeFirestoreOperation,
  logFirebaseError,
} from '../utils/firebaseHelpers';
import EditProfileModal from '../features/auth/components/EditProfileModal';
import CreatePostModal from '../features/common/components/CreatePostModal';
import PostItem from '../features/common/components/PostItem';
import {
  ProfilePageContainer,
  MainColumn,
  Banner,
  ProfileHeaderContainer,
  HeaderInner,
  TopRow,
  ProfilePicture,
  UserInfoContainer,
  UserNameText,
  UserBioText,
  EditProfileButton,
  FollowButton,
  ProfileStatsContainer,
  StatItemText,
  NavTabsContainer,
  NavTabButton,
  ContentSectionContainer,
  SectionTitleText,
  ContentFiltersContainer,
  FilterButton,
  PostsListContainer,
  MusicGridContainer,
  AlbumItemContainer,
  AlbumItemImage,
  AlbumItemTitleText,
  MusicListContainer,
  MusicListItemContainer,
  MusicListAlbumImage,
  MusicListAlbumInfo,
  MusicListAlbumTitle,
  MusicListAlbumArtist,
  PostCard,
} from './Profile.styles';
import { getUserCollection } from '../features/music/services/collectionService';

function Profile() {
  const { username } = useParams();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [filter, setFilter] = useState('All');
  const [musicView, setMusicView] = useState('Grid'); // "Grid" or "List"
  // Use the real auth context instead of simulated login state
  const { currentUser } = useAuth();
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const [isCreatePostModalOpen, setIsCreatePostModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Follow functionality hooks
  const {
    followUser,
    unfollowUser,
    loading: followLoading,
    error: followError,
  } = useFollowUser();
  const [targetUserId, setTargetUserId] = useState(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  // Function to refresh profile data
  const refreshProfileData = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  // Use onboarding hook to check if profile is complete
  // If viewing own profile and profile is incomplete, redirect to profile setup
  const isOwnProfile = useMemo(
    () => username === currentUser?.displayName,
    [username, currentUser?.displayName]
  );
  useOnboarding({
    redirectOnIncomplete: isOwnProfile,
    redirectPath: '/profile-setup',
  });

  const isLoggedIn = !!currentUser;
  const loggedInUsername = currentUser?.displayName || 'Guest';

  // Use the post data hook
  const {
    posts,
    loading: postsLoading,
    error: postsError,
    refreshPosts,
    deletePost,
  } = useUserPosts(targetUserId, filter);

  // Handle follow/unfollow actions
  const handleFollowToggle = async () => {
    if (!currentUser || !targetUserId || !userData) {
      console.error('Missing required data for follow action:', {
        currentUser: !!currentUser,
        targetUserId,
        userData: !!userData,
      });
      return;
    }

    console.log('Starting follow action:', {
      action: userData.isFollowing ? 'unfollow' : 'follow',
      currentUserId: currentUser.uid,
      targetUserId,
      targetUsername: username,
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
          followersCount: Math.max(0, prev.followersCount - 1),
        }));
      } else {
        console.log('Following user...');
        await followUser(targetUserId, username);
        console.log('Successfully followed user');
        // Update local state immediately
        setUserData(prev => ({
          ...prev,
          isFollowing: true,
          followersCount: prev.followersCount + 1,
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
    let isCancelled = false;

    if (username) {
      // Fetch user data and posts based on username for all profiles (including own)
      async function fetchData() {
        try {
          if (isCancelled) return; // Exit early if cancelled

          console.log('Fetching profile data for:', username);

          // Query userprofiles collection to find the user with the matching displayName
          const usersRef = collection(firestore, 'userprofiles');
          const q = query(usersRef, where('displayName', '==', username));

          // Use the utility function for better error handling
          const querySnapshot = await executeFirestoreOperation(
            () => getDocs(q),
            {
              timeoutMs: 15000,
              operationName: `Fetch profile for ${username}`,
            }
          );

          // Check if the profile belongs to the current user
          const isOwnProfile =
            currentUser && currentUser.displayName === username;

          if (!querySnapshot.empty) {
            const userDoc = querySnapshot.docs[0];
            const userData = userDoc.data();

            // Store the target user's ID for follow functionality
            setTargetUserId(userDoc.id);

            // Check if current user is following this user (only for other users)
            let isCurrentUserFollowing = false;
            if (currentUser && !isOwnProfile) {
              try {
                console.log(
                  'Checking follow status between:',
                  currentUser.uid,
                  'and',
                  userDoc.id
                );
                isCurrentUserFollowing = await isFollowing(
                  currentUser.uid,
                  userDoc.id
                );
                console.log('Follow status result:', isCurrentUserFollowing);
              } catch (error) {
                console.error('Error checking follow status:', error);
              }
            }

            if (isCancelled) return; // Check again before setting state

            console.log('Setting user data:', {
              name: userData.displayName,
              bio: userData.bio,
              actualBio: userData.bio,
              followersCount: userData.followerCount || 0,
              followingCount: userData.followingCount || 0,
              isFollowing: isCurrentUserFollowing,
            });

            console.log('Raw Firestore userData:', userData);
            console.log(
              'Profile picture from Firestore:',
              userData.profilePicture
            );
            console.log('Current user photoURL:', currentUser?.photoURL);

            // Determine the profile picture to use
            let profilePictureUrl =
              userData.profilePicture || currentUser?.photoURL;
            console.log('Final profile picture URL:', profilePictureUrl);

            setUserData({
              name: userData.displayName || 'User',
              profilePicture: profilePictureUrl || 'Artpop_cover.png',
              bio:
                userData.bio ||
                (isOwnProfile
                  ? 'Click "Edit Profile" to add your bio'
                  : 'No bio available'),
              actualBio: userData.bio || '', // Store actual bio value
              followersCount: userData.followerCount || 0,
              followingCount: userData.followingCount || 0,
              isFollowing: isCurrentUserFollowing,
              loggedAlbums: userData.musicCollection || [],
              rateLater: userData.rateLater || [],
              profileSetup: !!(
                userData.bio &&
                (userData.profilePicture ||
                  (isOwnProfile && currentUser?.photoURL))
              ), // Check both Firestore and Auth for profile picture
            });
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
                operationName: `Fetch profile by UID for ${currentUser.uid}`,
              }
            );

            if (userByIdSnapshot.exists()) {
              // Found the user by UID, now update the displayName if needed
              const userProfileData = userByIdSnapshot.data();

              if (!userProfileData.displayName && currentUser.displayName) {
                // Update the displayName if it's not set but available in auth
                await executeFirestoreOperation(
                  () =>
                    setDoc(
                      userByIdRef,
                      {
                        displayName: currentUser.displayName,
                      },
                      { merge: true }
                    ),
                  {
                    timeoutMs: 8000,
                    operationName: 'Update displayName in profile',
                  }
                );

                userProfileData.displayName = currentUser.displayName;
              }

              console.log(
                'User profile data from UID lookup:',
                userProfileData
              );
              console.log(
                'Profile picture from UID lookup:',
                userProfileData.profilePicture
              );
              console.log(
                'Current user photoURL (fallback):',
                currentUser?.photoURL
              );

              // Determine the profile picture to use
              let profilePictureUrl =
                userProfileData.profilePicture || currentUser?.photoURL;
              console.log(
                'Final profile picture URL (UID lookup):',
                profilePictureUrl
              );

              setUserData({
                name:
                  userProfileData.displayName ||
                  currentUser.displayName ||
                  'User',
                profilePicture:
                  profilePictureUrl ||
                  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDE1MCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIiBmaWxsPSIjZjVmNWY1Ii8+CjxjaXJjbGUgY3g9Ijc1IiBjeT0iNjAiIHI9IjI1IiBmaWxsPSIjY2NjY2NjIi8+CjxwYXRoIGQ9Ik00NSAxMjBjMC0xNi41NjkgMTMuNDMxLTMwIDMwLTMwczMwIDEzLjQzMSAzMCAzMHYxMEg0NXYtMTB6IiBmaWxsPSIjY2NjY2NjIi8+Cjwvc3ZnPgo=',
                bio:
                  userProfileData.bio || 'Click "Edit Profile" to add your bio',
                actualBio: userProfileData.bio || '', // Store actual bio value
                followersCount: userProfileData.followerCount || 0,
                followingCount: userProfileData.followingCount || 0,
                isFollowing: false,
                loggedAlbums: userProfileData.musicCollection || [],
                rateLater: userProfileData.rateLater || [],
                profileSetup: !!(
                  userProfileData.bio &&
                  (userProfileData.profilePicture || currentUser?.photoURL)
                ),
              });

              // Redirect to the correct URL with the displayName if needed
              if (
                userProfileData.displayName &&
                userProfileData.displayName !== username
              ) {
                navigate(`/profile/${userProfileData.displayName}`);
              }
            } else {
              // No profile found at all, might happen if cloud function failed or user is new
              console.log('No user profile found, showing empty profile view');
              setUserData({
                name: currentUser.displayName || 'User',
                profilePicture:
                  currentUser.photoURL ||
                  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDE1MCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIiBmaWxsPSIjZjVmNWY1Ii8+CjxjaXJjbGUgY3g9Ijc1IiBjeT0iNjAiIHI9IjI1IiBmaWxsPSIjY2NjY2NjIi8+CjxwYXRoIGQ9Ik00NSAxMjBjMC0xNi41NjkgMTMuNDMxLTMwIDMwLTMwczMwIDEzLjQzMSAzMCAzMHYxMEg0NXYtMTB6IiBmaWxsPSIjY2NjY2NjIi8+Cjwvc3ZnPgo=',
                bio: 'Click "Edit Profile" to add your bio',
                actualBio: '', // No bio for new profile
                followersCount: 0,
                followingCount: 0,
                isFollowing: false,
                loggedAlbums: [],
                rateLater: [],
                profileSetup: false,
              });
            }
          } else {
            console.error('User not found');
            // Handle user not found case
            navigate('/'); // Redirect to home if user not found
          }
        } catch (error) {
          if (isCancelled) return;
          logFirebaseError(error, 'Fetching profile data');

          // Show user-friendly error message
          setUserData({
            name: 'Error',
            profilePicture:
              'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDE1MCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIiBmaWxsPSIjZjVmNWY1Ii8+CjxjaXJjbGUgY3g9Ijc1IiBjeT0iNjAiIHI9IjI1IiBmaWxsPSIjY2NjY2NjIi8+CjxwYXRoIGQ9Ik00NSAxMjBjMC0xNi41NjkgMTMuNDMxLTMwIDMwLTMwczMwIDEzLjQzMSAzMCAzMHYxMEg0NXYtMTB6IiBmaWxsPSIjY2NjY2NjIi8+Cjwvc3ZnPgo=',
            bio: 'There was a problem loading this profile. Please try refreshing the page.',
            actualBio: '', // No bio for error state
            followersCount: 0,
            followingCount: 0,
            isFollowing: false,
            loggedAlbums: [],
            rateLater: [],
            profileSetup: false,
          });
        } finally {
          setIsLoading(false);
        }
      }

      fetchData();
    }

    // Cleanup function
    return () => {
      isCancelled = true;
    };
  }, [username, currentUser?.uid, currentUser?.displayName, refreshTrigger]); // Optimized dependencies

  const handlePostCreated = () => {
    // Refresh posts when a new post is created
    refreshPosts();
  };

  const handlePostDeleted = async postId => {
    return await deletePost(postId);
  };

  useEffect(() => {
    // If musicCollection not present on profile, fetch via API for the target user (only self supported by endpoint)
    const maybeFetchCollection = async () => {
      try {
        if (
          userData &&
          Array.isArray(userData.loggedAlbums) &&
          userData.loggedAlbums.length === 0 &&
          isOwnProfile
        ) {
          const items = await getUserCollection();
          setUserData(prev => ({ ...prev, loggedAlbums: items }));
        }
      } catch (e) {
        console.warn('Could not fetch user collection:', e);
      }
    };
    maybeFetchCollection();
  }, [userData?.loggedAlbums?.length, isOwnProfile]);

  if (!userData) return <div>Loading...</div>;

  const isCurrentUser = isLoggedIn && username === loggedInUsername;

  // Add error handling for profile picture
  const handleProfilePictureError = e => {
    console.error('Profile picture failed to load:', e.target.src);
    console.log('Attempting to load fallback image...');
    e.target.src =
      'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDE1MCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIiBmaWxsPSIjZjVmNWY1Ii8+CjxjaXJjbGUgY3g9Ijc1IiBjeT0iNjAiIHI9IjI1IiBmaWxsPSIjY2NjY2NjIi8+CjxwYXRoIGQ9Ik00NSAxMjBjMC0xNi41NjkgMTMuNDMxLTMwIDMwLTMwczMwIDEzLjQzMSAzMCAzMHYxMEg0NXYtMTB6IiBmaWxsPSIjY2NjY2NjIi8+Cjwvc3ZnPgo=';
  };

  const handleProfilePictureLoad = () => {
    console.log(
      'Profile picture loaded successfully:',
      userData?.profilePicture
    );
  };

  return (
    <ProfilePageContainer>
      <MainColumn>
        <ProfileHeaderContainer>
          <Banner $headerUrl={userData.headerImage} />
          <HeaderInner>
            <TopRow>
              <ProfilePicture
                src={userData.profilePicture}
                alt={`${userData.name}'s profile`}
                onError={handleProfilePictureError}
                onLoad={handleProfilePictureLoad}
              />
              {isCurrentUser ? (
                <EditProfileButton
                  onClick={() => setIsEditProfileModalOpen(true)}
                >
                  {userData.profileSetup
                    ? 'Edit Profile'
                    : 'Complete Profile Setup'}
                </EditProfileButton>
              ) : (
                <>
                  <FollowButton
                    $isFollowing={userData.isFollowing}
                    onClick={handleFollowToggle}
                    disabled={followLoading}
                  >
                    {followLoading
                      ? 'Loading...'
                      : userData.isFollowing
                        ? 'Following'
                        : 'Follow'}
                  </FollowButton>
                  {followError && (
                    <div
                      style={{
                        color: '#e74c3c',
                        fontSize: '14px',
                        marginTop: '5px',
                      }}
                    >
                      Error: {followError}
                    </div>
                  )}
                </>
              )}
            </TopRow>

            <UserInfoContainer>
              <UserNameText>{userData.name}</UserNameText>
              <ProfileStatsContainer>
                <StatItemText>
                  <strong>{userData.followersCount}</strong> Followers
                </StatItemText>
                <StatItemText>
                  <strong>{userData.followingCount}</strong> Following
                </StatItemText>
                <StatItemText>
                  <strong>{posts.length}</strong> Posts
                </StatItemText>
              </ProfileStatsContainer>
              <UserBioText>
                {(userData.actualBio || userData.bio || '').slice(0, 200)}
              </UserBioText>
              {isCurrentUser && !userData.profileSetup && (
                <UserBioText
                  style={{
                    color: '#e67e22',
                    fontStyle: 'italic',
                    marginTop: '5px',
                  }}
                >
                  Your profile is not fully set up yet. Click "Edit Profile" to
                  complete your profile.
                </UserBioText>
              )}
            </UserInfoContainer>
          </HeaderInner>

          <NavTabsContainer>
            <NavTabButton
              $isActive={filter === 'All'}
              onClick={() => setFilter('All')}
            >
              All
            </NavTabButton>
            <NavTabButton
              $isActive={filter === 'Reviews'}
              onClick={() => setFilter('Reviews')}
            >
              Reviews
            </NavTabButton>
            <NavTabButton
              $isActive={filter === 'Playlists'}
              onClick={() => setFilter('Playlists')}
            >
              Playlists
            </NavTabButton>
            <NavTabButton
              $isActive={filter === 'Notes'}
              onClick={() => setFilter('Notes')}
            >
              Blog Posts
            </NavTabButton>
            <NavTabButton
              $isActive={filter === 'Liked Music'}
              onClick={() => setFilter('Liked Music')}
            >
              Liked Music
            </NavTabButton>
          </NavTabsContainer>
        </ProfileHeaderContainer>

        <ContentSectionContainer>
          {filter === 'Liked Music' ? (
            <>
              {userData.loggedAlbums && userData.loggedAlbums.length > 0 ? (
                <MusicGridContainer>
                  {userData.loggedAlbums.map((album, idx) => {
                    const id =
                      album.albumId || album.id || `${album.title}-${idx}`;
                    const cover = album.cover || album.imageUrl;
                    const title = album.title || album.name;
                    const artist = album.artist || album.artistName;
                    return (
                      <AlbumItemContainer key={id}>
                        <AlbumItemImage src={cover} alt={title} />
                        <AlbumItemTitleText>{title}</AlbumItemTitleText>
                        <MusicListAlbumArtist>{artist}</MusicListAlbumArtist>
                      </AlbumItemContainer>
                    );
                  })}
                </MusicGridContainer>
              ) : (
                <div
                  style={{
                    textAlign: 'center',
                    padding: '20px',
                    color: '#777',
                  }}
                >
                  {isCurrentUser
                    ? "You haven't logged any music yet. Start adding albums to your collection!"
                    : "This user hasn't logged any music yet."}
                </div>
              )}
            </>
          ) : filter === 'Playlists' ? (
            <div
              style={{ textAlign: 'center', padding: '40px', color: '#8899a6' }}
            >
              Playlists coming soon...
            </div>
          ) : (
            <>
              {isCurrentUser && (
                <div style={{ padding: '16px', textAlign: 'right' }}>
                  <EditProfileButton
                    onClick={() => setIsCreatePostModalOpen(true)}
                  >
                    Create Note
                  </EditProfileButton>
                </div>
              )}
              <PostsListContainer>
                {postsLoading ? (
                  <div
                    style={{
                      textAlign: 'center',
                      padding: '20px',
                      color: '#777',
                    }}
                  >
                    Loading posts...
                  </div>
                ) : postsError ? (
                  <div
                    style={{
                      textAlign: 'center',
                      padding: '20px',
                      color: '#e74c3c',
                    }}
                  >
                    Error loading posts: {postsError}
                  </div>
                ) : posts.length > 0 ? (
                  posts.map(post => (
                    <PostCard key={post.id}>
                      <PostItem
                        post={post}
                        onDelete={handlePostDeleted}
                        showActions={isCurrentUser}
                        style={{
                          background: 'transparent',
                          border: 'none',
                          padding: 0,
                          marginBottom: 0,
                          boxShadow: 'none',
                        }}
                      />
                    </PostCard>
                  ))
                ) : (
                  <div
                    style={{
                      textAlign: 'center',
                      padding: '20px',
                      color: '#777',
                    }}
                  >
                    {isCurrentUser
                      ? "You haven't created any posts yet. Click 'Create Note' to get started!"
                      : "This user hasn't created any posts yet."}
                  </div>
                )}
              </PostsListContainer>
            </>
          )}
        </ContentSectionContainer>
      </MainColumn>

      {/* Modals */}
      {isEditProfileModalOpen && (
        <EditProfileModal
          isOpen={isEditProfileModalOpen}
          onClose={refresh => {
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
            isNewProfile: !userData.profileSetup,
          }}
        />
      )}

      {isCreatePostModalOpen && (
        <CreatePostModal
          isOpen={isCreatePostModalOpen}
          onClose={() => setIsCreatePostModalOpen(false)}
          onPostCreated={handlePostCreated}
        />
      )}
    </ProfilePageContainer>
  );
}

export default Profile;
