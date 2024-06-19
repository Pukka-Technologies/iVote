import React from "react";
import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-emerald-900 text-white py-10 font-text">
      <div className="flex flex-col justify-center items-center">
        <div className="flex gap-5 pb-3">
          <p>
            <FaTwitter />
          </p>
          <p>
            <FaYoutube />
          </p>
          <p>
            <FaInstagram />
          </p>
        </div>
        <div className="text-center md:text-left">iVote Company Limited &copy; 2022 Limited not Limitations</div>
        <div className="text-center md:text-left">Powered By <span className="text-green-300 cursor-point mt-2">PUKKA TECHNOLOGIES</span></div>
        
      </div>
    </footer>
  );
};

export default Footer;
