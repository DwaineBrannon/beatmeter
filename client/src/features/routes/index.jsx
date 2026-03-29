import { Route } from 'react-router-dom';
import MainLayout from '../../components/layout/MainLayout';
import Home from '../../pages/Home';
import Profile from '../../pages/Profile';
import Sorter from '../../pages/BiasSorter';
import Login from '../../pages/Login';
import CreateAccount from '../../pages/CreateAccount';
import ForgotPassword from '../../pages/ForgotPassword';
import Lists from '../../pages/Lists';
import Music from '../music/pages/MusicPage';
import SearchResults from '../../pages/SearchResults';
import AlbumDetailsPage from '../../pages/AlbumDetailsPage';
import UserCollectionPage from '../../pages/UserCollectionPage';
import ProtectedRoute from '../auth/components/ProtectedRoute';
import ProfileSetup from '../auth/components/ProfileSetup';
import AdminDashboard from '../../pages/AdminDashboard';
import AdminRoute from '../auth/components/AdminRoute';

// Route configuration with metadata
export const routes = [
  {
    path: '/',
    element: Home,
    title: 'Home | BeatMeter',
    isPublic: true,
    description: 'Track and rate your favorite music',
  },
  {
    path: '/sorter',
    element: Sorter,
    title: 'Song Sorter | BeatMeter',
    isPublic: true,
    description: 'Sort and rank your favorite songs',
  },
  {
    // Dynamic route to handle user profiles
    path: '/profile/:username',
    element: Profile,
    title: 'Profile | BeatMeter',
    isPublic: true,
    description: 'View user profile and rankings',
  },
  {
    path: '/profile',
    element: Profile,
    title: 'My Profile | BeatMeter',
    isPublic: false,
    description: 'View your profile',
  },
  {
    path: '/profile-setup',
    element: ProfileSetup,
    title: 'Setup Your Profile | BeatMeter',
    isPublic: false,
    description: 'Complete your profile setup',
  },
  {
    path: '/login',
    element: Login,
    title: 'Login | BeatMeter',
    isPublic: true,
    description: 'Sign in to BeatMeter',
  },
  {
    path: '/create-account',
    element: CreateAccount,
    title: 'Create Account | BeatMeter',
    isPublic: true,
    description: 'Create a new BeatMeter account',
  },
  {
    path: '/forgot-password',
    element: ForgotPassword,
    title: 'Forgot Password | BeatMeter',
    isPublic: true,
    description: 'Reset your BeatMeter password',
  },
  {
    path: '/lists',
    element: Lists,
    title: 'Playlists',
    isPublic: true,
    description: 'Explore user-generated playlists and recommendations',
  },
  {
    path: '/music',
    element: Music,
    title: 'Music | BeatMeter',
    isPublic: true,
    description: 'Discover and manage your music collections',
  },
  {
    path: '/search',
    element: SearchResults,
    title: 'Search Results | BeatMeter',
    isPublic: true,
    description: 'Search for music and users',
  },
  {
    path: '/album/:albumId', // New route for album details
    element: AlbumDetailsPage,
    title: 'Album Details | BeatMeter',
    isPublic: true,
    description: 'View album details and ratings',
  },
  {
    path: '/collection', // User collection route
    element: UserCollectionPage,
    title: 'Your Collection | BeatMeter',
    isPublic: false, // This should be false in a real app as it requires authentication
    description: 'View and manage your music collection',
  },
  {
    path: '/admin',
    element: AdminDashboard,
    title: 'Admin Dashboard | BeatMeter',
    isPublic: false,
    isAdmin: true, // Special flag for admin routes
    description: 'Admin panel for managing featured content',
  },
];

// Helper to generate Route elements with layout
export const generateRoutes = () => {
  return (
    <Route element={<MainLayout />}>
      {routes.map(
        ({ path, element: ElementComponent, title, isPublic, isAdmin }) => {
          const Component = ElementComponent;
          return (
            <Route
              key={path}
              path={path}
              element={
                <>
                  {/* Update page title when route changes */}
                  <title>{title}</title>
                  {isAdmin ? (
                    <AdminRoute>
                      <Component />
                    </AdminRoute>
                  ) : isPublic ? (
                    <Component />
                  ) : (
                    <ProtectedRoute>
                      <Component />
                    </ProtectedRoute>
                  )}
                </>
              }
            />
          );
        }
      )}
    </Route>
  );
};
