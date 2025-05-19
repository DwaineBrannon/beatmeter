import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { theme } from "../../../styles/theme";
import "./NavBar.css";

// Accept isSignedIn, user, and onSignOut as props
function NavBar({ isSignedIn = false, user = {}, onSignOut }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const avatarUrl = user.avatarUrl || null;
  const userInitials = user.name ? user.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0,2) : 'U';

  const handleSearch = (e) => {
    e.preventDefault();
    // TODO: Implement search functionality
    console.log("Searching for:", searchQuery);
  };

  // Handle sign out click
  const handleSignOut = (e) => {
    e.preventDefault();
    setDropdownOpen(false);
    if (onSignOut) onSignOut();
  };

  // Close dropdown on outside click
  useEffect(() => {
    if (!dropdownOpen) return;
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [dropdownOpen]);

  // User avatar component
  const UserAvatar = (
    <button
      className="navbar-avatar-btn"
      onClick={() => setDropdownOpen((open) => !open)}
      aria-label="Open user menu"
      type="button"
    >
      {avatarUrl ? (
        <img src={avatarUrl} alt="User avatar" className="navbar-avatar-img" />
      ) : (
        <span className="navbar-avatar-placeholder">{userInitials}</span>
      )}
    </button>
  );

  // User dropdown menu
  const UserDropdown = (
    <div className="navbar-user-dropdown" ref={dropdownRef}>
      <Link to="/settings" className="navbar-user-dropdown-link" onClick={() => setDropdownOpen(false)}>Settings</Link>
      <Link to="/edit-profile" className="navbar-user-dropdown-link" onClick={() => setDropdownOpen(false)}>Edit Profile</Link>
      <a href="#signout" className="navbar-user-dropdown-link navbar-user-dropdown-logout" onClick={handleSignOut}>Log Out</a>
    </div>
  );

  return (
    <nav className="navbar-root">
      <div className="navbar-inner">
        {/* Left section with logo and search */}
        <div className="navbar-left">
          <Link to="/" className="navbar-logo">
            beatmeter
          </Link>
          <form onSubmit={handleSearch} className="navbar-search-form">
            <input
              type="search"
              placeholder="Search Music..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="navbar-search-input"
            />
          </form>
        </div>

        {/* Hamburger icon for mobile */}
        <button
          onClick={() => setMobileOpen((open) => !open)}
          className={`navbar-hamburger${mobileOpen ? " open" : ""}`}
          aria-label="Open navigation menu"
        >
          <span />
          <span />
          <span />
        </button>

        {/* Desktop nav links */}
        <div className="navbar-links">
          <Link to="/music" className="navbar-link">Music</Link>
          <Link to="/lists" className="navbar-link">Lists</Link>
          <Link to="/profile/yourusername" className="navbar-link">Profile</Link>
          <div className="navbar-divider" />
          {isSignedIn ? (
            <div className="navbar-avatar-container">
              {UserAvatar}
              {dropdownOpen && UserDropdown}
            </div>
          ) : (
            <>
              <Link to="/login" className="navbar-link">Sign In</Link>
              <Link to="/create-account" className="navbar-link navbar-link-cta">Create Account</Link>
            </>
          )}
        </div>

        {/* Overlay for mobile menu */}
        {mobileOpen && <div className="navbar-overlay" onClick={() => setMobileOpen(false)} />}

        {/* Mobile menu slide-in */}
        <div className={`navbar-mobile-menu${mobileOpen ? " open" : ""}`}>
          {isSignedIn && (
            <div className="navbar-mobile-avatar-container">
              {UserAvatar}
              {dropdownOpen && UserDropdown}
            </div>
          )}
          <Link to="/music" className="navbar-mobile-link" onClick={() => setMobileOpen(false)}>Music</Link>
          <Link to="/lists" className="navbar-mobile-link" onClick={() => setMobileOpen(false)}>Lists</Link>
          <Link to="/profile/yourusername" className="navbar-mobile-link" onClick={() => setMobileOpen(false)}>Profile</Link>
          {!isSignedIn && <>
            <Link to="/login" className="navbar-mobile-link" onClick={() => setMobileOpen(false)}>Sign In</Link>
            <Link to="/create-account" className="navbar-mobile-link navbar-mobile-link-cta" onClick={() => setMobileOpen(false)}>Create Account</Link>
          </>}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;