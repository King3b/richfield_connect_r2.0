import "../styles/About.css";
import { Link } from "react-router-dom";
import Values from "../components/values";

function About() {
  return (
    <main className="about-page">
      {/* ================= HERO ================= */}
      <section className="about">
        <div className="about-hero-content">
          <span className="about-label">ABOUT RICHFIELD CONNECT</span>

          <h1>Building Connections. Empowering Futures.</h1>

          <p>
            Richfield Connect is an internal academic social platform created
            exclusively for Richfield students. Our mission is to create a
            secure, collaborative, and engaging online space that encourages
            academic growth, meaningful conversations, and lasting connections.
          </p>
        </div>
      </section>
      {/* ================= VISION & MISSION ================= */}
      <section className="about2">
        <article className="vision">
          <span className="section-label">OUR VISION</span>

          <h2>Our Vision</h2>

          <p>
            At Richfield Connect, we envision a vibrant online community where
            students can connect, collaborate, and thrive academically. We aim
            to provide a platform that encourages open communication, knowledge
            sharing, and mutual support among students.
          </p>
        </article>

        <article className="mission">
          <span className="section-label">OUR MISSION</span>

          <h2>Our Mission</h2>

          <p>
            Our mission is to create a safe and inclusive space where students
            can share ideas, ask questions, and collaborate on academic
            projects. We strive to empower students by providing the tools and
            resources they need to succeed academically while fostering a sense
            of community and belonging.
          </p>
        </article>
      </section>
      {/* ================= GUIDELINES ================= */}
      <section className="about4">
        <span className="section-label">COMMUNITY GUIDELINES</span>

        <h2>Guidelines</h2>

        <p>
          Richfield Connect is an institution-focused social platform where
          students are expected to:
        </p>

        <ul>
          <li>Respect other students.</li>
          <li>Keep discussions academic and constructive.</li>
          <li>Avoid sharing inappropriate content.</li>
          <li>Respect intellectual property.</li>
          <li>Maintain academic integrity.</li>
        </ul>
      </section>
      {/* ================= CORE VALUES ================= */}

      <section className="core-values" id="Core_values">
        <Values />
      </section>

      {/* ================= CTA ================= */}
      <section className="about4">
        <span className="section-label">JOIN THE COMMUNITY</span>

        <h2>Be Part of Something Greater.</h2>

        <p>
          Join Richfield Connect and become part of an academic community built
          for students, by the institution.
        </p>

        <Link to="/signup" className="about-join-btn">
          Join today
        </Link>
      </section>
      {/* ================= PRIVACY + CONTACT ================= */}
      <section className="about4-sect">
        <article id="privacy_policy">
          <span className="section-label">YOUR PRIVACY</span>

          <h2>Privacy & Security</h2>

          <p>
            We take your privacy and security seriously. Richfield Connect is
            designed with security measures to protect your data and help
            provide a safe online environment for all users.
          </p>
        </article>

        <article id="contact">
          <span className="section-label">GET IN TOUCH</span>

          <h2>Contact Us</h2>

          <p>
            If you have questions, feedback, or need assistance, please contact
            us at{" "}
            <a href="mailto:info@richfieldconnect.com">
              info@richfieldconnect.com
            </a>
            .
          </p>
        </article>
      </section>
      {/* ================= HELP CENTER ================= */}
      <section id="help_center">
        <span className="section-label">SUPPORT</span>

        <h2>Help Center</h2>

        <p>
          Visit our help center for FAQs, troubleshooting guides, and support
          resources to help you get the most out of Richfield Connect.
        </p>

        <h5>Any queries?</h5>

        <textarea
          placeholder="Enter your query here..."
          aria-label="Enter your query"
        />

        <button type="button">Submit</button>
      </section>
    </main>
  );
}

export default About;
