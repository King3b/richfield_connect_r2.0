function Preview(props) {
  return (
    <div className="preview-card">
      <h2>Profile preview</h2>
      <hr />
      <div className="preview-avatar">
        <span className="material-symbols-rounded">person</span>
      </div>

      <h2 className="preview-username">
        {props.userName ? `@${props.userName}` : "@username"}
      </h2>

      <p className="preview-fullname">
        {props.name || "Your full name "} {props.surName}
      </p>
      <div className="campus_year">
        <p className="preview-campus">{props.campus || "Your Campus"}</p>

        <p className="preview-year">{props.year || "Year of Study"}</p>
      </div>
      <hr />
      <h2>Bio</h2>
      <p className="preview-bior">
        {props.bio || "enter somthing about yourself"}
      </p>
    </div>
  );
}
export default Preview;
