function Card(props) {
  return (
    <>
      <h3>{props.header}</h3>

      <span className="material-symbols-rounded core-icon">{props.icon}</span>

      <p>{props.info}</p>
    </>
  );
}

export default Card;
