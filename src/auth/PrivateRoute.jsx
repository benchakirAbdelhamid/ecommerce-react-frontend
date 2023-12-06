import React, { Component } from "react";
import { isAuthenticated } from "./helpers";
import { Navigate ,Route} from 'react-router-dom';

const PrivateRoute = ({ component, ...rest }) => {
  return (
    <Route
      {...rest}
      element={
        isAuthenticated() ? <Component {...rest} /> : <Navigate to="/signin" replace />
      }
    />
  )
};

export default PrivateRoute;
