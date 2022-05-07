import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
   const { _id,name, img, price, desc, dealer, quantity } = product;
   const navigate = useNavigate();
   const navigateToInventoryDetail = (id) => {
     navigate(`/inventory/${id}`);
   };
   return (
     <>
       <div className="md:flex flex-col p-4 rounded-lg shadow-lg bg-white max-w-sm mt-6">
         <h2 className="mb-2 font-bold text-2xl text-center text-blue-500 bg-blue-50 p-2 rounded-lg">
           {name}
         </h2>
         <img className="rounded-lg md:h-72 mb-4" src={img} alt="" />
         <div className="mb-4 flex flex-wrap flex-col">
           <p className="text-gray-700 text-base mb-4">
             Price: <span className="text-orange-600 text-lg">{price} bdt</span>
           </p>
           <p className="text-gray-700 text-base mb-4">Supplier: {dealer}</p>
           <p className="text-gray-700 text-base mb-4">
             Stock Quantity:
             <span className="bg-slate-200 py-1 px-4 ml-2 text-orange-600 rounded-full">
               {quantity}
             </span>{" "}
           </p>
         </div>
         <p className="text-gray-700 text-base mb-4">{desc}</p>
         <div className="flex flex-wrap mt-auto pt-3 text-xs">
           <button
             onClick={() => navigateToInventoryDetail(_id)}
             type="button"
             className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
           >
             UPDATE STOCK
           </button>
         </div>
       </div>
     </>
   );
};

export default Product;