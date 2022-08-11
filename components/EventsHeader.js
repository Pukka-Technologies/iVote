import React from 'react'
import Navbar from './Navbar';


const EventsHeader = () => {
  return (
    <section className="h-[60vh] bg-header-img bg-no-repeat bg-center bg-cover relative z-10">
      <div className="bg-black h-[60vh] opacity-60 absolute w-full"></div>
      <div className="z-20 relative">
        <Navbar/>
        <div className="flex flex-col items-center justify-center pt-24">
          <h1 className="text-7xl font-extrabold w-8/12 text-center text-white after:bg-green-400 after:block after:w-16 after:h-1 after:absolute after:top-64 after:left-[49%]">
            Upcoming <span className="text-green-400">Events</span>
          </h1>
        </div>
      </div>
    </section>
  );
}

export default EventsHeader