import { useContext } from "react";

import { AppContext } from "../context/AppContext";

import Post from "../components/post_elements/Post";
import GroupsLink from "../components/groups/groups.jsx";
import CreatePost from "../components/posts/CreatePost.jsx";
import SideLinks from "../components/side link/sideLinks.jsx";

import "../styles/Feed.css";

function Feed() {
  const { state } = useContext(AppContext);

  return (
    <>
      {/* ================= MAIN FEED ================= */}
      <main className="feedLayout">
        {/* ================= CENTER FEED ================= */}
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

          {/* ================= CREATE POST ================= */}
          <section className="create_Post">
            <div className="create-post-header">
              <div className="create-post-avatar">
                <span className="material-symbols-rounded">person</span>
              </div>

              <div>
                <h3>Create a post</h3>
                <p>Share something with your fellow students</p>
              </div>
            </div>

            <CreatePost />
          </section>

          {/* ================= POSTS ================= */}
        </section>

        {/* ================= GROUPS ================= */}
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
      </main>
    </>
  );
}

export default Feed;
