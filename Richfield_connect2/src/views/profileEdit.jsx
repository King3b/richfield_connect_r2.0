import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import "../styles/EditProfile.css";

function EditProfile() {
  const { state, dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  const user = state.currentUser;

  const [formData, setFormData] = useState(() => ({
    name: user?.name || "",
    surName: user?.surName || "",
    userName: user?.userName || "",
    bio: user?.bio || "",
    course: user?.course || "",
    year: user?.year || "",
    location: user?.location || "",
    campus: user?.campus || "",
    gender: user?.gender || "",
    email: user?.email || "",
    phone: user?.phone || "",
    github: user?.github || "",
    linkedin: user?.linkedin || "",

    interests: user?.interests || [],
    hobbies: user?.hobbies || [],
    skills: user?.skills || [],
    goals: user?.goals || [],
    achievements: user?.achievements || [],
  }));

  const [interestInput, setInterestInput] = useState("");
  const [hobbyInput, setHobbyInput] = useState("");

  // --------------------------------
  // Handle normal inputs
  // --------------------------------

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const addInterest = () => {
    const value = interestInput.trim();

    if (!value) return;

    if (formData.interests.includes(value)) {
      setInterestInput("");
      return;
    }

    setFormData({
      ...formData,
      interests: [...formData.interests, value],
    });

    setInterestInput("");
  };

  const addHobby = () => {
    const value = hobbyInput.trim();

    if (!value) return;

    if (formData.hobbies.includes(value)) {
      setHobbyInput("");
      return;
    }

    setFormData({
      ...formData,
      hobbies: [...formData.hobbies, value],
    });

    setHobbyInput("");
  };

  const removeInterest = (interestToRemove) => {
    setFormData({
      ...formData,

      interests: formData.interests.filter(
        (interest) => interest !== interestToRemove,
      ),
    });
  };

  const removeHobby = (hobbyToRemove) => {
    setFormData({
      ...formData,

      hobbies: formData.hobbies.filter((hobby) => hobby !== hobbyToRemove),
    });
  };

  const handleInterestKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addInterest();
    }
  };

  const handleHobbyKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addHobby();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: "UPDATE_USER",
      payload: formData,
    });

    navigate("/profile");
  };

  if (!user) {
    return (
      <main className="empty-profile">
        <h1>No Profile</h1>

        <p>Please register before editing your profile.</p>

        <button onClick={() => navigate("/signup")}>Go to Sign Up</button>
      </main>
    );
  }

  return (
    <main className="edit-profile-page">
      {/* PAGE HEADER */}

      <section className="edit-page-header">
        <div>
          <p className="edit-eyebrow">RICHFIELD CONNECT</p>

          <h1>Edit Profile</h1>

          <p>
            Customize your student profile and let the community know more about
            you.
          </p>
        </div>
      </section>

      <form className="edit-profile-form" onSubmit={handleSubmit}>
        {/* BASIC INFORMATION */}

        <section className="edit-card">
          <div className="card-heading">
            <span className="card-icon">👤</span>

            <div>
              <h2>Basic Information</h2>

              <p>Keep your student information up to date.</p>
            </div>
          </div>

          <div className="edit-grid">
            <div className="form-group">
              <label>First Name</label>

              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your first name"
              />
            </div>

            <div className="form-group">
              <label>Surname</label>

              <input
                name="surName"
                value={formData.surName}
                onChange={handleChange}
                placeholder="Your surname"
              />
            </div>

            <div className="form-group">
              <label>Username</label>

              <input
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                placeholder="Username"
              />
            </div>

            <div className="form-group">
              <label>Course</label>

              <input
                name="course"
                value={formData.course}
                onChange={handleChange}
                placeholder="Your course"
              />
            </div>

            <div className="form-group">
              <label>Academic Year</label>

              <input
                name="year"
                value={formData.year}
                onChange={handleChange}
                placeholder="e.g. 2nd Year"
              />
            </div>

            <div className="form-group">
              <label>Campus</label>

              <input
                name="campus"
                value={formData.campus}
                onChange={handleChange}
                placeholder="Your campus"
              />
            </div>

            <div className="form-group full-width">
              <label>Bio</label>

              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                placeholder="Tell the Richfield community about yourself..."
                rows="5"
              />
            </div>
          </div>
        </section>

        {/* INTERESTS */}

        <section className="edit-card">
          <div className="card-heading">
            <span className="card-icon">⭐</span>

            <div>
              <h2>Interests</h2>

              <p>Add things you're interested in.</p>
            </div>
          </div>

          <div className="tag-input-row">
            <input
              type="text"
              value={interestInput}
              onChange={(e) => setInterestInput(e.target.value)}
              onKeyDown={handleInterestKeyDown}
              placeholder="e.g. Web Development"
            />

            <button type="button" onClick={addInterest}>
              + Add
            </button>
          </div>

          <div className="speech-tags">
            {formData.interests.length > 0 ? (
              formData.interests.map((interest) => (
                <button
                  type="button"
                  className="speech-tag"
                  key={interest}
                  onClick={() => removeInterest(interest)}
                  title="Click to remove"
                >
                  💬 {interest}
                  <span>×</span>
                </button>
              ))
            ) : (
              <p className="empty-tags">No interests added yet.</p>
            )}
          </div>
        </section>

        {/* HOBBIES */}

        <section className="edit-card">
          <div className="card-heading">
            <span className="card-icon">🎮</span>

            <div>
              <h2>Hobbies</h2>

              <p>Tell people what you enjoy doing.</p>
            </div>
          </div>

          <div className="tag-input-row">
            <input
              type="text"
              value={hobbyInput}
              onChange={(e) => setHobbyInput(e.target.value)}
              onKeyDown={handleHobbyKeyDown}
              placeholder="e.g. Gaming"
            />

            <button type="button" onClick={addHobby}>
              + Add
            </button>
          </div>

          <div className="speech-tags">
            {formData.hobbies.length > 0 ? (
              formData.hobbies.map((hobby) => (
                <button
                  type="button"
                  className="speech-tag"
                  key={hobby}
                  onClick={() => removeHobby(hobby)}
                  title="Click to remove"
                >
                  💬 {hobby}
                  <span>×</span>
                </button>
              ))
            ) : (
              <p className="empty-tags">No hobbies added yet.</p>
            )}
          </div>
        </section>

        {/* CONTACT */}

        <section className="edit-card">
          <div className="card-heading">
            <span className="card-icon">✉️</span>

            <div>
              <h2>Contact Information</h2>

              <p>Add your professional contact details.</p>
            </div>
          </div>

          <div className="edit-grid">
            <div className="form-group">
              <label>Email</label>

              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
              />
            </div>

            <div className="form-group">
              <label>Phone</label>

              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number"
              />
            </div>

            <div className="form-group">
              <label>GitHub</label>

              <input
                name="github"
                value={formData.github}
                onChange={handleChange}
                placeholder="GitHub username"
              />
            </div>

            <div className="form-group">
              <label>LinkedIn</label>

              <input
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                placeholder="LinkedIn profile"
              />
            </div>
          </div>
        </section>

        {/* ACTIONS */}

        <div className="edit-actions">
          <button
            type="button"
            className="cancel-btn"
            onClick={() => navigate("/profile")}
          >
            Cancel
          </button>

          <button type="submit" className="save-btn">
            ✓ Save Changes
          </button>
        </div>
      </form>
    </main>
  );
}

export default EditProfile;
