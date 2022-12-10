import React from "react";
import Logo from "../../assets/Images/logo.webp";
import { BsSearch } from "react-icons/bs";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="relative w-full flex flex-wrap items-center justify-between py-4 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700  navbar navbar-expand-lg navbar-light">
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <button
            className="navbar-toggler text-gray-500 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="bars"
              className="w-6"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
              ></path>
            </svg>
          </button>
          <div
            className="collapse navbar-collapse flex-grow items-center"
            id="navbarSupportedContent"
          >
            <a
              className=" flex items-center  text-gray-900  hover:text-gray-900  focus:text-gray-900  mt-2  lg:mt-1  mr-1"
              href="#"
            >
              <img src={Logo} style={{ height: 15 }} alt="" loading="lazy" />
            </a>
            {/* Left links */}
            <ul className="navbar-nav flex flex-col pl-0 list-style-none mx-auto">
              <li className="nav-item p-2">
                <Link
                  className="nav-link  font-semibold text-gray-900 hover:text-gray-700 focus:text-emerald-600 p-0"
                  to="/"
                >
                  HOME
                </Link>
              </li>
              <li className="nav-item p-2">
                <Link
                  className="nav-link font-semibold  text-gray-900 hover:text-gray-700 focus:text-emerald-600 p-0"
                  to="/products"
                >
                  SHOP
                </Link>
              </li>
              <li className="nav-item p-2">
                <Link
                  className="nav-link font-semibold  text-gray-900 hover:text-gray-700 focus:text-emerald-600 p-0"
                  to="/about"
                >
                  ABOUT
                </Link>
              </li>
              <li className="nav-item p-2">
                <Link
                  className="nav-link font-semibold  text-gray-900 hover:text-gray-700 focus:text-emerald-600 p-0"
                  to="contact"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
            {/* Left links */}
          </div>
          {/* Collapsible wrapper */}
          {/* Right elements */}
          <div className="flex items-center relative">
            {/* Icon */}

            <a
              className=" text-2xl text-gray-500 hover:text-gray-700 focus:text-gray-700 mr-4"
              href="#"
            >
              <BsSearch />
            </a>

            <a
              className="text-gray-500 text-2xl hover:text-gray-700 focus:text-gray-700 mr-4"
              href="#"
            >
              <div className="relative">
                <HiOutlineShoppingCart />
                <span className="absolute top-[-10px] left-3 text-xs inline-block py-1 px-1.5 leading-none text-center whitespace-nowrap align-baseline  bg-blue-600 text-white rounded-full">
                  0
                </span>
              </div>
            </a>
            <a
              className="text-2xl text-gray-500  hover:text-gray-700 focus:text-gray-700 mr-4"
              href="#"
            >
              <MdOutlineFavoriteBorder />
            </a>

            <div className="dropdown relative">
              <a
                className="dropdown-toggle flex items-center hidden-arrow"
                href="#"
                id="dropdownMenuButton2"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                  className="rounded-full"
                  style={{ height: 35, width: 35 }}
                  alt=""
                  loading="lazy"
                />
              </a>
              <ul
                className=" dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none left-auto right-0"
                aria-labelledby="dropdownMenuButton2"
              >
                <li>
                  <a
                    className=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                    href="#"
                  >
                    Action
                  </a>
                </li>
                <li>
                  <a
                    className=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                    href="#"
                  >
                    Another action
                  </a>
                </li>
                <li>
                  <a
                    className=" dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 "
                    href="#"
                  >
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Right elements */}
        </div>
      </nav>
    </div>
  );
}
