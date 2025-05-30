import { BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeProvider } from 'styled-components'; // Import ThemeProvider
import { theme } from './styles/theme'; // Import the theme
import { generateRoutes } from './features/routes';
import GlobalStyle from './styles/GlobalStyle';   // Import global styles

function App() {
  return (
    <ThemeProvider theme={theme}> {/* Wrap with ThemeProvider */}
      <GlobalStyle /> {/* Add global styles */}
      <Router>
        <Routes>
          {generateRoutes()}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;