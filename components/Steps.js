import React from "react";
import StepsData from "../utils/steps";

const Step = ({ imgURL, number, text }) => (
  <article
    className={`border-2 flex flex-col justify-center items-center p-10 relative before:content-['${number}'] before:flex before:absolute before:text-green-100 before:text-4xl before:font-extrabold before:top-5 before:left-5`}
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
      <h1 className="pb-5 text-5xl font-bold after:bg-green-400 after:block after:mt-2 after:w-16 after:h-1 after:absolute after:bottom-30 after:left-[48%]">
        Follow these easy steps
      </h1>

      <div className="grid grid-cols-4 py-16 gap-10 px-20">
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
