function CreatePost() {
  return (
    <form id="post-form" action="#" method="post">
      <input type="text" placeholder="Post topic" required />
      <textarea
        name="post_content"
        id="post_content"
        placeholder="What's on your mind?"
        required
      ></textarea>
      <input className="uplaod_image" type="file" accept="image/*" />
      <div className="buttons-config">
        <button type="button">gifs</button>
        <button type="submit">Post</button>
      </div>
    </form>
  );
}
export default CreatePost;
