// import React from 'react'

import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" bg-[#1f1f1f] text-gray-300">
      <div className="flex flex-col sm:flex-row max-w-[1140px] items-center mx-auto py-10">
        <div className="mx-12 my-5 sm:w-1/3 sm:mr-12 sm:gap-x-12">
          <h1 className="text-4xl tracking-wide my-3 font-semibold  md:text-4xl">
            Sanajani
          </h1>
          <p className="text-base my-4 leading-5 font-medium">
            A freelance web designer and developer from Herat, Afghanistan. I
            always make websites that have unique designs and also has a good
            performance rate.
          </p>
        </div>
        <div className="my-5 w-full px-10 md:px-0  sm:w-1/4">
          <h2 className="text-3xl my-3 font-semibold  md:text-2xl w-full">
            Importent Links
          </h2>
          <ul>
            <li className="my-1">
              <Link to="/">Home</Link>
            </li>
            <li className="my-1">
              <Link to="/about">About</Link>
            </li>
            <li className="my-1">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="my-1">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="my-5 w-full px-10 sm:w-1/4">
          <h2 className="text-3xl my-3 font-semibold  md:text-2xl">
            Contact Info
          </h2>
          <ul>
            <li className="my-1">
              <Link to="#">797099060</Link>
            </li>
            <li className="my-1">
              <Link to="#">webdevfarsi@gmail.com</Link>
            </li>
            <li className="my-1">
              <Link to="#">64 metra, Herat, Afghanistan</Link>
            </li>
          </ul>
        </div>
        <div className="my-5 w-full sm:mb-12 px-10 sm:w-1/4">
          <h2 className="text-3xl my-3 font-semibold  md:text-2xl">
            Social Links
          </h2>
          <ul>
            <li className="my-1">
              <Link to="/facebook">Facebook</Link>
            </li>
            <li className="my-1">
              <Link to="#">Twitter</Link>
            </li>
            <li className="my-1">
              <Link to="#">Instagram</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="  bg-[#262626]">
        <p className="max-w-[1100px] pl-6 mx-auto py-3 text-base sm:text-[18px] ">
          <AiOutlineCopyrightCircle className="inline text-base mb-1" /> 2023 -
          Sanajani | Developed by Sanaullah Mobini
        </p>
      </div>
    </footer>
  );
};

export default Footer;
