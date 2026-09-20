import "../reasons/reasons.css";
function Reasons() {
  return (
    <section className="signup-reasons">
      <div className="signup-reasons-heading">
        <span className="material-symbols-rounded">info</span>{" "}
        <div>
          <h2>Reasons to Sign Up</h2>
          <p>Discover what Richfield Connect has to offer.</p>{" "}
        </div>
      </div>
      <div className="signup-reasons-grid">
        <div className="signup-reason-box">
          <div className="signup-reason-icon">
            <span className="material-symbols-rounded"> shield_lock </span>{" "}
          </div>
          <div className="signup-reason-content">
            <h3>Privacy & Security</h3>
            <p>Your data and privacy are our top priority.</p>{" "}
          </div>{" "}
        </div>
        <div className="signup-reason-box">
          {" "}
          <div className="signup-reason-icon">
            {" "}
            <span className="material-symbols-rounded"> groups </span>{" "}
          </div>{" "}
          <div className="signup-reason-content">
            {" "}
            <h3>Community</h3>{" "}
            <p>
              {" "}
              Get the support you need from your fellow students and
              faculty.{" "}
            </p>{" "}
          </div>{" "}
        </div>
        <div className="signup-reason-box">
          <div className="signup-reason-icon">
            <span className="material-symbols-rounded"> hub </span>{" "}
          </div>
          <div className="signup-reason-content">
            <h3>Stay Connected</h3>
            <p>
              We encourage open communication and collaboration among students,
              fostering knowledge sharing and mutual support.{" "}
            </p>
          </div>
        </div>
        <div className="signup-reason-box">
          <div className="signup-reason-icon">
            <span className="material-symbols-rounded"> school </span>{" "}
          </div>
          <div className="signup-reason-content">
            <h3>Academic Focused</h3>
            <p>
              Designed to support learning, collaboration, and academic
              excellence.
            </p>
          </div>
        </div>
        <div className="signup-reason-box">
          <div className="signup-reason-icon">
            <span className="material-symbols-rounded"> verified </span>{" "}
          </div>
          <div className="signup-reason-content">
            <h3>Integrity</h3>
            <p>
              We are committed to maintaining high standards of integrity and
              ethical behavior.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reasons;
