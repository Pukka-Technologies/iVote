import "aos/dist/aos.css";

import AOS from "aos";
import Link from "next/link";
import Navbar from "./Navbar";
import React from "react";
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    // here you can add aos options
    AOS.init();
  }, []);
  return (
    <section className="bg-[url('../public/assets/header-bg.jpg')] h-screen bg-no-repeat bg-center bg-cover relative z-10">
      <div className="bg-black h-screen opacity-50 absolute w-full"></div>
      <div className="z-20 relative h-[90%]">
        <Navbar />
        {/* <div>
        </div> */}
        <div className="flex flex-col items-center h-full justify-center">
          <div
            className=" text-white font-text flex flex-col items-center"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
          >
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
                Explore
              </button>
              <Link href={"/events"} passHref>
                <button className="bg-green-400 px-[1.5em] py-[0.7em] lg:text-xl">
                  Ongoing Events
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
