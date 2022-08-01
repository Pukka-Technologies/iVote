import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className="bg-header-img h-screen bg-no-repeat bg-center bg-cover relative z-10">
      <div className="bg-black h-screen opacity-30 absolute w-full"></div>
      <div className="z-20 relative">
        <Navbar />
        <div className="pt-56">
          <div className="flex flex-col justify-center items-center text-white">
            <h1 className="text-6xl font-bold">
              Seamless Contest Execution with Oshikii
            </h1>
            <p className="text-xl pt-2 pb-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <button className="bg-green-400 rounded-md px-6 py-3">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header