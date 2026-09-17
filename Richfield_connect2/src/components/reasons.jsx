import "../styles/SignUp.css";
import Card from "../main_components/Cards";
function Reasons() {
  return (
    <section className="core-values">
      <ul>
        <li>
          <Card
            header="Privacy & Security"
            icon="shield_lock"
            info="Your data and privacy are our top priority."
          />
        </li>

        <li>
          <Card
            header="Community"
            icon="groups"
            info="Get the support you need from your fellow students and faculty."
          />
        </li>

        <li>
          <Card
            header="Stay Connected"
            icon="hub"
            info="We encourage open communication and collaboration among
                students, fostering a culture of knowledge sharing and mutual
                support."
          />
        </li>

        <li>
          <Card
            header="Academic focused"
            icon="school"
            info="Designed to support learning, collaboration, and academic
                excellence."
          />
        </li>

        <li>
          <Card
            header="Integrity"
            icon="verified"
            info="We are committed to maintaining the highest standards of
                integrity and ethical behavior in all our interactions and
                services."
          />
        </li>
      </ul>
    </section>
  );
}

export default Reasons;
