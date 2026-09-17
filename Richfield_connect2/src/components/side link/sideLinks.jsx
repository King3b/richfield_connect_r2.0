import { Link } from "react-router-dom";
import "../side link/links.css";
function SideLinks() {
  return (
    <aside className="social_links">
      <ul>
        <li>
          <Link to="/">🏠 Home</Link>
        </li>

        <li>
          <Link to="/feed">📰 Feed</Link>
        </li>

        <li>
          <Link to="/profile">👤 Profile</Link>
        </li>

        <li>
          <Link to="/resources">📚 Resources</Link>
        </li>

        <li>
          <Link to="/profileEdit">⚙ Edit Profile</Link>
        </li>

        <li>
          <Link to="/Chat">chat</Link>
        </li>
      </ul>
    </aside>
  );
}

export default SideLinks;
