import React from "react";

const FilterByPrice = ({ hadleFilters }) => {
  const prices = [
    { _id: 1, name: "Any", value: [] },
    { _id: 2, name: "0 to 199 DH", value: [0, 199] },
    { _id: 3, name: "200 to 499 DH", value: [200, 499] },
    { _id: 4, name: "500 to 999 DH", value: [500, 999] },
    { _id: 5, name: "1000 to 1999 DH", value: [1000, 1999] },
    { _id: 5, name: "More", value: [2000, 9999999] },
  ];

  const handlePrice = (e) => {
    hadleFilters(prices[e.target.value]["value"]);
  };

  return (
    <div>
      <h3 className="mt-5 capitalize text-slate-300	underline decoration-dotted">
        Filter By price
      </h3>
      {prices?.map((price, i) => (
        <div class="flex flex-col gap-2">
          <div class="inline-flex items-center">
            <label
              class="relative flex items-center p-3 rounded-full cursor-pointer"
              htmlFor={`${i}-${price.name}`}
            >
              <input
                type="radio"
                id={`${i}-${price.name}`}
                name='filter-price'
                onChange={handlePrice}
                value={i}
                class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
              />
              <span class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-3.5 w-3.5"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                </svg>
              </span>
            </label>
            <label
              class="mt-px font-light text-gray-700 cursor-pointer select-none"
              htmlFor={`${i}-${price.name}`}
            >
              <p class="flex font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-500">
                {price.name}
              </p>
            </label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilterByPrice;
