import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import axios from "axios";
import { toast } from "react-toastify";
import Loading from "../../Shared/Loading/Loading";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(6);
  const url = `https://barakah-stocks-server.herokuapp.com/products?limit=${limit}`;
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(url);
      if (!data?.success) {
        setProducts([]);
        return toast.error(data.error);
      }
      setProducts(data?.data);
    })();
  }, [limit, url]);
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
        <div className="md:w-1/6 mt-2 w-1/2 mx-auto">
          <Link
            to="/manage"
            type="button"
            className="block px-6 mx-auto text-center py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            MANAGE INVENTORIES
          </Link>
        </div>
    </div>
  );
};

export default Products;
