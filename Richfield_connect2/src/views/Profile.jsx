import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import "../styles/Profile.css";

function Profile() {
  const { state } = useContext(AppContext);
  const user = state.currentUser;

  // No user logged in
  if (!user) {
    return (
      <div className="empty-profile">
        <h1>No Profile</h1>
        <p>Please register to create your own student profile.</p>
        <Link to="/signup">Sign Up</Link>
      </div>
    );
  }

  const commentCount =
    state.posts?.reduce((total, post) => {
      return (
        total +
        (post.comments?.filter((comment) => comment.userId === user.studentID)
          .length || 0)
      );
    }, 0) || 0;

  // Profile completion
  const fields = [
    user.name,
    user.userName,
    user.surName,
    user.email,
    user.gender,
    user.campus,
    user.studentID,
    user.bio,
    user.interests?.length > 0,
    user.hobbies?.length > 0,
  ];

  const completedFields = fields.filter(Boolean).length;

  const percentage = Math.round((completedFields / fields.length) * 100);

  // Create initials for profile picture
  const initials = user.name
    ?.split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <main className="profile-page">
      <section className="profile-header">
        <div
          className="profile-banner"
          style={
            user.backgroundImage
              ? {
                  backgroundImage: `url(${user.backgroundImage})`,
                }
              : {}
          }
        >
          <div className="profile-picture">
            {user.profileImage ? (
              <img src={user.profileImage} alt={`${user.name}'s profile`} />
            ) : (
              initials
            )}
          </div>
        </div>

        <div className="profile-info">
          <h1>{user.name}</h1>

          <h3>@{user.userName || "username"}</h3>

          <div className="profile-actions">
            {" "}
            <Link to="/editprofile" className="edit-profile-btn">
              {" "}
              ✏️ Edit Profile{" "}
            </Link>{" "}
          </div>

          <div className="bio-info">
            <p>🎓 {user.campus}</p>
            <p>📚 {user.year || "Academic year not added"}</p>
          </div>

          <div className="bio-info">
            <p>{user.bio || "No bio added yet."}</p>
          </div>

          {/* PROFILE STATS */}
          <div className="profile-stats">
            <div>
              <strong>0</strong>
              <span>Followers</span>
            </div>

            <div>
              <strong>0</strong>
              <span>Following</span>
            </div>

            <div>
              <strong>
                {state.posts?.filter((post) => post.userId === user.studentID)
                  .length || 0}
              </strong>
              <span>Posts</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION NAVIGATION */}
      <nav className="section-nav">
        <a href="#overview">Overview</a>
        <a href="#connections">Connections</a>
        <a href="#activity">Activity</a>
      </nav>

      {/* OVERVIEW */}
      <section className="profile-board" id="overview">
        <h2>Overview</h2>

        {/* PERSONAL INFO */}
        <div className="profile-card">
          <h3>Personal Information</h3>

          <div className="info-grid">
            <div className="info-item">
              <span>👤</span>
              <div>
                <h4>Name</h4>
                <p>{user.name || "Not set"}</p>
              </div>
            </div>

            <div className="info-item">
              <span>👤</span>
              <div>
                <h4>Surname</h4>
                <p>{user.surName || "Not set"}</p>
              </div>
            </div>

            <div className="info-item">
              <span>🪪</span>
              <div>
                <h4>Student ID</h4>
                <p>{user.studentID || "Not set"}</p>
              </div>
            </div>

            <div className="info-item">
              <span>✉️</span>
              <div>
                <h4>Email</h4>
                <p>{user.email || "Not set"}</p>
              </div>
            </div>

            <div className="info-item">
              <span>⚧</span>
              <div>
                <h4>Gender</h4>
                <p>{user.gender || "Not set"}</p>
              </div>
            </div>

            <div className="info-item">
              <span>📍</span>
              <div>
                <h4>Campus</h4>
                <p>{user.campus || "Not set"}</p>
              </div>
            </div>
          </div>
        </div>

        {/* INTERESTS */}
        <div className="profile-card">
          <h3>Interests</h3>

          <div className="interest-tags">
            {user.interests?.length > 0 ? (
              user.interests.map((interest) => (
                <span className="interest-tag" key={interest}>
                  {interest}
                </span>
              ))
            ) : (
              <p>No interests added yet.</p>
            )}
          </div>
        </div>

        <div className="profile-card">
          <h3>Hobbies</h3>

          <div className="hobbies-tags">
            {user.hobbies?.length > 0 ? (
              user.hobbies.map((hobby) => (
                <span className="hobbies-tag" key={hobby}>
                  {hobby}
                </span>
              ))
            ) : (
              <p>No hobbies added yet.</p>
            )}
          </div>
        </div>

        {/* EDUCATION */}
        <div className="profile-card">
          <h3>Education</h3>

          <div className="info-grid">
            <div className="info-item">
              <span>🎓</span>
              <div>
                <h4>Campus</h4>
                <p>{user.campus || "Not specified"}</p>
              </div>
            </div>

            <div className="info-item">
              <span>📅</span>
              <div>
                <h4>Academic Year</h4>
                <p>{user.year || "Not specified"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONNECTIONS */}
      <section className="profile-board" id="connections">
        <h2>Connections</h2>

        <div className="connections-grid">
          <div className="profile-card">
            <h3>Connections</h3>
            <p>No connections yet.</p>
          </div>

          <div className="profile-card">
            <h3>Followers</h3>
            <p>No followers yet.</p>
          </div>

          <div className="profile-card">
            <h3>Following</h3>
            <p>Not following anyone yet.</p>
          </div>

          <div className="profile-card">
            <h3>Groups</h3>
            <p>No groups joined yet.</p>
          </div>
        </div>
      </section>

      {/* ACTIVITY */}
      <section className="profile-board" id="activity">
        <h2>Activity</h2>

        <div className="activity-grid">
          <div className="activity-card">
            <h3>📝 My Posts</h3>
            <p>
              {state.posts?.filter((post) => post.userId === user.studentID)
                .length || 0}
            </p>
          </div>

          <div className="activity-card">
            <h3>❤️ Liked</h3>
            <p>
              {state.posts?.filter((post) =>
                post.likedBy?.includes(user.studentID),
              ).length || 0}
            </p>
          </div>

          <div className="activity-card">
            <h3>💬 Comments</h3>
            <p>{commentCount}</p>
          </div>
        </div>
      </section>

      {/* PROFILE COMPLETION */}
      <section className="profile-completion">
        <div className="completion-text">
          <h3>Profile Completion</h3>

          <strong>{percentage}%</strong>
        </div>

        <div className="completion-bar">
          <div
            className="completion-fill"
            style={{
              width: `${percentage}%`,
            }}
          ></div>
        </div>
      </section>
    </main>
  );
}

export default Profile;
