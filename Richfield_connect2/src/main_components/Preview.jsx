import "../main_components/Preview.css";

function Preview(props) {
  return (
    <div className="preview-card">
      {/* =========================
          TITLE
      ========================= */}
      <div className="preview-title">
        <h2>Profile Preview</h2>
        <span>Live</span>
      </div>

      {/* =========================
          PROFILE HEADER
      ========================= */}
      <div className="preview-profile">
        <div className="preview-avatar">
          {props.profileImage ? (
            <img src={props.profileImage} alt="Profile" />
          ) : (
            <span className="material-symbols-rounded">person</span>
          )}
        </div>

        <div className="preview-user-info">
          <h2>
            {props.name || "Your Name"} {props.surName || ""}
          </h2>

          <p>@{props.userName || "username"}</p>

          <div className="campus-year">
            <span>🎓 {props.campus || "Your Campus"}</span>

            <span>📚 {props.year || "Year"}</span>
          </div>
        </div>
      </div>

      {/* =========================
          ABOUT
      ========================= */}
      <div className="preview-section">
        <h3>About</h3>

        <p className="preview-bio">
          {props.bio || "Your short bio will appear here..."}
        </p>
      </div>

      {/* =========================
          INTERESTS
      ========================= */}
      <div className="preview-section">
        <h3>Interests</h3>

        <div className="preview-tags">
          {props.interests?.length > 0 ? (
            props.interests.map((interest) => (
              <span key={interest}>{interest}</span>
            ))
          ) : (
            <span>+ Add interests</span>
          )}
        </div>
      </div>

      {/* =========================
          STATS
      ========================= */}
      <div className="preview-stats">
        <div>
          <strong>12</strong>
          <span>Posts</span>
        </div>

        <div>
          <strong>48</strong>
          <span>Followers</span>
        </div>

        <div>
          <strong>31</strong>
          <span>Following</span>
        </div>
      </div>

      {/* =========================
          MINI POST
      ========================= */}
      <div className="preview-post">
        <div className="preview-post-user">
          <div className="small-avatar">
            {props.profileImage ? (
              <img src={props.profileImage} alt="" />
            ) : (
              <span className="material-symbols-rounded">person</span>
            )}
          </div>

          <div>
            <strong>{props.name || "Your Name"}</strong>

            <small>@{props.userName || "username"}</small>
          </div>
        </div>

        <p>
          This is what one of your posts could look like on Richfield Connect.
        </p>

        <div className="preview-post-actions">
          <span>❤️ 24</span>
          <span>💬 6</span>
          <span>↗ Share</span>
        </div>
      </div>
    </div>
  );
}

export default Preview;
