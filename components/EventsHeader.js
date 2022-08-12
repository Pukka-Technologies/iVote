import React from "react";
import Navbar from "./Navbar";

const EventsHeader = () => {
  return (
    <section className="h-[60vh] bg-header-img bg-no-repeat bg-center bg-cover relative z-10">
      <div className="bg-black h-[60vh] opacity-60 absolute w-full"></div>
      <div className="z-20 relative font-text">
        <Navbar />
        <div className="flex flex-col items-center justify-center md:pt-24 pt-16">
          <h1 className="lg:text-7xl px-1 text-5xl font-extrabold md:w-8/12 text-center text-white after:bg-green-400 after:md:block after:hidden after:w-16 after:h-1 after:absolute after:lg:top-64 after:md:top-56 after:left-[49%]">
            Upcoming <span className="text-green-400">Events</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default EventsHeader;
