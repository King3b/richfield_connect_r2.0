import { useContext, useState } from "react";

import { AppContext } from "../../context/AppContext";

import "../../styles/Post.css";

function Post({ post }) {
  const { state, dispatch } = useContext(AppContext);

  const [showComments, setShowComments] = useState(false);

  const [comment, setComment] = useState("");

  const postUser = state.users.find((user) => user.studentID === post.userId);

  const postUserName = postUser
    ? `${postUser.name} ${postUser.surName || ""}`.trim()
    : post.userName || "Student";

  const postProfileImage = postUser?.profileImage || post.profileImage || "";

  const isPostOwner = state.currentUser?.studentID === post.userId;

  const handleLike = () => {
    if (!state.currentUser) {
      return;
    }

    dispatch({
      type: "TOGGLE_LIKE",
      payload: post.id,
    });
  };

  const handleComment = () => {
    if (!state.currentUser) {
      return;
    }

    if (!comment.trim()) {
      return;
    }

    const currentUser = state.currentUser;

    const newComment = {
      id: Date.now(),

      userId: currentUser.studentID,

      userName: `${currentUser.name} ${currentUser.surName || ""}`.trim(),

      profileImage: currentUser.profileImage || "",

      content: comment.trim(),

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
    if (!isPostOwner) {
      return;
    }

    dispatch({
      type: "DELETE_POST",
      payload: post.id,
    });
  };

  return (
    <article className="post">
      <div className="post-heading">
        <div className="post-avatar">
          {postProfileImage ? (
            <img src={postProfileImage} alt={`${postUserName}'s profile`} />
          ) : (
            postUserName.charAt(0).toUpperCase()
          )}
        </div>

        <div className="post-title">
          <p className="cUser">{postUserName}</p>

          <p className="cTime">{post.time}</p>
        </div>
      </div>

      {post.topic && <h3>{post.topic}</h3>}

      <p className="cMsg">{post.content}</p>

      {post.postImg && (
        <img className="post-image" src={post.postImg} alt="Post" />
      )}

      <div className="react-buttons">
        <button type="button" onClick={handleLike}>
          {post.liked ? "💙" : "🤍"} {post.likes}
        </button>

        <button type="button" onClick={() => setShowComments(!showComments)}>
          💬 Comment
        </button>

        {isPostOwner && (
          <button type="button" onClick={handleDelete}>
            🗑️ Delete
          </button>
        )}
      </div>

      {showComments && (
        <div className="comments-section">
          <div className="comments-list">
            {post.comments?.length > 0 ? (
              post.comments.map((comment) => {
                const commentUser = state.users.find(
                  (user) => user.studentID === comment.userId,
                );

                const commentUserName = commentUser
                  ? `${commentUser.name} ${commentUser.surName || ""}`.trim()
                  : comment.userName || "Student";

                const commentProfileImage =
                  commentUser?.profileImage || comment.profileImage || "";

                return (
                  <div className="comment" key={comment.id}>
                    <div className="comment-user">
                      <div className="comment-avatar">
                        {commentProfileImage ? (
                          <img
                            src={commentProfileImage}
                            alt={commentUserName}
                          />
                        ) : (
                          commentUserName.charAt(0).toUpperCase()
                        )}
                      </div>

                      <div>
                        <strong>{commentUserName}</strong>

                        <small>{comment.time}</small>
                      </div>
                    </div>

                    <p>{comment.content}</p>
                  </div>
                );
              })
            ) : (
              <p className="no-comments">
                No comments yet. Be the first to comment!
              </p>
            )}
          </div>

          {state.currentUser && (
            <div className="comment-input">
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write a comment..."
              />

              <button type="button" onClick={handleComment}>
                Post
              </button>
            </div>
          )}
        </div>
      )}
    </article>
  );
}

export default Post;
