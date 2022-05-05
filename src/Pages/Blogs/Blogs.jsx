import React from "react";
import { Link} from "react-router-dom";
import img1 from '../../Assets/Images/Blog/Nodejs-vs-Javascript-min.webp';
import img2 from '../../Assets/Images/Blog/images.png';
import img3 from '../../Assets/Images/Blog/images1.jpg';
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
              <img
                src="https://mdbootstrap.com/img/new/standard/city/033.jpg"
                className="w-full"
                alt="Louvre"
              />
              <a href="#!">
                <div
                  className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                  style={{ backgroundColor: `rgba(251, 251, 251, 0.2)` }}
                ></div>
              </a>
            </div>
          </div>

          <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6">
            <h3 className="text-2xl font-bold mb-4">Exhibition in Paris</h3>
            <div className="text-blue-600 text-sm mb-4 flex items-center font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 h-4 mr-2"
              >
                <path
                  fill="currentColor"
                  d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"
                />
              </svg>
              Art
            </div>
            <p className="text-gray-500">
              Duis sagittis, turpis in ullamcorper venenatis, ligula nibh porta
              dui, sit amet rutrum enim massa in ante. Curabitur in justo at
              lorem laoreet ultricies. Nunc ligula felis, sagittis eget nisi
              vitae, sodales vestibulum purus. Vestibulum nibh ipsum, rhoncus
              vel sagittis nec, placerat vel justo. Duis faucibus sapien eget
              tortor finibus, a eleifend lectus dictum. Cras tempor convallis
              magna id rhoncus. Suspendisse potenti. Nam mattis faucibus
              imperdiet. Proin tempor lorem at neque tempus aliquet. Phasellus
              at ex volutpat, varius arcu id, aliquam lectus. Vestibulum mattis
              felis quis ex pharetra luctus. Etiam luctus sagittis massa, sed
              iaculis est vehicula ut.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
