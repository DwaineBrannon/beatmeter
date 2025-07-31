# BeatMeter Service Architecture

## Overview

BeatMeter follows a layered service architecture pattern that separates concerns between data access, business logic, and presentation layers. This document outlines the structure, responsibilities, and interactions between different service layers.

## Architecture Layers

```
┌─────────────────────────────────────────┐
│             React Components            │
├─────────────────────────────────────────┤
│           Custom React Hooks           │
├─────────────────────────────────────────┤
│         High-Level Services            │
├─────────────────────────────────────────┤
│         Database Services              │
├─────────────────────────────────────────┤
│    Firebase/Firestore + External APIs  │
└─────────────────────────────────────────┘
```

## Layer 1: Database Services (`client/src/services/database/`)

### Purpose
Low-level services that handle direct interaction with Firestore and external APIs. These services focus on basic CRUD operations and data transformation.

### Services

#### Core Data Services
- **`albumService.js`** - Album CRUD operations and Spotify API integration
- **`ratingService.js`** - Rating operations and average calculations
- **`listService.js`** - List CRUD operations and album management
- **`followService.js`** - User follow/unfollow operations
- **`userSearchService.js`** - User search functionality

#### Activity Feed Services
- **`activityService.js`** - Activity creation and retrieval
- **`activityLikeService.js`** - Activity like/unlike operations
- **`activityCommentService.js`** - Activity comment management
- **`postService.js`** - User post creation and management

### Key Characteristics
- Direct Firestore collection access
- Basic validation and error handling
- No business logic
- Returns raw Firestore data with minimal transformation
- Uses `executeFirestoreOperation` utility for consistent error handling and retries

### Example Usage
```javascript
// Direct database operation
import { createList } from './database/listService';

const listData = {
  userId: 'user123',
  name: 'My Favorites',
  albumIds: ['album1', 'album2'],
  isPublic: true
};

const listId = await createList(listData);
```

## Layer 2: High-Level Services (`client/src/services/`)

### Purpose
Business logic layer that orchestrates multiple database operations, enforces business rules, and handles complex workflows.

### Services

#### Core Business Services
- **`musicService.js`** - Complete music rating workflows
- **`socialService.js`** - Social feature orchestration (following, activity creation)
- **`feedService.js`** - Activity feed composition and personalization
- **`listService.js`** - List management with validation and activity tracking

### Key Characteristics
- Combines multiple database operations
- Enforces business rules and validation
- Handles complex workflows
- Creates related activities and updates
- Provides enriched data with additional context

### Example Usage
```javascript
// Business logic with multiple operations
import { createList } from '../services/listService';

// This creates a list AND generates activity feed entries
const newList = await createList(listData, userDisplayName);
```

### Business Logic Examples

#### List Creation Workflow (`listService.js`)
```javascript
export const createList = async (listData, userDisplayName) => {
  return executeFirestoreOperation(async () => {
    // 1. Create the list in database
    const listId = await createListInDB(listData);
    
    // 2. Create activity if the list is public
    if (listData.isPublic !== false) {
      const listWithId = { ...listData, id: listId, userDisplayName };
      await createListActivity(listWithId);
    }
    
    return { ...listData, id: listId };
  }, { operationName: 'Create List' });
};
```

#### Social Follow Workflow (`socialService.js`)
```javascript
export const followUser = async (followerId, followingId, followerDisplayName, followingDisplayName) => {
  return executeFirestoreOperation(async () => {
    // 1. Create the follow relationship
    const followId = await followUserInDB(followerId, followingId);
    
    // 2. Update follower counts
    await createOrUpdateUserProfile(followerId, { 
      followingCount: increment(1) 
    });
    await createOrUpdateUserProfile(followingId, { 
      followerCount: increment(1) 
    });
    
    // 3. Create activity for the follow
    await createFollowActivity(followerId, followingId, followerDisplayName, followingDisplayName);
    
    return followId;
  }, { operationName: 'Follow User' });
};
```

## Layer 3: React Hooks (`client/src/hooks/`)

### Purpose
Provides React-specific state management and provides easy-to-use interfaces for components to interact with services.

### Hooks

#### Data Management Hooks
- **`useMusicData.js`** - Album data fetching and rating management
- **`useSocialData.js`** - User following and social features
- **`useFeedData.js`** - Activity feed management and engagement
- **`useListData.js`** - List creation, editing, and management
- **`usePostData.js`** - Post creation and management
- **`useSearch.js`** - Search functionality across different data types

### Key Characteristics
- React state management (useState, useEffect)
- Loading and error state handling
- Optimistic updates
- Caching and memoization
- Component lifecycle integration

### Example Hook Structure
```javascript
export const useListManagement = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createNewList = useCallback(async (listData) => {
    if (!user) {
      throw new Error('User must be logged in to create lists');
    }

    setLoading(true);
    setError(null);
    
    try {
      const newList = await createList(listData, user.displayName || 'Anonymous');
      return newList;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [user]);

  return {
    createList: createNewList,
    loading,
    error
  };
};
```

## Layer 4: React Components

### Purpose
UI layer that consumes hooks and presents data to users.

### Integration Pattern
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

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  return (
    <div>
      <h1>{list.name}</h1>
      {/* Component JSX */}
    </div>
  );
};
```

## Utilities and Cross-Cutting Concerns

### Firebase Helpers (`client/src/utils/firebaseHelpers.js`)
Provides consistent error handling, retry logic, and timeout management for all Firestore operations.

```javascript
export const executeFirestoreOperation = async (operation, options = {}) => {
  const {
    timeoutMs = 10000,
    retry = true,
    retryDelay = 1000,
    operationName = 'Firestore operation'
  } = options;

  // Timeout and retry logic implementation
};
```

### Authentication Context (`client/src/features/auth/context/AuthContext.jsx`)
Provides user authentication state across all services and components.

## Data Flow Examples

### Creating a Music Rating

```
Component
    ↓ (calls hook)
useMusicData.rateAlbum()
    ↓ (calls service)
musicService.rateAlbum()
    ↓ (orchestrates multiple operations)
├─ ratingService.createRating()
├─ albumService.updateAlbumStats()
├─ activityService.createRatingActivity()
└─ userProfileService.updateUserStats()
    ↓ (database operations)
Firestore Collections Updated
```

### Following a User

```
Component
    ↓ (calls hook)
useSocialData.followUser()
    ↓ (calls service)
socialService.followUser()
    ↓ (orchestrates multiple operations)
├─ followService.followUser()
├─ userProfileService.updateFollowerCounts()
└─ activityService.createFollowActivity()
    ↓ (database operations)
Firestore Collections Updated
```

## Service Design Principles

### 1. Single Responsibility
Each service has a clear, focused purpose:
- Database services handle data access
- High-level services handle business logic
- Hooks handle React state management

### 2. Dependency Direction
Dependencies flow downward only:
- Components depend on hooks
- Hooks depend on services
- Services depend on database services
- Database services depend on Firebase/external APIs

### 3. Error Handling
Consistent error handling at every layer:
- Database services handle network/API errors
- High-level services handle business logic errors
- Hooks handle React-specific errors
- Components handle UI error display

### 4. Data Transformation
Data is transformed at appropriate layers:
- Database services return raw data
- High-level services enrich data
- Hooks manage data state
- Components format data for display

## Benefits of This Architecture

### 1. Maintainability
- Clear separation of concerns
- Easy to locate and modify functionality
- Consistent patterns across services

### 2. Testability
- Each layer can be tested independently
- Business logic is isolated from UI concerns
- Database operations can be mocked

### 3. Reusability
- Database services can be used by multiple high-level services
- High-level services can be used by multiple hooks
- Hooks can be used by multiple components

### 4. Scalability
- Easy to add new features without modifying existing code
- Services can be optimized independently
- Clear upgrade paths for each layer

## Future Considerations

### 1. Caching Layer
Consider adding a caching layer between hooks and services for frequently accessed data.

### 2. Real-time Updates
Implement Firestore listeners for real-time data updates in critical areas.

### 3. Offline Support
Add offline capabilities using Firebase's offline persistence features.

### 4. Performance Monitoring
Implement performance monitoring at each service layer to identify bottlenecks.

### 5. API Gateway
For external API calls, consider implementing an API gateway pattern through Firebase Functions.

## File Structure Summary

```
client/src/
├── services/
│   ├── database/           # Layer 1: Database Services
│   │   ├── albumService.js
│   │   ├── ratingService.js
│   │   ├── listService.js
│   │   ├── followService.js
│   │   ├── activityService.js
│   │   ├── activityLikeService.js
│   │   ├── activityCommentService.js
│   │   ├── postService.js
│   │   └── userSearchService.js
│   ├── musicService.js      # Layer 2: High-Level Services
│   ├── socialService.js
│   ├── feedService.js
│   └── listService.js
├── hooks/                   # Layer 3: React Hooks
│   ├── useMusicData.js
│   ├── useSocialData.js
│   ├── useFeedData.js
│   ├── useListData.js
│   ├── usePostData.js
│   └── useSearch.js
├── components/              # Layer 4: React Components
├── utils/
│   └── firebaseHelpers.js   # Cross-cutting utilities
└── config/
    └── firebase.js          # Configuration
```

This architecture ensures maintainable, scalable, and testable code while providing clear boundaries between different concerns in the application.
