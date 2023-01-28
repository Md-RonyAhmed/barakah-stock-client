import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useProductDetails } from "../../hooks/useProductDetails";

const ProductDetails = () => {
  const { id } = useParams();
  const [products] = useProductDetails(id);
  const [product, setProduct] = useState({});
  const [updated, setUpdated] = useState(false);
  const handleUpdateProduct = (event) => {
    event.preventDefault();
    const quantity = parseInt(products?.quantity) - 1;

    const newQuantity = quantity;

    const updatedProduct = newQuantity;
    console.log(updatedProduct);
    // send data to the server
    const url = `https://barakah-stock-server.onrender.com/products/${id}`;
    fetch(
      url,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ updatedProduct }),
      },
      [updated, product]
    )
      .then((res) => res.json())
      .then((data) => {
        setProduct(data?.data);
        console.log(data?.data);
        setUpdated(!updated);
        toast.success("Product Delivered successfully!!!");
      });
  };
  return (
    <div>
      <div className="p-5 pr-0 w-full md:flex lg:flex block">
        <div className="mx-6 md:w-2/5 bg-transparent rounded-md shadow-2xl p-3">
          <div className=" mx-auto bg-gray-300 w-full rounded-md">
            <img className="w-full rounded-md" src={products?.img} alt="" />
          </div>
          <div className="mx-auto w-full p-4 pl-0">
            <p className=" mb-2">Product Id: {products?._id}</p>
            <p className=" mb-2 font-bold text-xl text-black">
              <span className=" text-orange-900">Product Name:</span>{" "}
              {products?.name}
            </p>
            <p className=" mb-2">Supplier Name: {products?.dealer}</p>
            <p className=" mb-2">
              Stock Quantity:{" "}
              {products?.quantity <= 0 ? (
                <button className="bg-red-500 px-2 rounded-md">
                  Stock Out
                </button>
              ) : (
                <span className="bg-red-500 px-2 rounded-md font-bold">
                  {" "}
                  {products?.quantity}
                </span>
              )}
            </p>
            <p className=" mb-2">
              Price:{" "}
              <span className="text-orange-900 text-lg font-bold">
                {products?.price} bdt
              </span>
            </p>
            <p className=" mb-2">Description: {products?.desc}</p>
          </div>
          <button
            onClick={handleUpdateProduct}
            className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm  py-2.5 text-center mr-2 mb-2 block w-full"
            type="submit"
          >
            Delivered
          </button>
        </div>
        <div className="h-1/3 md:fixed lg:fixed top-24 left-[600px] p-6 rounded-lg shadow-2xl bg-white z-10 my-8 mx-3">
          <form>
            <div className="form-group mb-6">
              <input
                type="number"
                className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput90"
                placeholder="Enter product quantity"
              />
            </div>

            <button
              type="submit"
              className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl  focus:shadow-lg focus:outline-none focus:ring-0
      active:shadow-lg
      transition
      duration-150
      ease-in-out"
            >
              RE STOCK PRODUCT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
