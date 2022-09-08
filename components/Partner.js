import React from "react";

const Partner = () => {
  const p1 = "/assets/p1.png";
  const p2 = "/assets/p2.png";
  const p5 = "/assets/p5.png";
  const p4 = "/assets/p4.png";
  const p3 = "/assets/p3.png";

  return (
    <div className="w-full min-h-[50vh] pt-10 bg-green-100 flex flex-col items-center justify-center">
      <div className="w-[80%] gap-y-10 flex flex-col items-center justify-center">
        <div className="w-full flex flex-col items-center justify-center ">
          <h1 className="text-2xl font-bold py-3">who we are engaged with...</h1>
          <p className="text-center">
            We partner with Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Vitae reprehenderit recusandae deleniti numquam sunt beatae
           
          </p>
        </div>
        <div className="w-full grid grid-cols-3 md:grid-col-5 lg:grid-cols-5 my-5 gap-x-3 gap-y-2">
            <div >  <img src={p1} alt="partner1" /></div>
            <div>  <img src={p2} alt="partner1" /></div>
            <div>  <img src={p3} alt="partner1" /></div>
            <div>  <img src={p4} alt="partner1" /></div>
            <div>  <img src={p5} alt="partner1" /></div>
      
    
       
  
      </div>
      </div>
    
    </div>
  );
};

export default Partner;
