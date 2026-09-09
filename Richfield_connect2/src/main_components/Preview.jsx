function Preview(props) {
  return (
    <div className="preview-card">
      <div className="preview-avatar">
        <span className="material-symbols-rounded">person</span>
      </div>

      <h2 className="preview-name">{props.name || "Your Name"}</h2>

      <p className="preview-username">
        {props.userName ? `@${props.userName}` : "@username"}
      </p>

      <p className="preview-campus">{props.campus || "Your Campus"}</p>

      <p className="preview-year">{props.year || "Year of Study"}</p>
    </div>
  );
}
export default Preview;
