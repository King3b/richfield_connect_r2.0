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

    if (!state.currentUser) {
      setError("Please log in before creating a post.");
      return;
    }

    if (!topic.trim()) {
      setError("Please enter a post topic.");
      return;
    }

    if (!content.trim()) {
      setError("Please write something before posting.");
      return;
    }

    const createPost = (imageData = "") => {
      const currentUser = state.currentUser;

      const newPost = {
        id: Date.now(),

        userId: currentUser.studentID,

        userName: `${currentUser.name} ${currentUser.surName || ""}`.trim(),

        profileImage: currentUser.profileImage || "",

        content: content.trim(),

        postImg: imageData,

        time: new Date().toLocaleString(),

        likes: 0,

        liked: false,

        comments: [],

        topic: topic.trim(),
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

    if (!selectedImage) {
      return;
    }

    if (!selectedImage.type.startsWith("image/")) {
      setError("Please select a valid image.");
      return;
    }

    if (selectedImage.size > 2 * 1024 * 1024) {
      setError("Please choose an image smaller than 2MB.");
      return;
    }

    setImage(selectedImage);
    setError("");
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Post topic"
        value={topic}
        onChange={(e) => {
          setTopic(e.target.value);
          setError("");
        }}
      />

      <textarea
        name="post_content"
        id="post_content"
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
          setError("");
        }}
      />

      <label className="upload-button">
        <span className="material-symbols-rounded">image</span>

        <span>Add Photo</span>

        <input type="file" accept="image/*" onChange={handleImageChange} />
      </label>

      {image && <p>📷 {image.name}</p>}

      {error && <p className="post-error">{error}</p>}

      <button type="submit">Post</button>
    </form>
  );
}

export default CreatePost;
