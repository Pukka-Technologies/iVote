import React from "react";
import AboutUs from "./AboutUs";

const Partner = () => {
  const mediabillo = "/assets/media billo logo.png";
  const agricGhana = "/assets/Agric Ghana.png";
  const jmc= "/assets/jmc.png";

  const p5 = "/assets/p5.png";


  return (
    <div className="w-full min-h-[50vh] pt-10 bg-green-100 flex flex-col items-center justify-center">
      <div className="w-[80%] gap-y-10 flex flex-col items-center justify-center">
        <div className="w-full flex flex-col items-center justify-center ">
          <h1 className="text-2xl font-bold py-3">Events we manage...</h1>
          <p className="text-center">
          These are some  lists of events we manage
           
          </p>
        </div>
        <div className="w-full grid grid-cols-2 md:grid-col-2 lg:grid-cols-4 my-5 gap-x-2 gap-y-2">
            <div className="flex items-center justify-center">  <img src={mediabillo} alt="partner1" /></div>
            <div className="flex items-center justify-center">  <img src={agricGhana} alt="partner1" /></div>
            <div className="flex items-center justify-center">  <img src={jmc} alt="partner1" /></div>
            {/* <div className="flex items-center justify-center">  <img src={p4} alt="partner1" /></div> */}
            <div className="flex items-center justify-center">  <img src={p5} alt="partner1" /></div>
        
      
    
       
  
      </div>
      </div>
    
    </div>
  );
};

export default Partner;
