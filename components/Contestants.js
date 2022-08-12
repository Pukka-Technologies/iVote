import React from 'react'
import { BsHandThumbsUp } from "react-icons/bs";

const Contestants = () => {
  return (
    <section className="flex flex-col justify-center items-center font-text py-28 bg-gray-100">
      <div className="grid grid-cols-3 gap-10 px-20">
        <article className="bg-white rounded-lg overflow-hidden">
          <div
            className={`bg-[url(/assets/events2.jpg)] h-60 bg-no-repeat bg-center bg-cover`}
          ></div>
          <div className="py-4 px-5">
            <h1 className="uppercase text-lg font-extrabold">
              Comfort Owusuaa
            </h1>
            <p className="py-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <button className="flex gap-2 items-center bg-green-400 px-[0.9em] py-[0.4em]">
              Vote
              <span>
                <BsHandThumbsUp />
              </span>
            </button>
          </div>
        </article>

        <article className="bg-white rounded-lg overflow-hidden">
          <div
            className={`bg-[url(/assets/events1.jpg)] h-60 bg-no-repeat bg-center bg-cover`}
          ></div>
          <div className="py-4 px-5">
            <h1 className="uppercase text-lg font-extrabold">
              Comfort Owusuaa
            </h1>
            <p className="py-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <button className="flex gap-2 items-center bg-green-400 px-[0.9em] py-[0.4em]">
              Vote
              <span>
                <BsHandThumbsUp />
              </span>
            </button>
          </div>
        </article>

        <article className="bg-white rounded-lg overflow-hidden">
          <div
            className={`bg-[url(/assets/header-bg.jpg)] h-60 bg-no-repeat bg-center bg-cover`}
          ></div>
          <div className="py-4 px-5">
            <h1 className="uppercase text-lg font-extrabold">
              Comfort Owusuaa
            </h1>
            <p className="py-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <button className="flex gap-2 items-center bg-green-400 px-[0.9em] py-[0.4em]">
              Vote
              <span>
                <BsHandThumbsUp />
              </span>
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Contestants