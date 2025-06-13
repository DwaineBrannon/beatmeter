import { BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeProvider } from 'styled-components'; // Import ThemeProvider
import { theme } from './styles/theme'; // Import the theme
import { generateRoutes } from './features/routes';
import GlobalStyle from './styles/GlobalStyle';   // Import global styles
import { AuthProvider } from './features/auth/context/AuthContext';
import AuthenticationWrapper from './features/auth/components/AuthenticationWrapper';
import ErrorBoundary from './features/common/components/ErrorBoundary';
import ConnectionStatusIndicator from './features/common/components/ConnectionStatusIndicator';

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}> {/* Wrap with ThemeProvider */}
        <GlobalStyle /> {/* Add global styles */}
        <AuthProvider> {/* Wrap with AuthProvider */}
          <AuthenticationWrapper> {/* Ensures all users have profiles */}
            <Router>
              <Routes>
                {generateRoutes()}
              </Routes>
              <ConnectionStatusIndicator />
            </Router>
          </AuthenticationWrapper>
        </AuthProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;