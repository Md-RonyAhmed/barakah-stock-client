import React from 'react';
import loader from '../../../Assets/Images/Spinner/loader.gif';
const Loading = () => {
   return (
     <>
       <div className="w-52 h-full mx-auto">
         <img src={loader} alt="" />
       </div>
       <h2 className="text-xl text-blue-500 text-center ml-5 mt-0 pt-0">Loading...</h2>
     </>
   );
};

export default Loading;