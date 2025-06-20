# Beatmeter Database Services

This document outlines the new Firestore database structure and services for the Beatmeter application.

## Database Collections

### User Profiles (`userprofiles`)
Stores additional user information beyond Firebase Auth:
- `bio` - User biography
- `username` - Unique username
- `birthDate` - Date of birth
- `location` - User location
- `personalLinks` - Array of personal links
- `favoriteGenres` - Array of favorite music genres
- `followerCount` - Number of followers
- `followingCount` - Number of users being followed
- `profileSetup` - Boolean indicating if profile setup is complete
- `createdAt` - Account creation timestamp
- `joinDate` - Profile creation timestamp

### Albums (`albums`)
Stores album information from Spotify:
- `spotifyId` - Spotify album ID (used as document ID)
- `name` - Album name
- `artist` - Primary artist name
- `releaseDate` - Release date
- `genres` - Array of genres
- `trackCount` - Number of tracks
- `duration` - Total duration in milliseconds
- `spotifyUrl` - Spotify URL
- `albumArt` - Album artwork URL
- `averageRating` - Calculated average rating
- `totalRatings` - Total number of ratings
- `lastUpdated` - Last update timestamp

### Ratings (`ratings`)
Stores user ratings for albums:
- `userId` - User who created the rating
- `albumId` - Album being rated
- `rating` - Rating value (1-10)
- `review` - Optional review text
- `userDisplayName` - Display name of the user
- `timestamp` - Rating creation timestamp

### Lists (`lists`)
Stores user-created album lists:
- `userId` - User who created the list
- `name` - List name
- `description` - List description
- `albumIds` - Array of album IDs in the list
- `isPublic` - Whether the list is public
- `createdAt` - List creation timestamp
- `updatedAt` - Last update timestamp

### Follows (`follows`)
Stores follow relationships:
- `followerId` - User doing the following
- `followingId` - User being followed
- `timestamp` - Follow timestamp

### Activities (`activities`)
Stores activity feed items:
- `userId` - User who performed the action
- `actionType` - Type of action (new_rating, new_list, followed_user)
- `targetId` - ID of the target (rating ID, list ID, user ID)
- `userDisplayName` - Display name of the user
- `additionalData` - Additional context data (album name, etc.)
- `timestamp` - Activity timestamp

### Activity Likes (`activityLikes`)
Stores likes on activities:
- `activityId` - Activity being liked
- `userId` - User who liked the activity
- `timestamp` - Like timestamp

### Activity Comments (`activityComments`)
Stores comments on activities:
- `activityId` - Activity being commented on
- `userId` - User who made the comment
- `commentText` - Comment content
- `userDisplayName` - Display name of the commenter
- `timestamp` - Comment timestamp

## Service Architecture

### Database Services (`client/src/services/database/`)
Low-level services that interact directly with Firestore:
- `albumService.js` - CRUD operations for albums
- `ratingService.js` - CRUD operations for ratings
- `listService.js` - CRUD operations for lists
- `followService.js` - CRUD operations for follows
- `activityService.js` - CRUD operations for activities
- `activityLikeService.js` - CRUD operations for activity likes
- `activityCommentService.js` - CRUD operations for activity comments

### High-Level Services (`client/src/services/`)
Business logic services that combine multiple database operations:
- `musicService.js` - Complete workflows for rating albums
- `socialService.js` - Social features like following users
- `feedService.js` - Activity feed management
- `listService.js` - List management with validation

### React Hooks (`client/src/hooks/`)
Custom hooks that provide easy access to services in React components:
- `useMusicData.js` - Hooks for music-related operations
- `useSocialData.js` - Hooks for social features
- `useFeedData.js` - Hooks for activity feeds
- `useListData.js` - Hooks for list management

## Usage Examples

### Rating an Album
```javascript
import { useAlbumRating } from '../hooks/useMusicData';

const AlbumPage = ({ albumData }) => {
  const { rateAlbum, loading, error } = useAlbumRating();

  const handleRate = async (rating, review) => {
    try {
      await rateAlbum(albumData, {
        rating,
        review
      });
    } catch (err) {
      console.error('Failed to rate album:', err);
    }
  };

  // ... component JSX
};
```

### Following a User
```javascript
import { useFollowUser } from '../hooks/useSocialData';

const UserProfile = ({ userId, displayName }) => {
  const { followUser, unfollowUser, loading } = useFollowUser();
  const { isFollowing } = useIsFollowing(userId);

  const handleFollowToggle = async () => {
    try {
      if (isFollowing) {
        await unfollowUser(userId);
      } else {
        await followUser(userId, displayName);
      }
    } catch (err) {
      console.error('Failed to toggle follow:', err);
    }
  };

  // ... component JSX
};
```

### Displaying Activity Feed
```javascript
import { usePersonalizedFeed } from '../hooks/useFeedData';

const Feed = () => {
  const { activities, loading, error } = usePersonalizedFeed(20);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {activities.map(activity => (
        <div key={activity.id}>
          {/* Render activity */}
        </div>
      ))}
    </div>
  );
};
```

### Managing Lists
```javascript
import { useListManager } from '../hooks/useListData';

const ListPage = ({ listId }) => {
  const { 
    list, 
    loading, 
    error, 
    addAlbum, 
    removeAlbum, 
    updateList 
  } = useListManager(listId);

  const handleAddAlbum = async (albumId) => {
    try {
      await addAlbum(albumId);
    } catch (err) {
      console.error('Failed to add album:', err);
    }
  };

  // ... component JSX
};
```

## Security Rules

The Firestore security rules ensure:
- Users can only modify their own data
- Public lists are readable by all authenticated users
- Private lists are only accessible by the owner
- Follow relationships and activities are readable by all authenticated users
- Users can only create activities for themselves

## Indexes

Firestore composite indexes are configured for common query patterns:
- Ratings by album and timestamp
- Ratings by user and timestamp
- Lists by user and update time
- Activities by user and timestamp
- Comments by activity and timestamp

## Error Handling

All services use the `executeFirestoreOperation` helper which provides:
- Consistent error handling
- Retry logic for transient failures
- Timeout protection
- Operation logging

## Development Setup

1. Make sure Firebase emulators are running
2. The services automatically connect to emulators in development
3. Use the provided hooks in your React components
4. Check the browser console for detailed operation logs

## Production Considerations

- Firestore rules are restrictive and security-focused
- Indexes are optimized for common query patterns
- All operations include proper error handling
- Services are designed to be scalable and performant

## Future Enhancements

- Search functionality (consider Algolia integration)
- Real-time updates using Firestore listeners
- Pagination for large datasets
- Caching strategies for frequently accessed data
- Analytics and usage tracking
