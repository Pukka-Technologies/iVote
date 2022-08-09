import React from 'react'
import {FaInstagram, FaYoutube, FaTwitter} from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-emerald-900 text-white py-10">
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
        <div>ⒸPukkaTech</div>
      </div>
    </footer>
  );
}

export default Footer