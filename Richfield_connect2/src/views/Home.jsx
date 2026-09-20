import "../styles/Home.css";
import { Link } from "react-router-dom";
import Card from "../components/Cards/Cards";

function Home() {
  return (
    <main className="home">
      {/* ================= HERO ================= */}
      <section className="Hero">
        <div className="hero-content">
          <span className="hero-label">RICHFIELD CONNECT</span>

          <h1>Connect. Learn. Grow.</h1>

          <p>
            Welcome to Richfield Connect — your academic social network for
            learning, collaboration and building meaningful connections.
          </p>

          <div className="hero-actions">
            <Link to="/signup" className="hero-link">
              <button className="Join">Join now</button>
            </Link>

            <Link to="/about" className="hero-link">
              <button className="lM">Learn more</button>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= CORE VALUES ================= */}
      <section className="core-values" id="Core_values">
        <div className="section-heading">
          <span>WHY RICHFIELD CONNECT</span>
          <h2>Built for students, by students.</h2>
          <p>
            Everything you need to connect with classmates, share ideas and grow
            together.
          </p>
        </div>

        <ul className="card-grid">
          <li>
            <Card
              header="Connect with peers"
              icon="school"
              info="Build a supportive community where you can connect with peers, study together and help each other."
            />
          </li>

          <li>
            <Card
              header="Share ideas"
              icon="chat"
              info="Share ideas, connect with others and plan projects through groups and academic communities."
            />
          </li>

          <li>
            <Card
              header="Build your profile"
              icon="person"
              info="Create your student profile, share your progress and showcase your skills and interests."
            />
          </li>
        </ul>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="how-it-works">
        <div className="section-heading">
          <span>HOW IT WORKS</span>
          <h2>Start connecting in three steps.</h2>
          <p>
            Create your profile, share your ideas and collaborate with fellow
            students.
          </p>
        </div>

        <ul className="card-grid">
          <li>
            <Link to="/signup" className="card-link">
              <Card
                header="1. Create your profile"
                icon="person"
                info="Create your student profile and let other students know who you are."
              />
            </Link>
          </li>

          <li>
            <Card
              header="2. Share"
              icon="share"
              info="Post academic ideas, questions, projects and useful content."
            />
          </li>

          <li>
            <Card
              header="3. Connect"
              icon="group"
              info="Interact, collaborate and build connections with fellow students."
            />
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Home;
