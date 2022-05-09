import React from 'react';
import { useParams } from 'react-router-dom';
import { useProductDetails } from '../../hooks/useProductDetails';

const ProductDetails = () => {
   const { id } = useParams();
   const [products] = useProductDetails(id);
   console.log(products)
   return (
     <div>
       <div className="p-5 w-full bg-gradient-to-tl from-green-300 to-indigo-500">
         <div className="mx-auto md:w-2/5 bg-transparent rounded-md shadow-2xl p-3">
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
             className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm  py-2.5 text-center mr-2 mb-2 block w-full"
             type="submit"
           >
             Delivered
           </button>
         </div>
       </div>
     </div>
   );
};

export default ProductDetails;