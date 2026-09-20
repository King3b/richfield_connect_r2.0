import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import "../styles/EditProfile.css";

function EditProfile() {
  const { state, dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  const user = state.currentUser;
  const [formData, setFormData] = useState({
    name: "",
    surName: "",
    userName: "",
    profileImage: "",
    backgroundImage: "",
    bio: "",
    course: "",
    year: "",
    location: "",
    campus: "",
    gender: "",
    email: "",
    phone: "",
    github: "",
    linkedin: "",
    interests: [],
    hobbies: [],
    skills: [],
    goals: [],
    achievements: [],
  });
  useEffect(() => {
    if (!user) return;

    setFormData({
      name: user.name || "",
      surName: user.surName || "",
      userName: user.userName || "",
      profileImage: user.profileImage || "",
      backgroundImage: user.backgroundImage || "",
      bio: user.bio || "",
      course: user.course || "",
      year: user.year || "",
      location: user.location || "",
      campus: user.campus || "",
      gender: user.gender || "",
      email: user.email || "",
      phone: user.phone || "",
      github: user.github || "",
      linkedin: user.linkedin || "",
      interests: user.interests || [],
      hobbies: user.hobbies || [],
      skills: user.skills || [],
      goals: user.goals || [],
      achievements: user.achievements || [],
    });
  }, [user]);

  const [interestInput, setInterestInput] = useState("");
  const [hobbyInput, setHobbyInput] = useState("");

  const [showInterestOther, setShowInterestOther] = useState(false);
  const [showHobbyOther, setShowHobbyOther] = useState(false);

  /* =========================================
       PRESET OPTIONS
    ========================================= */

  const interestOptions = [
    "Web Development",
    "Gaming",
    "Artificial Intelligence",
    "Cybersecurity",
  ];

  const hobbyOptions = ["Gaming", "Football", "Music", "Photography"];

  /* =========================================
       NORMAL INPUTS
    ========================================= */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e, imageType) => {
    const file = e.target.files[0];

    if (!file) return;

    // Only allow images
    if (!file.type.startsWith("image/")) {
      alert("Please select an image file.");
      return;
    }

    // Keep image size reasonable
    if (file.size > 2 * 1024 * 1024) {
      alert("Please choose an image smaller than 2MB.");
      return;
    }

    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData((prev) => ({
        ...prev,
        [imageType]: reader.result,
      }));
    };

    reader.readAsDataURL(file);
  };

  /* =========================================
       INTERESTS
    ========================================= */

  const selectInterest = (interest) => {
    setFormData((prev) => {
      const exists = prev.interests.includes(interest);

      return {
        ...prev,
        interests: exists
          ? prev.interests.filter((item) => item !== interest)
          : [...prev.interests, interest],
      };
    });
  };

  const addInterest = () => {
    const value = interestInput.trim();

    if (!value) return;

    setFormData((prev) => {
      if (prev.interests.includes(value)) {
        return prev;
      }

      return {
        ...prev,
        interests: [...prev.interests, value],
      };
    });

    setInterestInput("");
  };

  const removeInterest = (interest) => {
    setFormData((prev) => ({
      ...prev,

      interests: prev.interests.filter((item) => item !== interest),
    }));
  };

  const handleInterestKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addInterest();
    }
  };

  /* =========================================
       HOBBIES
    ========================================= */

  const selectHobby = (hobby) => {
    setFormData((prev) => {
      const exists = prev.hobbies.includes(hobby);

      return {
        ...prev,

        hobbies: exists
          ? prev.hobbies.filter((item) => item !== hobby)
          : [...prev.hobbies, hobby],
      };
    });
  };

  const addHobby = () => {
    const value = hobbyInput.trim();

    if (!value) return;

    setFormData((prev) => {
      if (prev.hobbies.includes(value)) {
        return prev;
      }

      return {
        ...prev,

        hobbies: [...prev.hobbies, value],
      };
    });

    setHobbyInput("");
  };

  const removeHobby = (hobby) => {
    setFormData((prev) => ({
      ...prev,

      hobbies: prev.hobbies.filter((item) => item !== hobby),
    }));
  };

  const handleHobbyKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addHobby();
    }
  };

  /* =========================================
       SAVE PROFILE
    ========================================= */

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: "UPDATE_USER",
      payload: formData,
    });

    navigate("/profile");
  };

  /* =========================================
       NO USER
    ========================================= */

  if (!user) {
    return (
      <main className="empty-profile">
        <span className="material-symbols-rounded">account_circle</span>

        <h1>No Profile</h1>

        <p>Please register before editing your profile.</p>

        <button type="button" onClick={() => navigate("/signup")}>
          Go to Sign Up
        </button>
      </main>
    );
  }

  /* =========================================
       PAGE
    ========================================= */

  return (
    <main className="edit-profile-page">
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

      {/* FORM */}

      <form className="edit-profile-form" onSubmit={handleSubmit}>
        <section className="edit-card">
          <div className="card-heading">
            <div className="card-icon">
              <span className="material-symbols-rounded">photo_camera</span>
            </div>

            <div>
              <h2>Profile Appearance</h2>
              <p>Choose your profile picture and banner.</p>
            </div>
          </div>

          <div className="profile-media-editor">
            {/* BANNER */}
            <div className="banner-editor">
              <div
                className="banner-preview"
                style={
                  formData.backgroundImage
                    ? { backgroundImage: `url(${formData.backgroundImage})` }
                    : {}
                }
              >
                {!formData.backgroundImage && (
                  <div className="banner-placeholder">
                    <span className="material-symbols-rounded">image</span>

                    <p>No banner selected</p>
                  </div>
                )}

                <label className="banner-upload-btn">
                  <span className="material-symbols-rounded">photo_camera</span>
                  Change Banner
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageChange(e, "backgroundImage")}
                  />
                </label>
              </div>
            </div>

            {/* PROFILE PICTURE */}
            <div className="profile-picture-editor">
              <div className="profile-picture-preview">
                {formData.profileImage ? (
                  <img src={formData.profileImage} alt="Profile preview" />
                ) : (
                  <span className="material-symbols-rounded">person</span>
                )}
              </div>

              <div className="profile-picture-content">
                <h3>Profile Picture</h3>

                <p>
                  This picture will appear on your profile, posts and comments.
                </p>

                <label className="picture-upload-btn">
                  <span className="material-symbols-rounded">upload</span>
                  Choose Picture
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageChange(e, "profileImage")}
                  />
                </label>
              </div>
            </div>
          </div>
        </section>
        <section className="edit-card">
          <div className="card-heading">
            <div className="card-icon">
              <span className="material-symbols-rounded">person</span>
            </div>

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

              <select
                name="year"
                value={formData.year}
                onChange={handleChange}
                placeholder="e.g. 2nd Year"
              >
                <option value="">Select Year</option>
                <option value="HCIT">HCIT</option>
                <option value="DIT">DIT</option>
                <option value="DIT 2nd">DIT 2nd</option>
                <option value="BScIT">BScIT</option>
                <option value="BScIT 2nd">BScIT 2nd</option>
                <option value="BScIT 3rd">BScIT 3rd</option>
              </select>
            </div>

            <div className="form-group">
              <label>Campus</label>

              <select
                name="campus"
                value={formData.campus}
                onChange={handleChange}
                placeholder="Your campus"
              >
                <option value="">Select Campus</option>
                <option value="Bryanston">Bryanston Campus</option>
                <option value="Cape Town">Cape Town Campus</option>
                <option value="Centurion">Centurion Campus</option>
                <option value="Durban">Durban Campus</option>
                <option value="Musgrave">Musgrave Campus</option>
                <option value="Newtown Junction">
                  Newtown Junction Campus
                </option>
                <option value="Polokwane">Polokwane Campus</option>
                <option value="Pretoria">Pretoria Campus</option>
              </select>
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

        {/* =================================
                    INTERESTS
                ================================= */}

        <section className="edit-card">
          <div className="card-heading">
            <div className="card-icon">
              <span className="material-symbols-rounded">star</span>
            </div>

            <div>
              <h2>Interests</h2>

              <p>Choose your interests or add your own.</p>
            </div>
          </div>

          <div className="choice-options">
            {interestOptions.map((interest) => {
              const selected = formData.interests.includes(interest);

              return (
                <button
                  type="button"
                  key={interest}
                  className={selected ? "choice-btn selected" : "choice-btn"}
                  onClick={() => selectInterest(interest)}
                >
                  <span>{interest}</span>

                  {selected && <span className="choice-check">✓</span>}
                </button>
              );
            })}

            <button
              type="button"
              className={
                showInterestOther
                  ? "choice-btn other selected"
                  : "choice-btn other"
              }
              onClick={() => setShowInterestOther(!showInterestOther)}
            >
              <span className="material-symbols-rounded">add</span>
              Other
            </button>
          </div>

          {/* OTHER INPUT */}

          {showInterestOther && (
            <div className="tag-input-row">
              <input
                type="text"
                value={interestInput}
                onChange={(e) => setInterestInput(e.target.value)}
                onKeyDown={handleInterestKeyDown}
                placeholder="Type your own interest..."
              />

              <button type="button" onClick={addInterest}>
                Add
              </button>
            </div>
          )}

          {/* SELECTED */}

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
                  <span>{interest}</span>

                  <span className="tag-remove">×</span>
                </button>
              ))
            ) : (
              <p className="empty-tags">No interests selected yet.</p>
            )}
          </div>
        </section>

        {/* =================================
                    HOBBIES
                ================================= */}

        <section className="edit-card">
          <div className="card-heading">
            <div className="card-icon">
              <span className="material-symbols-rounded">sports_esports</span>
            </div>

            <div>
              <h2>Hobbies</h2>

              <p>Choose your hobbies or add your own.</p>
            </div>
          </div>

          <div className="choice-options">
            {hobbyOptions.map((hobby) => {
              const selected = formData.hobbies.includes(hobby);

              return (
                <button
                  type="button"
                  key={hobby}
                  className={selected ? "choice-btn selected" : "choice-btn"}
                  onClick={() => selectHobby(hobby)}
                >
                  <span>{hobby}</span>

                  {selected && <span className="choice-check">✓</span>}
                </button>
              );
            })}

            <button
              type="button"
              className={
                showHobbyOther
                  ? "choice-btn other selected"
                  : "choice-btn other"
              }
              onClick={() => setShowHobbyOther(!showHobbyOther)}
            >
              <span className="material-symbols-rounded">add</span>
              Other
            </button>
          </div>

          {/* OTHER INPUT */}

          {showHobbyOther && (
            <div className="tag-input-row">
              <input
                type="text"
                value={hobbyInput}
                onChange={(e) => setHobbyInput(e.target.value)}
                onKeyDown={handleHobbyKeyDown}
                placeholder="Type your own hobby..."
              />

              <button type="button" onClick={addHobby}>
                Add
              </button>
            </div>
          )}

          {/* SELECTED */}

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
                  <span>{hobby}</span>

                  <span className="tag-remove">×</span>
                </button>
              ))
            ) : (
              <p className="empty-tags">No hobbies selected yet.</p>
            )}
          </div>
        </section>

        {/* =================================
                    CONTACT
                ================================= */}

        <section className="edit-card">
          <div className="card-heading">
            <div className="card-icon">
              <span className="material-symbols-rounded">mail</span>
            </div>

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

        {/* =================================
                    ACTIONS
                ================================= */}

        <div className="edit-actions">
          <button
            type="button"
            className="cancel-btn"
            onClick={() => navigate("/profile")}
          >
            Cancel
          </button>

          <button type="submit" className="save-btn">
            <span className="material-symbols-rounded">save</span>
            Save Changes
          </button>
        </div>
      </form>
    </main>
  );
}

export default EditProfile;
