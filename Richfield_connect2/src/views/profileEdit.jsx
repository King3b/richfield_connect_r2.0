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

  // Handle normal inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Add item to an array
  const addItem = (field, inputId) => {
    const input = document.getElementById(inputId);
    const value = input.value.trim();

    if (!value) return;

    if (!formData[field].includes(value)) {
      setFormData({
        ...formData,
        [field]: [...formData[field], value],
      });
    }

    input.value = "";
  };

  // Remove item from an array
  const removeItem = (field, itemToRemove) => {
    setFormData({
      ...formData,
      [field]: formData[field].filter((item) => item !== itemToRemove),
    });
  };

  // Save changes
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: "UPDATE_USER",
      payload: formData,
    });

    navigate("/profile");
  };

  // No profile
  if (!user) {
    return (
      <main className="edit-profile-page">
        <section className="edit-profile">
          <h2>No Profile Found</h2>
          <p>Please register before editing your profile.</p>

          <button onClick={() => navigate("/signup")}>Go to Sign Up</button>
        </section>
      </main>
    );
  }

  return (
    <main>
      {/* PAGE */}
      <section className="edit-profile">
        {/* TITLE */}
        <div className="page-title">
          <h2>Edit Profile</h2>

          <p>Customize your Richfield Connect profile ✨</p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* PROFILE IMAGES */}
          <div className="card">
            <h3>Profile Images</h3>

            <div className="image-preview">
              <div className="profile-preview">
                <div className="profile-avatar">
                  {formData.name
                    ?.split(" ")
                    .map((word) => word[0])
                    .join("")
                    .toUpperCase()}
                </div>

                <label>Profile Picture</label>

                <input type="file" accept="image/*" />
              </div>

              <div className="banner-preview">
                <div className="banner-placeholder">Richfield Connect</div>

                <label>Banner Image</label>

                <input type="file" accept="image/*" />
              </div>
            </div>
          </div>

          {/* BASIC INFORMATION */}
          <div className="card">
            <h3>Basic Information</h3>

            <div className="input-group">
              <label>Name</label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
              />
            </div>

            <div className="input-group">
              <label>Surname</label>

              <input
                type="text"
                name="surName"
                value={formData.surName}
                onChange={handleChange}
                placeholder="Your surname"
              />
            </div>

            <div className="input-group">
              <label>Username</label>

              <input
                type="text"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                placeholder="@username"
              />
            </div>

            <div className="input-group">
              <label>Bio</label>

              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                placeholder="Tell people about yourself..."
              />
            </div>

            <div className="input-group">
              <label>Course</label>

              <input
                type="text"
                name="course"
                value={formData.course}
                onChange={handleChange}
                placeholder="Software Development"
              />
            </div>

            <div className="input-group">
              <label>Academic Year</label>

              <select name="year" value={formData.year} onChange={handleChange}>
                <option value="">Select Year</option>

                <option value="HCIT">HCIT</option>

                <option value="DIT">DIT</option>

                <option value="DIT 2nd">DIT 2nd</option>

                <option value="BScIT">BScIT</option>

                <option value="BScIT 2nd">BScIT 2nd</option>

                <option value="BScIT 3rd">BScIT 3rd</option>
              </select>
            </div>

            <div className="input-group">
              <label>Location</label>

              <select
                name="location"
                value={formData.location}
                onChange={handleChange}
              >
                <option value="">Select Location</option>

                <option value="Western Cape">Western Cape (Cape Town)</option>

                <option value="Gauteng">Gauteng (Pretoria)</option>

                <option value="KwaZulu-Natal">KwaZulu-Natal (Durban)</option>

                <option value="Limpopo">Limpopo (Polokwane)</option>

                <option value="Eastern Cape">Eastern Cape (Bhisho)</option>

                <option value="Mpumalanga">Mpumalanga (Mbombela)</option>

                <option value="North West">North West (Mahikeng)</option>

                <option value="Northern Cape">Northern Cape (Kimberley)</option>

                <option value="Free State">Free State (Bloemfontein)</option>

                <option value="Other">Other</option>
              </select>
            </div>

            <div className="input-group">
              <label>Campus</label>

              <select
                name="campus"
                value={formData.campus}
                onChange={handleChange}
              >
                <option value="">Select Campus</option>

                <option value="Bryanston Campus">Bryanston Campus</option>

                <option value="Cape Town Campus">Cape Town Campus</option>

                <option value="Centurion Campus">Centurion Campus</option>

                <option value="Durban Campus">Durban Campus</option>

                <option value="Musgrave Campus">Musgrave Campus</option>

                <option value="Newtown Junction Campus">
                  Newtown Junction Campus
                </option>

                <option value="Polokwane Campus">Polokwane Campus</option>

                <option value="Pretoria Campus">Pretoria Campus</option>
              </select>
            </div>

            <div className="input-group">
              <label>Gender</label>

              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>

                <option value="Male">Male</option>

                <option value="Female">Female</option>

                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* CONTACT */}
          <div className="card">
            <h3>Contact Information</h3>

            <div className="input-group">
              <label>Email</label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
              />
            </div>

            <div className="input-group">
              <label>Phone Number</label>

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+27..."
              />
            </div>

            <div className="input-group">
              <label>GitHub</label>

              <input
                type="text"
                name="github"
                value={formData.github}
                onChange={handleChange}
                placeholder="github.com/username"
              />
            </div>

            <div className="input-group">
              <label>LinkedIn</label>

              <input
                type="text"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                placeholder="linkedin.com/in/username"
              />
            </div>
          </div>

          {/* REUSABLE TAG SECTION */}
          <div className="card">
            <h3>Interests</h3>

            <input
              type="text"
              id="interestInput"
              placeholder="Add your interests..."
            />

            <button
              type="button"
              onClick={() => addItem("interests", "interestInput")}
            >
              Add
            </button>

            <div className="tags">
              {formData.interests.map((item) => (
                <span className="tag" key={item}>
                  {item}

                  <button
                    type="button"
                    onClick={() => removeItem("interests", item)}
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* HOBBIES */}
          <div className="card">
            <h3>Hobbies</h3>

            <input
              type="text"
              id="hobbyInput"
              placeholder="Add your hobbies..."
            />

            <button
              type="button"
              onClick={() => addItem("hobbies", "hobbyInput")}
            >
              Add
            </button>

            <div className="tags">
              {formData.hobbies.map((item) => (
                <span className="tag" key={item}>
                  {item}

                  <button
                    type="button"
                    onClick={() => removeItem("hobbies", item)}
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* SKILLS */}
          <div className="card">
            <h3>Skills</h3>

            <input
              type="text"
              id="skillInput"
              placeholder="Add your skills..."
            />

            <button
              type="button"
              onClick={() => addItem("skills", "skillInput")}
            >
              Add
            </button>

            <div className="tags">
              {formData.skills.map((item) => (
                <span className="tag" key={item}>
                  {item}

                  <button
                    type="button"
                    onClick={() => removeItem("skills", item)}
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* GOALS */}
          <div className="card">
            <h3>Goals</h3>

            <input type="text" id="goalInput" placeholder="Add your goals..." />

            <button type="button" onClick={() => addItem("goals", "goalInput")}>
              Add
            </button>

            <div className="tags">
              {formData.goals.map((item) => (
                <span className="tag" key={item}>
                  {item}

                  <button
                    type="button"
                    onClick={() => removeItem("goals", item)}
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* ACHIEVEMENTS */}
          <div className="card">
            <h3>Academic Achievements</h3>

            <input
              type="text"
              id="achievementInput"
              placeholder="Add your achievements..."
            />

            <button
              type="button"
              onClick={() => addItem("achievements", "achievementInput")}
            >
              Add
            </button>

            <div className="tags">
              {formData.achievements.map((item) => (
                <span className="tag" key={item}>
                  {item}

                  <button
                    type="button"
                    onClick={() => removeItem("achievements", item)}
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="action-buttons">
            <button
              type="button"
              className="back-btn"
              onClick={() => navigate("/profile")}
            >
              Back
            </button>

            <button type="submit" className="save-btn">
              Save Changes
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default EditProfile;
