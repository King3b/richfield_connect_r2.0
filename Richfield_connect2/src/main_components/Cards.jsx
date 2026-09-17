import "../main_components/Cards.css";

function Card(props) {
  return (
    <>
      <section className="core-values">
        <div>
          <h3>{props.header}</h3>

          <span className="material-symbols-rounded core-icon">
            {props.icon}
          </span>

          <p>{props.info}</p>
        </div>
      </section>
    </>
  );
}

export default Card;
