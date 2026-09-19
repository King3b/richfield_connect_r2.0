import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import logo from "../assets/rcLogo.png";
import { AppContext } from "../context/AppContext";

import "../styles/Header.css";

function Header() {
  const { state, dispatch } = useContext(AppContext);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT_USER",
    });

    navigate("/login");
  };
  return (
    <header>
      <img src={logo} alt="Richfield Connect Logo" className="logo" />

      <h1>Richfield Connect</h1>

      <nav>
        <ul>
          {/* PUBLIC LINKS */}
          <button
            className={`theme-toggle ${state.darkMode ? "dark" : ""}`}
            onClick={() => dispatch({ type: "TOGGLE_DARK_MODE" })}
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

          {/* LOGGED OUT */}

          {!state.currentUser && (
            <>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>

              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          )}

          {/* LOGGED IN */}

          {state.currentUser && (
            <>
              <li>
                <Link to="/feed">Feed</Link>
              </li>

              <li>
                <Link to="/profile">Profile</Link>
              </li>

              <li>
                <Link to="/editprofile">Edit Profile</Link>
              </li>

              <li>
                <Link to="/ai-help">AI Help</Link>
              </li>

              <li>
                <Link to="/resources">Resources</Link>
              </li>

              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
