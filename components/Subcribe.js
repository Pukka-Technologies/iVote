import React from "react";

const Subcribe = () => {
  return (
    <div className="w-full h-[40vh]">
        <div className="mt-[7rem]"></div>
      <div className="md:w-[70%] w-full min-h-[20vh] px-7 m-auto rounded-lg bg-green-50 flex md:gap-x-3 gap-x-5 flex-row items-center justify-between">
        <div className="md:w-[60%] w-[50%]  flex flex-col items-start justify-center gap-y-2 ">
          <h1 className="text-2xl font-semibold text-left">Connect with us</h1>
          <p className="leading-6">
            Subcribe to get notification about new updates, information discount, etc.
          </p>
        </div >
        <div className="md:w-[40%]  w-[50%]  flex items-center justify-center">
            <div className="w-full py-2 px-1 flex  gap-x-1 justify-between bg-white focus:border  ">
            <input type="email" placeholder="Enter your email" className="w-full py-2  bg-transparent focus:border focus:border-solid focus:border-green-400 outline-none px-1 "/>
            <button className="bg-green-200 rounded px-2 py-1 text-sm font-semibold hover:bg-green-400 transition-all duration-75 ease-in-out">Continue</button>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Subcribe;
