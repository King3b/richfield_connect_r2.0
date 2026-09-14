import { createContext, useReducer } from "react";
import "../styles/Post.css";
export const AppContext = createContext();

const initialState = {
  currentUser: null,
  users: [],
  posts: [],
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
        posts: state.posts.filter((post) => post.id !== action.payload),
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

    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
