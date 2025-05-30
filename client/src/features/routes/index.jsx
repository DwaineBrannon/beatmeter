import { Route } from 'react-router-dom';
import MainLayout from '../../components/layout/MainLayout';
import Home from '../../pages/Home';
import Profile from '../../pages/Profile';
import Sorter from '../../pages/BiasSorter';
import Login from '../../pages/Login';

// Route configuration with metadata
export const routes = [
  {
    path: '/',
    element: Home,
    title: 'Home | BeatMeter',
    isPublic: true,
    description: 'Track and rate your favorite music'
  },
  {
    path: '/sorter',
    element: Sorter,
    title: 'Song Sorter | BeatMeter',
    isPublic: true,
    description: 'Sort and rank your favorite songs'
  },
  {
    path: '/profile', // Changed from '/profile/:username'
    element: Profile,
    title: 'Profile | BeatMeter',
    isPublic: true,
    description: 'View user profile and rankings'
  },
  {
    path: '/login',
    element: Login,
    title: 'Login | BeatMeter',
    isPublic: true,
    description: 'Sign in to BeatMeter'
  }
];

// Helper to generate Route elements with layout
export const generateRoutes = () => {
  return (
    <Route element={<MainLayout />}>
      {routes.map(({ path, element: PageElement, title }) => (
        <Route 
          key={path} 
          path={path} 
          element={
            <>
              {/* Update page title when route changes */}
              <title>{title}</title>
              <PageElement />
            </>
          } 
        />
      ))}
    </Route>
  );
};