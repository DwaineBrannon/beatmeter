# Admin System Setup

This document explains how to set up and use the admin system for managing featured playlists.

## Features

### User Roles
- **Regular User**: Can view and interact with featured playlists
- **Admin User**: Can manage featured playlists through the admin dashboard

### Admin Capabilities
- Add featured playlists using Spotify URLs
- Enable/disable playlists
- Edit playlist titles and descriptions
- Delete playlists
- View all playlists with their status

## Setup Instructions

### 1. Making a User Admin

Since this is the initial setup, you'll need to manually make a user an admin:

#### Method 1: Browser Console (Development)
1. Log in as the user you want to make admin
2. Open browser developer tools (F12)
3. Go to the Console tab
4. Load the admin setup utility:
   ```javascript
   import('./src/utils/adminSetup.js').then(module => {
     window.makeCurrentUserAdmin = module.default.makeCurrentUserAdmin;
     makeCurrentUserAdmin();
   });
   ```
5. Refresh the page after success

#### Method 2: Direct Database Update
1. Go to Firebase Console
2. Navigate to Firestore Database
3. Find the `userprofiles` collection
4. Find the user document by their UID
5. Add or update the field: `userRole: "admin"`

### 2. Accessing Admin Dashboard

Once a user has admin role:
1. Log in to the application
2. Click on your avatar in the top-right corner
3. Select "Admin Dashboard" from the dropdown menu
4. You'll be redirected to `/admin`

## Using the Admin Dashboard

### Adding a Featured Playlist

1. Copy a Spotify playlist URL (format: `https://open.spotify.com/playlist/PLAYLIST_ID`)
2. Paste it in the "Spotify Playlist URL" field
3. Optionally add a custom title and description
4. Click "Add Playlist"

### Managing Playlists

- **Enable/Disable**: Use the toggle button to show/hide playlists on the home page
- **Delete**: Permanently remove a playlist from the system
- **View on Spotify**: Click the link to open the playlist in Spotify

### Supported URL Formats

The system accepts these Spotify playlist URL formats:
- `https://open.spotify.com/playlist/37i9dQZF1DX0XUsuxWHRQd`
- `spotify:playlist:37i9dQZF1DX0XUsuxWHRQd`
- `37i9dQZF1DX0XUsuxWHRQd` (just the ID)

## How It Works

### Architecture

1. **Frontend**: React components for admin dashboard
2. **Backend**: Firebase Functions API endpoints for playlist management
3. **Database**: Firestore collection `featuredPlaylists`
4. **Security**: Firestore rules enforce admin-only write access

### Data Flow

1. Admin adds playlist → API validates user → Stores in Firestore
2. Home page loads → Fetches active playlists → Displays in carousel
3. Users click playlist → Opens Spotify in new tab

### Security

- Firestore rules check user role before allowing writes
- API endpoints verify admin status via Firebase Auth tokens
- Frontend components are protected by route guards

## API Endpoints

### Admin Endpoints (Require Admin Authentication)
- `GET /admin/featured-playlists` - Get all playlists
- `POST /admin/featured-playlists` - Add new playlist
- `PUT /admin/featured-playlists/{id}` - Update playlist
- `DELETE /admin/featured-playlists/{id}` - Delete playlist

### Public Endpoints
- `GET /featured-playlists` - Get active playlists for home page

## Troubleshooting

### "Access Denied" Error
- Make sure the user has `userRole: "admin"` in their Firestore profile
- Check that Firestore rules are properly deployed

### Playlists Not Showing on Home Page
- Verify playlists are marked as `isActive: true`
- Check browser console for API errors
- Ensure Firebase Functions are deployed

### Invalid Playlist URL
- Make sure the URL is a valid Spotify playlist link
- The playlist must be public on Spotify

## Future Enhancements

- Integration with Spotify API to fetch playlist metadata automatically
- Bulk playlist management
- Playlist scheduling (show/hide at certain times)
- Analytics on playlist engagement
- More granular admin permissions

## Development Notes

- Admin routes are protected by `AdminRoute` component
- Database operations go through the API layer for security
- Error handling includes user-friendly messages
- All admin actions are logged for audit purposes
