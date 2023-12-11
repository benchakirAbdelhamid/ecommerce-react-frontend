import React, { Component } from "react";
import { isAuthenticated } from "./helpers";
import { Navigate, Outlet, Route } from "react-router-dom";

const AdminRoute = () => {
  return isAuthenticated() && isAuthenticated().user.role === 1 ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
  );
};

export default AdminRoute;

// medium.com/p/2c4bbaf7bc1c/edit
