import React, { useContext } from "react";
import AuthContext from "../contexts/authContext";
import { Navigate, useLocation } from "react-router-dom";

const AlreadyLoggedIn = ({ children }) => {
  const currentUser = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  if (currentUser) {
    return <Navigate to={location.state.from.pathname} state={{ from: location }} replace />;
  } else {
    return children;
  }
};

export default AlreadyLoggedIn;
