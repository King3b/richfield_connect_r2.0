import { createContext, useReducer, useEffect } from "react";

export const AppContext = createContext();

const initialState = {
  currentUser: null,
  users: [],
  posts: [],
  darkMode: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "LOAD_USERS":
      return {
        ...state,
        users: action.payload,
      };

    case "REGISTER_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
        currentUser: action.payload,
      };

    case "UPDATE_USER":
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          ...action.payload,
        },
        users: state.users.map((user) =>
          user.studentID === state.currentUser?.studentID
            ? {
                ...user,
                ...action.payload,
              }
            : user,
        ),
      };

    case "LOGIN_USER":
      return {
        ...state,
        currentUser: action.payload,
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
    const savedUsers = localStorage.getItem("richfieldUsers");
    const savedUser = localStorage.getItem("richfieldCurrentUser");
    const savedPosts = localStorage.getItem("richfieldPosts");

    if (savedUsers) {
      try {
        dispatch({
          type: "LOAD_USERS",
          payload: JSON.parse(savedUsers),
        });
      } catch (error) {
        console.error("Could not load users:", error);
      }
    }

    if (savedUser) {
      try {
        dispatch({
          type: "LOGIN_USER",
          payload: JSON.parse(savedUser),
        });
      } catch (error) {
        console.error("Could not load current user:", error);
      }
    }

    if (savedPosts) {
      try {
        dispatch({
          type: "LOAD_POSTS",
          payload: JSON.parse(savedPosts),
        });
      } catch (error) {
        console.error("Could not load posts:", error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("richfieldUsers", JSON.stringify(state.users));
  }, [state.users]);

  useEffect(() => {
    if (state.currentUser) {
      localStorage.setItem(
        "richfieldCurrentUser",
        JSON.stringify(state.currentUser),
      );
    } else {
      localStorage.removeItem("richfieldCurrentUser");
    }
  }, [state.currentUser]);

  useEffect(() => {
    localStorage.setItem("richfieldPosts", JSON.stringify(state.posts));
  }, [state.posts]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
