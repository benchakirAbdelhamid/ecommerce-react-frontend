import React, { useEffect } from "react";
import ShowImage from "./ShowImage";
import { HiCurrencyDollar } from "react-icons/hi";
import moment from "moment";

const DetailsProduct = (props) => {
  let { name, description, price, quantity, createdAt, category } =
    props.product;

  const showStock = (quantity) => {
    return quantity > 0 ? (
      <span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
        {" "}
        {quantity} In Stock
      </span>
    ) : (
      <span class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
        {" "}
        Out of Stock{" "}
      </span>
    );
  };

  return (
    <div>
      <div>
        {/* <!-- Product info --> */}
        <div class="mx-auto max-w-2xl px-4 pb-16  sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8"></div>

          {/* <!-- Options --> */}
          <div class="mt-10 lg:row-span-3 ">
            <form class="">
              <div class="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                <ShowImage
                  item={props.product}
                  url="product/photo"
                  className="img-card"
                ></ShowImage>
              </div>

              {/* <!-- Sizes --> */}
              <div class="mt-10">
                <div class="flex items-center justify-between">
                  <h3 style={{ fontSize: "21px" }} class=" text-gray-900">
                    Price
                  </h3>
                  <span
                    style={{ fontSize: "21px" }}
                    class="gap-2 flex items-center  text-gray-800 hover:text-gray-800"
                  >
                    <HiCurrencyDollar
                      style={{ color: "gray", fontSize: "25px" }}
                    />
                    {price}
                  </span>
                </div>
              </div>
              {parseInt(quantity) > 0 && (
                <button
                  type="submit"
                  class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-gray-800 px-8 py-3 text-base font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  Add to Cart
                </button>
              )}
            </form>
          </div>

          <div class="py-1 sm:mt-8 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            <div>
              <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {name}
              </h2>
              <p class="mt-4 text-gray-500">{description}</p>

              <dl class="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                <div class="border-t border-gray-200 pt-4">
                  <dt class="font-medium text-gray-900">Time</dt>
                  <dd class="mt-2 text-sm text-gray-500">
                    {moment(createdAt).fromNow()}
                  </dd>
                </div>
                <div class="border-t border-gray-200 pt-4">
                  <dt class="font-medium text-gray-900">Category</dt>
                  <dd class="mt-2 text-sm text-gray-500">{category.name}</dd>
                </div>
                <div class="border-t border-gray-200 pt-4">
                  <dt class="font-medium text-gray-900">Stock</dt>
                  <dd class="mt-2 text-sm text-gray-500">
                    {showStock(quantity)}
                  </dd>
                </div>
                <div class="border-t border-gray-200 pt-4">
                  <dt class="font-medium text-gray-900">Finish</dt>
                  <dd class="mt-2 text-sm text-gray-500">
                    Hand sanded and finished with natural oil
                  </dd>
                </div>
              </dl>
            </div>
            <div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsProduct;
