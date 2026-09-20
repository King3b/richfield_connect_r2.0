import { createContext, useEffect, useReducer } from "react";

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

    case "LOAD_POSTS":
      return {
        ...state,
        posts: action.payload,
      };

    case "REGISTER_USER": {
      const updatedUsers = [...state.users, action.payload];

      localStorage.setItem("richfieldUsers", JSON.stringify(updatedUsers));

      localStorage.setItem(
        "richfieldCurrentUser",
        JSON.stringify(action.payload),
      );

      return {
        ...state,
        users: updatedUsers,
        currentUser: action.payload,
      };
    }

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

    case "ADD_POST":
      return {
        ...state,
        posts: [action.payload, ...state.posts],
      };

    case "TOGGLE_LIKE": {
      const { postId, studentID } = action.payload;

      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.id !== postId) return post;

          const likedBy = post.likedBy || [];

          const alreadyLiked = likedBy.includes(studentID);

          return {
            ...post,
            likedBy: alreadyLiked
              ? likedBy.filter((id) => id !== studentID)
              : [...likedBy, studentID],
          };
        }),
      };
    }

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

    case "TOGGLE_DARK_MODE":
      return {
        ...state,
        darkMode: !state.darkMode,
      };

    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const savedUsers = localStorage.getItem("richfieldUsers");

    const savedCurrentUser = localStorage.getItem("richfieldCurrentUser");

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

    if (savedCurrentUser) {
      try {
        dispatch({
          type: "LOGIN_USER",
          payload: JSON.parse(savedCurrentUser),
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
    <AppContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
