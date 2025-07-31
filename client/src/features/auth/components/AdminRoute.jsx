import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

/**
 * AdminRoute component - protects admin-only routes
 * Requires user to be authenticated and have 'admin' role
 */
function AdminRoute({ children }) {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  if (currentUser.userRole !== 'admin') {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default AdminRoute;
