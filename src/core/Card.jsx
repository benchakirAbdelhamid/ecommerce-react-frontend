import React from "react";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { CgDollar } from "react-icons/cg";
import { FaDollyFlatbed } from "react-icons/fa";
import { HiCurrencyDollar } from "react-icons/hi";
import ShowImage from "./ShowImage";


const Card = ({ product,className }) => {
  return (
    <>
      <div style={{width : className}} class=" pt-3 my-4 mx-1 relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
        <div class="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
          <ShowImage item={product} url='product/photo' className='img-card' ></ShowImage>
          <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
        </div>
        <div class="p-6">
          <div class=" nav-card flex items-center justify-between mb-3">
            <span style={{ width:'50%'}} class=" block font-sans text-md antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
              {product.name}
              <span class="ml-2 mt-2 inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
              {product.category.name}
              </span>
            </span>
            <p style={{ width:'50%'}} class="flex justify-end gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
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
