import React, { useEffect, useState } from "react";
import { 
  getStatus,
   listOfOrders,
   updateOrderStatus
   } from "../ApiAdmin";
import { isAuthenticated } from "../../auth/helpers";
import Layout from "../../core/Layout";
import moment from "moment";

// animation tostify
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,
  GlobeAmericasIcon,
  NewspaperIcon,
  PhoneIcon,
  RectangleGroupIcon,
  SquaresPlusIcon,
  SunIcon,
  TagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";


const ListOrders = () => {
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState([]);

  const { user, token } = isAuthenticated();


  const loadStatus = (user, token) => {
    getStatus(user._id, token)
      .then((res) => {
        setStatus(res);
        // console.log(res.status)
      })
      .catch((err) => console.log(err));
  };

  const loadOrders = (user, token) => {
    listOfOrders(user._id, token)
      .then((res) => {
        setOrders(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadOrders(user, token);
    loadStatus(user, token);
  }, []);

  const notOrders = () => {
    if (orders.length === 0) {
      return (
        <div
          role="alert"
          class="relative mt-2 flex w-[50%] mx-auto px-4 py-4 text-base  border border-gray-500 rounded-lg font-regular bg-gradient-to-tr from-gray-500 to-gray-300"
        >
          <div class="shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              ></path>
            </svg>
          </div>
          <div class="ml-3 mr-12">Not Orders Yey !</div>
        </div>
      );
    } else {
      return (
        <div
          role="alert"
          class="relative mt-2 flex w-[50%] mx-auto px-4 py-4 text-base  border border-gray-500 rounded-lg font-regular bg-gradient-to-tr from-gray-500 to-gray-300"
        >
          <div class="shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              ></path>
            </svg>
          </div>
          <div class="ml-3 mr-12">Total Orders {orders.length}</div>
        </div>
      );
    }
  };

  const showOrders = () => {
    return (
      orders.length && (
        <div class="mt-4 relative flex flex-col w-[95%] mx-auto h-full text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
          <div class="">
            <table class="w-full text-left table-auto min-w-max">
              <thead>
                <tr>
                  <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                    <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                      Name Client
                    </p>
                  </th>
                  <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                    <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                      Time
                    </p>
                  </th>
                  <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                    <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                      Status
                    </p>
                  </th>
                  <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                    <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                      Adresse
                    </p>
                  </th>
                  <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                    <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                      City
                    </p>
                  </th>
                  <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                    <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                      Number
                    </p>
                  </th>
                  <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                    <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                      Amount
                    </p>
                  </th>
                 
                  <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                    <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                      Count Product
                    </p>
                  </th>
                  <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                    <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                      Product
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {orders.length &&
                  orders.map((order, index) => (
                    <tr key={index}>
                      <td class="p-4 border-b border-blue-gray-50">
                        <div class="flex items-center gap-3">
                          <div class="flex flex-col">
                            <p class="block text-center font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                              {order.infoPayment_full_name}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="p-4 border-b border-blue-gray-50">
                        <div class="flex flex-col">
                          <p class="block  font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                            {moment(order.createdAt).format(
                              "MMMM Do YYYY, h:mm:ss a"
                            )}
                          </p>
                          <p class="block  font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">
                            {moment(order.createdAt).fromNow()}
                          </p>
                        </div>
                      </td>
                      <td class="p-4 border-b border-blue-gray-50">
                        <div class="w-max">
                        
                            {showStatus(order)}
                        </div>
                      </td>
                      <td class="p-4 border-b border-blue-gray-50">
                        <p class="block  font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                          {order.infoPayment_address}
                        </p>
                      </td>
                      <td class="p-4 border-b border-blue-gray-50">
                        <p class="block  font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                          {order.infoPayment_city}
                        </p>
                      </td>
                      <td class="p-4 border-b border-blue-gray-50">
                        <p class="block  font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                          {order.infoPayment_phone_number}
                        </p>
                      </td>
                      <td class="p-4 border-b border-blue-gray-50">
                        <div class="w-max">
                          <div class="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-pink-900 uppercase rounded-md select-none whitespace-nowrap bg-pink-500/20">
                            {order.amount} DH
                          </div>
                        </div>
                      </td>
                    
                      <td class="p-4 border-b border-blue-gray-50">
                        <p class="block text-center font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                         {order.products.length}
                        </p>
                      </td>
                      <td class="p-4 border-b border-blue-gray-50">
                        <Menu>
                          <MenuHandler>
                            <ListItem className="flex items-center gap-2">
                              Details
                              <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`hidden h-3 w-3 transition-transform lg:block "rotate-180"
                }`}
                              />
                            </ListItem>
                          </MenuHandler>
                          <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
                            <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
                              {order.products.map((product, key) => (
                                <a href="#" key={key}>
                                  <MenuItem className="flex items-center gap-3 rounded-lg">
                                    <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-1 ">
                                      {/* {product._id} */}
                                      <img
                                        style={{ width: "80px" }}
                                        src={`http://localhost:8004/api/product/photo/657c853cf27d1056302a60e7`}
                                        // src={`${API_URL}/product/photo/${product._id}`}
                                        alt="wdw"
                                      />
                                    </div>
                                    <div>
                                      <Typography
                                        variant="h6"
                                        color="blue-gray"
                                        className="flex items-center text-sm font-bold"
                                      >
                                        {product.name}
                                      </Typography>
                                      <Typography
                                        variant="paragraph"
                                        className="text-xs !font-medium text-blue-gray-500"
                                      >
                                        {product.quantity} * {product.price} ={" "}
                                        {product.quantity * product.price}
                                      </Typography>
                                      <Typography
                                        variant="paragraph"
                                        className="text-xs !font-medium text-blue-gray-500"
                                      >
                                        {product._id}
                                      </Typography>
                                    </div>
                                  </MenuItem>
                                </a>
                              ))}
                            </ul>
                          </MenuList>
                        </Menu>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          {/* <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
            <Menu
              open={isMenuOpen}
              handler={setIsMenuOpen}
              offset={{ mainAxis: 20 }}
              placement="bottom"
              allowHover={true}
            >
              <MenuHandler>
                <Typography as="div" variant="small" className="font-medium">
                  <ListItem
                    className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
                    selected={isMenuOpen || isMobileMenuOpen}
                    onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                  >
                    Resources
                    <ChevronDownIcon
                      strokeWidth={2.5}
                      className={`hidden h-3 w-3 transition-transform lg:block ${
                        isMenuOpen ? "rotate-180" : ""
                      }`}
                    />
                    <ChevronDownIcon
                      strokeWidth={2.5}
                      className={`block h-3 w-3 transition-transform lg:hidden ${
                        isMobileMenuOpen ? "rotate-180" : ""
                      }`}
                    />
                  </ListItem>
                </Typography>
              </MenuHandler>
              <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
                <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
                  {navListMenuItems.map(({ icon, title, description }, key) => (
                    <a href="#" key={key}>
                      <MenuItem className="flex items-center gap-3 rounded-lg">
                        <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                          img
                        </div>
                        <div>
                          <Typography
                            variant="h6"
                            color="blue-gray"
                            className="flex items-center text-sm font-bold"
                          >
                            {title}
                          </Typography>
                          <Typography
                            variant="paragraph"
                            className="text-xs !font-medium text-blue-gray-500"
                          >
                            {description}
                          </Typography>
                        </div>
                      </MenuItem>
                    </a>
                  ))}
                </ul>
              </MenuList>
            </Menu>
            <div className="block lg:hidden">
              <Collapse open={isMobileMenuOpen}>
                {navListMenuItems.map(({ icon, title, description }, key) => (
                  <a href="#" key={key}>
                    <MenuItem className="flex items-center gap-3 rounded-lg">
                      <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                        {" "}
                        {React.createElement(icon, {
                          strokeWidth: 2,
                          className: "h-6 text-gray-900 w-6",
                        })}
                      </div>
                      <div>
                        <Typography
                          variant="h6"
                          color="blue-gray"
                          className="flex items-center text-sm font-bold"
                        >
                          {title}
                        </Typography>
                        <Typography
                          variant="paragraph"
                          className="text-xs !font-medium text-blue-gray-500"
                        >
                          {description}
                        </Typography>
                      </div>
                    </MenuItem>
                  </a>
                ))}
              </Collapse>
            </div>
          </List> */}
        </div>
      )
    );
  };

  
  const handleStatus = (e,order)=>{
    updateOrderStatus(user._id , token ,  order._id , e.target.value)
    .then(res => {
      if(res.error){
        console.log(res.error)
      }
      toast.success(`order status is Updating SuccessFully`, {
        position: toast.POSITION.BOTTOM_LEFT,
      });
      // console.log(res)
      loadOrders(user, token);
    } )

    console.log('status ===> ',e.target.value,order._id)
  }

  const showStatus = (order)=>{
    return status.status.length && (
      <>
      <div class="relative grid items-center px-2 py-1 font-sans text-xs font-bold text-green-900 uppercase rounded-md select-none whitespace-nowrap bg-green-500/20">
      <h4> {order.status} </h4>
      </div>
      <select className="mt-2" onChange={ e => handleStatus(e , order)} >
        <option value="" disabled selected >select status</option>
        {status.status.map(statu =>(
            <option key={statu} value={statu}>{statu}</option>
        ))}
      </select>
      </>
    )
  }


  return (
    <div>
      <Layout title="Orders" description="Orders Management">
        {/* {JSON.stringify(orders)} */}
        {JSON.stringify(status.status)}
        {notOrders()}
        {showOrders()}
        {/* <img
          src={`http://localhost:8004/api/product/photo/657c853cf27d1056302a60e7`}
          alt="wdw"
        /> */}
        {/* <img src="http://localhost:8004/api/product/photo/657c816bf27d1056302a608d" alt="img" /> */}
      </Layout>
    </div>
  );
};

export default ListOrders;
