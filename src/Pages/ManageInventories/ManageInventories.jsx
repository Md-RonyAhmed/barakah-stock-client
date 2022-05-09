import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Loading from "../Shared/Loading/Loading";
import { Link } from "react-router-dom";


const ManageInventories = () => {
  const [products, setProducts] = useState([]);
   const [updated, setUpdated] = useState(false);
  const [limit, setLimit] = useState(15);
  const [pageNumber, setPageNumber] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    
    (async () => {
      const { data } = await axios.get(
        `https://barakah-stocks-server.herokuapp.com/products?limit=${limit}&pageNumber=${pageNumber}`
      );

      if (!data?.success) {
        setProducts([]);
        return toast.error(data.error);
      }
      setProducts(data.data);
      setTotalPage(Math.ceil(90 / limit));
    })();
  }, [limit, pageNumber, updated]);

  const handleDelete = (id) => {
     const proceed = window.confirm("Are you sure?");
    if (proceed) {
      (async () => {
        const { data } = await axios.delete(
          `https://barakah-stocks-server.herokuapp.com/products/${id}`
        );

        if (!data.success) return toast.error(data.error);

        toast.success(data.message);
        setUpdated(!updated);
      })();
   }
  };

  return (
    <div className="flex flex-col lg:overflow-x-hidden md:overflow-x-hidden overflow-x-auto">
      <div className="mt-3 mx-auto">
        <Link
          to="/add"
          type="button"
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          ADD NEW PRODUCT
        </Link>
      </div>
      <div className="sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-300 border-b">
                <tr>
                  <th
                    scope="col"
                    className="text-lg font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="text-lg font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Image
                  </th>
                  <th
                    scope="col"
                    className="text-lg font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="text-lg font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Stock Quantity
                  </th>
                  <th
                    scope="col"
                    className="text-lg font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Dealer Name
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  ></th>
                </tr>
              </thead>
              <tbody>
                {products?.length ? (
                  products.map((product) => {
                    return (
                      <tr class="bg-white border-b  dark:border-gray-700">
                        <td class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                          {product.name}
                        </td>
                        <td class="px-6 py-4">
                          <img className="w-20" src={product.img} alt="" />
                        </td>
                        <td class="px-6 py-4">{product.price}</td>
                        <td class="px-6 py-4">{product.quantity}</td>
                        <td class="px-6 py-4">{product.dealer}</td>

                        <td class="px-6 py-4 text-right">
                          <button
                            class="font-medium text-white dark:text-white bg-red-700 px-3 py-2 rounded-md"
                            onClick={() => handleDelete(product._id)}
                            alt=""
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <div className="md:ml-[500px]">
                    <Loading></Loading>
                  </div>
                )}
              </tbody>
            </table>
            <div className="flex my-3 justify-end">
              {[...Array(totalPage).keys()].map((number) => (
                <button
                  onClick={() => setPageNumber(number)}
                  className={`mx-3 cursor-pointer border border-black px-3 py-1 ${
                    pageNumber === number ? "bg-black text-white" : ""
                  }`}
                >
                  {number + 1}
                </button>
              ))}
              <select
                defaultValue={limit}
                onChange={(e) => setLimit(e.target.value)}
              >
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
                <option value="30">30</option>
                <option value="35">35</option>
                <option value="40">40</option>
                <option value="45">45</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
    
};

export default ManageInventories;
