import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineSearch, AiOutlineBars, AiOutlineUser, AiOutlineClose } from "react-icons/ai";

const Aboutnav = () => {
  const [showMenu, setShowMenu] = useState(false)


  let menu 

  if (showMenu){
    menu = (
      <div className="text-black w-full top-0 left-0 h-screen fixed bg-emerald-900 flex flex-col gap-8 text-lg font-text animate-slide-in">
        <div className="flex justify-between px-[1em] pb-[0.8em] mt-[1.5em] mb-[3em] border-b border-gray-500">
          <h4 className="font-bold">iVote</h4>
          <AiOutlineClose onClick={() => setShowMenu(false)} />
        </div>
        <ul className="flex flex-col gap-8 text-center items-center">
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/events"}>
            <li>Events</li>
          </Link>
          <li>Contact Us</li>
         <li>About Us</li>
         
        </ul>
        {/* <div className="flex items-end">
          <ul className="flex flex-row">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div> */}
      </div>
    );
  }

  return (
    <nav>
      <div className="flex flex-row md:justify-around justify-between px-4 md:px-0 text-black pt-9 font-text cursor-pointer">
        <div className="font-extrabold uppercase md:text-2xl text-lg">Logo</div>
        <div className="hidden md:inline-block">
          <ul className="flex flex-row gap-8 text-lg">
            <Link href={"/"}>
              <li>Home</li>
            </Link>
            <Link href={"/events"}>
              <li>Events</li>
            </Link>
          
            <li>About Us</li>
            
        
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="flex flex-row gap-2 text-lg">
          {/* <AiOutlineUser /> */}
          {/* <AiOutlineSearch /> */}
          <span className="md:hidden text-lg"><AiOutlineBars onClick={() => setShowMenu(true)}/></span>
        </div>
      </div>

      {menu}
    </nav>
  );
};

export default Aboutnav;
