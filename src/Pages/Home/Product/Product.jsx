import React from 'react';

const Product = ({ product }) => {
   const { name, img } = product;
   return (
      <div>
         <h1>{product.length}</h1>
         <h1>{name}</h1>
      </div>
   );
};

export default Product;