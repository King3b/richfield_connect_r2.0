import { Link } from "react-router-dom";
import "../styles/Footer.css";
function Footer() {
  return (
    <footer>
      <div class="f_naves">
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
            <li>
              <Link to="/feed">Feed</Link>
            </li>
          </ul>
        </div>
        <hr />
        <div>
          <ul>
            <li>
              <a href="About.html#help_center">Help center</a>
            </li>
            <li>
              <a href="About.html#contact">Contact us</a>
            </li>
            <li>
              <a href="About.html#privacy_policy">Privacy policy</a>
            </li>
            <li>
              <a href="About.html#Core_values">Terms of use</a>
            </li>
          </ul>
        </div>
      </div>
      <p>&copy; 2024 Richfield Connect. All rights reserved.</p>
    </footer>
  );
}
export default Footer;
