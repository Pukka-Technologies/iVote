import React from "react";
import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav>
      <div className="flex flex-row justify-around text-white pt-9 font-text cursor-pointer">
        <div className="font-extrabold uppercase text-2xl">Logo</div>
        <div>
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
