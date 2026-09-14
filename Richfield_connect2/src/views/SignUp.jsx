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
                header="Create your profile"
                icon="person"
                info="Share your academic interests and goals."
              />
            </div>
          </li>
          <li>
            <div>
              <Card
                header="Explore the feed"
                icon="dynamic_feed"
                info="Discover posts and connect with peers."
              />
            </div>
          </li>
          <li>
            <div>
              <Card
                header="School resources"
                icon="library_books"
                info="Access academic materials and support services."
              />
            </div>
          </li>
        </ul>
      </section>
      <section className="signup-layout">
        {/* LEFT SIDE */}
        <section className="link-boared">
          {/* LIVE PREVIEW */}
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

        {/* SIGN UP */}
        <section className="signup">
          <ProfileView
            submit={handleSubmit}
            title="Sign Up form"
            info="sign up to connect and join"
            change={handleChange}
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
          />
        </section>
      </section>

      {/* REASONS */}
      <Reasons />
    </div>
  );
}

export default SignUp;
