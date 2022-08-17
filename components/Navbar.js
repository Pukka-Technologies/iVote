import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineSearch, AiOutlineBars, AiOutlineUser, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)


  let menu 

  if (showMenu){
    menu = (
      <div className="text-white w-full top-0 left-0 h-screen fixed bg-emerald-900 flex flex-col items-center gap-8 text-lg font-text animate-slide-in">
        <AiOutlineClose onClick={() => setShowMenu(false)} />
        <ul className="flex flex-col gap-8 text-center">
          <Link href={"/"}>
            <li>Home</li>
          </Link>
          <Link href={"/events"}>
            <li>Events</li>
          </Link>
          <li>Terms and Conditions</li>
          <li>Contact Us</li>
        </ul>
      </div>
    );
  }

  return (
    <nav>
      <div className="flex flex-row md:justify-around justify-between px-4 md:px-0 text-white pt-9 font-text cursor-pointer">
        <div className="font-extrabold uppercase md:text-2xl text-lg">Logo</div>
        <div className="hidden md:inline-block">
          <ul className="flex flex-row gap-8 text-lg">
            <Link href={"/"}>
              <li>Home</li>
            </Link>
            <Link href={"/events"}>
              <li>Events</li>
            </Link>
            <li>Terms and Conditions</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="flex flex-row gap-2 text-lg">
          <AiOutlineUser />
          <AiOutlineSearch />
          <span className="md:hidden"><AiOutlineBars onClick={() => setShowMenu(true)}/></span>
        </div>
      </div>

      {menu}
    </nav>
  );
};

export default Navbar;
