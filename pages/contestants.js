import React from "react";
import Navbar from "../components/Navbar";
const conts = [2,3,4,5,6,7,8,9,1]
const Contestantpage = () => {
  return (
    <div >
      <div className="bg-gradient-to-r from-green-400 to-green-600  ">
        <Navbar />
      </div>

      <div className="p-2 my-5 font-bold bg-gray-200 border-b">
        <p className="">HOME/EVENTS/CONTESTANTS</p>
      </div>

      <div className="py-2  flex flex-wrap justify-center">
        <div className="min-h-screen  flex justify-center items-center py-5 px-10 w-full mx-10">
          <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-10 space-y-4 md:space-y-0 ">
            {/* FIRST CARD STARTS HERE */}
            {
              conts.map(cont => (
                <div className="max-w-sm bg-white px-4 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500  ">
                {/* <h3 className="mb-3 text-xl font-bold text-black-600">
                  MISS WORLD 2021
                </h3> */}
                <div className="relative">
                  {/* CONTESTANTS IMAGE GOES HERE */}
                  <div className="w-full h-80  rounded-xl">
                    <img
                      className="w-full h-full object-contain"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                      alt="Colors"
                    />
                  </div>
  
                  <div className="text-center pt-2">
                    <button className="w-22  p-1 flex items-center justify-center space-x-2  bg-gradient-to-r from-green-400 to-green-600 transform hover:scale-110 rounded-md transition ease-in duration-200 focus:outline-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6  text-white font-bold"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                        />
                      </svg>
                      <span className="uppercase text-white font-semibold">
                        Vote
                      </span>
                    </button>
                  </div>
                </div>
                <h1 className="mt-4 text-gray-800 text-l font-bold cursor-pointer text-center">
                  AKUA FORSON
                </h1>
  
                <div className="my-4">
                  <div className="flex   items-center">
                    <p className="pl-2 m-1items-center">CODE:</p>
                    <span className="text-gray-400 m-1 flex-1">9560</span>
                    <p className=" m-1 ml-2 " >VOTES:</p>
                    <span className="text-gray-400 flex">331</span>
                  </div>
                </div>
              </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contestantpage;