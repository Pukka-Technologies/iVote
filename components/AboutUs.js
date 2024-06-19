import React from "react";
import Partner from "./Partner";
import Subcribe from "./Subcribe";
import Team from "./Team";
import Footer from "./Footer";
import Aboutnav from "./Aboutnav";
import { AiOutlineArrowRight } from 'react-icons/ai';
import Link from "next/link";

const AboutUs = () => {
  const pageLink ="https://mediabillo.com/about.php"
  const aboutImage = "/assets/aboutus-bg.png";
  return (
    <div   className="font-text">
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
         
          iVote is a burgeoning Ghanaian communications firm with far reaching links to 
          reputable international and indigenous Public Relation Firms, across the sub-African Region.
           We posses eye-catching expertise in public relations, media relations, reputation management, corporate communications, 
           Government relations, issues and crisis management ,development of communications strategies, consultancy ,events management 
           and exhibitions we have made giant strides through the magnitude of projects that we have successfully managed, over the years 
           through partnerships and working with different organizations
          </p>
   
        <Link href={pageLink} passHref>
          <a target={"_blank"}>

        <div className="flex bg-green-500 items-center justify-start md:w-[23%] rounded-full  w-[50%] my-3 px-2 py-2">
          
       
       <button className="px-2 font-semibold">Read More</button>
       <AiOutlineArrowRight />
       </div>
       </a>
       </Link>
       
        
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
