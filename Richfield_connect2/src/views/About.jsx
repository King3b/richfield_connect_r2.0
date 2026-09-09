import "../styles/About.css";
import Card from "../main_components/Cards";
//yooo just get the cards their css
function About() {
  return (
    <div>
      <section class="about">
        <h1>Building connections . Empowering Futures</h1>
        <p>
          Richfield Connect is an internal academic social platform created
          exclusively for Richfield students. Our mission is to create a secure,
          collaborative, and engaging online space that fosters academic
          growth,meaningful conversations, and lasting connections.
        </p>
      </section>
      <section className="about2">
        <div className="vision">
          <h2>Our Vision</h2>
          <p>
            At Richfield Connect, we envision a vibrant online community where
            students can connect, collaborate, and thrive academically. We aim
            to provide a platform that encourages open communication, knowledge
            sharing, and mutual support among students.
          </p>
        </div>
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            Our mission is to create a safe and inclusive space where students
            can share ideas, ask questions, and collaborate on academic
            projects. We strive to empower students by providing them with the
            tools and resources they need to succeed academically while
            fostering a sense of community and belonging.
          </p>
        </div>
      </section>
      <section className="about3">
        <h2>Guidlines</h2>
        <p>
          Richfield Connect is a secure, institution-focused social platform
          where students can:
        </p>
        <ul>
          <li>Respect other students</li>
          <li>Keep discussions academic </li>
          <li>Do not share inappropriate content</li>
          <li>Respect intellectual property</li>
          <li> Maintain academic integrity </li>
        </ul>
      </section>
      <section className="core-values">
        <h2 id="Core_values">Core Values</h2>

        <ul>
          <li>
            <div>
              <Card
                header="Privacy & Security"
                icon="shield_lock"
                info="Your data and privacy are our top priority."
              />
            </div>
          </li>

          <li>
            <div>
              <Card
                header="Community"
                icon="groups"
                info="Building a supportive and respectful student community."
              />
            </div>
          </li>

          <li>
            <div>
              <Card
                header="Collaboration"
                icon="handshake"
                info="We encourage open communication and collaboration among
                students, fostering a culture of knowledge sharing and mutual
                support."
              />
            </div>
          </li>

          <li>
            <div>
              <Card
                header="Academic focused"
                icon="school"
                info="Designed to support learning, collaboration, and academic
                excellence."
              />
            </div>
          </li>

          <li>
            <div>
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
      <section className="about4">
        <h2>Be Part of Something Greater</h2>
        <p>
          Join Richfield Connect today and be part of a vibrant academic
          community built for students, by the institution.
        </p>
        <button>Join today</button>
      </section>
      <section className="about4-sect">
        <section id="privacy_policy">
          <h2>Privacy & Security</h2>
          <p>
            We take your privacy and security seriously. Richfield Connect is
            designed with robust security measures to protect your data and
            ensure a safe online environment for all users. Your information is
            never shared with third parties, and we are committed to maintaining
            the highest standards of data protection.
          </p>
        </section>
        <section id="contact">
          <h2>Contact Us</h2>
          <p>
            If you have any questions, feedback, or need assistance, please
            don't hesitate to reach out to us. You can contact us at ,
            <a href="mailto:info@richfieldconnect.com">
              info@richfieldconnect.com
            </a>
            , or visit our help center for more information
          </p>
        </section>
      </section>
      <section id="help_center">
        <h2>Help Center</h2>
        <p>
          Visit our help center for FAQs, troubleshooting guides, and support
          resources to assist you in making the most of your Richfield Connect
          experience.
        </p>
        <h5>any queries?</h5>
        <textarea placeholder="Enter your query here..."></textarea>
        <button>Submit</button>
      </section>
    </div>
  );
}

export default About;
