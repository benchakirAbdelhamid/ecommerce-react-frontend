import React, { useState } from "react";

const FilterByCategory = ({ categories , hadleFilters }) => {

  const [checked] = useState(new Set())

  const handleCategory = (category)=>{
    // if exest item ==> delete item
    if(checked.has(category._id)){
      checked.delete(category._id)
    }else{
      checked.add(category._id)
    }
    // console.log(checked)
    // hadleFilters(checked)
    // // send value by array
    hadleFilters(Array.from(checked))
  }

  return (
    <div>
      <h3 className="capitalize text-slate-300	underline decoration-dotted">Filter by Categories</h3>
      <ul class=" items-center">
        {categories &&
          categories.map((category, index) => (
            <span key={index} className="flex items-center ">
              <label
                class="relative flex items-center p-3 rounded-full cursor-pointer"
                htmlFor={index}
              >
                <input
                onClick={()=>handleCategory(category)}
                  type="checkbox"
                  value={category._id}
                  class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                  id={index} 
                />
                <span class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="1"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </label>
              <label
                class="mt-px font-light text-gray-700 cursor-pointer select-none"
                htmlFor={index}
              >
                {category.name}
              </label>
            </span>
          ))}
      </ul>
    </div>
  );
};

export default FilterByCategory;