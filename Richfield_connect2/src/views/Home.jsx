import "../styles/Home.css";
function Home() {
  return (
    <>
      <div className="Hero">
        <h1>Connect. Learn. Grow</h1>
        <p>Welcome to Richfield connect - your Academic social network</p>

        <a href="/signup">
          <button className="Join">join</button>
        </a>
        <a href="/about">
          <button className="lM">Learn more</button>
        </a>
      </div>
      <section className="core-values">
        <h2 id="Core_values">Why Richfield connect</h2>

        <ul>
          <li>
            <div>
              <h3>Connect with peers</h3>

              <span className="material-symbols-rounded core-icon">
                {" "}
                school{" "}
              </span>

              <p>
                build a supportive community which you can connect with peers to
                study and help each other
              </p>
            </div>
          </li>

          <li>
            <div>
              <h3>Share ideas</h3>

              <span className="material-symbols-rounded core-icon">chat</span>

              <p>
                share , connect and plan ideas in small groups or
                communities{" "}
              </p>
            </div>
          </li>

          <li>
            <div>
              <h3>Profile</h3>

              <span className="material-symbols-rounded core-icon">
                {" "}
                person{" "}
              </span>

              <p>
                Build a profile to keep track, share progress and connect with
                studios.
              </p>
            </div>
          </li>
        </ul>
      </section>
      <hr />
      <br />

      <section className="core-values">
        <h2> How it works</h2>

        <ul>
          <div>
            <h3>
              <a href="#">1 Creat profile</a>
            </h3>
            <span className="material-symbols-rounded core-icon"> person </span>
            <p>Create your student profile.</p>
          </div>

          <div>
            <h3>2 Share</h3>
            <span className="material-symbols-rounded core-icon"> share </span>
            <p>Post academic ideas and content.</p>
          </div>

          <div>
            <h3>3 connect</h3>
            <span className="material-symbols-rounded core-icon"> group </span>
            <p>Interact and collaborate with fellow students.</p>
          </div>
        </ul>
      </section>
    </>
  );
}

export default Home;
