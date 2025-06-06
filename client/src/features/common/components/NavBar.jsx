import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import {
  NavBarRoot,
  NavBarInner,
  NavBarLeft,
  NavBarLogo,
  NavBarSearchForm,
  NavBarSearchInput,
  NavBarLinks,
  NavBarLink,
  NavBarLinkCTA,
  NavBarDivider,
  NavBarHamburger,
  NavBarOverlay,
  NavBarMobileMenu,
  NavBarMobileLink,
  NavBarMobileLinkCTA,
  NavBarAvatarContainer,
  NavBarAvatarBtn,
  NavBarAvatarImg,
  NavBarAvatarPlaceholder,
  NavBarUserDropdown,
  NavBarUserDropdownLink,
  NavBarUserDropdownButton,
  NavBarMobileAvatarContainer
} from './NavBar.styles';

// Accept isSignedIn, user, and onSignOut as props
function NavBar({ isSignedIn = false, user = {}, onSignOut }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const avatarUrl = user.avatarUrl || null;
  const userInitials = user.name ? user.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0,2) : 'U';

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to /music with the search query as a URL parameter
      navigate(`/music?search=${encodeURIComponent(searchQuery.trim())}`);
    }
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
    <NavBarAvatarBtn
      onClick={() => setDropdownOpen((open) => !open)}
      aria-label="Open user menu"
      type="button"
    >
      {avatarUrl ? (
        <NavBarAvatarImg src={avatarUrl} alt="User avatar" />
      ) : (
        <NavBarAvatarPlaceholder>{userInitials}</NavBarAvatarPlaceholder>
      )}
    </NavBarAvatarBtn>
  );

  // User dropdown menu
  const UserDropdown = (
    <NavBarUserDropdown ref={dropdownRef}>
      <NavBarUserDropdownLink to="/settings" onClick={() => setDropdownOpen(false)}>Settings</NavBarUserDropdownLink>
      <NavBarUserDropdownLink to="/edit-profile" onClick={() => setDropdownOpen(false)}>Edit Profile</NavBarUserDropdownLink>
      <NavBarUserDropdownButton isLogout onClick={handleSignOut}>Log Out</NavBarUserDropdownButton>
    </NavBarUserDropdown>
  );
  return (
    <NavBarRoot>
      <NavBarInner>
        {/* Left section with logo and search */}
        <NavBarLeft>
          <NavBarLogo to="/">
            beatmeter
          </NavBarLogo>
          <NavBarSearchForm onSubmit={handleSearch}>
            <NavBarSearchInput
              type="search"
              placeholder="Search Music..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </NavBarSearchForm>
        </NavBarLeft>        {/* Hamburger icon for mobile */}
        <NavBarHamburger
          onClick={() => setMobileOpen((open) => !open)}
          $isOpen={mobileOpen}
          aria-label="Open navigation menu"
        >
          <span />
          <span />
          <span />
        </NavBarHamburger>

        {/* Desktop nav links */}        <NavBarLinks>
          <NavBarLink to="/music">Music</NavBarLink>
          <NavBarLink to="/lists">Lists</NavBarLink>
          {isSignedIn && <NavBarLink to="/collection">My Collection</NavBarLink>}
          <NavBarLink to="/profile">Profile</NavBarLink>
          <NavBarDivider />
          {isSignedIn ? (
            <NavBarAvatarContainer>
              {UserAvatar}
              {dropdownOpen && UserDropdown}
            </NavBarAvatarContainer>
          ) : (
            <>
              <NavBarLink to="/login">Sign In</NavBarLink>
              <NavBarLinkCTA to="/create-account">Create Account</NavBarLinkCTA>
            </>
          )}
        </NavBarLinks>

        {/* Overlay for mobile menu */}
        {mobileOpen && <NavBarOverlay onClick={() => setMobileOpen(false)} />}

        {/* Mobile menu slide-in */}
        <NavBarMobileMenu open={mobileOpen}>
          {isSignedIn && (
            <NavBarMobileAvatarContainer>
              {UserAvatar}
              {dropdownOpen && UserDropdown}
            </NavBarMobileAvatarContainer>
          )}          <NavBarMobileLink to="/music" onClick={() => setMobileOpen(false)}>Music</NavBarMobileLink>
          <NavBarMobileLink to="/lists" onClick={() => setMobileOpen(false)}>Lists</NavBarMobileLink>
          {isSignedIn && <NavBarMobileLink to="/collection" onClick={() => setMobileOpen(false)}>My Collection</NavBarMobileLink>}
          <NavBarMobileLink to="/profile" onClick={() => setMobileOpen(false)}>Profile</NavBarMobileLink>
          {!isSignedIn && <>
            <NavBarMobileLink to="/login" onClick={() => setMobileOpen(false)}>Sign In</NavBarMobileLink>
            <NavBarMobileLinkCTA to="/create-account" onClick={() => setMobileOpen(false)}>Create Account</NavBarMobileLinkCTA>
          </>}
        </NavBarMobileMenu>
      </NavBarInner>
    </NavBarRoot>
  );
}

export default NavBar;