import React from 'react';
import img from "../../Assets/Images/Blog/Nodejs-vs-Javascript-min.webp";
const BlogDetails = () => {
   return (
     <div className="container my-16 px-6 mx-auto mt-3">
       <div className="border-l-4 mb-6 border-blue-800 p-1 ml-4 pl-2 bg-blue-100">
         <h1 className="text-4xl font-bold text-blue-500 my-6 font-mono">
           Read full Blogs
         </h1>
       </div>
       <section className="mb-32 text-gray-800">
         <img src={img} className="w-full shadow-lg rounded-lg mb-6" alt="" />

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
           Differences Between JavaScript vs Node JS
         </h1>

         <p className="text-justify">
           JavaScript is a programming language, which runs in web browsers.
           Whereas Node.js is an interpreter or running environment for
           JavaScript, which holds a lot of requiring libraries and all.
           JavaScript is basically one standard defining programming language;
           it can run any browser with a default browser running environment. It
           is a very strong language normally used for a web application on any
           verification or any specific business logic. We need to append in the
           screen without page refreshing. JavaScript also helps to use Ajax at
           any time, which helps us call any server-side script for given
           dynamic data based on the requirement. It also helps with generating
           dynamic HTML tables based on business requirement. JQuery is one of
           the popular libraries to make comfortable use of JavaScript by
           avoiding to write a lot of code.
         </p>
         <p className='mt-3'>
           Node.js also holds a lot of relative libraries, which we normally use
           in javascript for general purpose programming language. It is
           actually a kind of environment or interpreter that can represent
           JavaScript or run any javascript program. It mainly helps us execute
           some non-blocking operation like some operating system special
           information like certificate details or hardware details; we may use
           node js on the same, which help us do it, and JavaScript normal
           programming will not help us on the same. Normally all browsers have
           a JavaScript engine that helps us to run javascript in a web browser.
           Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome)
           are some popular javascript engine using verities browsers. But node
           js is using the V8 engine directly, with some libraries to do some
           I/O or networking operations. It actually helps us use JavaScript
           from outside of the browser, like creating, writing or executing one
           shell script, some back-end services, or running on hardware.
         </p>
       </section>
     </div>
   );
};

export default BlogDetails;