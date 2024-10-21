import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRouter({ children }) {
  const isAuthenticated = localStorage.getItem("user");

  return isAuthenticated ? children : <Navigate to="/orchid" />;
}
