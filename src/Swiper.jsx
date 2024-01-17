import React from "react";
import {
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const SwiperComponent = () => {
  return (
    <div>

      <div  className="parent-swiper">
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
          <SwiperSlide>
            <div className="image img-swiper relative">
              <img
              style={{width:'100%',height:'100%' , objectFit:'cover'}}
                src="https://www.pbs.org/wgbh/masterpiece/wp-content/uploads/2021/01/img-atlantic-crossing-key-1920x1080-1.jpg"
                alt=""
              />
              <div className="space-y-5 title-content absolute top-[25%] left-[8rem] text-[#fff]">
                <h3 className="text-[16px]">More Luxury & trending</h3>
                <h3 className="text-[50px] font-[700]">Wood cup of tea</h3>
                <p className="text-[14px] w-[40%]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Temporibus, atque.
                </p>
                <button className="px-[2rem] bg-[#333] text-[13px] p-2 ">
                  Shop now
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image img-swiper relative">
              <img
              style={{width:'100%',height:'100%' , objectFit:'cover'}}
                src="https://www.pbs.org/wgbh/masterpiece/wp-content/uploads/2021/01/img-atlantic-crossing-key-1920x1080-1.jpg"
                alt=""
              />
              <div className="space-y-5 title-content absolute top-[25%] left-[8rem] text-[#fff]">
                <h3 className="text-[16px]">More Luxury & trending</h3>
                <h3 className="text-[50px] font-[700]">Wood cup of tea</h3>
                <p className="text-[14px] w-[40%]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Temporibus, atque.
                </p>
                <button className="px-[2rem] bg-[#333] text-[13px] p-2 ">
                  Shop now
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image img-swiper relative">
              <img
              style={{width:'100%',height:'100%' , objectFit:'cover'}}
                src="https://www.pbs.org/wgbh/masterpiece/wp-content/uploads/2021/01/img-atlantic-crossing-key-1920x1080-1.jpg"
                alt=""
              />
              <div className="space-y-5 title-content absolute top-[25%] left-[8rem] text-[#fff]">
                <h3 className="text-[16px]">More Luxury & trending</h3>
                <h3 className="text-[50px] font-[700]">Wood cup of tea</h3>
                <p className="text-[14px] w-[40%]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Temporibus, atque.
                </p>
                <button className="px-[2rem] bg-[#333] text-[13px] p-2 ">
                  Shop now
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>


          <div className="parent-btn-swiper">
          <div className=" button-prev-slide    z-10    w-[40px] h-[40px] bg-black grid place-items-center text-white ">
            <FaLongArrowAltLeft />
          </div>
          <div className="button-next-slide    z-20    w-[40px] h-[40px] bg-black grid place-items-center text-white">
            <FaLongArrowAltRight />
          </div>
          </div>


      </div>

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
