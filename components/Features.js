import React from "react";
import { useEffect } from "react";
import AOS from "aos";
// import aos styles
import "aos/dist/aos.css";
import { GrSecure } from "react-icons/gr";
import { BsPhone, BsHandThumbsUp } from "react-icons/bs";
import { HiOutlineCheckCircle } from "react-icons/hi";
import { AiOutlineDollar } from "react-icons/ai";
import { RiSpeedLine } from "react-icons/ri";

const Features = () => {
  useEffect(() => {
    // here you can add aos options
    AOS.init();
  }, []);
  return (
    <section className="flex flex-col justify-center items-center font-text pt-20">
      <h1 className="pb-5 text-5xl font-bold after:bg-green-400 after:block after:w-16 after:mt-2 after:h-1 after:absolute after:bottom-30 after:md:left-[48%] after:left-[40%]">
        Features
      </h1>
      <div
        className="grid lg:grid-cols-3 gap-8 md:px-20 relative z-[1]"
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="600"
      >
        <article className="relative p-10 after:absolute after:block after:content-['01'] after:text-green-100 after:font-extrabold after:text-9xl after:opacity-50 after:bottom-0 after:md:right-0 after:right-10 after:z-[-1]">
          <p className="w-fit p-3 bg-green-400">
            <GrSecure />
          </p>
          <p>
            <h3 className="py-3 font-bold text-lg">100% Secure</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </p>
        </article>

        <article className="relative p-10 after:absolute after:block after:content-['02'] after:text-green-100 after:font-extrabold after:text-9xl after:opacity-50 after:bottom-0 after:md:right-0 after:right-10 after:z-[-1]">
          <p className="w-fit p-3 bg-green-400">
            <BsPhone />
          </p>
          <p>
            <h3 className="py-3 font-bold text-lg">Supports Telco</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </p>
        </article>

        <article className="relative p-10 after:absolute after:block after:content-['03'] after:text-green-100 after:font-extrabold after:text-9xl after:opacity-50 after:bottom-0 after:md:right-0 after:right-10 after:z-[-1]">
          <p className="w-fit p-3 bg-green-400">
            <HiOutlineCheckCircle />
          </p>
          <p>
            <h3 className="py-3 font-bold text-lg">Verifiable Transactions</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </p>
        </article>
      </div>

      <div
        className="grid lg:grid-cols-3 gap-5 md:px-20 relative z-[1] pt-5"
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="600"
      >
        <article className="relative p-10 after:absolute after:block after:content-['04'] after:text-green-100 after:font-extrabold after:text-9xl after:opacity-50 after:bottom-0 after:md:right-0 after:right-10 after:z-[-1]">
          <p className="w-fit p-3 bg-green-400">
            <BsHandThumbsUp />
          </p>
          <p>
            <h3 className="py-3 font-bold text-lg">Easy to Use</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </p>
        </article>

        <article className="relative p-10 after:absolute after:block after:content-['05'] after:text-green-100 after:font-extrabold after:text-9xl after:opacity-50 after:bottom-0 after:md:right-0 after:right-10 after:z-[-1]">
          <p className="w-fit p-3 bg-green-400">
            <AiOutlineDollar />
          </p>
          <p>
            <h3 className="py-3 font-bold text-lg">
              Cheaper than Ballot System
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </p>
        </article>

        <article className="relative p-10 after:absolute after:block after:content-['06'] after:text-green-100 after:font-extrabold after:text-9xl after:opacity-50 after:bottom-0 after:md:right-0 after:right-10 after:z-[-1]">
          <p className="w-fit p-3 bg-green-400">
            <RiSpeedLine />
          </p>
          <p>
            <h3 className="py-3 font-bold text-lg">Faster Voting System</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </p>
        </article>
      </div>
    </section>
  );
};

export default Features;
