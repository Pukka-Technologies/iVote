import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <section className="bg-header-img h-screen bg-no-repeat bg-center bg-cover relative z-10">
      <div className="bg-black h-screen opacity-60 absolute w-full"></div>
      <div className="z-20 relative">
        <Navbar />
        <div className="items-center pt-40 flex flex-col justify-center">
          <div className=" text-white font-text flex flex-col items-center">
            <h1 className="text-7xl font-extrabold w-8/12 text-center after:bg-green-400 after:block after:w-16 after:h-1 after:absolute after:top-96 after:left-[49%]">
              Event Execution with 
              <span className="text-green-400"> Media Billo</span>
            </h1>
            <p className="text-xl pt-7 pb-7 w-7/12 text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <div className='flex gap-6'>
              <button className="bg-green-400 px-6 py-3 text-xl">
                Get Started
              </button>
              <button className="bg-green-400 px-6 py-3 text-xl">
                Contestants
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header