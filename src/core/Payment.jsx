import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { useSelector } from "react-redux";
import { isAuthenticated, emptyCart, Current_Date } from "../auth/helpers";

// animation tostify
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createOrder } from "./ApiCore";
import { API_URL } from "../config";

const Payment = () => {
  const products = useSelector((state) => state.cart);

  const [infoPayment, setInfoPayment] = useState({
    full_name: "",
    address: "",
    phone_number: "",
    city: "",
  });

  const handleChange = (e) => {
    setInfoPayment({ ...infoPayment, [e.target.id]: e.target.value });
  };

  const totalToCheckout = () => {
    return products.cartItems.reduce(
      (total, product) => total + product.quantity * product.price,
      0
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = 0;
    const { user, token } = isAuthenticated();
    const date = Current_Date()
    
    // console.log(date)

    amount = products.cartItems.reduce(
      (total, product) => total + product.quantity * product.price,
      0
    );

    let orderData = {
      products: products.cartItems,
      total_quatity: products.totalQuantity,
      amount,
      infoPayment,
      date
    };

    // console.log(orderData)
    createOrder(user._id, token, orderData)
      .then((res) => {
        emptyCart() // empty localstorage cart
        toast.success(`Valid , Thanks , Payment Was Successfuly`, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
        console.log(res);
      })
      .catch((err) => console.log(err));

  };

  return (
    <>
      <Layout title="Checkout page" description="Payment Form" className="">
        <div class="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div
            class="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
            aria-hidden="true"
          >
            <div class="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"></div>
          </div>
          <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Shipping Address
            </h2>
            <p className="mt-4">
              {" "}
              Total Price :
              <span class="ml-2 inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">
                {totalToCheckout()} DH
              </span>
            </p>
          </div>
          <form onSubmit={handleSubmit} class="mx-auto mt-10 max-w-xl">
            <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div class="sm:col-span-2">
                <label
                  for="full_name"
                  class="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Full Name
                </label>
                <div class="mt-2.5">
                  <input
                    type="text"
                    id="full_name"
                    onChange={handleChange}
                    class=" inputes-form-signup block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label
                  for="address"
                  class="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Address
                </label>
                <div class="mt-2.5">
                  <input
                    type="text"
                    id="address"
                    onChange={handleChange}
                    class="inputes-form-signup block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label
                  for="phone_number"
                  class="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Phone number
                </label>
                <div class="relative mt-2.5">
                  <input
                    type="number"
                    id="phone_number"
                    onChange={handleChange}
                    class="inputes-form-signup block w-full rounded-md border-0 px-3.5 py-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label
                  for="city"
                  class="block text-sm font-semibold leading-6 text-gray-900"
                >
                  City
                </label>
                <div class="relative mt-2.5">
                  <input
                    type="text"
                    id="city"
                    onChange={handleChange}
                    class="inputes-form-signup block w-full rounded-md border-0 px-3.5 py-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div class="mt-10">
              <button
                type="submit"
                class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Payment
              </button>
            </div>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Payment;
