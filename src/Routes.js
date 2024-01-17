import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signin from "./user/Signin";
import Signup from "./user/Signup";
import Home from "./core/Home";
import { ToastContainer } from "react-toastify";

import NavbarMenu from "./core/Menu";
import Dashboard from "./user/Dashboard";
import { isAuthenticated } from "./auth/helpers";
import PrivateRoutes from "./auth/PrivateRoutes";
import AdminDashboard from "./user/AdminDashboard";
import AdminRoute from "./auth/AdminRoute";
import AddCategory from "./admin/category/AddCategory";
import AddProduct from "./admin/product/AddProduct";
import Shop from "./core/Shop";
import Swiper from "./Swiper";
import Product from "./core/Product";
import Payment from "./core/Payment";

const AppRoutes = () => {
  const isAuthenticateed = () => {
    return true;
  };

  return (
    <>
      {/* container Toastify */}
      <ToastContainer />
      <BrowserRouter>
        <NavbarMenu />
        {/* ============  problem return value token============ */}

        {/* <Routes>
          <Route
            path="/Signin"
            element={!isAuthenticateed() ? <Signin /> : <Navigate to="/" />}
          />
          <Route
            path="/Signup"
            element={!isAuthenticateed() ? <Signup /> : <Navigate to="/" />}
          />

          <Route
            path="/"
            element={
              isAuthenticateed() ? <IndexLayout /> : <Navigate to="/Signin" />
            }
          >
            <Route index element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/*" element={"not found"} />
          </Route>
        
        </Routes> */}

        {/* =========code provate routes=========== */}

        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<Home />} path="/" exact />
            <Route element={<Shop />} path="/shop" />
            <Route element={<Dashboard />} path="/dashboard" />
            <Route element={<Navigate to="/" />} path="*" />
            <Route  element={<Payment />} path="/Payment" />
          </Route>
          <Route element={<AdminRoute />}>
            <Route element={<AdminDashboard />} path="/admin/dashboard" />
            <Route element={<AddCategory />} path="/create/category" />
            <Route element={<AddProduct />} path="/create/product" />
          </Route>
          <Route path="/swiper" element={<Swiper />} />
          {/* <Route element={<Home />} path="/"  /> */}
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
