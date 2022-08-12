import React from "react";
import { BsHandThumbsUp } from "react-icons/bs";

const Contestants = () => {
  return (
    <section className="font-text py-28 bg-gray-100">
      <div className="grid lg:grid-cols-3 gap-10 md:px-20 px-4">
        <article className="bg-white rounded-lg overflow-hidden">
          <div
            className={`bg-[url(/assets/c1.jpg)] h-64 bg-no-repeat bg-center bg-cover`}
          ></div>
          <div className="py-4 px-5">
            <h5 className="uppercase text-xs font-extrabold text-green-400">
              name
            </h5>
            <h1 className="text-lg font-semibold">Comfort Owusuaa</h1>
            <h5 className="uppercase text-xs font-extrabold text-green-400 pt-3">
              contestant code
            </h5>
            <h1 className="text-lg font-semibold">17680</h1>
            <button className="flex gap-2 items-center bg-green-400 px-[0.9em] py-[0.4em] rounded-lg mt-6">
              Vote
              <span>
                <BsHandThumbsUp />
              </span>
            </button>
          </div>
        </article>

        <article className="bg-white rounded-lg overflow-hidden">
          <div
            className={`bg-[url(/assets/c2.jpg)] h-64 bg-no-repeat bg-center bg-cover`}
          ></div>
          <div className="py-4 px-5">
            <h5 className="uppercase text-xs font-extrabold text-green-400">
              name
            </h5>
            <h1 className="text-lg font-semibold">Comfort Owusuaa</h1>
            <h5 className="uppercase text-xs font-extrabold text-green-400 pt-3">
              contestant code
            </h5>
            <h1 className="text-lg font-semibold">17680</h1>
            <button className="flex gap-2 items-center bg-green-400 px-[0.9em] py-[0.4em] rounded-lg mt-6">
              Vote
              <span>
                <BsHandThumbsUp />
              </span>
            </button>
          </div>
        </article>

        <article className="bg-white rounded-lg overflow-hidden">
          <div
            className={`bg-[url(/assets/c3.jpg)] h-64 bg-no-repeat bg-center bg-cover`}
          ></div>
          <div className="py-4 px-5">
            <h5 className="uppercase text-xs font-extrabold text-green-400">
              name
            </h5>
            <h1 className="text-lg font-semibold">Comfort Owusuaa</h1>
            <h5 className="uppercase text-xs font-extrabold text-green-400 pt-3">
              contestant code
            </h5>
            <h1 className="text-lg font-semibold">17680</h1>
            <button className="flex gap-2 items-center bg-green-400 px-[0.9em] py-[0.4em] rounded-lg mt-6">
              Vote
              <span>
                <BsHandThumbsUp />
              </span>
            </button>
          </div>
        </article>
      </div>

      <div className="grid lg:grid-cols-3 gap-10 md:px-20 px-4 py-10">
        <article className="bg-white rounded-lg overflow-hidden">
          <div
            className={`bg-[url(/assets/c4.jpg)] h-64 bg-no-repeat bg-center bg-cover`}
          ></div>
          <div className="py-4 px-5">
            <h5 className="uppercase text-xs font-extrabold text-green-400">
              name
            </h5>
            <h1 className="text-lg font-semibold">Comfort Owusuaa</h1>
            <h5 className="uppercase text-xs font-extrabold text-green-400 pt-3">
              contestant code
            </h5>
            <h1 className="text-lg font-semibold">17680</h1>
            <button className="flex gap-2 items-center bg-green-400 px-[0.9em] py-[0.4em] rounded-lg mt-6">
              Vote
              <span>
                <BsHandThumbsUp />
              </span>
            </button>
          </div>
        </article>

        <article className="bg-white rounded-lg overflow-hidden">
          <div
            className={`bg-[url(/assets/c5.jpg)] h-64 bg-no-repeat bg-center bg-cover`}
          ></div>
          <div className="py-4 px-5">
            <h5 className="uppercase text-xs font-extrabold text-green-400">
              name
            </h5>
            <h1 className="text-lg font-semibold">Comfort Owusuaa</h1>
            <h5 className="uppercase text-xs font-extrabold text-green-400 pt-3">
              contestant code
            </h5>
            <h1 className="text-lg font-semibold">17680</h1>
            <button className="flex gap-2 items-center bg-green-400 px-[0.9em] py-[0.4em] rounded-lg mt-6">
              Vote
              <span>
                <BsHandThumbsUp />
              </span>
            </button>
          </div>
        </article>

        <article className="bg-white rounded-lg overflow-hidden">
          <div
            className={`bg-[url(/assets/c1.jpg)] h-64 bg-no-repeat bg-center bg-cover`}
          ></div>
          <div className="py-4 px-5">
            <h5 className="uppercase text-xs font-extrabold text-green-400">
              name
            </h5>
            <h1 className="text-lg font-semibold">Comfort Owusuaa</h1>
            <h5 className="uppercase text-xs font-extrabold text-green-400 pt-3">
              contestant code
            </h5>
            <h1 className="text-lg font-semibold">17680</h1>
            <button className="flex gap-2 items-center bg-green-400 px-[0.9em] py-[0.4em] rounded-lg mt-6">
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
};

export default Contestants;
