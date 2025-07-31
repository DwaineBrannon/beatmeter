# BeatMeter

A comprehensive music rating and social platform that allows users to discover, rate, and share their favorite albums with a community of music enthusiasts.

## Features

### 🎵 Music Discovery & Rating
- **Spotify Integration**: Search for albums directly from Spotify's extensive library
- **Album Rating System**: Rate albums on a comprehensive scale with detailed reviews
- **Bias Sorter**: Rank songs from albums using head-to-head comparisons
- **Music Browsing**: Explore featured playlists, top albums, and trending songs

### 👥 Social Features
- **User Profiles**: Create personalized profiles with bios, favorite genres, and profile pictures
- **Follow System**: Follow other users and build your music community
- **Activity Feed**: Stay updated with ratings, lists, and activities from users you follow
- **Social Interactions**: Like and comment on user activities

### 📝 Collection Management
- **Custom Lists**: Create and manage personal album collections
- **Public/Private Lists**: Share your curated lists or keep them private
- **User Collections**: Browse other users' album collections and discover new music

### 🎨 User Experience
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Dark Mode Support**: Easy-to-use interface with theme switching
- **Real-time Updates**: Live activity feed and instant social interactions

## Technologies Used

### Frontend
- **React 18**: Modern UI library with hooks and functional components
- **Vite**: Fast build tool and development server
- **React Router**: Client-side routing for single-page application
- **Styled Components**: CSS-in-JS styling solution
- **React Icons**: Comprehensive icon library

### Backend & Infrastructure
- **Firebase Authentication**: Secure user authentication and authorization
- **Firebase Firestore**: NoSQL database for storing user data, ratings, and social interactions
- **Firebase Functions**: Serverless functions for backend logic
- **Firebase Hosting**: Static site hosting with CDN
- **Firebase Emulator Suite**: Local development environment

### APIs & External Services
- **Spotify Web API**: Music data, album information, and track details
- **Last.fm API**: Future integration for enhanced music metadata

### Development Tools
- **ESLint**: Code linting and formatting
- **Vitest**: Unit testing framework
- **Storybook**: Component development and documentation
- **Concurrently**: Running multiple development processes

## Installation

### Prerequisites 
- **Node.js**: Ensure you have Node.js (v16 or higher) installed. [nodejs.org](https://nodejs.org/)
- **Firebase Account**: Create a Firebase project for authentication and database
- **Spotify Developer Account**: Register an application to get API credentials

### Setup Steps

```bash
# Clone the repository
git clone https://github.com/dwainebrannon/beatmeter.git

# Navigate to the project directory
cd beatmeter

# Install root dependencies
npm install

# Install client dependencies
npm run install:client
```

## Configuration

### Firebase Setup
1. Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication (Email/Password provider at minimum)
3. Create a Firestore database
4. Copy your Firebase configuration

### Environment Variables
Create a `.env` file in the `client` directory with the following variables:
```env
# Spotify API Credentials
VITE_SPOTIFY_CLIENT_ID=your_spotify_client_id
VITE_SPOTIFY_CLIENT_SECRET=your_spotify_client_secret

# Firebase Configuration
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## Usage

### Development
```bash
# Start the development environment (Firebase emulators + client)
npm run dev

# Start only the client (if you have Firebase configured for production)
npm run client

# Start Firebase emulators only
npm run emulator
```

### Production
```bash
# Build the application
npm run build

# Deploy to Firebase
npm run deploy
```

The application will be available at `http://localhost:5173` for development.

### How to Use BeatMeter

1. **Create an Account**: Sign up with email and password
2. **Set Up Your Profile**: Add a display name, bio, and favorite genres
3. **Discover Music**: Browse featured playlists and trending albums
4. **Rate Albums**: Search for albums and give them detailed ratings and reviews
5. **Create Lists**: Organize albums into custom collections
6. **Follow Users**: Connect with other music enthusiasts
7. **Engage Socially**: Like and comment on activities in your feed
8. **Use Bias Sorter**: Rank songs from albums using head-to-head comparisons

## Database Schema

BeatMeter uses Firebase Firestore with the following main collections:

- **users**: User profiles, preferences, and social connections
- **albums**: Album metadata, ratings, and statistics
- **ratings**: Individual user album ratings and reviews
- **lists**: User-created album collections
- **follows**: User follow relationships
- **activities**: Social activity feed items
- **activity_likes**: Likes on activities
- **activity_comments**: Comments on activities

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Guidelines
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Follow the existing code style and patterns
4. Test your changes thoroughly using the Firebase emulators
5. Commit your changes (`git commit -m 'Add some amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Project Structure
- `client/src/pages/`: Main application pages
- `client/src/components/`: Reusable UI components
- `client/src/features/`: Feature-specific components and logic
- `client/src/hooks/`: Custom React hooks
- `client/src/services/`: API and database service functions
- `functions/src/`: Firebase Cloud Functions

## Future Roadmap

- Enhanced music recommendation engine
- Integration with additional music services (Last.fm, Apple Music)
- Advanced social features (groups, discussions)
- Mobile application development
- Music statistics and analytics
- Playlist sharing and collaboration

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Creator

Made by ROZEPOP

- [Bluesky](https://bsky.app/profile/rozepop.bsky.social)
- [GitHub](https://github.com/dwainebrannon)
- [Twitter](https://twitter.com/rozepop)
