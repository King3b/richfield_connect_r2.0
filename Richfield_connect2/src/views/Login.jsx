import "../styles/login.css";

import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AppContext } from "../context/AppContext";

import Card from "../main_components/Cards";
import Reasons from "../components/reasons";

function LogIn() {
  const { state, dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    studentID: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { studentID, password } = formData;

    // Find registered user
    const user = state.users?.find(
      (user) => user.studentID === studentID && user.password === password,
    );

    if (!user) {
      setError("Incorrect Student ID or password.");
      return;
    }

    // Set the logged-in user
    dispatch({
      type: "LOGIN_USER",
      payload: user,
    });

    navigate("/profile");
  };

  return (
    <div className="logIn-page">
      {/* HERO */}
      <section className="logIn_hero">
        <div className="logIn-hero-content">
          <p className="logIn-eyebrow">RICHFIELD CONNECT</p>

          <h2>Welcome Back 👋</h2>

          <p>
            Log in to reconnect with your classmates, explore academic resources
            and continue growing together.
          </p>
        </div>
      </section>
      <section className="logIn-layout">
        <section className="logIn-info">
          <div className="logIn-info-header">
            <p className="info-eyebrow">RICHFIELD CONNECT</p>
            <h2>Why Log In?</h2>
            <p>
              Stay connected with your classmates, discover resources, and keep
              up with your academic journey.
            </p>
          </div>
          <ul>
            <li>
              <Card
                header="Connect"
                icon="group"
                info="Reconnect with your fellow students."
              />
            </li>
            <li>
              <Card
                header="Share"
                icon="share"
                info="Engage with peers and share ideas."
              />
            </li>
            <li>
              <Card
                header="Grow"
                icon="school"
                info="Continue your academic journey."
              />
            </li>
          </ul>
        </section>

        {/* LOGIN FORM */}

        <section className="logIn">
          <form onSubmit={handleSubmit}>
            <h2>Log In</h2>

            <p className="form-info">
              Enter your Richfield Connect account details.
            </p>

            {/* STUDENT ID */}
            <label htmlFor="student_id">Student ID</label>

            <input
              type="text"
              id="student_id"
              name="studentID"
              placeholder="Enter your Student ID"
              value={formData.studentID}
              onChange={handleChange}
              minLength={9}
              maxLength={9}
              required
            />

            {/* PASSWORD */}
            <label htmlFor="password">Password</label>

            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            {/* ERROR */}
            {error && <p className="error">{error}</p>}

            {/* LOGIN */}
            <button type="submit">Log In</button>

            {/* SIGN UP */}
            <p className="logIn-link">
              Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
          </form>
        </section>
      </section>

      {/* REASONS */}
      <Reasons />
    </div>
  );
}

export default LogIn;
