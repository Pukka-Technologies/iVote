import Link from "next/link";
import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { HiLockClosed } from "react-icons/hi";

const Login = () => {
  return (
    <div class="bg-white   w-screen h-screen flex items-center justify-around flex-wrap">
      <div>
        <div class='flex items-center  justify-around'>
        <img src="/assets/logo.jpg"  alt="Logo"  class='w-[100px] mb-5'/>
        </div>
      
      <form class="bg-gray-200  w-[400px] py-5 px-3 flex items-center justify-center flex-col gap-3">
        <div class="flex items-center  w-[80%] bg-white py-1 gap-2">
          <BsFillPersonFill className="text-xl ml-1" />

          <input
            id="username"
            name="username"
            type="text"
            autoComplete="off"
            required
            placeholder="username"
            class="lg:w-full md:w-[20rem]  outline-none bg-transparent  border-solid border-[1px] border-cyan-800 focus-visible:border-gray-900"
          />
        </div>

        <div class="flex items-center w-[80%] bg-white py-1 gap-2 ">
          <HiLockClosed className="text-xl ml-1" />

          <input
            id="password"
            name="password"
            type="password"
            placeholder="password"
            required
            class="lg:w-full md:w-[20rem]  outline-none bg-transparent  border-solid border-[1px] border-cyan-800 focus-visible:border-gray-900"
          />
        </div>

        <div >
          <Link href={"forgotpassword"}>
            <h3 class="text-[darkslategray]  text-sm cursor-pointer md:mr-48 mr-[12rem]">
              Forgot Password?
            </h3>
          </Link>
        </div>
        <div class="mt-4  w-[80%]">
          <button class="bg-[#001212] lg:w-full py-2 md:w-[20rem] w-[18.92rem] text-white ">
            LOGIN
          </button>
        </div>
      </form>
      </div>
      
    </div>
  );
};

export default Login;
