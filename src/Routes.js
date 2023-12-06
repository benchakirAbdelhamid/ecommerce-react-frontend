import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signin from "./user/Signin";
import Signup from "./user/Signup";
import Home from "./core/Home";
import { ToastContainer } from "react-toastify";

import NavbarMenu from "./core/Menu";
import Dashboard from "./user/Dashboard";
import { isAuthenticated } from "./auth/helpers";
import PrivateRoute from "./auth/PrivateRoute";

// component routes
import AuthLayout from "./components/AuthLayout";
import IndexLayout from "./components/IndexLayout";
// component routes

const AppRoutes = () => {
  return (
    <>
      {/* container Toastify */}
      <ToastContainer />
      <BrowserRouter>
        <NavbarMenu />
        {/* ============ my code ============ */}
        <Routes>
        {/* <Route path="/"  element={<Home />} /> */}
        <Route path="/" 
             element={
              isAuthenticated() ? <Home /> : <Navigate to="/signin" replace />
            }
          />
        <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
         <Route path="*" element=<Navigate to="/signin" replace /> /> 
        </Routes>
        {/* ============  code zakaria ============ */}

        {/* <Routes> */}
          {/* <Route path="/"  element={<Home />} /> */}
          {/* <Route
            path="/"
            element={
              isAuthenticated() ? <Home /> : <Navigate to="/signin" replace />
            }
          /> */}
          {/* <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element=<Navigate to="/signin" replace /> /> */}
        {/* </Routes> */}

        {/* <Routes>
          <Route
            path="/signin"
            element={!isAuthenticated() ? <AuthLayout /> : <Navigate to="/" />}
          >
            <Route index element={<Signin />} />
            <Route path="/Signup" element={<Signup />} />
          </Route>
          <Route
            path="/"
            element={
              isAuthenticated() ? <IndexLayout /> : <Navigate to="/signin" />
            }
          >
            <Route index element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
              
        </Routes> */}


{/* <Routes>
      
      <Route path="/Signin" element={!isAuthenticated() ? <Signin /> : <Navigate to="/" />} />
      <Route path="/Signup" element={!isAuthenticated() ? <Signup /> : <Navigate to="/" />} />

      <Route path="/" element={ isAuthenticated() ? <IndexLayout /> : <Navigate to="/Signin" />}>
        <Route index element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>

    </Routes> */}
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
