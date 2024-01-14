import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { getProducts } from "./ApiCore";
import Card from "./Card";

import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import CardSkeleton from "../components/CardSkeleton";
import Search from "./Search";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";

import Cart from "./Cart";


function Home() {
  const [productsBestSellers, setProductsBestSellers] = useState([]);
  const [productsArrivals, setProductsArrivals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // reduc toolkit
  // const cart = useSelector((state)=>state)
  // useEffect(()=>{
  //   console.log('====> redux',cart)
  // },[])
  // reduc toolkit

  const loadBestSellers = () => {
    // with query-strinf dynamic paramc
    getProducts({ sortBy: "sold", order: "desc", limit: 6 }).then(
      (products) => {
        setProductsBestSellers(products);
        setIsLoading(false);
      }
    );

    // getProducts("sold", "desc", 12).then((products) => {
    //   setProductsBestSellers(products);
    //   setIsLoading(false);
    // });
  };
  const loadArrivals = () => {
    // with query-strinf dynamic paramc
    getProducts({ sortBy: "createAt", order: "desc", limit: 3 }).then(
      (products) => {
        setProductsArrivals(products);
        setIsLoading(false);
      }
    );

    // getProducts("createAt", "desc", 3).then((products) => {
    //   setProductsArrivals(products);
    //   setIsLoading(false);
    // });
  };
  useEffect(() => {
    loadBestSellers();
    loadArrivals();
  }, []);

  return (
    <div>
      <Layout
        title="Home page"
        description="Node React Ecommerce App"
        className=""
      >
        <Search />

        <Cart/>

        <div className="w-5/6 mx-auto mt-8">
          <h1 class="text-2xl ">Arrival Products</h1>
        </div>

        <div class="w-11/12 mx-auto flex flex-wrap justify-center mt-4">
          {isLoading && <CardSkeleton cards={3} />}
          {productsArrivals?.map((product, i) => (
            <Card product={product} key={i}></Card>
          ))}
        </div>
        <div className="w-5/6 mx-auto mt-8">
          <h1 class="text-2xl ">Best Sellers</h1>
        </div>
        <div class="w-11/12 mx-auto flex flex-wrap justify-center mt-4">
          {isLoading && <CardSkeleton cards={3} />}
          {productsBestSellers?.map((product, i) => (
            <Card product={product} key={i}></Card>
          ))}
        </div>
      </Layout>
    </div>
  );
}

export default Home;
