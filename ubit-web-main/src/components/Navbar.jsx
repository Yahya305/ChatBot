import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return ( 
    <nav className="px-2 sm:px-4 py-2.5 bg-blue-600">
      {/* <div className="container flex flex-col gap-4 sm:flex-row items-start sm:items-center justify-between mx-auto"> */}
      <div className="flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="flex items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Microsoft_Cortana_transparent.svg/1200px-Microsoft_Cortana_transparent.svg.png"
            className="h-6 mr-3 sm:h-9 outline-white"
            alt="Flowbite Logo"
          />
        </Link>
        <div className="w-2/3 sm:block sm:w-auto" id="navbar-default">
          <ul className="flex text-white ">
            <li className="flex items-center justify-evenly " >
              <Link
                to="/"
                className="py-2 pl-3 pr-4 "
              >
                Home
              </Link>
            </li>
            <li className="flex items-center justify-evenly " >
              <Link
                to="/history"
                className="py-2 pl-3 pr-4"
              >
                History
              </Link>
            </li>
            <li className="flex items-center justify-evenly " >
              <Link
                to="/about"
                className="py-2 pl-3 pr-4"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
