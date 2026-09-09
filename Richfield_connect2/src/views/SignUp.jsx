import "../styles/SignUp.css";
import { useState } from "react";

function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    userName: "",
    surName: "",
    email: "",
    campus: "",
    year: "",
    gender: "",
    studentID: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data:", formData);
  };

  return (
    <div>
      <section className="signup-layout">
        {/* LEFT SIDE */}
        <section className="link-boared">
          <div className="board-card">
            <h2>Join Richfield Connect</h2>

            <p>
              Create your account and become a part of a vibrant academic
              community. Connect, collaborate and grow together.
            </p>

            <div className="board-links">
              <span className="material-symbols-rounded icon">person</span>

              <h5>Create your profile</h5>
              <p>Share your academic interests and goals.</p>
            </div>

            <div className="board-links">
              <span className="material-symbols-rounded icon">
                dynamic_feed
              </span>

              <h5>Explore the feed</h5>
              <p>Discover posts and connect with peers.</p>
            </div>

            <div className="board-links">
              <span className="material-symbols-rounded icon">
                library_books
              </span>

              <h5>School resources</h5>
              <p>Access academic materials and support services.</p>
            </div>
          </div>
        </section>

        {/* SIGN UP */}
        <section className="signup">
          <form id="signupForm" onSubmit={handleSubmit}>
            <img src="/assets/images/default.jpeg" alt="profile picture" />

            <h3>Sign Up</h3>

            <p>Create your profile to get started!</p>

            <br />

            {/* NAME */}
            <label htmlFor="name">Name</label>

            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
            />

            <br />

            {/* SURNAME */}
            <label htmlFor="surname">Surname</label>

            <input
              type="text"
              id="surname"
              name="surName"
              value={formData.surName}
              onChange={handleChange}
              placeholder="Surname"
              required
            />

            <br />

            {/* EMAIL */}
            <label htmlFor="email">Email</label>

            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />

            <br />

            {/* USERNAME */}
            <label htmlFor="username">Username</label>

            <input
              type="text"
              id="username"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              placeholder="@username"
              required
            />

            <div className="username-preview">
              Suggested username:
              <span id="generatedUsername">@{formData.userName}</span>
            </div>

            <br />

            {/* CAMPUS */}
            <label htmlFor="campus">Campus</label>

            <select
              name="campus"
              id="campus"
              value={formData.campus}
              onChange={handleChange}
              required
            >
              <option value="">Select Campus</option>
              <option value="Bryanston">Bryanston Campus</option>
              <option value="Cape Town">Cape Town Campus</option>
              <option value="Centurion">Centurion Campus</option>
              <option value="Durban">Durban Campus</option>
              <option value="Musgrave">Musgrave Campus</option>
              <option value="Newtown Junction">Newtown Junction Campus</option>
              <option value="Polokwane">Polokwane Campus</option>
              <option value="Pretoria">Pretoria Campus</option>
            </select>

            <br />

            {/* YEAR */}
            <label htmlFor="year">Year of Study</label>

            <select
              name="year"
              id="year"
              value={formData.year}
              onChange={handleChange}
              required
            >
              <option value="">Select Year</option>
              <option value="HCIT">HCIT</option>
              <option value="DIT">DIT</option>
              <option value="DIT 2nd">DIT 2nd</option>
              <option value="BScIT">BScIT</option>
              <option value="BScIT 2nd">BScIT 2nd</option>
              <option value="BScIT 3rd">BScIT 3rd</option>
            </select>

            <br />

            {/* GENDER */}
            <label htmlFor="gender">Gender</label>

            <select
              name="gender"
              id="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>

            <br />

            {/* STUDENT ID */}
            <label htmlFor="student_id">Student ID</label>

            <input
              type="text"
              id="student_id"
              name="studentID"
              placeholder="Student ID"
              value={formData.studentID}
              onChange={handleChange}
              minLength="8"
              maxLength="8"
              required
            />

            <br />

            {/* PASSWORD */}
            <label htmlFor="password">Password</label>

            <div className="password-box">
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
              />

              <span className="material-symbols-rounded eye">visibility</span>
            </div>

            <div className="strength">
              <div className="strength-bar"></div>
            </div>

            <p className="strength-text"></p>

            <br />

            {/* CONFIRM PASSWORD */}
            <label htmlFor="confirm_password">Confirm Password</label>

            <div className="password-box">
              <input
                type="password"
                id="confirm_password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                required
              />

              <span className="material-symbols-rounded eye">visibility</span>
            </div>

            <p className="password-match"></p>

            <br />

            <button type="submit">Sign Up</button>

            <hr />

            <p className="login">
              Already have an account?
              <a href="/login"> Login here</a>
            </p>
          </form>

          {/* LIVE PREVIEW */}
          <section className="live-preview">
            <h3>Live Profile Preview</h3>

            <div className="preview-card">
              <div className="preview-avatar">
                <span className="material-symbols-rounded">person</span>
              </div>

              <h2 className="preview-name">{formData.name || "Your Name"}</h2>

              <p className="preview-username">
                {formData.userName ? `@${formData.userName}` : "@username"}
              </p>

              <p className="preview-campus">
                {formData.campus || "Your Campus"}
              </p>

              <p className="preview-year">{formData.year || "Year of Study"}</p>
            </div>
          </section>
        </section>
      </section>

      {/* REASONS */}
      <section className="reasons">
        <ul>
          <li>
            <div className="core-advantages">
              <span className="material-symbols-rounded icon">lock</span>

              <h3>Privacy & Security</h3>

              <p>Your data and privacy are our top priority.</p>
            </div>
          </li>

          <li>
            <div className="core-advantages">
              <span className="material-symbols-rounded icon">groups</span>

              <h3>Community Support</h3>

              <p>
                Get the support you need from your fellow students and faculty.
              </p>
            </div>
          </li>

          <li>
            <div className="core-advantages">
              <span className="material-symbols-rounded icon">hub</span>

              <h3>Stay Connected</h3>

              <p>
                We encourage open communication and collaboration among
                students, fostering a culture of knowledge sharing and mutual
                support.
              </p>
            </div>
          </li>

          <li>
            <div className="core-advantages">
              <span className="material-symbols-rounded icon">school</span>

              <h3>Academic Focused</h3>

              <p>
                Designed to support learning, collaboration, and academic
                excellence.
              </p>
            </div>
          </li>

          <li>
            <div className="core-advantages">
              <span className="material-symbols-rounded icon">verified</span>

              <h3>Integrity</h3>

              <p>
                We are committed to maintaining the highest standards of
                integrity and ethical behavior in all our interactions and
                services.
              </p>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default SignUp;
