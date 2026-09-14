import Comments from "../components/post_elements/comments";
import Post from "../components/post_elements/Post";
import GroupsLink from "../components/groups/groups.jsx";
import CreatePost from "../components/CreatePost.jsx";
import SideLinks from "../components/side link/sideLinks.jsx";
import "../styles/Feed.css";
function Feed() {
  const posts = [
    {
      id: 1,
      userName: "Blessings",
      profilepic: "/images/profile.jpg",
      content: "Learning React 🚀",
      postImg: "/images/react.jpg",
      time: "2 hours ago",
      likes: 10,
      liked: false,
      comments: [],
    },

    {
      id: 2,
      userName: "John",
      profilepic: "/images/john.jpg",
      content: "React is actually pretty cool!",
      postImg: "/images/react2.jpg",
      time: "1 hour ago",
      likes: 5,
      liked: false,
      comments: [],
    },
  ];
  return (
    <>
      <main>
        {/* LEFT */}
        <SideLinks />

        {/* CENTER */}
        <section className="feed">
          <h2>Feed</h2>
          {posts.map((post) => (
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
