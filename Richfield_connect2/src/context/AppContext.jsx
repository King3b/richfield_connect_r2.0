import { createContext, useReducer, useEffect } from "react";
import "../styles/Post.css";
export const AppContext = createContext();

const initialState = {
  currentUser: null,
  users: [],
  posts: [],
  darkMode: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "REGISTER_USER":
      return {
        ...state,
        currentUser: action.payload,
        users: [...state.users, action.payload],
      };

    case "UPDATE_USER":
      return {
        ...state,
        currentUser: { ...state.currentUser, ...action.payload },
      };

    case "LOGOUT_USER":
      return {
        ...state,
        currentUser: null,
      };

    case "TOGGLE_DARK_MODE":
      return {
        ...state,
        darkMode: !state.darkMode,
      };

    case "ADD_POST":
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };

    case "TOGGLE_LIKE":
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.id === action.payload) {
            return {
              ...post,
              liked: !post.liked,
              likes: post.liked ? post.likes - 1 : post.likes + 1,
            };
          }

          return post;
        }),
      };

    case "DELETE_POST":
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload.postId),
      };

    case "ADD_COMMENT":
      return {
        ...state,

        posts: state.posts.map((post) => {
          if (post.id === action.payload.postId) {
            return {
              ...post,

              comments: [...(post.comments || []), action.payload.comment],
            };
          }

          return post;
        }),
      };

    case "LOAD_POSTS":
      return {
        ...state,
        posts: action.payload,
      };

    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("richfieldPosts", JSON.stringify(state.posts));
  }, [state.posts]);

  useEffect(() => {
    if (state.currentUser) {
      localStorage.setItem("richfieldUser", JSON.stringify(state.currentUser));
    }
  }, [state.currentUser]);

  useEffect(() => {
    const savedUser = localStorage.getItem("richfieldUser");
    const savedPost = localStorage.getItem("richfieldPosts");

    if (savedUser) {
      dispatch({
        type: "REGISTER_USER",
        payload: JSON.parse(savedUser),
      });
    }
    if (savedPost) {
      dispatch({
        type: "LOAD_POST",
        payload: JSON.parse(savedPost),
      });
    }
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
