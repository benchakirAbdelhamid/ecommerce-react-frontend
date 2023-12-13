import React from "react";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { CgDollar } from "react-icons/cg";
import { FaDollyFlatbed } from "react-icons/fa";
import { HiCurrencyDollar } from "react-icons/hi";
import ShowImage from "./ShowImage";


const Card = ({ product }) => {
  return (
    <>
      <div class=" pt-3 my-4 mx-1 relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
        <div class="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
          <ShowImage item={product} url='product/photo' className='img-card' ></ShowImage>
          <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
        </div>
        <div class="p-6">
          <div class=" nav-card flex items-center justify-between mb-3">
            <h5 class=" block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
              {product.name}
            </h5>
            <p class="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
              <HiCurrencyDollar style={{color:'gray' , fontSize:'25px'}} />
              {product.price} DH
            </p>
          </div>
          <p class="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">
            {product.description}
          </p>
        </div>
        <div class="p-6 pt-3 flex justify-end ">
          <Link to="">
            <Button  size="sm" variant="gradient">
              View Product
            </Button>
          </Link>

          <Button className="ml-1 flex gap-2" size="sm" variant="outlined">
            Add to Cart <FaDollyFlatbed/>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Card;