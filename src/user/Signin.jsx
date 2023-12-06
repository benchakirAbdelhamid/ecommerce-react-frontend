import React, { useState } from "react";
import Layout from "../core/Layout";
import { API_URL } from "../config";
import { useNavigate } from "react-router-dom";


// animation tostify
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Signin = ()=> {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const submitSignin = (e) => {
    // console.log('first')
    e.preventDefault();

    fetch(`${API_URL}/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.error) {
          toast.warning(`${res.error} , Please Check form !`, {
            position: toast.POSITION.BOTTOM_LEFT,
            className: "foo-bar",
          });
          return;
        }
        localStorage.setItem('jwt_info',JSON.stringify(res) )
        toast.info(`User is authenticated SuccessFully , Welcome`, {
          position: toast.POSITION.BOTTOM_LEFT,
          style: {
            backgroundColor: "#fff",
            color: "#000",
          },
        });
          navigate("/");
      })
      .catch((err) => 
      toast.error(`${err} , Server error !`, {
        position: toast.POSITION.BOTTOM_LEFT,
      })
      );
  };

  const form = () => {
    return (
      <form onSubmit={submitSignin} class="mx-auto mt-4 max-w-xl mb-14 px-3">
        <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                id="email"
                onChange={handleChange}
                className="inputes-form-signup block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              password
            </label>
            <div className="mt-2.5">
              <input
                type="password"
                id="password"
                onChange={handleChange}
                className="inputes-form-signup block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="mt-12">
          <button className="block w-full rounded-md bg-blue-900 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Sign In
          </button>
        </div>
        {/* {JSON.stringify(user)} */}
      </form>
    );
  };


  return (
    <div>
      {/* <ToastContainer /> */}
      <Layout
        title="Sign In"
        description="Sign In Node React Ecommerce App"
        className=""
      >
        <div class="mt-5 mx-auto max-w-2xl text-center">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Sign In
          </h2>
        </div>

        {form()}
      </Layout>
    </div>
  )
}

export default Signin