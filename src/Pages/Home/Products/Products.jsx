import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import axios from "axios";
import { toast } from "react-toastify";
import Loading from "../../Shared/Loading/Loading";

const Products = () => {
  const [products, setProducts] = useState([]);
   const [limit, setLimit] = useState(6);
   const url = `http://localhost:5000/products?limit=${limit}`;
   useEffect(() => {
      (async () => {
         const { data } =await axios.get(url);
         if (!data?.success) {
            setProducts([]);
           return toast.error(data.error);
         }
         setProducts(data?.data);
      })()
   },[limit])
  return (
    <div id="products" className="container px-6 mt-6">
      <div className="border-l-4 mb-0 border-blue-800 p-1 ml-4 pl-2 bg-blue-100">
        <h1 className="text-4xl font-bold text-blue-500 my-6 font-mono">
          Top Products
        </h1>
      </div>
      <div className="container mx-auto p-6 grid md:grid-cols-3 gap-4">
        {products?.length ? (
          products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))
        ) : (
          <div className="md:ml-[500px]">
             
              <Loading></Loading>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
