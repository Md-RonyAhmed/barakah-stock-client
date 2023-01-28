import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';
import img from '../../Assets/Images/logo/logo.png';
const AddProduct = () => {
   const handleSubmit = async (event) => {
     event.preventDefault();
     const product = {
       name: event.target.product_name.value,
       price: event.target.price.value,
       img: event.target.image.value,
       dealer: event.target.dealer.value,
       quantity: event.target.quantity.value,
       desc: event.target.desc.value
     };

     try {
       const { data } = await axios.post(
         "https://barakah-stock-server.onrender.com/products",
         product
       );

       if (!data.success) {
         return toast.error(data.error);
       }

       toast.success(data.message);
       event.target.reset();
     } catch (error) {
       toast.error(error.message);
     }
   };
   return (
     <div className="md:flex justify-center items-center h-full w-full mx-auto">
       <div className="md:w-1/2 bg-slate-100 rounded shadow-inner p-8 my-6 border-y-2 w-4/5 mx-auto">
         <div className="flex items-center justify-center">
           <img className="mr-0" height="65px" width="65px" src={img} alt="" />
         </div>
         <h1 className="block w-full text-center text-gray-800 text-2xl font-bold mb-6">
           Add New Product
         </h1>
         <form onSubmit={handleSubmit}>
           <div className="flex flex-col mb-4">
             <label className="mb-2 font-bold text-lg text-gray-900">
               Product Name
             </label>
             <input
               className="border-2 border-gray-200 rounded-md py-2 px-3 text-grey-800 bg-transparent"
               type="text"
               name="product_name"
               id="first_name"
             />
           </div>
           <div className="flex flex-col mb-4">
             <label
               className="mb-2 font-bold text-lg text-gray-900"
               for="last_name"
             >
               Price
             </label>
             <input
               className="py-2 px-3 text-grey-800 border-2 border-gray-200 rounded-md bg-transparent"
               type="number"
               name="price"
               id="last_name"
             />
           </div>
           <div className="flex flex-col mb-4">
             <label
               className="mb-2 font-bold text-lg text-gray-900"
               for="last_name"
             >
               Quantity
             </label>
             <input
               className="py-2 px-3 text-grey-800 border-2 border-gray-200 rounded-md bg-transparent"
               type="number"
               name="quantity"
               id="last_name"
             />
           </div>
           <div className="flex flex-col mb-4">
             <label
               className="mb-2 font-bold text-lg text-gray-900"
               for="last_name"
             >
               Dealer Name
             </label>
             <input
               className="py-2 px-3 text-grey-800 border-2 border-gray-200 rounded-md bg-transparent"
               type="text"
               name="dealer"
               id="last_name"
             />
           </div>
           <div className="flex flex-col mb-4">
             <label
               className="mb-2 font-bold text-lg text-gray-900"
               for="last_name"
             >
               Image URL
             </label>
             <input
               className=" py-2 px-3 text-grey-800 border-2 border-gray-200 rounded-md bg-transparent"
               type="text"
               name="image"
               id="last_name"
             />
           </div>
           <div className="flex flex-col mb-4">
             <label
               className="mb-2 font-bold text-lg text-gray-900"
               for="last_name"
             >
               Description
             </label>
             <textarea
               className=" py-2 px-3 text-grey-800 border-2 border-gray-200 rounded-md bg-transparent"
               type="text"
               name="desc"
               id="last_name"
               rows='5'
             />
           </div>
           <button
             className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 block w-full"
             type="submit"
           >
             SUBMIT
           </button>
         </form>
       </div>
     </div>
   );
};

export default AddProduct;