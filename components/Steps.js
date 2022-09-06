/* eslint-disable @next/next/no-img-element */
import React from "react";
import StepsData from "../utils/steps";

const Step = ({ imgURL, number, text }) => (
  <article
    number = {number}
    className={`border-2 flex flex-col justify-center items-center p-10 relative before:content-[attr(number)] before:flex before:absolute before:text-green-100 before:text-4xl before:font-extrabold before:top-5 before:left-5`}
  >
    <div>
      <img src={imgURL} alt="Register yourself" className="w-44" />
    </div>
    <p className="pt-5 text-center">{text}</p>
  </article>
);

const Steps = () => {
  return (
    <section className="flex flex-col justify-center items-center font-text pt-32">
      <h1 className="pb-5 p-3 md:p-0 text-center md:text-left text-5xl font-bold after:bg-green-400 after:block after:mt-2 after:w-16 after:h-1 after:absolute after:bottom-30 after:md:left-[48%] after:left-[40%]">
        Follow these easy steps
      </h1>

      <div className="grid xl:grid-cols-4 lg:grid-cols-2 py-16 gap-10 lg:px-20 px-10">
        {StepsData.map((stepData, index) => (
          <Step
            imgURL={stepData.imgURL}
            number={stepData.number}
            text={stepData.text}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Steps;
