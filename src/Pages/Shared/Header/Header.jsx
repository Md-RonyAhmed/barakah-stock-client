import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../../Assets/Images/logo/logo.png";
import img from '../../../Assets/Images/Others/images.png';
import auth from "../../../firebase.init";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
    toast.error("Oopps! you are Logged Out!");
  };

  return (
    <div className="px-2 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 bg-blue-900 sticky-top shadow-black shadow-sm">
      <div className="relative flex items-center justify-between">
        <div className="flex items-center">
          <img className="mr-0" height="65px" width="65px" src={logo} alt="" />
          <Link to="/" className="inline-flex items-center mr-8 ml-0">
            <span className="ml-2 text-4xl text-yellow-500 hover:text-white italic">
              Stocks
            </span>
          </Link>
        </div>
        <ul className="items-center hidden space-x-5 lg:flex">
          <li>
            <Link
              to="/"
              className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-yellow-500 hover:border-b-2 hover:border-orange-500 hover:pb-1"
            >
              Home
            </Link>
          </li>
          <li>
            <a
              href="/#products"
              className="mr-0 pr-0 font-medium tracking-wide text-white transition-colors duration-200 hover:text-yellow-500 hover:border-b-2 hover:border-orange-500 hover:pb-1"
            >
              Products
            </a>
          </li>

          {user ? (
            <li className="space-x-5">
              {user ? (
                <Link
                  to="/manage"
                  className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-yellow-500 hover:border-b-2 hover:border-orange-500 hover:pb-1"
                >
                  Manage
                </Link>
              ) : (
                ""
              )}

              {user ? (
                <Link
                  to="/add"
                  className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-yellow-500 hover:border-b-2 hover:border-orange-500 hover:pb-1"
                >
                  Add
                </Link>
              ) : (
                ""
              )}

              {user ? (
                <Link
                  to="/myproducts"
                  className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-yellow-500 hover:border-b-2 hover:border-orange-500 hover:pb-1"
                >
                  My Products
                </Link>
              ) : (
                ""
              )}
            </li>
          ) : (
            ""
          )}

          <li>
            <a
              href="/#dealers"
              className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-yellow-500 hover:border-b-2 hover:border-orange-500 hover:pb-1"
            >
              Dealers
            </a>
          </li>
          <li>
            <a
              href="/#contact"
              className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-yellow-500 hover:border-b-2 hover:border-orange-500 hover:pb-1"
            >
              Contact
            </a>
          </li>
          <li>
            <Link
              to="/blogs"
              className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-yellow-500 hover:border-b-2 hover:border-orange-500 hover:pb-1"
            >
              Blogs
            </Link>
          </li>
          <li className="mr-0 pr-0">
            {user ? (
              <button
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-3xl text-sm px-3 py-2 text-center"
                onClick={handleSignOut}
              >
                LogOut
              </button>
            ) : (
              <Link
                to="/login"
                className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-yellow-500 hover:border-b-2 hover:border-orange-500 hover:pb-1"
              >
                LogIn
              </Link>
            )}
          </li>
          {user?<p className="text-white rounded border-yellow-500 border-2 px-2 py-1">
            {user ? user.displayName.slice(0, 8) : ""}
          </p>:''}
          {user ? (
            <img
              width="30px"
              className="w-8 h-8 rounded-full cursor-pointer"
              src={
                user ? (
                  user.photoURL
                ) : (
                  <img
                    width="30px"
                    className=" ml-0 pl-0 rounded-full"
                    src={img}
                    alt=""
                  />
                )
              }
              alt=""
            />
          ) : (
            ""
          )}
        </ul>
        <div className="lg:hidden">
          <button
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-yellow-500" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-10">
              <div className="p-5 bg-blue-800 border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <a href="/" className="inline-flex items-center">
                      <img
                        className="mr-0"
                        height="65px"
                        width="65px"
                        src={logo}
                        alt=""
                      />
                    </a>
                  </div>
                  <div>
                    <button
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-yellow-500" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4 text-center">
                    <li>
                      <Link
                        to="/"
                        className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-yellow-500 hover:bg-slate-200 p-4 block"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <a
                        href="/#products"
                        className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-yellow-500 hover:bg-slate-200 p-4 block"
                      >
                        Products
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#dealers"
                        className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-yellow-500 hover:bg-slate-200 p-4 block"
                      >
                        Dealers
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#contact"
                        className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-yellow-500 hover:bg-slate-200 p-4 block"
                      >
                        Contact
                      </a>
                    </li>
                    <li>
                      <Link
                        to="/blogs"
                        className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-yellow-500 hover:bg-slate-200 p-4 block"
                      >
                        Blogs
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/login"
                        className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-yellow-500 hover:bg-slate-200 p-4 block"
                      >
                        LogIn
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
