import React from "react";
import {AiOutlineUser} from "react-icons/ai"
import { AiOutlineSearch } from "react-icons/ai";
const EventNav = () => {
  return (
    <div>
      <nav>
        <div className="flex flex-row justify-around text-white pt-9">
          <div className="font-bold uppercase text-2xl">Logo</div>
          <div>
            <ul className="flex flex-row gap-8 text-lg">
              <li>Home</li>
              <li>Schedules</li>
              <li>Contests</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="flex flex-row gap-2 text-lg">
            <AiOutlineUser />
            <AiOutlineSearch />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default EventNav;
