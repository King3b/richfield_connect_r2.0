import { Link } from "react-router-dom";
import logo from "../assets/rcLogo.png";
import "../styles/Header.css";

function Header() {
  return (
    <header>
      <img src={logo} alt="Richfield Connect Logo" className="logo" />
      <h1>Richfield Connect</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/feed">Feed</Link>
          </li>

          <li>
            <Link to="/profile">Profile</Link>
          </li>

          <li>
            <Link to="/profileEdit">Edit profile</Link>
          </li>

          <li>
            <Link to="/signup">Sign Up</Link>
          </li>

          <li>
            <Link to="/resources">Resources</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
