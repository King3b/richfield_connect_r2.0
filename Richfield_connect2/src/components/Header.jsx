import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import logo from "../assets/rcLogo.png";

import { AppContext } from "../context/AppContext";

import "../styles/Header.css";

function Header() {
  const { state, dispatch } = useContext(AppContext);

  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT_USER",
    });

    setProfileMenuOpen(false);

    navigate("/login");
  };

  const toggleProfileMenu = () => {
    setProfileMenuOpen((previous) => !previous);
  };

  return (
    <header>
      <img src={logo} alt="Richfield Connect Logo" className="logo" />

      <h1>Richfield Connect</h1>

      <nav>
        <ul>
          <button
            type="button"
            className={`theme-toggle ${state.darkMode ? "dark" : ""}`}
            onClick={() =>
              dispatch({
                type: "TOGGLE_DARK_MODE",
              })
            }
            aria-label="Toggle dark mode"
          >
            <span className="theme-icon sun">☀️</span>

            <span className="theme-icon moon">🌙</span>

            <span className="toggle-circle"></span>
          </button>

          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>

            <li>
              <Link to="/login">Login</Link>
            </li>
          </>

          <li className="profile-dropdown">
            <button
              type="button"
              className="profile-dropdown-button"
              onClick={toggleProfileMenu}
              aria-expanded={profileMenuOpen}
            >
              <span className="material-symbols-rounded">account_circle</span>

              <span>Profile</span>

              <span className="material-symbols-rounded dropdown-arrow">
                {profileMenuOpen ? "keyboard_arrow_up" : "keyboard_arrow_down"}
              </span>
            </button>

            {profileMenuOpen && (
              <div className="profile-dropdown-menu">
                <Link to="/profile" onClick={() => setProfileMenuOpen(false)}>
                  <span className="material-symbols-rounded">person</span>
                  Profile
                </Link>

                <Link to="/feed" onClick={() => setProfileMenuOpen(false)}>
                  <span className="material-symbols-rounded">dynamic_feed</span>
                  Feed
                </Link>

                <Link
                  to="/editprofile"
                  onClick={() => setProfileMenuOpen(false)}
                >
                  <span className="material-symbols-rounded">edit</span>
                  Edit Profile
                </Link>

                <Link to="/ai-help" onClick={() => setProfileMenuOpen(false)}>
                  <span className="material-symbols-rounded">smart_toy</span>
                  AI Help
                </Link>

                <Link to="/resources" onClick={() => setProfileMenuOpen(false)}>
                  <span className="material-symbols-rounded">menu_book</span>
                  Resources
                </Link>

                <div className="profile-dropdown-divider"></div>

                <button
                  type="button"
                  className="profile-dropdown-logout"
                  onClick={handleLogout}
                >
                  <span className="material-symbols-rounded">logout</span>
                  Logout
                </button>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
