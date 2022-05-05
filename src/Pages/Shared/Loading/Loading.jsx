import React from 'react';
import loader from '../../../Assets/Images/Spinner/loader.gif';
const Loading = () => {
   return (
      <div className='w-52 h-full mx-auto visually-hidden'>
         <img src={loader} alt="" />
      </div>
   );
};

export default Loading;