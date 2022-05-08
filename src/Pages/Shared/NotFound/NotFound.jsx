import React from 'react';
import { Link } from 'react-router-dom';
import gif from '../../../Assets/Images/NotFound/CodePen-404-Page.gif';
const NotFound = () => {
   return (
     <div className="mx-auto w-full bg-white">
       <img
         className="mx-auto w-full md:w-3/4 mb-4"
         src={gif}
         alt="not found"
       />
       <div className="mx-auto w-36 my-4">
         <Link to='/'
           type="button"
           className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
         >
           Back to Home
         </Link>
       </div>
     </div>
   );
};

export default NotFound;