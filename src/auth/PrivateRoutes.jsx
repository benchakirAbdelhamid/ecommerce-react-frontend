import React, { Component } from "react";
import { isAuthenticated } from "./helpers";
import { Navigate ,Outlet,Route} from 'react-router-dom';

const PrivateRoutes = () => {
  return (
    isAuthenticated() ? <Outlet/> :   <Navigate to='/Signin'/> 
  )
};

export default PrivateRoutes;



// medium.com/p/2c4bbaf7bc1c/edit