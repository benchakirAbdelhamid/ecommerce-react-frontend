import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { getProducts } from "./ApiCore";
import Card from "./Card";

import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import CardSkeleton from "../components/CardSkeleton";

function Home() {
  const [productsBestSellers, setProductsBestSellers] = useState([]);
  const [productsArrivals, setProductsArrivals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadBestSellers = () => {
    getProducts("sold", "desc", 10).then((products) => {
      setProductsBestSellers(products);
      setIsLoading(false);
    });
  };
  const loadArrivals = () => {
    getProducts("createAt", "desc", 3).then((products) => {
      setProductsArrivals(products);
      setIsLoading(false);
    });
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
