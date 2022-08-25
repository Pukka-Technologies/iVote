import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <section className="bg-[url(/assets/header-bg.jpg)] h-screen bg-no-repeat bg-center bg-cover relative z-10">
      <div className="bg-black h-screen opacity-60 absolute w-full"></div>
      <div className="z-20 relative">
        <Navbar />
        <div className="items-center 2xl:pt-40 pt-20 flex flex-col justify-center">
          <div className=" text-white font-text flex flex-col items-center">
            <h1 className="lg:text-7xl text-5xl font-extrabold md:w-8/12 px-5 md:px-0 text-center">
              Event Execution with
              <span className="text-green-400"> Media Billo</span>
            </h1>
            <p className="lg:text-xl text-lg pt-7 pb-7 md:w-7/12 w-10/12 text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <div className="flex md:gap-6 gap-3 mb-20 md:mb-0">
              <button className="bg-green-400 px-[1.5em] py-[0.7em] lg:text-xl">
                Get Started
              </button>
              <button className="bg-green-400 px-[1.5em] py-[0.7em] lg:text-xl">
                Contestants
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
