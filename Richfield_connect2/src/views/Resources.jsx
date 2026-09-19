import "../styles/resources.css";
import SideLinks from "../components/side link/sideLinks";

function Resources() {
  return (
    <>
      <main className="resources-page">
        {/* =========================================
            PAGE HEADER
        ========================================= */}

        <section className="resources-header">
          <p className="resources-eyebrow">RICHFIELD CONNECT</p>

          <h1>School Resources</h1>

          <p>
            Find useful academic, tutoring, and career resources to help you
            succeed throughout your studies.
          </p>
        </section>

        {/* =========================================
            SCHOOL RESOURCES
        ========================================= */}

        <section className="school_resources">
          <div className="resource-section-heading">
            <span className="material-symbols-rounded">school</span>

            <div>
              <h2 id="resources">Academic Resources</h2>

              <p>Access tools and platforms to support your learning.</p>
            </div>
          </div>

          {/* =========================================
              ELIBRARY
          ========================================= */}

          <section className="resource">
            <div className="resource-heading">
              <div className="resource-icon">
                <span className="material-symbols-rounded">library_books</span>
              </div>

              <div>
                <h3 id="eLibrary">eLibrary</h3>

                <p>
                  Access academic books, journals, research databases and other
                  learning materials.
                </p>
              </div>
            </div>

            <div className="resource_links">
              <a
                href="https://learning.richfield.ac.za/mod/page/view.php?id=24572"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-rounded">menu_book</span>

                <span>Richfield eLibrary</span>

                <span className="material-symbols-rounded resource-arrow">
                  open_in_new
                </span>
              </a>

              <a
                href="https://scholar.google.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-rounded">search</span>

                <span>Google Scholar</span>

                <span className="material-symbols-rounded resource-arrow">
                  open_in_new
                </span>
              </a>

              <a
                href="https://www.jstor.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-rounded">article</span>

                <span>JSTOR</span>

                <span className="material-symbols-rounded resource-arrow">
                  open_in_new
                </span>
              </a>

              <a
                href="https://doaj.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-rounded">database</span>

                <span>DOAJ</span>

                <span className="material-symbols-rounded resource-arrow">
                  open_in_new
                </span>
              </a>

              <a
                href="https://www.w3schools.com/jquery/default.asp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-rounded">code</span>

                <span>W3Schools jQuery</span>

                <span className="material-symbols-rounded resource-arrow">
                  open_in_new
                </span>
              </a>

              <a
                href="https://www.w3schools.com/react/default.asp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-rounded">code</span>

                <span>React</span>

                <span className="material-symbols-rounded resource-arrow">
                  open_in_new
                </span>
              </a>
            </div>
          </section>

          {/* =========================================
              TUTORING
          ========================================= */}

          <section className="resource">
            <div className="resource-heading">
              <div className="resource-icon">
                <span className="material-symbols-rounded">person_book</span>
              </div>

              <div>
                <h3 id="t_center">Tutoring Center</h3>

                <p>
                  Improve your programming and technical skills with these
                  learning resources.
                </p>
              </div>
            </div>

            <div className="tutoring-grid">
              {/* HTML & CSS */}

              <article className="tutoring-card">
                <div className="tutoring-card-icon">
                  <span className="material-symbols-rounded">html</span>
                </div>

                <h4>HTML & CSS</h4>

                <p>
                  <strong>Bro Code</strong>
                </p>

                <a
                  href="https://www.youtube.com/watch?v=HGTJBPNC-Gw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start Learning
                  <span className="material-symbols-rounded">open_in_new</span>
                </a>
              </article>

              {/* JavaScript */}

              <article className="tutoring-card">
                <div className="tutoring-card-icon">
                  <span className="material-symbols-rounded">javascript</span>
                </div>

                <h4>JavaScript</h4>

                <p>
                  <strong>Bro Code</strong>
                </p>

                <a
                  href="https://www.youtube.com/watch?v=Ihy0QziLDf0&list=PLZPZq0r_RZOO1zkgO4bIdfuLpizCeHYKv"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start Learning
                  <span className="material-symbols-rounded">open_in_new</span>
                </a>
              </article>

              {/* Python */}

              <article className="tutoring-card">
                <div className="tutoring-card-icon">
                  <span className="material-symbols-rounded">terminal</span>
                </div>

                <h4>Python</h4>

                <p>
                  <strong>Bro Code</strong>
                </p>

                <a
                  href="https://www.youtube.com/watch?v=Sg4GMVMdOPo&list=PLZPZq0r_RZOOkUQbat8LyQii36cJf2SWT"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start Learning
                  <span className="material-symbols-rounded">open_in_new</span>
                </a>
              </article>

              {/* Java */}

              <article className="tutoring-card">
                <div className="tutoring-card-icon">
                  <span className="material-symbols-rounded">coffee</span>
                </div>

                <h4>Java</h4>

                <p>
                  <strong>Bro Code</strong>
                </p>

                <a
                  href="https://www.youtube.com/watch?v=23HFxAPyJ9U&list=PLZPZq0r_RZOOj_NOZYq_R2PECIMglLemc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start Learning
                  <span className="material-symbols-rounded">open_in_new</span>
                </a>
              </article>
              <article className="tutoring-card">
                <div className="tutoring-card-icon">
                  <span className="material-symbols-rounded">html</span>
                </div>

                <h4>React</h4>

                <p>
                  <strong>Bro Code</strong>
                </p>

                <a
                  href="https://www.youtube.com/watch?v=hn80mWvP-9g&list=PLZPZq0r_RZOMQArzyI32mVndGBZ3D99XQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start Learning
                  <span className="material-symbols-rounded">open_in_new</span>
                </a>
              </article>
            </div>
          </section>

          {/* =========================================
              CAREER SERVICES
          ========================================= */}

          <section className="resource">
            <div className="resource-heading">
              <div className="resource-icon">
                <span className="material-symbols-rounded">work</span>
              </div>

              <div>
                <h3 id="career_s">Career Services</h3>

                <p>
                  Explore career opportunities and resources for building your
                  professional future.
                </p>
              </div>
            </div>

            <div className="resource_links">
              <a
                href="https://www.linkedin.com/school/richfield-college/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-rounded">
                  business_center
                </span>

                <span>Richfield on LinkedIn</span>

                <span className="material-symbols-rounded resource-arrow">
                  open_in_new
                </span>
              </a>

              <a
                href="https://www.indeed.com/career-advice/resumes-cover-letters"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-rounded">description</span>

                <span>Indeed Resume Advice</span>

                <span className="material-symbols-rounded resource-arrow">
                  open_in_new
                </span>
              </a>

              <a
                href="https://www.glassdoor.com/index.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-rounded">apartment</span>

                <span>Glassdoor</span>

                <span className="material-symbols-rounded resource-arrow">
                  open_in_new
                </span>
              </a>

              <a
                href="https://www.monster.com/career-advice/article/resume-writing-tips"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-rounded">work_history</span>

                <span>Monster Career Advice</span>

                <span className="material-symbols-rounded resource-arrow">
                  open_in_new
                </span>
              </a>
            </div>
          </section>
        </section>

        {/* =========================================
            GUIDELINES
        ========================================= */}

        <section className="guidelines">
          <div className="resource-section-heading">
            <span className="material-symbols-rounded">verified_user</span>

            <div>
              <h2>Community Guidelines</h2>

              <p>
                Help us maintain a positive and supportive student community.
              </p>
            </div>
          </div>

          <div className="guidelines-grid">
            <article className="core-advantages">
              <div className="guideline-icon">
                <span className="material-symbols-rounded">forum</span>
              </div>

              <h3>Respectful Communication</h3>

              <p>
                We promote respectful and constructive communication among
                students, faculty, and staff.
              </p>
            </article>

            <article className="core-advantages">
              <div className="guideline-icon">
                <span className="material-symbols-rounded">verified_user</span>
              </div>

              <h3>Academic Integrity</h3>

              <p>
                We encourage honesty and ethical behaviour in all academic
                activities.
              </p>
            </article>

            <article className="core-advantages">
              <div className="guideline-icon">
                <span className="material-symbols-rounded">diversity_3</span>
              </div>

              <h3>Inclusivity</h3>

              <p>
                We strive to create an inclusive environment where everyone
                feels valued and respected.
              </p>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}

export default Resources;
