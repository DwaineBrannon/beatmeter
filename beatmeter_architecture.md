# beatmeter

## Architecture and Description for beatmeter


### Tech stack 

### Frontend
- Vite + React
- Firebase Hosting
- Styled-Components for CSS

### Backend & Services  
- Firebase emulation for dev
- Firebase for production (Auth, Firestore, Functions if needed)
- Spotify Web API
- Security: Firestore rules, rate limiting

### Database Schema
- **User Profile Data**
    - Display Name
    - User ID
    - E-mail
    - Profile Picture
    - Bio 
    - Date Joined
    - Follower Count
    - Following count
    - Username
    - Birth Date
    - Personal Links
    - Location
    - Favorite Genres

- **Ratings**
    - UserID
    - Album ID
    - Rating
    - Review
    - Firebase timestamp
    - userDisplayName

- **Albums** 
    - Spotify ID
    - Release Date
    - Genre(s)
    - Track Count/Duration
    - Spotify URL
    - Name
    - Artist
    - Album art
    - Average Rating
    - Total ratings
    - Last updated timestamp

- **Lists**
    - List ID
    - User ID
    - List Name
    - List Description
    - Album IDs
    - Public/Private
    - Created timestamp
    - Updated timestamp

- **Follows**
    - Follow ID
    - Follower ID (user doing the following)
    - Following ID (user being followed)
    - Timestamp

- **Activity Feed**
    - Activity ID
    - User ID (who performed the action)
    - Action Type (new_rating, new_list, followed_user)
    - Target ID (rating ID, list ID, or user ID)
    - Timestamp
    - userDisplayName
    - Additional Data (for context - album name, list name, etc.)

- **Activity Likes**
    - Like ID
    - Activity ID
    - User ID (who liked)
    - Timestamp

- **Activity Comments**
    - Comment ID
    - Activity ID
    - User ID (who commented)
    - Comment Text
    - Timestamp
    - userDisplayName

### Authentication
- Firebase Auth

### APIs
- Spotify Web API
- Last.fm API (future consideration)

### Future Considerations
- Error monitoring (Sentry, LogRocket)
- Analytics for user behavior insights