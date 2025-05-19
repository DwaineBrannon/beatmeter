import { BrowserRouter as Router, Routes } from "react-router-dom";
import { generateRoutes } from './routes';

function App() {
  return (
    <Router>
      <Routes>
        {generateRoutes()}
      </Routes>
    </Router>
  );
}

export default App;