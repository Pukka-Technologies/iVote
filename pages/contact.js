import React from "react";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactUs = () => {
  return (
    <>
      <div className="font-text md:min-h-screen">
        <Navbar />
        <Contact />
      </div>
      <Footer/>
    </>
  );
};

export default ContactUs;
