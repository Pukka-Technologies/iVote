import React from "react";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Aboutnav from "../components/Aboutnav";

const ContactUs = () => {
  return (
    <>
      <div className="font-text md:min-h-screen">
        <Aboutnav/>
        <Contact />
      </div>
      <Footer/>
    </>
  );
};

export default ContactUs;
