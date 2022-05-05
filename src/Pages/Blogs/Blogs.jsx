import React from "react";
import { Link} from "react-router-dom";
import img1 from '../../Assets/Images/Blog/Nodejs-vs-Javascript-min.webp';
import img2 from '../../Assets/Images/Blog/images.png';
import img3 from '../../Assets/Images/Blog/images1.jpg';
import img4 from '../../Assets/Images/Blog/jwt.jpg';
const Blogs = () => {
  return (
    <div className="container my-24 px-6 mx-auto mt-3">
      <div className="border-l-4 mb-6 border-blue-800 p-1 ml-4 pl-2 bg-blue-100">
        <h1 className="text-4xl font-bold text-blue-500 my-6 font-mono">
          Read the latest Blogs
        </h1>
      </div>
      <section className="mb-32 text-gray-800">
        <div className="flex flex-wrap mb-12">
          <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0">
            <div
              className="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg"
              style={{ backgroundPosition: `${50}%` }}
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              <img src={img1} className="w-full" alt="Louvre" />
              <a href="#!">
                <div
                  className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                  style={{ backgroundColor: `rgba(251, 251, 251, 0.2)` }}
                ></div>
              </a>
            </div>
          </div>

          <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 mb-6 lg:pl-6">
            <h3 className="text-2xl font-bold mb-2">
              Difference between JavaScript and Node JS
            </h3>
            <div className="text-red-600 text-sm mb-2 flex items-center font-medium">
              Web Technology
            </div>
            <p className="text-gray-500 mb-4">
              JavaScript is a programming language, which runs in web browsers.
              Whereas Node.js is an interpreter or running environment for
              JavaScript, which holds a lot of requiring libraries and all.
            </p>
            <p className="text-gray-500">
              Node.js also holds a lot of relative libraries, which we normally
              use in javascript for general purpose programming language. It is
              actually a kind of environment or interpreter that can represent
              JavaScript or run any javascript program.
              <span className="text-blue-500 text-lg underline">
                click read more...
              </span>
            </p>
            <div className="w-36 mt-2">
              <Link
                to="/blogs/details"
                type="button"
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 uppercase"
              >
                Read more...
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap lg:flex-row-reverse mb-12">
          <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6 mb-6 lg:mb-0">
            <div
              className="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg"
              style={{ backgroundPosition: `${50}%` }}
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              <img src={img2} className="w-full" alt="Louvre" />
              <a href="#!">
                <div
                  className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                  style={{ backgroundColor: `rgba(251, 251, 251, 0.2)` }}
                ></div>
              </a>
            </div>
          </div>

          <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6">
            <h3 className="text-2xl font-bold mb-4">
              When should you use Node JS and when should you use mongoDB
            </h3>
            <div className="text-blue-600 text-sm mb-4 flex items-center font-medium">
              Backend Technology
            </div>
            <p className="text-gray-500 mb-4">
              Nodejs is a Javascript engine that you can write any application
              you want with (by programming in the Javascript language). It runs
              your Javascript code. Most commonly, it is used to build servers
              that can respond to web requests.
            </p>
            <p className="text-gray-500">
              MongoDB is a database engine. Code within some application or
              server uses MongoDB to save, query or update data in a database.
              <span className="text-blue-500 text-lg underline">
                click read more...
              </span>
            </p>
            <div className="w-36 mt-2">
              <Link
                to="/blogs/details"
                type="button"
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 uppercase"
              >
                Read more...
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0">
            <div
              className="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg"
              style={{ backgroundPosition: `${50}%` }}
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              <img src={img3} className="w-full" alt="Louvre" />
              <a href="#!">
                <div
                  className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                  style={{ backgroundColor: `rgba(251, 251, 251, 0.2)` }}
                ></div>
              </a>
            </div>
          </div>

          <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 mb-6 lg:pl-6">
            <h3 className="text-2xl font-bold mb-4">
              Differences between SQL and NoSQL databases.
            </h3>
            <div className="text-yellow-600 text-sm mb-4 flex items-center font-medium">
              Database Technology
            </div>
            <p className="text-gray-500 mb-4">
              SQL databases use structured query language and have a pre-defined
              schema for defining and manipulating data. SQL is one of the most
              versatile and widely used query languages available, making it a
              safe choice for many use cases.
            </p>
            <p className="text-gray-500">
              NoSQL databases have dynamic schemas for unstructured data, and
              the data is stored in many ways. You can use column-oriented,
              document-oriented, graph-based, or KeyValue store for your data.
              <span className="text-blue-500 text-lg underline">
                click read more...
              </span>
            </p>
            <div className="w-36 mt-2">
              <Link
                to="/blogs/details"
                type="button"
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 uppercase"
              >
                Read more...
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap lg:flex-row-reverse mb-12 mt-8">
          <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6 mb-6 lg:mb-0">
            <div
              className="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg"
              style={{ backgroundPosition: `${50}%` }}
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              <img src={img4} className="w-full" alt="Louvre" />
              <a href="#!">
                <div
                  className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                  style={{ backgroundColor: `rgba(251, 251, 251, 0.2)` }}
                ></div>
              </a>
            </div>
          </div>

          <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6">
            <h3 className="text-2xl font-bold mb-4">
              What is the purpose of JWT and how does it work
            </h3>
            <div className="text-blue-600 text-sm mb-4 flex items-center font-medium">
              Authentication
            </div>
            <p className="text-gray-500 mb-4">
              JWT, or JSON Web Token, is an open standard used to share security
              information between two parties — a client and a server. Each JWT
              contains encoded JSON objects, including a set of claims. JWTs are
              signed using a cryptographic algorithm to ensure that the claims
              cannot be altered after the token is issued.
            </p>
            <p className="text-gray-500">
              JWT is a string made up of three parts, separated by dots (.), and
              serialized using base64. In the most common serialization format,
              compact serialization, the JWT looks something like this:
              xxxxx.yyyyy.zzzzz.
              <span className="text-blue-500 text-lg underline">
                click read more...
              </span>
            </p>
            <div className="w-36 mt-2">
              <Link
                to="/blogs/details"
                type="button"
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 uppercase"
              >
                Read more...
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
