import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import "../../styles/Post.css";

function Post({ post }) {
  const { state, dispatch } = useContext(AppContext);

  const [showComments, setShowComments] = useState(false);
  const [comment, setComment] = useState("");

  const handleLike = () => {
    dispatch({
      type: "TOGGLE_LIKE",
      payload: post.id,
    });
  };

  const handleComment = () => {
    if (!comment.trim()) {
      return;
    }

    const newComment = {
      id: Date.now(),
      userId: state.currentUser?.studentID,
      userName: state.currentUser?.name || "Student",
      content: comment,
      time: new Date().toLocaleString(),
    };

    dispatch({
      type: "ADD_COMMENT",
      payload: {
        postId: post.id,
        comment: newComment,
      },
    });

    setComment("");
  };

  const handleDelete = () => {
    const confirmed = window.confirm("Are u sure you want to delete post");

    if (!confirmed) {
      return;
    }

    dispatch({
      type: "DELETE_POST",
      payload: {
        postId: post.id,
      },
    });
  };

  return (
    <article className="post">
      {/* POST HEADER */}

      <div className="post-heading">
        <div className="post-avatar">
          {post.userName?.charAt(0).toUpperCase()}
        </div>

        <div className="post-title">
          <p className="cUser">{post.userName}</p>

          <p className="cTime">{post.time}</p>
        </div>
      </div>

      {/* TOPIC */}

      {post.topic && <h3>{post.topic}</h3>}

      {/* CONTENT */}

      <p className="cMsg">{post.content}</p>

      {/* IMAGE */}

      {post.postImg && (
        <img className="post-image" src={post.postImg} alt="Post" />
      )}

      {/* BUTTONS */}

      <div className="react-buttons">
        <button onClick={handleLike}>❤️ {post.likes}</button>

        <button onClick={() => setShowComments(!showComments)}>
          💬 Comment
        </button>
        <button onClick={handleDelete}>🗑️Delete</button>
      </div>

      {/* COMMENTS */}

      {showComments && (
        <div className="comments-section">
          <div className="comments-list">
            {post.comments?.map((comment) => (
              <div className="comment" key={comment.id}>
                <strong>{comment.userName}</strong>

                <p>{comment.content}</p>

                <small>{comment.time}</small>
              </div>
            ))}
          </div>
          <div className="comment-input">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write a comment..."
            />

            <button onClick={handleComment}>Post</button>
          </div>
        </div>
      )}
    </article>
  );
}

export default Post;
