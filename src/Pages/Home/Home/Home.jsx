import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Dealers from '../Dealers/Dealers';
import Products from '../Products/Products';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {
   return (
     <div>
       <Banner />
       <Products/>
       <Dealers />
       <Contact />
       <Subscribe />
     </div>
   );
};

export default Home;