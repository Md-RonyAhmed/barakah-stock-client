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
                          <img
                            className="w-20 rounded-lg"
                            src={product.img}
                            alt=""
                          />
                        </td>
                        <td class="px-6 py-4">{product.price}</td>
                        <td class="px-6 py-4">{product.quantity}</td>
                        <td class="px-6 py-4">{product.dealer}</td>

                        <td class="px-6 py-4 text-right">
                          <button
                            class="font-medium text-white dark:text-white bg-slate-50 px-3 py-2 rounded-md"
                            onClick={() => handleDelete(product._id)}
                            alt=""
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              width="30"
                              height="30"
                              viewBox="0 0 100 100"
                              style={{ fill: "#000000" }}
                            >
                              <path
                                fill="#f37e98"
                                d="M25,30l3.645,47.383C28.845,79.988,31.017,82,33.63,82h32.74c2.613,0,4.785-2.012,4.985-4.617L75,30"
                              ></path>
                              <path
                                fill="#f15b6c"
                                d="M65 38v35c0 1.65-1.35 3-3 3s-3-1.35-3-3V38c0-1.65 1.35-3 3-3S65 36.35 65 38zM53 38v35c0 1.65-1.35 3-3 3s-3-1.35-3-3V38c0-1.65 1.35-3 3-3S53 36.35 53 38zM41 38v35c0 1.65-1.35 3-3 3s-3-1.35-3-3V38c0-1.65 1.35-3 3-3S41 36.35 41 38zM77 24h-4l-1.835-3.058C70.442 19.737 69.14 19 67.735 19h-35.47c-1.405 0-2.707.737-3.43 1.942L27 24h-4c-1.657 0-3 1.343-3 3s1.343 3 3 3h54c1.657 0 3-1.343 3-3S78.657 24 77 24z"
                              ></path>
                              <path
                                fill="#1f212b"
                                d="M66.37 83H33.63c-3.116 0-5.744-2.434-5.982-5.54l-3.645-47.383 1.994-.154 3.645 47.384C29.801 79.378 31.553 81 33.63 81H66.37c2.077 0 3.829-1.622 3.988-3.692l3.645-47.385 1.994.154-3.645 47.384C72.113 80.566 69.485 83 66.37 83zM56 20c-.552 0-1-.447-1-1v-3c0-.552-.449-1-1-1h-8c-.551 0-1 .448-1 1v3c0 .553-.448 1-1 1s-1-.447-1-1v-3c0-1.654 1.346-3 3-3h8c1.654 0 3 1.346 3 3v3C57 19.553 56.552 20 56 20z"
                              ></path>
                              <path
                                fill="#1f212b"
                                d="M77,31H23c-2.206,0-4-1.794-4-4s1.794-4,4-4h3.434l1.543-2.572C28.875,18.931,30.518,18,32.265,18h35.471c1.747,0,3.389,0.931,4.287,2.428L73.566,23H77c2.206,0,4,1.794,4,4S79.206,31,77,31z M23,25c-1.103,0-2,0.897-2,2s0.897,2,2,2h54c1.103,0,2-0.897,2-2s-0.897-2-2-2h-4c-0.351,0-0.677-0.185-0.857-0.485l-1.835-3.058C69.769,20.559,68.783,20,67.735,20H32.265c-1.048,0-2.033,0.559-2.572,1.457l-1.835,3.058C27.677,24.815,27.351,25,27,25H23z"
                              ></path>
                              <path
                                fill="#1f212b"
                                d="M61.5 25h-36c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h36c.276 0 .5.224.5.5S61.776 25 61.5 25zM73.5 25h-5c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h5c.276 0 .5.224.5.5S73.776 25 73.5 25zM66.5 25h-2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h2c.276 0 .5.224.5.5S66.776 25 66.5 25zM50 76c-1.654 0-3-1.346-3-3V38c0-1.654 1.346-3 3-3s3 1.346 3 3v25.5c0 .276-.224.5-.5.5S52 63.776 52 63.5V38c0-1.103-.897-2-2-2s-2 .897-2 2v35c0 1.103.897 2 2 2s2-.897 2-2v-3.5c0-.276.224-.5.5-.5s.5.224.5.5V73C53 74.654 51.654 76 50 76zM62 76c-1.654 0-3-1.346-3-3V47.5c0-.276.224-.5.5-.5s.5.224.5.5V73c0 1.103.897 2 2 2s2-.897 2-2V38c0-1.103-.897-2-2-2s-2 .897-2 2v1.5c0 .276-.224.5-.5.5S59 39.776 59 39.5V38c0-1.654 1.346-3 3-3s3 1.346 3 3v35C65 74.654 63.654 76 62 76z"
                              ></path>
                              <path
                                fill="#1f212b"
                                d="M59.5 45c-.276 0-.5-.224-.5-.5v-2c0-.276.224-.5.5-.5s.5.224.5.5v2C60 44.776 59.776 45 59.5 45zM38 76c-1.654 0-3-1.346-3-3V38c0-1.654 1.346-3 3-3s3 1.346 3 3v35C41 74.654 39.654 76 38 76zM38 36c-1.103 0-2 .897-2 2v35c0 1.103.897 2 2 2s2-.897 2-2V38C40 36.897 39.103 36 38 36z"
                              ></path>
                            </svg>
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
