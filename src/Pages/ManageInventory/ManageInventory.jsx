import React from 'react';

const ManageInventory = ({product}) => {
   const { name, img,price, dealer,quantity } = product;
   return (
     <tr class="bg-white border-b  dark:border-gray-700">
       <td class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
         {name}
       </td>
       <td class="px-6 py-4">
         <img className="w-20" src={img} alt="" />
       </td>
       <td class="px-6 py-4">{price}</td>
       <td class="px-6 py-4">{quantity}</td>
       <td class="px-6 py-4">{dealer}</td>

       <td class="px-6 py-4 text-right">
         <a
           href="/"
           class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
           //   onClick={() => handleDelete(product._id)}
           alt=""
         >
           Delete
         </a>
       </td>
     </tr>
   );
};

export default ManageInventory;