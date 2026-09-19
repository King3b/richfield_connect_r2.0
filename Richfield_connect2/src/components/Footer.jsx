import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <h2>Richfield Connect</h2>

          <p>
            Connecting Richfield students through learning, collaboration and
            community.
          </p>

          <span>🎓 Learn • Connect • Grow</span>
        </div>

        {/* Navigation */}
        <div className="footer-column">
          <h3>Navigate</h3>

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/signup">Sign Up</Link>
            </li>

            <li>
              <Link to="/feed">Feed</Link>
            </li>

            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-column">
          <h3>Support</h3>

          <ul>
            <li>
              <Link to="/about#help_center">Help Center</Link>
            </li>

            <li>
              <Link to="/about#contact">Contact Us</Link>
            </li>

            <li>
              <Link to="/about#privacy_policy">Privacy Policy</Link>
            </li>

            <li>
              <Link to="/about#Core_values">Terms of Use</Link>
            </li>
          </ul>
        </div>

        {/* Community */}
        <div className="footer-column">
          <h3>Community</h3>

          <ul>
            <li>
              <Link to="/feed">Student Feed</Link>
            </li>

            <li>
              <Link to="/chat">Group Chat</Link>
            </li>

            <li>
              <Link to="/ai-help">AI Help</Link>
            </li>

            <li>
              <Link to="/profile">My Profile</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <div className="footer-line"></div>

        <div className="footer-bottom-content">
          <p>© 2026 Richfield Connect. All rights reserved.</p>

          <p>Built for the Richfield student community 🎓</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
