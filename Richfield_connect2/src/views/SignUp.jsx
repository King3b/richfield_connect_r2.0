import "../styles/SignUp.css";

import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

import Card from "../main_components/Cards";
import Preview from "../main_components/Preview";
import ProfileView from "../components/ProfilePreview";
import Reasons from "../components/reasons";

function SignUp() {
  const { dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  // -----------------------------
  // FORM DATA
  // -----------------------------

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

  // -----------------------------
  // VALIDATION ERRORS
  // -----------------------------

  const [errors, setErrors] = useState({});

  // -----------------------------
  // PASSWORD STRENGTH
  // -----------------------------

  const [passwordStrength, setPasswordStrength] = useState(0);

  const checkPasswordStrength = (password) => {
    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    return score;
  };

  // -----------------------------
  // HANDLE INPUT CHANGES
  // -----------------------------

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    // Update password strength
    if (name === "password") {
      setPasswordStrength(checkPasswordStrength(value));
    }
  };

  // -----------------------------
  // VALIDATE FIELD
  // -----------------------------

  const validateField = (name, value) => {
    switch (name) {
      // NAME
      case "name":
        if (!value.trim()) {
          return "First name is required";
        }

        if (value.trim().length < 2) {
          return "First name must be at least 2 characters";
        }

        return "";

      // SURNAME
      case "surName":
        if (!value.trim()) {
          return "Surname is required";
        }

        if (value.trim().length < 2) {
          return "Surname must be at least 2 characters";
        }

        return "";

      // USERNAME
      case "userName":
        if (!value.trim()) {
          return "Username is required";
        }

        if (value.trim().length < 3) {
          return "Username must be at least 3 characters";
        }

        return "";

      // EMAIL
      case "email":
        if (!value.trim()) {
          return "Email is required";
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return "Please enter a valid email";
        }

        return "";

      // CAMPUS
      case "campus":
        if (!value) {
          return "Please select your campus";
        }

        return "";

      // YEAR
      case "year":
        if (!value) {
          return "Please select your year";
        }

        return "";

      // GENDER
      case "gender":
        if (!value) {
          return "Please select your gender";
        }

        return "";

      // STUDENT ID
      case "studentID":
        if (!value.trim()) {
          return "Student ID is required";
        }

        if (value.trim().length < 9) {
          return "Please enter a valid Student ID";
        }

        return "";

      // PASSWORD
      case "password":
        if (!value) {
          return "Password is required";
        }

        if (value.length < 8) {
          return "Password must contain at least 8 characters";
        }

        if (!/[A-Z]/.test(value)) {
          return "Password needs a capital letter";
        }

        if (!/[a-z]/.test(value)) {
          return "Password needs a small letter";
        }

        if (!/[0-9]/.test(value)) {
          return "Password needs a number";
        }

        if (!/[^A-Za-z0-9]/.test(value)) {
          return "Password needs a special character";
        }

        return "";

      // CONFIRM PASSWORD
      case "confirmPassword":
        if (!value) {
          return "Please confirm your password";
        }

        if (value !== formData.password) {
          return "Passwords do not match";
        }

        return "";

      default:
        return "";
    }
  };

  // -----------------------------
  // ON BLUR VALIDATION
  // -----------------------------

  const handleBlur = (e) => {
    const { name, value } = e.target;

    const error = validateField(name, value);

    setErrors((previousErrors) => ({
      ...previousErrors,
      [name]: error,
    }));
  };

  // -----------------------------
  // SUBMIT
  // -----------------------------

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    // Validate every field
    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field]);

      if (error) {
        newErrors[field] = error;
      }
    });

    // Save all errors
    setErrors(newErrors);

    // Stop if errors exist
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // Extra password safety check
    if (passwordStrength < 5) {
      alert("Please create a stronger password.");
      return;
    }

    // Register user
    dispatch({
      type: "REGISTER_USER",
      payload: formData,
    });

    // Go to profile
    navigate("/profile");
  };

  // -----------------------------
  // PAGE
  // -----------------------------

  return (
    <div>
      {/* HERO */}

      <section className="signUp_hero">
        <h2>Join Richfield Connect</h2>

        <p>
          Create your account and become a part of a vibrant academic community.
          Connect, collaborate and grow together.
        </p>

        <ul>
          <li>
            <Card
              header="Create your profile"
              icon="person"
              info="Share your academic interests and goals."
            />
          </li>

          <li>
            <Card
              header="Explore the feed"
              icon="dynamic_feed"
              info="Discover posts and connect with peers."
            />
          </li>

          <li>
            <Card
              header="School resources"
              icon="library_books"
              info="Access academic materials and support services."
            />
          </li>
        </ul>
      </section>

      {/* SIGNUP LAYOUT */}

      <section className="signup-layout">
        {/* LIVE PREVIEW */}

        <section className="link-boared">
          <section className="live-preview">
            <Preview
              name={formData.name}
              surName={formData.surName}
              userName={formData.userName}
              campus={formData.campus}
              year={formData.year}
            />
          </section>
        </section>

        {/* SIGNUP FORM */}

        <section className="signup">
          <ProfileView
            submit={handleSubmit}
            title="Sign Up form"
            info="Sign up to connect and join"
            change={handleChange}
            blur={handleBlur}
            name={formData.name}
            userName={formData.userName}
            surName={formData.surName}
            email={formData.email}
            campus={formData.campus}
            year={formData.year}
            gender={formData.gender}
            studentID={formData.studentID}
            password={formData.password}
            confirmPassword={formData.confirmPassword}
            passwordStrength={passwordStrength}
            errors={errors}
          />
        </section>
      </section>

      {/* REASONS */}

      <Reasons />
    </div>
  );
}

export default SignUp;
