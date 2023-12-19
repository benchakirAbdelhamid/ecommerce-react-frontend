import React from "react";
import Img from '../assest/img/home.jpg'
import Img1 from '../assest/img/img.png'
import Img2 from '../assest/img/img1.png'
import gamerImg from '../assest/img/gamer.jpg'



const Layout = ({ title, description, className, children }) => {
  return (
    <div>
      <div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
        src={gamerImg}
          alt=""
          class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />
        <div
          class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"></div>
        </div>
        <div
          class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div class="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"></div>
        </div>
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl lg:mx-0">
            <h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              {title}
            </h2>
            <p class="mt-6 text-lg leading-8 text-gray-300">{description}</p>
          </div>
        </div>
      </div>

      <div className={className}>{children}</div>
    </div>
  );
};

export default Layout;
