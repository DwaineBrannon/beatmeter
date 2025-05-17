import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Sorter from "./pages/BiasSorter";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      {/* Add a NavBar here if you want */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sorter" element={<Sorter />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;