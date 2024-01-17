import React from "react";
import gamerImg from "../assest/img/gamer.jpg";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const images = [
  {id : 1 , src : 'https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
  {id : 2 , src : 'https://images.pexels.com/photos/1346154/pexels-photo-1346154.jpeg?auto=compress&cs=tinysrgb&w=600'},
  {id : 3 , src : 'https://images.pexels.com/photos/7915282/pexels-photo-7915282.jpeg'},
  {id : 4 , src : 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
  {id : 5 , src : 'https://images.pexels.com/photos/2148220/pexels-photo-2148220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
  {id : 6 , src : 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
]

const Layout = ({ title, description, className, children }) => {
  return (
    <div>
      {/* <div class="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
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
      </div> */}

      <div className="parent-swiper">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            nextEl: ".button-next-slide",
            prevEl: ".button-prev-slide",
          }}
          modules={[Autoplay, Pagination, Navigation]}
          // pagination={{ clickable: true }}
          className="relative "
        >
          {images?.map((img , index)=>(
             <SwiperSlide key={index} >
             <div className="image img-swiper relative">
               <img
                 style={{ width: "100%", height: "100%", objectFit: "cover" }}
                 src={img.src}
                 alt=""
               />
               <div className="space-y-5 title-content absolute top-[25%] left-[8rem] text-[#fff]">
                 <h3 className="text-[50px] font-[700]">{title}</h3>
                 <p className="text-[14px] w-[40%]">
                  {description}
                 </p>
                 <button className="px-[2rem] bg-[#333] text-[13px] p-2 ">
                   Shop now
                 </button>
               </div>
             </div>
           </SwiperSlide>
          ))}
        </Swiper>

        <div className="parent-btn-swiper">
          <div  style={{zIndex:'1'}} className=" button-prev-slide    z-10    w-[40px] h-[40px] bg-black grid place-items-center text-white ">
            <FaLongArrowAltLeft />
          </div>
          <div style={{zIndex:'1'}}  className="button-next-slide    z-20    w-[40px] h-[40px] bg-black grid place-items-center text-white">
            <FaLongArrowAltRight />
          </div>
        </div>
      </div>

      <div className={className}>{children}</div>
    </div>
  );
};

export default Layout;
