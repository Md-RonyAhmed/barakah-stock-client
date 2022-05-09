import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import ManageInventory from "../ManageInventory/ManageInventory";
import Loading from "../Shared/Loading/Loading";
const ManageInventories = () => {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(10);
  const [pageNumber, setPageNumber] = useState(0);
  const [updated, setUpdated] = useState(false);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `http://localhost:5000/products?limit=${limit}&pageNumber=${pageNumber}`
      );

      if (!data?.success) {
        setProducts([]);
        return toast.error(data.error);
      }
     
      setProducts(data.data);
      setTotalPage(Math.ceil(90 / limit));
    })();
  }, [limit, pageNumber,updated]);
  return (
    <>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-white border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Image
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Stock Quantity
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Dealer Name
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products?.length ? (
                    products.map((product) => (
                      <ManageInventory
                        key={product._id}
                        product={product}
                      ></ManageInventory>
                    ))
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
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageInventories;
