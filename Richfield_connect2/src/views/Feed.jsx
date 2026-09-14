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
      <main>
        {/* LEFT */}
        <SideLinks />

        {/* CENTER */}
        <section className="feed">
          <h2>Feed</h2>
          {state.posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}

          <section className="create_Post">
            <h2>Post something</h2>
            <CreatePost />
          </section>
        </section>

        {/* RIGHT */}
        <article className="groups">
          <h2>Groups</h2>

          <div className="group_search">
            <input type="text" placeholder="Search groups" />

            <button type="submit">Search</button>
          </div>

          <GroupsLink
            link="#maths"
            groupName="Maths"
            desc="Group for the maths warriors"
          />
        </article>
      </main>
    </>
  );
}

export default Feed;
