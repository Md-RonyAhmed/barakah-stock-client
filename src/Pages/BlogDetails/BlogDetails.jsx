import React from 'react';

const BlogDetails = () => {
   return (
     <div className="container my-24 px-6 mx-auto">
       <section className="mb-32 text-gray-800">
         <img
           src="https://mdbootstrap.com/img/new/slides/198.jpg"
           className="w-full shadow-lg rounded-lg mb-6"
           alt=""
         />

         <div className="flex items-center mb-6">
           <img
             src="https://mdbootstrap.com/img/Photos/Avatars/img (23).jpg"
             className="rounded-full mr-2 h-8"
             alt=""
             loading="lazy"
           />
           <div>
             <span>
               {" "}
               Published <u>15.07.2020</u> by{" "}
             </span>
             <a href="#!" className="font-medium">
               Anna Maria Doe
             </a>
           </div>
         </div>

         <h1 className="font-bold text-3xl mb-6">
           An intriguing title for an interesting article
         </h1>

         <p>
           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
           harum tempore cupiditate asperiores provident, itaque, quo ex iusto
           rerum voluptatum delectus corporis quisquam maxime a ipsam nisi
           sapiente qui optio! Dignissimos harum quod culpa officiis suscipit
           soluta labore! Expedita quas, nesciunt similique autem, sunt,
           doloribus pariatur maxime qui sint id enim. Placeat, maxime labore.
           Dolores ex provident ipsa impedit, omnis magni earum. Sed fuga ex
           ducimus consequatur corporis, architecto nesciunt vitae ipsum
           consequuntur perspiciatis nulla esse voluptatem quos dolorum delectus
           similique eum vero in est velit quasi pariatur blanditiis incidunt
           quam.
         </p>
       </section>
     </div>
   );
};

export default BlogDetails;