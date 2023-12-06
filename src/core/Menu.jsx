import React from "react";
import {
  Navbar,
  Collapse,
  Button,
  IconButton,
} from "@material-tailwind/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import { Link, NavLink, Outlet } from "react-router-dom";
import { API_URL } from "../config";
import { useNavigate } from "react-router-dom";

// animation tostify
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {isAuthenticated} from "../auth/helpers"

export default function NavbarMenu() {
  const [openNav, setOpenNav] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const signout = () => {
    fetch(`${API_URL}/signout`)
      .then(() => {
        localStorage.removeItem("jwt_info");
        toast.warning(`User SignOut`, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
        navigate("/signin");
      })
      .catch();
  };

  return (
    <>
      {/* <ToastContainer/> */}
      <Navbar className="mx-auto max-w-screen-xl px-4 py-2">
        <div className="flex items-center justify-between text-blue-gray-900">
          
            <NavLink to="/ecommerce">
              <span
                style={{ fontWeight: "bold" }}
                className="links mr-4 cursor-pointer py-1.5 lg:ml-2"
              >
                Ecommerce
              </span>
            </NavLink>
          

          <div className="hidden lg:block">
            {isAuthenticated() && (
              <>
                <NavLink to="/">
                  <span className="links font-medium cursor-pointer py-1.5 lg:ml-2 blue-gray">
                    Home
                  </span>
                </NavLink>
                <NavLink to="/dashboard">
                  <span className="links font-medium cursor-pointer py-1.5 lg:ml-2 blue-gray">
                  dashboard
                  </span>
                </NavLink>
              </>
            )}
          </div>
          <div className="hidden gap-2 lg:flex">
            {!isAuthenticated() && (
              <>
                <NavLink to="/signup">
                  <span className="links cursor-pointer py-1.5 lg:ml-2">
                    <Button variant="text" size="sm">
                      Sign Up
                    </Button>
                  </span>
                </NavLink>
                <NavLink to="/signin">
                  <span className="links  cursor-pointer py-1.5 lg:ml-2">
                    <Button size="sm"> Sign In</Button>
                  </span>
                </NavLink>
              </>
            )}

            {isAuthenticated() && (
              <NavLink onClick={signout}>
                <span className="links  cursor-pointer py-1.5 lg:ml-2">
                  <Button size="sm" variant="outlined">
                    Sign Out
                  </Button>
                </span>
              </NavLink>
            )}
          </div>
          <IconButton
            variant="text"
            color="blue-gray"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>


        {isAuthenticated() && (
              <>
                <NavLink to="/">
                  <span className="links font-medium cursor-pointer py-1.5 lg:ml-2 blue-gray">
                    Home
                  </span>
                </NavLink>
                <br />
                <NavLink to="/store">
                  <span className="links font-medium cursor-pointer py-1.5 lg:ml-2 blue-gray">
                    Store
                  </span>
                </NavLink>
              </>
            )}


          <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden ">
            
          {!isAuthenticated() && (
              <>
                <NavLink className="w-full mt-4" to="/signup">
                  <span className="links cursor-pointer py-1.5 lg:ml-2">
                    <Button className="w-full" variant="outlined" size="sm">
                      Sign Up
                    </Button>
                  </span>
                </NavLink>
                <NavLink className="w-full mt-4" to="/signin">
                  <span className="links  cursor-pointer py-1.5 lg:ml-2">
                    <Button className="w-full" size="sm"> Sign In</Button>
                  </span>
                </NavLink>
              </>
            )}

            {isAuthenticated() && (
              <NavLink   onClick={signout} className='mt-4 w-full'>
                <span  className="links  cursor-pointer py-1.5 lg:ml-2">
                  <Button className="w-full"  size="sm" variant="outlined">
                    Sign Out
                  </Button>
                </span>
              </NavLink>
            )}
          </div>
        </Collapse>
      </Navbar>
    </>
  );
}
