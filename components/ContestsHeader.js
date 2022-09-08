import React, { useEffect } from 'react'
import Navbar from "../components/Navbar";
import { useStateValue } from '../context/StateProvider';

const ContestsHeader = ({event}) => {
  const [{events}, dispatch] = useStateValue()

  return (
    <section 
    style={{backgroundImage: `url(${events.find(e => e._id === event)?.imageURL || "/assets/header-bg.jpg"} )`}}
    className={`h-[60vh]  bg-no-repeat bg-center bg-cover relative z-10`}>
      <div className="bg-black h-[60vh] opacity-60 absolute w-full"></div>
      <div className="z-20 relative font-text">
        <Navbar />
        <div className="flex flex-col items-center justify-center pt-24">
          <h1 className="lg:text-7xl text-5xl px-1 font-extrabold md:w-8/12 text-center text-green-400 after:bg-green-400 after:md:block after:hidden after:w-16 after:h-1 after:absolute after:lg:top-64 after:md:top-56 after:left-[49%]">
            Contestants
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center pt-10">
          <h1 className="lg:text-5xl text-3xl px-1 font-extrabold md:w-8/12 text-center text-white after:bg-green-400 after:md:block after:hidden after:w-16 after:h-1 after:absolute after:lg:top-64 after:md:top-56 after:left-[49%]">
            {
              // find event by id
              events.find(e => e._id === event)?.name || 'No Event'
            }
          </h1>
        </div>
      </div>
    </section>
  );
}

export default ContestsHeader