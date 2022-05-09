import React from 'react';
import { useParams } from 'react-router-dom';
import { useProductDetails } from '../../hooks/useProductDetails';

const ProductDetails = () => {
   const { id } = useParams();
   const [products] = useProductDetails(id);
   console.log(products)
   return (
      <div>
         <h1>Product details of:{products?.name}</h1>
         <h1>Product details of:{products?._id}</h1>
         <h1>Product details of:{products?.dealer}</h1>
         <h1>Product details of:{products?.quantity<=0? <button>Stock Out</button>:products?.quantity}</h1>
         <h1>Product details of:{products?.price}</h1>
         <h1>Product details of:{products?.desc}</h1>
      </div>
   );
};

export default ProductDetails;