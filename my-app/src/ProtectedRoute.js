import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// Function to check if the user is authenticated
const isAuthenticated = () => {
  const token = localStorage.getItem("token"); // Token stored in localStorage

  return !!token; // Returns true if token exists, false otherwise
};

// Protected Route Component
const ProtectedRoute = ({ setIsLoggedIn }) => {
  const isAuth = isAuthenticated();
  setIsLoggedIn(isAuth);
  return isAuth ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
