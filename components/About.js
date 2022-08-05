import React from "react";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center font-text pt-32">
      <h1 className="pb-5 text-5xl font-bold after:bg-green-400 after:block after:w-16 after:h-1 after:absolute after:bottom-30 after:left-[48%]">
        About
      </h1>

      <p className="px-20 py-8 w-10/12 text-center">
        An online voting system that will replace the old ballot system or paper
        system. Over the time, we have utilized the required technology in every
        sector to improve efficiency and save the extra resources. But the
        voting system is still very expensive and requires a bigger workforce.
        The system is slower and still not completely tamper proof. We bring the
        system that is safe, reliable and solve the modern issues like higher
        reachability of the booth, crowd free voting, inexpensive, faster
        results and others.
      </p>
    </div>
  );
};

export default About;
