import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AppContext } from "../context/AppContext";

import Post from "../components/post_elements/Post";
import GroupsLink from "../components/groups/groups.jsx";
import CreatePost from "../components/posts/CreatePost.jsx";

import "../styles/Feed.css";

function Feed() {
  const { state } = useContext(AppContext);
  const navigate = useNavigate();

  if (!state.currentUser) {
    return (
      <main className="feed-login-required">
        <section className="feed-login-card">
          <span className="material-symbols-rounded">lock</span>

          <h2>Login Required</h2>

          <p>You need to be logged in to view the Richfield Connect feed.</p>

          <button type="button" onClick={() => navigate("/login")}>
            Go to Login
          </button>
        </section>
      </main>
    );
  }

  return (
    <main className="feedLayout">
      <aside className="groups">
        <h2>Groups</h2>

        <div className="group_search">
          <input type="text" placeholder="Search groups" />

          <button type="button">Search</button>
        </div>

        <div className="groups-list">
          <GroupsLink
            link="#maths"
            groupName="Maths"
            desc="Group for the maths warriors"
          />
        </div>
      </aside>
      <section className="feed">
        <h2>Feed</h2>
        <section className="posts-list">
          {state.posts?.length > 0 ? (
            state.posts.map((post) => <Post key={post.id} post={post} />)
          ) : (
            <div className="empty-feed">
              <span className="material-symbols-rounded">forum</span>

              <h3>No posts yet</h3>

              <p>
                Be the first student to share something with the Richfield
                community.
              </p>
            </div>
          )}
        </section>
        <section className="create_Post">
          <div className="create-post-header">
            <div className="create-post-avatar">
              {state.currentUser.profileImage ? (
                <img src={state.currentUser.profileImage} alt="Profile" />
              ) : (
                <span className="material-symbols-rounded">person</span>
              )}
            </div>

            <div>
              <h3>Create a post</h3>

              <p>Share something with your fellow students</p>
            </div>
          </div>

          <CreatePost />
        </section>
      </section>
    </main>
  );
}

export default Feed;
