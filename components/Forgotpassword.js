import React from "react";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Link from "next/link";

const Forgotpassword = () => {
  return (
    <div class="bg-white  w-screen h-screen flex items-center justify-around flex-wrap">
   
        <form class=" bg-gray-200 w-[400px] pt-4 md:pl-10 md:pr-10 pl-10 pr-10 ">
          <p class="lg:text-xl md:text-xl font-medium font-sans text-slate-900 pb-2 sm:text-xl">
          Enter  email to reset password
          </p>
      
          <div className="pt-2 pb-2">
            <input
              id="email"
              name="email-address"
              type="text"
         placeholder="Email address"
              autoComplete="off"
              required
              class="w-full h-10  outline-none pl-3  border-sky-900"
            />
          </div>
          <div class="mt-6">
            <button class="bg-[#001212] px-4 md:w-[12rem] sm:text-[16px] h-10 text-neutral-200 mb-8 float-right ">
           Get New Password
            </button>
          </div>

          <div class='flex  mt-16'>
            <AiOutlineArrowLeft className=" lg:mt-7 md:mt-7 mt-6"/>
            <Link href={"login"} >
            <h3 class="pt-5 text-[darkslategray] md:text-xl mb-4 ml-2 cursor-pointer">
           Log in
            </h3>
          </Link>
          </div>
        </form>
      
    </div>
  );
};

export default Forgotpassword;
