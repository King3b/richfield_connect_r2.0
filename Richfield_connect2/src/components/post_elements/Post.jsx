import { useContext, useState } from "react";
import Comments from "./comments";
import { AppContext } from "../../context/AppContext";

function Post({ post }) {
  const { dispatch } = useContext(AppContext);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState(post.comments || []);

  const handleComment = () => {
    if (commentText.trim() === "") {
      return;
    }

    const newComment = {
      id: Date.now(),
      user: "Blessings",
      time: "Just now",
      comment: commentText,
    };

    setComments([...comments, newComment]);

    setCommentText("");
  };

  // LIKE POST
  const handleLike = () => {
    dispatch({
      type: "TOGGLE_LIKE",
      payload: post.id,
    });
  };

  // DELETE POST
  const handleDelete = () => {
    const confirmDelete = window.confirm("Delete post?");

    if (confirmDelete) {
      dispatch({
        type: "DELETE_POST",
        payload: post.id,
      });
    }
  };

  return (
    <div className="post">
      {/* POST HEADER */}
      <div className="post-heading">
        <img src={post.profilepic} alt="profile picture" />

        <div className="post_title">
          <p className="cUser">{post.userName}</p>

          <button className="follow">Follow</button>

          <p className="cTime">{post.time}</p>
        </div>
      </div>

      {/* POST CONTENT */}
      <p className="cMsg">{post.content}</p>

      {/* POST IMAGE */}
      {post.postImg && <img src={post.postImg} alt="subject picture" />}

      {/* REACTION BUTTONS */}
      <div className="react_buttons">
        <span className="like-count">❤️ {post.likes}</span>

        <button
          className={`like-btn ${post.liked ? "liked" : ""}`}
          onClick={handleLike}
        >
          ❤️ {post.liked ? "Liked" : "Like"}
        </button>

        <button className="comment-btn">
          🗨️ Comment ({post.comments?.length || 0})
        </button>

        <button className="delete-btn" onClick={handleDelete}>
          🗑️ Delete
        </button>
      </div>
      <div className="comments_users">
        {comments.map((comment) => (
          <Comments
            key={comment.id}
            user={comment.user}
            time={comment.time}
            comment={comment.comment}
          />
        ))}

        {/* COMMENT INPUT */}
        <div className="user_commenting">
          <textarea
            name="comment"
            id={`comment-${post.id}`}
            placeholder="Write a comment..."
          />

          <button type="button">Post</button>
        </div>
      </div>
    </div>
  );
}

export default Post;
