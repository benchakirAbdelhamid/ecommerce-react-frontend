import React, { useEffect } from "react";
import {
  Badge,
  IconButton,
  Drawer,
  Button,
  Typography,
} from "@material-tailwind/react";
import { RiDeleteBin2Line } from "react-icons/ri";

import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { useSelector } from "react-redux";
import ShowImage from "./ShowImage";
import { API_URL } from "../config";

import { increment, decrement, removeItem } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import Checkout from "./Checkout";

const Cart = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const productsInCart = useSelector((state) => state.cart.cartItems);

  const dispatch = useDispatch()

  // useEffect(() => {
  //   console.log("product===>", product);
  // }, []);

  const [openRight, setOpenRight] = React.useState(false);
  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);

  return (
    <div className="cart">
      <Badge content={totalQuantity}>
        {/* <Button onClick={openDrawerRight}> */}
        <IconButton onClick={openDrawerRight}>
          <MdOutlineLocalGroceryStore className="h-6 w-6" />
        </IconButton>
        {/* </Button> */}
      </Badge>
      {/* =========== */}

      <Drawer
        placement="right"
        open={openRight}
        onClose={closeDrawerRight}
        className="p-4"
        size={380}
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            CART
            <span class="ml-3 relative select-none items-center  rounded-lg bg-gray-900 py-1.5 px-3 font-sans text-xs font-bold  text-white">
              {totalQuantity}
            </span>
          </Typography>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={closeDrawerRight}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>

        <div className=" ">
          {/* <Button size="sm" variant="outlined">
            Documentation
          </Button>
          <Button size="sm">Get Started</Button> */}
          <div class="parent-cart relative flex flex-col text-gray-700  ">
            <nav class="flex w-full flex-col gap-1  font-sans text-base font-normal text-blue-gray-700">
              {productsInCart?.map((item, i) => (
                <div
                  key={i}
                  role="button"
                  class="flex py-2 items-center w-full px-1 leading-tight transition-all rounded-lg outline-none text-start bg-blue-gray-50 bg-opacity-80 text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                >
                  <div class="grid mr-4 place-items-center">
                    <img
                      loading="lazy"
                      className="w-[100px] h-[100px] rounded-lg object-cover "
                      src={`${API_URL}/product/photo/${item.id}`}
                      alt={`${item.name}`}
                    />
                  </div>
                  <div>
                    <h6 class=" uppercase block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-800">
                      {item.name}
                    </h6>

                    <p class=" block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
                      Quantity :
                      <span onClick={() => dispatch(decrement(item))}
                        className={`ml-3 relative select-none items-center  rounded-lg ${item.quantity > 1 ? 'bg-gray-900' : 'bg-gray-600'}  py-0.5 px-3 font-sans text-xs font-bold  text-white`}
                      >
                        -
                      </span>
                      <span className="mx-2">
                        {item.quantity}
                      </span>
                      <span onClick={() => dispatch(increment(item))} class=" relative select-none items-center  rounded-lg bg-gray-900 py-0.5 px-3 font-sans text-xs font-bold  text-white">
                        +
                      </span>
                    </p>

                    <p class="mt-1 block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
                      Total : {item.quantity} * {item.price} DH =
                      <span class=" ml-3 relative select-none items-center  rounded-lg bg-gray-900 py-1.5 px-3 font-sans text-xs font-bold  text-white">
                        {item.quantity * item.price} DH
                      </span>
                    </p>
                    <span class="mt-3 block">
                      <div onClick={() => dispatch(removeItem(item.id))} class=" w-full flex justify-center text-center  select-none items-center  rounded-lg bg-red-800 py-1.5 font-sans text-xs font-bold  text-white">
                        <RiDeleteBin2Line style={{ fontSize: '15px' }} />
                      </div>
                    </span>

                  </div>
                </div>
              ))}
            </nav>
          </div>
          <Checkout products={productsInCart} />
        </div>
      </Drawer>
    </div>
  );
};

export default Cart;
