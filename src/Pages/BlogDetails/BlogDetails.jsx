import React from 'react';
import img1 from "../../Assets/Images/Blog/Nodejs-vs-Javascript-min.webp";
import img2 from "../../Assets/Images/Blog/images.png";
import img3 from '../../Assets/Images/Blog/images1.jpg';
import img4 from '../../Assets/Images/Blog/jwt.jpg';
const BlogDetails = () => {
   return (
     <div className="container my-16 px-6 mx-auto mt-3">
       <div className="border-l-4 mb-6 border-blue-800 p-1 ml-4 pl-2 bg-blue-100">
         <h1 className="text-4xl font-bold text-blue-500 my-6 font-mono">
           Read full Blogs
         </h1>
       </div>
       <section className="mb-32 text-gray-800">
         <div className="text-red-600 text-xl mb-2 flex items-center font-medium">
           Web Technology
         </div>
         <img src={img1} className="w-full shadow-lg rounded-lg mb-6" alt="" />

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
         <p className="mt-3">
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
       <section className="mb-32 text-gray-800">
         <div className="text-blue-600 text-xl mb-4 flex items-center font-medium">
           Backend Technology
         </div>
         <img src={img2} className="w-full shadow-lg rounded-lg mb-6" alt="" />

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
               Published <u>15.07.2022</u> by{" "}
             </span>
             <a href="#!" className="font-medium">
               Anna Maria Doe
             </a>
           </div>
         </div>

         <h1 className="font-bold text-3xl mb-6">
           When should you use Node JS and when should you use mongoDB
         </h1>

         <p className="text-justify">
           Nodejs is a Javascript engine that you can write any application you
           want with (by programming in the Javascript language). It runs your
           Javascript code. Most commonly, it is used to build servers that can
           respond to web requests, though it can be used for lots of other
           types of code too.
         </p>
         <p className="mt-3">
           MongoDB is a database engine. Code within some application or server
           uses MongoDB to save, query or update data in a database. There are
           many web servers built with nodejs that will then use MongoDB for
           storing data. MongoDB offers an API library that runs within a Nodejs
           application to give you programmatic access to MongoDB so you can
           create databases and then add, query, update or delete data from the
           MongoDB database. MongoDB also has API libraries for other
           programming environments such as Python, Java, etc... These two
           technologies are for different parts of a typical web server system.
           You don't substitute one for the other. Instead, you can use them
           together.
         </p>
         <p className="mt-3">
           Any project needs a programming environment and a runtime library
           that offers you basic programming tools/support and can compile
           and/or interpret your code. Nodejs is such as tool for the Javascript
           programming language. There are other similar tools for other
           languages such as Python, Java, PHP, C#, C++, Go, etc... So, if you
           want to write some kind of stand-alone program or server in
           Javascript, then you can use nodejs for it.
         </p>
         <p className="mt-3">
           If your application needs the ability to persistently store data in a
           way that you can efficiently query or update it later, then you would
           typically use some form of database. There are dozens of popular
           databases. MongoDB is one such database. MariaDB, MySql, CouchDB,
           DynamoDB (on AWS), Postgres are examples of other databases.
           Different databases have different strengths (things they are best
           at) and different ways of using them so it's a whole different
           question to choose the right/best database for what you're doing.
         </p>
       </section>
       <section className="mb-32 text-gray-800">
         <div className="text-yellow-600 text-xl mb-4 flex items-center font-medium">
           Database Technology
         </div>
         <img src={img3} className="w-full shadow-lg rounded-lg mb-6" alt="" />
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
           Differences between SQL and NoSQL databases
         </h1>

         <p className="text-justify">
           When choosing a modern database, one of the biggest decisions is
           picking a relational (SQL) or non-relational (NoSQL) data structure.
           While both are viable options, there are key differences between the
           two that users must keep in mind when making a decision. Here, we
           break down the most important distinctions and discuss the best SQL
           and NoSQL database systems available.
         </p>
         <p className="mt-3">
           The five critical differences between SQL vs NoSQL are: SQL databases
           are relational, NoSQL databases are non-relational. SQL databases use
           structured query language and have a predefined schema. NoSQL
           databases have dynamic schemas for unstructured data. SQL databases
           are vertically scalable, while NoSQL databases are horizontally
           scalable. SQL databases are table-based, while NoSQL databases are
           document, key-value, graph, or wide-column stores. SQL databases are
           better for multi-row transactions, while NoSQL is better for
           unstructured data like documents or JSON.
         </p>
       </section>
       <section className="mb-32 text-gray-800">
         <div className="text-blue-600 text-xl mb-4 flex items-center font-medium">
           Authentication
         </div>
         <img src={img4} className="w-full shadow-lg rounded-lg mb-6" alt="" />

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
           What is the purpose of JWT and how does it work
         </h1>

         <p className="text-justify">
           JWT, or JSON Web Token, is an open standard used to share security
           information between two parties — a client and a server. Each JWT
           contains encoded JSON objects, including a set of claims. JWTs are
           signed using a cryptographic algorithm to ensure that the claims
           cannot be altered after the token is issued.
         </p>
         <p className="mt-3">
           JSON stands for JavaScript Object Notation and is a text-based format
           for transmitting data across web applications. It stores information
           in an easy-to-access manner, both for developers and computers. It
           can be used as a data format by any programming language and is
           quickly becoming the preferred syntax for APIs, surpassing XML.
         </p>
         <p className="mt-3">
           Now that you understand JSON as a data text format, you may be
           wondering What are tokens? To put it simply, a token is a string of
           data that represents something else, such as an identity. In the case
           of authentication, a non-JWT based token is a string of characters
           that allow the receiver to validate the sender’s identity. The
           important distinction here is lack of meaning within the characters
           themselves.
         </p>
         <p className="mt-3">
           JWTs differ from other web tokens in that they contain a set of
           claims. Claims are used to transmit information between two parties.
           What these claims are depends on the use case at hand. For example, a
           claim may assert who issued the token, how long it is valid for, or
           what permissions the client has been granted. A JWT is a string made
           up of three parts, separated by dots (.), and serialized using
           base64. In the most common serialization format, compact
           serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.
           Once decoded, you will get two JSON strings: The header and the
           payload. The signature. The JOSE (JSON Object Signing and Encryption)
           header contains the type of token — JWT in this case — and the
           signing algorithm. The payload contains the claims. This is displayed
           as a JSON string, usually containing no more than a dozen fields to
           keep the JWT compact. This information is typically used by the
           server to verify that the user has permission to perform the action
           they are requesting. There are no mandatory claims for a JWT, but
           overlaying standards may make claims mandatory. For example, when
           using JWT as bearer access token under OAuth2.0, iss, sub, aud, and
           exp must be present. some are more common than others. The signature
           ensures that the token hasn’t been altered. The party that creates
           the JWT signs the header and payload with a secret that is known to
           both the issuer and receiver, or with a private key known only to the
           sender. When the token is used, the receiving party verifies that the
           header and payload match the signature.
         </p>
       </section>
     </div>
   );
};

export default BlogDetails;