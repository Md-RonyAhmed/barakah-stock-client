import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const useProductDetails = (id) => {
   const [products, setProducts] = useState([]);
   const url = `https://barakah-stocks-server.herokuapp.com/products/${id}`;
   useEffect(() => {
      (async () => {
         const { data } = await axios.get(url);
         if (!data?.success) {
            setProducts([]);
            return toast.error(data.error);
         }
         setProducts(data?.data);
      })();
   }, [id]);
   return [products[0]];
   
};