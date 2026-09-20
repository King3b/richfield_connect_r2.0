import "../reasons/reasons.css";
function Card2(props) {
  return (
    <div className="signup-reason-box">
      <div className="signup-reason-icon">
        <span className="material-symbols-rounded"> {props.icon} </span>{" "}
      </div>
      <div className="signup-reason-content">
        <h3>{props.header}</h3>
        <p>{props.info}</p>
      </div>
    </div>
  );
}

export default Card2;
