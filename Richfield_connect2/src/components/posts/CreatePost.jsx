import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import "../posts/CreatePost.css";

function CreatePost() {
  const { state, dispatch } = useContext(AppContext);

  const [topic, setTopic] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!topic.trim()) {
      setError("Please enter a post topic.");
      return;
    }

    if (!content.trim()) {
      setError("Please write something before posting.");
      return;
    }

    const createPost = (imageData = "") => {
      const newPost = {
        id: Date.now(),
        userId: state.currentUser?.studentID,
        userName: state.currentUser?.name || "Student",
        profilepic: "",
        content: content,
        postImg: imageData,
        time: new Date().toLocaleString(),
        likes: 0,
        liked: false,
        comments: [],
        topic: topic,
      };

      dispatch({
        type: "ADD_POST",
        payload: newPost,
      });

      setTopic("");
      setContent("");
      setImage(null);
      setError("");
    };

    // If there is an image, convert it to a data URL
    if (image) {
      const reader = new FileReader();

      reader.onload = () => {
        createPost(reader.result);
      };

      reader.readAsDataURL(image);
    } else {
      createPost();
    }
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];

    if (selectedImage) {
      setImage(selectedImage);
    }
  };

  return (
    <form id="post-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Post topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />

      <textarea
        name="post_content"
        id="post_content"
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <input
        className="uplaod_image"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />

      {image && <p>📷 {image.name}</p>}

      {error && <p className="post-error">{error}</p>}

      <button type="submit">Post</button>
    </form>
  );
}

export default CreatePost;
