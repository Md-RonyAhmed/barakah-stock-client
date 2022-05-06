import React from "react";
import { Link } from "react-router-dom";
import banner1 from '../../../Assets/Images/Banner/banner1.jpg';
import banner3 from '../../../Assets/Images/Banner/banner3.jpg';
import banner4 from '../../../Assets/Images/Banner/banner4.jpg';
import banner5 from '../../../Assets/Images/Banner/banner5.jpg';
const Banner = () => {
  return (
    <>
      <div
        id="carouselExampleCrossfade"
        className="carousel slide carousel-fade relative"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active float-left w-full">
            <img
              src={banner3}
              className="block w-full md:h-[600px] h-[400px] blur-[1.5px] brightness-90 contrast-75"
              alt=""
            />
            <div className="carousel-caption block md:block absolute text-center">
              <h5 className="text-3xl md:text-6xl font-bold">
                Stocks most Beautiful <br />{" "}
                <span className="text-orange-500">Islamic products</span>
              </h5>
              <p className="text-lg md:text-xl text-white font-bold my-8">
                Here you can stocks the best Islamic products and instruments
                for your next business.
              </p>
              <div className="mx-auto w-36">
                <Link
                  to="/blogs"
                  type="button"
                  className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  EXPLORE NOW
                </Link>
              </div>
            </div>
          </div>
          <div className="carousel-item float-left w-full">
            <img
              src={banner1}
              className="block w-full md:h-[600px] h-[400px] blur-[1.5px] brightness-90 contrast-75"
              alt=""
            />
            <div className="carousel-caption block md:block absolute text-center">
              <h5 className="text-3xl md:text-6xl font-bold">
                Manage your Inventory <br />{" "}
                <span className="text-orange-500">After Register here</span>
              </h5>
              <p className="text-lg md:text-xl text-white font-bold my-8">
                After Completing Registration you can manage the Inventory for
                your future purposes.
              </p>
              <div className="mx-auto w-36">
                <Link
                  to="/login"
                  type="button"
                  className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  EXPLORE NOW
                </Link>
              </div>
            </div>
          </div>
          <div className="carousel-item float-left w-full">
            <img
              src={banner4}
              className="block w-full md:h-[600px] h-[400px] blur-[1.5px] brightness-90 contrast-75"
              alt=""
            />
            <div className="carousel-caption block md:block absolute text-center">
              <h5 className="text-3xl md:text-6xl font-bold">
                Read latest Blogs About{" "}
                <span className="text-orange-500">Science & Technology</span>
              </h5>
              <p className="text-lg md:text-xl text-white font-bold my-8">
                Here you Read the best and latest blogs that related to Islamic
                Business, Science & Technology.
              </p>
              <div className="mx-auto w-36">
                <Link
                  to="/login"
                  type="button"
                  className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  EXPLORE NOW
                </Link>
              </div>
            </div>
          </div>
          <div className="carousel-item float-left w-full">
            <img
              src={banner5}
              className="block w-full md:h-[600px] h-[400px] blur-[1.5px] brightness-90 contrast-75"
              alt=""
            />
            <div className="carousel-caption block md:block absolute text-center">
              <h5 className="text-3xl md:text-6xl font-bold">
                Find best Dealers <br />{" "}
                <span className="text-orange-500">From Local & Abroad</span>
              </h5>
              <p className="text-lg md:text-xl text-white font-bold my-8">
                Here you find the best local and abroad suppliers, they provide
                the best products and services for business.
              </p>
              <div className="mx-auto w-36">
                <Link
                  to="/login"
                  type="button"
                  className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  EXPLORE NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCrossfade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleCrossfade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Banner;
