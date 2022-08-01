import React from 'react'
import {AiOutlineUser} from "react-icons/ai"
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav>
      <div className='flex flex-row justify-around'>
        <div className="font-bold uppercase text-2xl">Logo</div>
        <div>
          <ul className='flex flex-row gap-8 text-lg'>
            <li>Home</li>
            <li>Terms and Conditions</li>
            <li>Contests</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className='flex flex-row gap-2 text-lg'>
            <AiOutlineUser/>
            <AiOutlineSearch/>
        </div>
      </div>
    </nav>
  );
}

export default Navbar