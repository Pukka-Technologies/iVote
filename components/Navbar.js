import React from "react";
import Link from "next/link";
import { AiOutlineSearch, AiOutlineBars, AiOutlineUser } from "react-icons/ai";

const Navbar = () => {
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
          <span className="md:hidden"><AiOutlineBars/></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
