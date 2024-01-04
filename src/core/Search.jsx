import React, { useEffect, useState } from "react";
import { getcategories, getProducts } from "./ApiCore";
import Card from "./Card";

const Search = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [searchData, setSearchData] = useState({
    search: "",
    category: "",
  });

  const handleChange = (e) => {
    setSearchData({ ...searchData, [e.target.id]: e.target.value });
  };

  const searchSubmit = (e) => {
    e.preventDefault();
    let { search, category } = searchData;
    // console.log(search , category)
    if (search || category) {
      getProducts({ search: search || undefined, category: category }).then(
        (res) => setProducts(res)
      );
    } else {
      setProducts([]);
    }
  };

  const resultMessage = () => {
    return (
      products &&
      products.length > 0 && (
        <div className="w-5/6 mx-auto mt-8">
          <h1 class="text-2xl ">Found {products.length} products</h1>
        </div>
      )
    );
  };

  useEffect(() => {
    getcategories().then((categories) => setCategories(categories));
  }, []);

  return (
    <div>
      <form onSubmit={searchSubmit} className="mt-5 flex">
        <div className="mx-auto w-[700px] flex gap-2 flex-wrap items-center justify-center">
          <div class="">
            <select
              onChange={handleChange}
              id="category"
              class="block w-[150px] rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
            >
              <option value="">Select a Category</option>
              {categories?.map((category, i) => (
                <option key={i} value={category._id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div className="">
            <input
              onChange={handleChange}
              id="search"
              placeholder="Search product"
              type="search"
              className="inputes-form-signup block  w-[250px] rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div>
            <button
              class="select-none rounded-lg bg-gray-900 py-2.5 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="submit"
            >
              Search
            </button>
          </div>
          {/* {JSON.stringify(searchData)} */}
        </div>
      </form>

      <hr />

      {resultMessage()}
      <div class="w-11/12 mx-auto flex flex-wrap justify-center mt-4">
        {products?.map((product, i) => (
          <Card product={product} key={i}></Card>
        ))}
      </div>
    </div>
  );
};

export default Search;
