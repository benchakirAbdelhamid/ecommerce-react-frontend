import React, { useEffect } from "react";
import { isAuthenticated } from "../auth/helpers";
import { Link } from "react-router-dom";

const Checkout = ({ products }) => {
  const totalToCheckout = () => {
    // console.log(products.reduce((total , product)=> total + (product.quantity * product.price),0 ))
    return products.reduce(
      (total, product) => total + product.quantity * product.price,
      0
    );
  };
  const showBtnToCheckout = () => {
    if (isAuthenticated()) {
      return (
        <Link to="/Payment">
          <button
            href="#"
            class="flex items-center justify-center rounded-md border border-transparent bg-gray-900  py-1 text-base font-medium text-white shadow-sm hover:bg-gray-800 w-full "
          >
            Checkout
          </button>
        </Link>
      );
    }
    return (
      <Link to="/Signin">
        <button
          href="#"
          class="flex items-center justify-center rounded-md border border-transparent bg-gray-900 px-6 py-1 text-base font-medium text-white shadow-sm hover:bg-gray-800 w-full "
        >
          Sign in to Checkout
        </button>
      </Link>
    );
  };

  return (
    <div>
      {/* <h2>Total : {totalToCheckout()} DH </h2>
        {showBtnToCheckout()} */}
      <div class=" mt-4">
        <div class="flex justify-between text-base font-medium text-gray-900">
          <p className=" font-semibold ">Total</p>
          <p className="font-semibold">{totalToCheckout()} DH</p>
        </div>
        <div class="mt-4">{showBtnToCheckout()}</div>
      </div>
    </div>
  );
};

export default Checkout;
