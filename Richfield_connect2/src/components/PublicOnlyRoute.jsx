import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function PublicOnlyRoute({ children }) {
  const { state } = useContext(AppContext);

  if (state.currentUser) {
    return <Navigate to="/profile" replace />;
  }

  return children;
}

export default PublicOnlyRoute;
