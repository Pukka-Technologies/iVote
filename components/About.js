import React from "react";
const phoneImg = "/assets/phone.jpg";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center font-text pt-32">
      <div className="grid grid-cols-2 px-32">
        <div className="flex flex-col justify-center relative z-[1]">
          <h1 className="pb-8 text-5xl font-bold after:bg-green-400 after:block after:w-16 after:h-1 after:absolute after:bottom-30 after:left-[8.5%]">
            About
          </h1>

          <p className="w-10/12 relative before:content-['events'] before:font-bold before:text-9xl before:absolute before:text-green-100 before:opacity-60 before:bottom-60 before:right-40 before:z-[-1]">
            An online voting system that will replace the old ballot system or
            paper system. Over the time, we have utilized the required
            technology in every sector to improve efficiency and save the extra
            resources. But the voting system is still very expensive and
            requires a bigger workforce. The system is slower and still not
            completely tamper proof. We bring the system that is safe, reliable
            and solve the modern issues like higher reachability of the booth,
            crowd free voting, inexpensive, faster results and others.
          </p>
        </div>

        <div>
          <img src={phoneImg} alt="phone" className="w-11/12"/>
        </div>
      </div>
    </div>
  );
};

export default About;
