import "../main_components/Cards.css";

function Card(props) {
  return (
    <>
      <section className="card-values">
        <div>
          <div className="card-icon">
            <span className="material-symbols-rounded ">{props.icon}</span>
          </div>

          <h3>{props.header}</h3>

          <p>{props.info}</p>
        </div>
      </section>
    </>
  );
}

export default Card;
