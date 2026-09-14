function ProfileView(props) {
  return (
    <form id="signupForm" onSubmit={props.submit}>
      <div className="preview-avatar">
        <span className="material-symbols-rounded">person</span>
      </div>
      <h3>{props.title}</h3>

      <p>{props.info}</p>

      <br />

      {/* NAME */}
      <label htmlFor="name">Name</label>

      <input
        type="text"
        id="name"
        name="name"
        value={props.name}
        onChange={props.change}
        placeholder="Name"
        required
      />

      <br />

      {/* SURNAME */}
      <label htmlFor="surname">Surname</label>

      <input
        type="text"
        id="surname"
        name="surName"
        value={props.surName}
        onChange={props.change}
        placeholder="Surname"
        required
      />

      <br />

      {/* EMAIL */}
      <label htmlFor="email">Email</label>

      <input
        type="email"
        id="email"
        name="email"
        value={props.email}
        onChange={props.change}
        placeholder="Email"
        required
      />

      <br />

      {/* USERNAME */}
      <label htmlFor="username">Username</label>

      <input
        type="text"
        id="username"
        name="userName"
        value={props.userName}
        onChange={props.change}
        placeholder="@username"
        required
      />

      <div className="username-preview">
        Suggested username:
        <span id="generatedUsername">@{props.userName}</span>
      </div>

      <br />

      {/* CAMPUS */}
      <label htmlFor="campus">Campus</label>

      <select
        name="campus"
        id="campus"
        value={props.campus}
        onChange={props.change}
        required
      >
        <option value="">Select Campus</option>
        <option value="Bryanston">Bryanston Campus</option>
        <option value="Cape Town">Cape Town Campus</option>
        <option value="Centurion">Centurion Campus</option>
        <option value="Durban">Durban Campus</option>
        <option value="Musgrave">Musgrave Campus</option>
        <option value="Newtown Junction">Newtown Junction Campus</option>
        <option value="Polokwane">Polokwane Campus</option>
        <option value="Pretoria">Pretoria Campus</option>
      </select>

      <br />

      {/* YEAR */}
      <label htmlFor="year">Year of Study</label>

      <select
        name="year"
        id="year"
        value={props.year}
        onChange={props.change}
        required
      >
        <option value="">Select Year</option>
        <option value="HCIT">HCIT</option>
        <option value="DIT">DIT</option>
        <option value="DIT 2nd">DIT 2nd</option>
        <option value="BScIT">BScIT</option>
        <option value="BScIT 2nd">BScIT 2nd</option>
        <option value="BScIT 3rd">BScIT 3rd</option>
      </select>

      <br />

      {/* GENDER */}
      <label htmlFor="gender">Gender</label>

      <select
        name="gender"
        id="gender"
        value={props.gender}
        onChange={props.change}
        required
      >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>

      <br />

      {/* STUDENT ID */}
      <label htmlFor="student_id">Student ID</label>

      <input
        type="text"
        id="student_id"
        name="studentID"
        placeholder="Student ID"
        value={props.studentID}
        onChange={props.change}
        minLength="9"
        maxLength="9"
        required
      />

      <br />

      {/* PASSWORD */}
      <label htmlFor="password">Password</label>

      <div className="password-box">
        <input
          type="password"
          id="password"
          name="password"
          value={props.password}
          onChange={props.change}
          placeholder="Password"
          required
        />

        <span className="material-symbols-rounded eye">visibility</span>
      </div>

      <div className="strength">
        <div className="strength-bar"></div>
      </div>

      <p className="strength-text"></p>

      <br />

      {/* CONFIRM PASSWORD */}
      <label htmlFor="confirm_password">Confirm Password</label>

      <div className="password-box">
        <input
          type="password"
          id="confirm_password"
          name="confirmPassword"
          value={props.confirmPassword}
          onChange={props.change}
          placeholder="Confirm Password"
          required
        />

        <span className="material-symbols-rounded eye">visibility</span>
      </div>

      <p className="password-match"></p>

      <br />

      <button type="submit">Sign Up</button>

      <hr />

      <p className="login">
        Already have an account?
        <a href="/login"> Login here</a>
      </p>
    </form>
  );
}

export default ProfileView;
