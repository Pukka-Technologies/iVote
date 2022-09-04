import Image from "next/image";
import React from "react";
import { BsHandThumbsUp } from "react-icons/bs";
import {Empty} from "./Promises"
const Contestants = ({ contestants }) => {
  return (
    <section className="font-text py-28 bg-gray-100">
      <div className="grid lg:grid-cols-3 gap-10 md:px-20 px-4">
        {contestants.map((contestant) => (
          <>
            <article className="bg-white rounded-lg overflow-hidden">
              <div
                className={`relative h-64`}
              >
                <Image src={contestant.imageURL} alt="contestant" objectFit="cover" layout="fill" />
              </div>
              <div className="py-4 px-5">
                <h5 className="uppercase text-xs font-extrabold text-green-400">
                  name
                </h5>
                <h1 className="text-lg font-semibold">{contestant.name}</h1>
                <h5 className="uppercase text-xs font-extrabold text-green-400 pt-3">
                  contestant code
                </h5>
                <h1 className="text-lg font-semibold">{contestant.contestant_code}</h1>
                <button className="flex gap-2 items-center bg-green-400 px-[0.9em] py-[0.4em] rounded-lg mt-6">
                  Vote
                  <span>
                    <BsHandThumbsUp />
                  </span>
                </button>
              </div>
            </article>
          </>
        ))}
      </div>
      {
        contestants.length === 0 && <Empty text={'No Contestant in this event'} />
      }
    </section>
  );
};

export default Contestants;
