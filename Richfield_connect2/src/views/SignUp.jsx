import "../styles/SignUp.css";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Preview from "../components/preview/Preview";
import ProfileView from "../components/ProfilePreview";
import Reasons from "../components/reasons/Reasons";

function SignUp() {
  const { state, dispatch } = useContext(AppContext);
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
    bio: "",
    interests: [],
  });

  const [profileImage, setProfileImage] = useState("");
  const [errors, setErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState(0);

  const checkExistingUser = (field, value) => {
    const users = state.users || [];

    if (!value.trim()) {
      return "";
    }

    if (field === "studentID") {
      const exists = users.some(
        (user) => user.studentID?.trim() === value.trim(),
      );

      if (exists) {
        return "An account with this Student ID already exists.";
      }
    }

    if (field === "userName") {
      const exists = users.some(
        (user) => user.userName?.toLowerCase() === value.trim().toLowerCase(),
      );

      if (exists) {
        return "This username is already taken.";
      }
    }

    if (field === "email") {
      const exists = users.some(
        (user) => user.email?.toLowerCase() === value.trim().toLowerCase(),
      );

      if (exists) {
        return "An account with this email already exists.";
      }
    }

    return "";
  };

  const handleProfileImage = (e) => {
    const file = e.target.files[0];

    if (!file) {
      return;
    }

    if (!file.type.startsWith("image/")) {
      setErrors((previousErrors) => ({
        ...previousErrors,
        profileImage: "Please select an image file.",
      }));
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      setErrors((previousErrors) => ({
        ...previousErrors,
        profileImage: "Please choose an image smaller than 2MB.",
      }));
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setProfileImage(reader.result);

      setErrors((previousErrors) => ({
        ...previousErrors,
        profileImage: "",
      }));
    };

    reader.readAsDataURL(file);
  };

  const checkPasswordStrength = (password) => {
    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    return score;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    if (name === "password") {
      setPasswordStrength(checkPasswordStrength(value));
    }

    if (errors[name]) {
      setErrors((previousErrors) => ({
        ...previousErrors,
        [name]: "",
      }));
    }
  };

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

        if (value.trim().length !== 9) {
          return "Student ID must contain 9 characters";
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

  const handleBlur = (e) => {
    const { name, value } = e.target;

    const validationError = validateField(name, value);

    if (validationError) {
      setErrors((previousErrors) => ({
        ...previousErrors,
        [name]: validationError,
      }));

      return;
    }

    const existingUserError = checkExistingUser(name, value);

    setErrors((previousErrors) => ({
      ...previousErrors,
      [name]: existingUserError,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field]);

      if (error) {
        newErrors[field] = error;
      }
    });

    const studentError = checkExistingUser("studentID", formData.studentID);

    if (studentError) {
      newErrors.studentID = studentError;
    }

    const usernameError = checkExistingUser("userName", formData.userName);

    if (usernameError) {
      newErrors.userName = usernameError;
    }

    const emailError = checkExistingUser("email", formData.email);

    if (emailError) {
      newErrors.email = emailError;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (passwordStrength < 5) {
      setErrors({
        password: "Please create a stronger password.",
      });

      return;
    }

    const userData = {
      id: Date.now(),
      name: formData.name.trim(),
      userName: formData.userName.trim(),
      surName: formData.surName.trim(),
      email: formData.email.trim(),
      campus: formData.campus,
      year: formData.year,
      gender: formData.gender,
      studentID: formData.studentID.trim(),
      password: formData.password,
      profileImage: profileImage,
      backgroundImage: "",
      bio: "",
      interests: [],
      hobbies: [],
      skills: [],
      goals: [],
      achievements: [],
    };

    dispatch({
      type: "REGISTER_USER",
      payload: userData,
    });

    navigate("/profile");
  };

  return (
    <div className="signup-page">
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

      <section className="signup-layout">
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
            profileImage={profileImage}
          />
        </section>
      </section>

      <Reasons />
    </div>
  );
}

export default SignUp;
