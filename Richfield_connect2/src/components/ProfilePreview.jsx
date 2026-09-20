import { useState } from "react";
import "../styles/ProfilePreview.css";

function ProfileView(props) {
  const [showPassword, setShowPassword] = useState(false);

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
        onBlur={props.blur}
        placeholder="Name"
        required
      />
      {props.errors?.name && <p className="error">{props.errors.name}</p>}
      <br />

      {/* SURNAME */}
      <label htmlFor="surname">Surname</label>
      <input
        type="text"
        id="surname"
        name="surName"
        value={props.surName}
        onChange={props.change}
        onBlur={props.blur}
        placeholder="Surname"
        required
      />
      {props.errors?.surName && <p className="error">{props.errors.surName}</p>}
      <br />

      {/* EMAIL */}
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={props.email}
        onChange={props.change}
        onBlur={props.blur}
        placeholder="Email"
        required
      />
      {props.errors?.email && <p className="error">{props.errors.email}</p>}
      <br />

      {/* USERNAME */}
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        name="userName"
        value={props.userName}
        onChange={props.change}
        onBlur={props.blur}
        placeholder="@username"
      />

      {props.errors?.userName && (
        <p className="error">{props.errors.userName}</p>
      )}

      <div className="username-preview">
        Suggested username:
        <span id="generatedUsername">@{props.name}</span>
      </div>
      <br />

      {/* CAMPUS */}
      <label htmlFor="campus">Campus</label>
      <select
        name="campus"
        id="campus"
        value={props.campus}
        onChange={props.change}
        onBlur={props.blur}
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

      {props.errors?.campus && <p className="error">{props.errors.campus}</p>}
      <br />

      {/* YEAR */}
      <label htmlFor="year">Year of Study</label>
      <select
        name="year"
        id="year"
        value={props.year}
        onChange={props.change}
        onBlur={props.blur}
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

      {props.errors?.year && <p className="error">{props.errors.year}</p>}
      <br />

      {/* GENDER */}
      <label htmlFor="gender">Gender</label>
      <select
        name="gender"
        id="gender"
        value={props.gender}
        onChange={props.change}
        onBlur={props.blur}
        required
      >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>

      {props.errors?.gender && <p className="error">{props.errors.gender}</p>}
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
        onBlur={props.blur}
        minLength="9"
        maxLength="9"
        required
      />

      {props.errors?.studentID && (
        <p className="error">{props.errors.studentID}</p>
      )}
      <br />

      {/* PASSWORD */}
      <label htmlFor="password">Password</label>

      <div className="password-box">
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          name="password"
          value={props.password}
          onChange={props.change}
          onBlur={props.blur}
          placeholder="Password"
          required
        />

        <br />

        <button
          type="button"
          className={`password-eye ${showPassword ? "show" : ""}`}
          onClick={() => setShowPassword(!showPassword)}
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          <span className="material-symbols-rounded">
            {showPassword ? "visibility" : "visibility_off"}
          </span>
        </button>
      </div>

      {props.errors?.password && (
        <p className="error">{props.errors.password}</p>
      )}

      <div className="password-progress">
        <div
          className={`password-progress-bar strength-${props.passwordStrength}`}
          style={{
            width: `${(props.passwordStrength / 5) * 100}%`,
          }}
        ></div>
      </div>

      {props.password && (
        <>
          <p className="password-strength">
            {props.passwordStrength <= 2 && "🔴 Weak password"}
            {props.passwordStrength === 3 && "🟠 Medium password"}
            {props.passwordStrength === 4 && "🟢 Strong password"}
            {props.passwordStrength === 5 && "🟢 Very strong password"}
          </p>

          <div className="password-requirements">
            <p className={props.password.length >= 8 ? "valid" : ""}>
              {props.password.length >= 8 ? "✓" : "○"} At least 8 characters
            </p>

            <p className={/[A-Z]/.test(props.password) ? "valid" : ""}>
              {/[A-Z]/.test(props.password) ? "✓" : "○"} One capital letter
            </p>

            <p className={/[a-z]/.test(props.password) ? "valid" : ""}>
              {/[a-z]/.test(props.password) ? "✓" : "○"} One small letter
            </p>

            <p className={/[0-9]/.test(props.password) ? "valid" : ""}>
              {/[0-9]/.test(props.password) ? "✓" : "○"} One number
            </p>

            <p className={/[^A-Za-z0-9]/.test(props.password) ? "valid" : ""}>
              {/[^^A-Za-z0-9]/.test(props.password) ? "✓" : "○"} One special
              character
            </p>
          </div>
        </>
      )}

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
          onBlur={props.blur}
          placeholder="Confirm Password"
          required
        />
      </div>

      {props.errors?.confirmPassword && (
        <p className="error">{props.errors.confirmPassword}</p>
      )}

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
