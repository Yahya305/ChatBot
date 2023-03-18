import React from "react";

const Footer = () => {
  return (
    <footer className=" w-full bg-blue-600">
      <div className="w-full mx-auto container md:p-6 p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-white sm:text-center">
          © 2023 &nbsp;
          <a href="https://mohammadabdullah.netlify.app/" className="hover:underline">
            Muhammad Abdullah &nbsp;
          </a>
          &nbsp; All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center text-white mt-3 text-sm  sm:mt-0">
          <li>
            <a href="mailto:saimyahya47@gmail.com" className="mr-4 hover:underline md:mr-6 ">
              Gmail
            </a>
          </li>
          <li>
            <a href="https://github.com/Yahya305" className="mr-4 hover:underline md:mr-6">
              Github
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/yahya-salman-37aa29263/" className="mr-4 hover:underline md:mr-6">
              Linkedin
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/yahya.salman.3597?mibextid=ZbWKwL" className="hover:underline">
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
