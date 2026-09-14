import "../styles/SignUp.css";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Card from "../main_components/Cards";
import Preview from "../main_components/Preview";
import ProfileView from "../components/ProfilePreview";
import Reasons from "../components/reasons";

function LogIn() {
  const { dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    studentID: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: "REGISTER_USER",
      payload: formData,
    });

    navigate("/profile");
  };

  return (
    <div>
      <section className="signUp_hero">
        <h2>Join Richfield Connect</h2>
        <p>
          Create your account and become a part of a vibrant academic community.
          Connect, collaborate and grow together.
        </p>
        <ul>
          <li>
            <div>
              <Card
                header="share"
                icon="share"
                info="Engage with peers and work together on ideas."
              />
            </div>
          </li>
          <li>
            <div>
              <Card
                header="Connect"
                icon="group"
                info="Showcase your academic interests and achievements."
              />
            </div>
          </li>
          <li>
            <div>
              <Card
                header="Grow"
                icon="school"
                info="Your data is protected and only shared within Richfield."
              />
            </div>
          </li>
        </ul>
      </section>
      <form action="">
        {/* STUDENT ID */}
        <label htmlFor="student_id">Student ID</label>
        <input
          type="text"
          id="student_id"
          name="studentID"
          placeholder="Student ID"
          value={formData.studentID}
          onChange={handleChange}
          minLength="9"
          maxLength="9"
          required
        />
        {/* PASSWORD */}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <br />
        <button type="submit">Log in</button> <br />
        <p className="logIn">
          Don't have an account? <a href="/signUp"> signup</a>
        </p>
      </form>

      <br />

      {/* REASONS */}
      <Reasons />
    </div>
  );
}

export default LogIn;
