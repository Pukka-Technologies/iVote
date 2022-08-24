import React from "react";
const phoneImg = "/assets/iVote-phone.png";

const About = () => {
  return (
    <section className="flex flex-col justify-center items-center font-text pt-32">
      <div className="grid lg:grid-cols-2 md:px-32 px-8">
        <article className="flex flex-col justify-center relative z-[1]">
          <h1 className="pb-8 text-5xl font-bold text-center  md:text-left after:bg-green-400 after:block after:mt-2 after:w-16 after:h-1 after:absolute after:bottom-30 after:md:left-[7.5%] after:left-[38%]">
            About
          </h1>

          <p className="lg:w-10/12 relative before:content-['events'] before:md:block before:hidden before:font-bold before:text-9xl before:absolute before:text-green-100 before:opacity-60 before:md:bottom-60  before:bottom-[25rem]  before:md:right-40 before:right-1 before:z-[-1]">
            An online voting system that will replace the old ballot system or
            paper system. Over the time, we have utilized the required
            technology in every sector to improve efficiency and save the extra
            resources. But the voting system is still very expensive and
            requires a bigger workforce. The system is slower and still not
            completely tamper proof. We bring the system that is safe, reliable
            and solve the modern issues like higher reachability of the booth,
            crowd free voting, inexpensive, faster results and others.
          </p>
        </article>

        <article>
          <img src={phoneImg} alt="phone" className="md:w-11/12 pt-8 lg:pt-0" />
        </article>
      </div>
    </section>
  );
};

export default About;
