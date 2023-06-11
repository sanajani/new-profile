// // import { useState } from "react"
import { Link } from "react-router-dom";

const Header = () => {
  // const []
  return (
    <header className="h-screen lg:min-h-[1000px] lg:max-w-[90%] mg:min-h-[700px] md:max-w-[80%] w-full  mx-auto text-center flex justify-center items-center relative">
      <section className="flex justify-center items-center h-full relative top-28">
        <div className="absolute top-28 sm:top-12 md:top-12 lg:top-16 text-4xl w-full z-10">
          <h1 className="text-white w-full flex flex-col gap-2 md:gap-4 ">
            <span className="text-2xl mb-2 font-bold text-gray-300">
              Hello, this is
            </span>
            <span className="lg:text-[5rem] md:text-[3.8rem] text-[3rem]">
              Sanaullah Mobini
            </span>
          </h1>
        </div>
        <section className="relative">
          <div className="overflow-hidden w-[400px] h-[400px] sm:w-[520px] sm:h-[520px]  md:w-[700px] md:h-[700px] border-gray-300 border-2 rounded">
            <img
              className="w-full object-cover brightness-50"
              src="./assets/sana_5.jpg"
              alt="png photosfrom"
            />
          </div>
          <div className="absolute bottom-8 lg:bottom-14 text-gray-100 font-medium text-center text-base md:text-[1.2rem] w-full tracking-wide">
            <p>I am working as a programmer web designer </p>
            <p>and developer for 2 years I love to design and make </p>
            <p> new web experiences for the people.</p>
            <Link
              to="/project"
              className=" inline-block relative top-3 lg:top-4 border rounded-md border-gray-400 p-1 md:py-3 bg-gray-400 px-10 md:px-20 text-[#262626] text-xl md:text-2xl font-normal tracking-wide"
            >
              See My Works
            </Link>
          </div>
        </section>
      </section>
    </header>
  );
};

export default Header;