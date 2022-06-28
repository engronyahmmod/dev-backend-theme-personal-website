import React, { useContext } from "react";
import AuthContext from "../contexts/authContext";
import { Navigate, useLocation } from "react-router-dom";

const AlreadyLoggedIn = ({ children }) => {
  const currentUser = useContext(AuthContext);
  const location = useLocation();
  if (currentUser) {
    return <Navigate to="/me" state={{ from: location }} replace />;
  } else {
    return children;
  }
};

export default AlreadyLoggedIn;
