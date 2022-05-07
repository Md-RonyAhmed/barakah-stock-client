import React from 'react';

const Product = ({ product }) => {
   const { name, img,price,desc,dealer } = product;
   return (
     <>
       <div class="md:flex flex-col bg-white border-2 p-4">
         <h2 class="mb-2 font-bold text-2xl">Card Name</h2>
         <div class="mb-4 flex flex-wrap">
           <span class="mr-2">Link 1</span>
           <span class="mr-2">Link 2</span>
         </div>
         <p class="text-md text-justify">Some Description</p>
         <div class="flex flex-wrap mt-auto pt-3 text-xs">
           <p class="mr-2 mb-2">Tag #1</p>
           <p class="mr-2 mb-2">Tag #2</p>
         </div>
       </div>
       <div class="col-span-1 flex flex-col bg-white border-2 p-4">
         <h2 class="mb-2 font-bold text-2xl">Card Name</h2>
         <div class="mb-4 flex flex-wrap">
           <span class="mr-2">Link 1</span>
           <span class="mr-2">Link 2</span>
         </div>
         <p class="text-md text-justify">
           Some Description Lorem ipsum dolor sit amet, consectetur adipiscing
           elit. Maecenas vel enim lectus.
         </p>
         <div class="flex flex-wrap mt-auto pt-3 text-xs">
           <p class="mr-2 mb-2">Tag #1</p>
           <p class="mr-2 mb-2">Tag #2</p>
         </div>
       </div>
     </>
   );
};

export default Product;