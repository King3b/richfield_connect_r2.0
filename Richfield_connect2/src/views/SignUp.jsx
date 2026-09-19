import "../styles/SignUp.css";

import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AppContext } from "../context/AppContext";

import Preview from "../main_components/Preview";
import ProfileView from "../components/ProfilePreview";
import Reasons from "../components/reasons";

function SignUp() {
  const { dispatch } = useContext(AppContext);
  const navigate = useNavigate();

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

  const [errors, setErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState(0);

  // =========================
  // PROFILE IMAGE
  // =========================
  const handleProfileImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select an image file.");
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      alert("Please choose an image smaller than 2MB.");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setProfileImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  // =========================
  // PASSWORD STRENGTH
  // =========================
  const checkPasswordStrength = (password) => {
    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    return score;
  };

  // =========================
  // HANDLE INPUT CHANGES
  // =========================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    if (name === "password") {
      setPasswordStrength(checkPasswordStrength(value));
    }
  };

  // =========================
  // VALIDATION
  // =========================
  const validateField = (name, value) => {
    switch (name) {
      case "name":
        if (!value.trim()) {
          return "First name is required";
        }

        if (value.trim().length < 2) {
          return "First name must be at least 2 characters";
        }

        return "";

      case "surName":
        if (!value.trim()) {
          return "Surname is required";
        }

        if (value.trim().length < 2) {
          return "Surname must be at least 2 characters";
        }

        return "";

      case "userName":
        if (!value.trim()) {
          return "Username is required";
        }

        if (value.trim().length < 3) {
          return "Username must be at least 3 characters";
        }

        return "";

      case "email":
        if (!value.trim()) {
          return "Email is required";
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return "Please enter a valid email";
        }

        return "";

      case "campus":
        if (!value) {
          return "Please select your campus";
        }

        return "";

      case "year":
        if (!value) {
          return "Please select your year";
        }

        return "";

      case "gender":
        if (!value) {
          return "Please select your gender";
        }

        return "";

      case "studentID":
        if (!value.trim()) {
          return "Student ID is required";
        }

        if (value.trim().length < 9) {
          return "Please enter a valid Student ID";
        }

        return "";

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

  // =========================
  // BLUR VALIDATION
  // =========================
  const handleBlur = (e) => {
    const { name, value } = e.target;

    const error = validateField(name, value);

    setErrors((previousErrors) => ({
      ...previousErrors,
      [name]: error,
    }));
  };

  // =========================
  // SUBMIT
  // =========================
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field]);

      if (error) {
        newErrors[field] = error;
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    if (passwordStrength < 5) {
      alert("Please create a stronger password.");
      return;
    }

    // Add profile image to the registered user
    const userData = {
      ...formData,
    };
    dispatch({
      type: "REGISTER_USER",
      payload: userData,
    });

    navigate("/profile");
  };

  return (
    <div className="signup-page">
      {/* =========================
          HERO
      ========================= */}
      <section className="signUp_hero">
        <div className="signup-hero-content">
          <p className="signup-eyebrow">RICHFIELD CONNECT</p>

          <h2>Join Richfield Connect</h2>

          <p>
            Create your account and become part of a vibrant academic community.
            Connect, collaborate and grow together.
          </p>
        </div>
      </section>

      {/* =========================
          SIGNUP LAYOUT
      ========================= */}
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
              bio={formData.bio}
              interests={formData.interests}
            />
          </section>
        </section>

        {/* SIGNUP FORM */}
        <section className="signup">
          <ProfileView
            submit={handleSubmit}
            title="Sign Up Form"
            info="Sign up to connect and join"
            change={handleChange}
            img={handleProfileImage}
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

      {/* =========================
          REASONS
      ========================= */}
      <Reasons />
    </div>
  );
}

export default SignUp;
