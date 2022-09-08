import React from "react";
import Navbar from "./Navbar";
import Partner from "./Partner";
import Subcribe from "./Subcribe";
import Team from "./Team";
import Footer from "./Footer";
import Aboutnav from "./Aboutnav";

const AboutUs = () => {
  const aboutImage = "/assets/aboutus-bg.png";
  return (
    <div>
      <div className="m-auto px-6 w-full h-full bg-green-50 ">
      <div className="text-black">
        <Aboutnav />
      </div>
      <div className="flex items-center justify-around flex-wrap">
        <div className=" basis-2/4 min-w-[300px]">
          <h1 className="text-4xl py-3 ">
            Who <span className="text-green-500">are we...</span>
          </h1>
          <p className="leading-9">
         
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            reprehenderit recusandae deleniti numquam sunt beatae harum magnam
            debitis maxime excepturi tempora rerum temporibus officiis
            repudiandae neque similique nostrum, odit, est officia eius eum
            dolore? Laboriosam ab et reiciendis illum quia consequatur possimus
            reprehenderit eaque natus. Consectetur nobis nam dolor explicabo aut
            quis reprehenderit ea veritatis! Tempore?
          </p>
        </div>
        <div className=" basis-2/4 min-w-[300px]">
          <img
            src={aboutImage}
            alt="aboutus-bg "
            className="max-w-full pt-[50px] pr-[50px]"
          />
        </div>
      </div>
    </div>

    <div>
      <Team className="space-y-10"/>
      </div>
    <div className="mt-[12rem]">
      <Partner />
      </div>
    <div>
      <Subcribe/>
      </div>
    <div>
      <Footer/>
      </div>
    </div>

    


  );
};

export default AboutUs;
