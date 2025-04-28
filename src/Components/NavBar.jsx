import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: 24
    }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", margin: 0 }}>beatmeter</h1>
      <div style={{
        display: "flex",
        gap: 24,
        marginTop: 8,
        fontSize: "1.1rem"
      }}>
        <Link to="/login">Sign In</Link>
        <Link to="/create-account">Create Account</Link>
        <Link to="/music">Music</Link>
        <Link to="/lists">Lists</Link>
        <Link to="/profile/yourusername">Profile</Link>
      </div>
    </nav>
  );
}

export default NavBar;