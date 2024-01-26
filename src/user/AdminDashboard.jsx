import React from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth/helpers";
import { List, ListItem, Card } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const {
    user: { name, email, role },
  } = isAuthenticated();

  const adminInfo = () => {
    return (
      <div
        style={{ border: "1px solid gray" }}
        class="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border  w-full "
      >
        <div class="p-6">
          <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            User INFORMATION
          </h5>
          <List>
            <ListItem>{name}</ListItem>
            <ListItem>{email}</ListItem>
            <ListItem>{role ? "Admin" : "User"}</ListItem>
          </List>
        </div>
      </div>
    );
  };

  const adminLinks = () => {
    return (
      <div
        style={{ border: "1px solid gray" }}
        class="relative flex flex-col  text-gray-700 bg-white shadow-md bg-clip-border  w-full"
      >
        <div class="p-6">
          <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            User Links
          </h5>
          <List>
            <ListItem>
              <Link to="/create/category">Create Category</Link>
            </ListItem>
            <ListItem>
              <Link to="/create/product">Create Product</Link>
            </ListItem>
            <ListItem>
              <Link to="/admin/order">View Orders</Link>
            </ListItem>
          </List>
        </div>
      </div>
    );
  };

  return (
    <>
      <Layout title="Dashboard" description="Dashboard use">
        <div
         
          class=" mt-8 max-w-lg mx-auto bg-white rounded-xl overflow-hidden md:max-w-4xl"
        >
          {adminLinks()}
          <div class="lg:flex">
            {adminInfo()}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default AdminDashboard;
