import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { filterProducts, getcategories } from "./ApiCore";
import FilterByCategory from "./FilterByCategory";
import FilterByPrice from "./FilterByPrice";
import Card from "./Card";
import Cart from "./Cart";

const Shop = () => {
  const [categories, setCategories] = useState([]);
  const [limit, setLimit] = useState(6);
  const [skip, setskip] = useState(0);
  const [size, setSize] = useState(0);
  const [productsFiltred, setProductsFiltred] = useState([]);
  const [myFilters, setMyFilters] = useState({
    category: [],
    price: [],
  });

  useEffect(() => {
    getcategories().then((res) => setCategories(res));

    filterProducts(skip, limit, myFilters).then((res) => {
      setProductsFiltred(res);
      setskip(0)
      setSize(res?.length);
    });
  }, [myFilters]);

  const loadMore = () => {
    const toSkip = skip + limit;
    filterProducts(toSkip, limit, myFilters).then((res) => {
      setProductsFiltred([...productsFiltred , ...res ]);
      setSize(res?.length);
      setskip(toSkip);
    });
  };

  const buttonToLoadMore = () => {
    return (
      size > 0 &&
      size >= limit && (
        <div className="w-full flex justify-center my-4 mb-10">
          <button
            class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            type="button"
            onClick={loadMore}
          >
            Load More
          </button>
        </div>
      )
    );
  };

  const hadleFilters = (data, filterBy) => {
    // console.log("shop", data, filterBy);
    setMyFilters({ ...myFilters, [filterBy]: data });
    // console.log('====>',myFilters)
  };

  // useEffect(()=>{
  //   console.log('--------->' , myFilters)
  // },[ myFilters])
  // useEffect(() => {
    // console.log("--------->", productsFiltred);
  // }, [productsFiltred]);

  return (
    <div>
      <Layout
        title="Shop pahe"
        description="Choice your favorite Product  in our Store"
      >
           <Cart/>
        <div style={{ width: "95%" }} class="flex mx-auto  ">
          <div className="w-96 mt-8 ">
            <FilterByCategory
              categories={categories}
              hadleFilters={(data) => hadleFilters(data, "category")}
            />
            <FilterByPrice
              hadleFilters={(data) => hadleFilters(data, "price")}
            />

            {/* {JSON.stringify(myFilters)} */}
            {/* {JSON.stringify(productsFiltred)} */}
          </div>
          <div
            className="flex flex-wrap justify-center "
            style={{ height: "fit-content" }}
          >
            {/* <div class=" mx-auto flex flex-wrap justify-center mt-4"> */}
            {/* {isLoading && <CardSkeleton cards={3} />} */}
            {productsFiltred?.map((product, i) => (
              <Card product={product} className={"380px"} key={i}></Card>
            ))}
            {/* </div> */}
          </div>
        </div>
        {buttonToLoadMore()}
      </Layout>
    </div>
  );
};

export default Shop;
