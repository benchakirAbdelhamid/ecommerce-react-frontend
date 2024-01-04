import React from "react";
import {
  Navigation,
  Scrollbar,
  A11y,
  Pagination,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide  } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";


import nextIcon from "./assest/img/fast-forward.png";
import prevIcon from "./assest/img/rewind.png";

const SwiperComponent = () => {
  return (
    <div>
      <br />
      <br />
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl : '.button-next-slide',
          prevEl : '.button-prev-slide'
        }}
        modules={[Autoplay, Pagination, Navigation]}
        // pagination={{ clickable: true }}
        className="relative "
      >
        <SwiperSlide>
          <div className="image relative">
            <img
              src="https://www.pbs.org/wgbh/masterpiece/wp-content/uploads/2021/01/img-atlantic-crossing-key-1920x1080-1.jpg"
              alt=""
            />
            <div className="space-y-5 title-content absolute top-[25%] left-[8rem] text-[#fff]">
              <h3 className="text-[16px]">More Luxury & trending</h3>
              <h3 className="text-[50px] font-[700]">Wood cup of tea</h3>
              <p className="text-[14px] w-[40%]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, atque.</p>
              <button className="px-[2rem] bg-[#333] text-[13px] p-2 ">Shop now</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image relative">
            <img
            src="https://cdn.theatlantic.com/thumbor/5b13uuFb-bL4FYdUQr8EWbL9hQg=/85x0:3747x2060/960x540/media/img/mt/2022/11/barbarian_digital_BARB_TRL1_Shot2_01_rgb/original.jpg"
            alt=""
            />
            <div className="space-y-5 title-content absolute top-[25%] left-[8rem] text-[#fff]">
              <h3 className="text-[16px]">More Luxury & trending</h3>
              <h3 className="text-[50px] font-[700]">Wood cup of tea</h3>
              <p className="text-[14px] w-[40%]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, atque.</p>
              <button className="px-[2rem] bg-[#333] text-[13px] p-2 ">Shop now</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image relative">
            <img className="w-full object-cover "
            src="https://www.hindustantimes.com/ht-img/img/2023/08/17/550x309/ghoomer_review_1692240402493_1692240402698.png"
            alt=""
            />
            <div className="space-y-5 title-content absolute top-[25%] left-[8rem] text-[#fff]">
              <h3 className="text-[16px]">More Luxury & trending</h3>
              <h3 className="text-[50px] font-[700]">Wood cup of tea</h3>
              <p className="text-[14px] w-[40%]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, atque.</p>
              <button className="px-[2rem] bg-[#333] text-[13px] p-2 ">Shop now</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image relative">
            <img
            src="https://www.usatoday.com/gcdn/-mm-/9f6d207cdebe822ce572d713a773cf7a6db654d6/c=134-0-2865-1543/local/-/media/2017/06/22/USATODAY/USATODAY/636337636172083481-XXX-IMG-LAST-KNIGHT-RANKINGS-1-1-KGIOLKE1.JPG"
            alt=""
            />
            <div className="space-y-5 title-content absolute top-[25%] left-[8rem] text-[#fff]">
              <h3 className="text-[16px]">More Luxury & trending</h3>
              <h3 className="text-[50px] font-[700]">Wood cup of tea</h3>
              <p className="text-[14px] w-[40%]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, atque.</p>
              <button className="px-[2rem] bg-[#333] text-[13px] p-2 ">Shop now</button>
            </div>
          </div>
        </SwiperSlide>

        <div className=" button-prev-slide    z-10    w-[40px] h-[40px] bg-black grid place-items-center text-white ">
        <FaLongArrowAltLeft />
        </div>
        <div className="button-next-slide    z-10    w-[40px] h-[40px] bg-black grid place-items-center text-white">
        <FaLongArrowAltRight />
        </div>

      </Swiper>


      {/* <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        spaceBetween={0}
        slidesPerView={1}
        navigation 
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="flex justify-center items-center"
            style={{ border: "2px solid red", width: "300px", height: "300px" }}
          >
            Slide slider
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex justify-center items-center"
            style={{ border: "2px solid red", width: "300px", height: "300px" }}
          >
            Slide 1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex justify-center items-center"
            style={{ border: "2px solid red", width: "300px", height: "300px" }}
          >
            Slide 1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex justify-center items-center"
            style={{ border: "2px solid red", width: "300px", height: "300px" }}
          >
            Slide 1
          </div>
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
          <img src={nextIcon} alt="Next" />
          </div>
          <div className="swiper-button-next slider-arrow">
          <img src={prevIcon} alt="Previous" />
          </div>
          <div className="swiper-pagination"></div>
        </div>

      </Swiper> */}
    </div>
  );
};

export default SwiperComponent;
