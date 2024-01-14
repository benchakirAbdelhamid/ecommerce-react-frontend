import React, { useEffect, useState } from "react";
import { getOneProduct, relatedProducts } from "./ApiCore";
import { useParams } from "react-router-dom";
import Layout from "./Layout";
import DetailsProduct from "./DetailsProduct";
import DetailsProductSkeleton from "../components/DetailsProductSkeleton";
import Card from "./Card";

const Product = () => {
  const [product, setProduct] = useState({});
  const [related, setRelated] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();

  useEffect(() => {
    let productId = params.id;
    // console.log(params)
    getOneProduct(productId)
      .then((res) => {
        setProduct(res);
        setIsLoading(false);
        // console.log('product ==>',res);
        relatedProducts(productId).then((related) => {
          setRelated(related);
          // console.log("related==>", related);
        });
      })
      .catch((err) => console.log(err));
  }, [params]);

  return (
    <div>
      <Layout title="Show Product" description="Details product">
        {/* {JSON.stringify(product)} */}
        {isLoading && <DetailsProductSkeleton />}

        {product && product.description && <DetailsProduct product={product} />}

        <div>
        <div className="w-5/6 mx-auto text-center">
          <h1 class="text-2xl capitalize md:uppercase underline decoration-wavy"> Related Product</h1>
        </div>
         
          <div class="w-11/12 gap-4 mb-9 mx-auto flex flex-wrap justify-center ">
          {related?.map((product , i)=>(
            <Card product={product} key={i}/>
          ))}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Product;
