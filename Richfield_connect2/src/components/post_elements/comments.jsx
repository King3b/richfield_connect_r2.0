import "../post_elements/comments.css";

function Comments({ user, time, comment }) {
  return (
    <div className="comments_users">
      <div className="comment">
        <p className="cUser">{user}</p>

        <p className="cTime">{time}</p>

        <p className="cMsg">{comment}</p>

        <button className="like-btn">Like</button>

        <button className="reply-btn">Reply</button>
      </div>
    </div>
  );
}

export default Comments;
