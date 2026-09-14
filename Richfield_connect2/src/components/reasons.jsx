import "../styles/SignUp.css";
import Card from "../main_components/Cards";
function Reasons() {
  return (
    <section className="reasons">
      <ul>
        <li>
          <div className="core-advantages">
            <Card
              header="Privacy & Security"
              icon="shield_lock"
              info="Your data and privacy are our top priority."
            />
          </div>
        </li>

        <li>
          <div className="core-advantages">
            <Card
              header="Community"
              icon="groups"
              info="Get the support you need from your fellow students and faculty."
            />
          </div>
        </li>

        <li>
          <div className="core-advantages">
            <Card
              header="Stay Connected"
              icon="hub"
              info="We encourage open communication and collaboration among
                students, fostering a culture of knowledge sharing and mutual
                support."
            />
          </div>
        </li>

        <li>
          <div className="core-advantages">
            <Card
              header="Academic focused"
              icon="school"
              info="Designed to support learning, collaboration, and academic
                excellence."
            />
          </div>
        </li>

        <li>
          <div className="core-advantages">
            <Card
              header="Integrity"
              icon="verified"
              info="We are committed to maintaining the highest standards of
                integrity and ethical behavior in all our interactions and
                services."
            />
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Reasons;
