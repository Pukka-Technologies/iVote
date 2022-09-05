import Image from "next/image";
import React, { useState } from "react";
import { BsHandThumbsUp } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { Empty } from "./Promises";
const Contestants = ({ contestants }) => {
  const [filtered, setFiltered] = useState(contestants);
  return (
    <section className="font-text py-28 bg-gray-100">
      <div className="w-full flex items-center justify-center md:justify-end py-2 md:px-20">
        <div className="w-[90%] md:w-[30%]   flex items-center justify-center bg-gray-300 rounded-full px-4 py-2 focus:outline-none focus:border-gray-400">
          <input
            type="text"
            placeholder="Search contestant....."
            className="border-none bg-transparent outline-none w-full"
            onChange={(e) => {
              const filtered = contestants.filter((event) =>
                event.name.toLowerCase().includes(e.target.value.toLowerCase())
              );
              setFiltered(filtered);
            }}
          />
          <FiSearch className="" />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-10 md:px-20 px-4">
        {filtered.map((contestant) => (
          <>
            <article className="bg-white rounded-lg overflow-hidden">
              <div className={`relative h-64`}>
                <Image
                  src={contestant.imageURL}
                  alt="contestant"
                  objectFit="cover"
                  layout="fill"
                />
              </div>
              <div className="py-4 px-5">
                <h5 className="uppercase text-xs font-extrabold text-green-400">
                  name
                </h5>
                <h1 className="text-lg font-semibold">{contestant.name}</h1>
                <h5 className="uppercase text-xs font-extrabold text-green-400 pt-3">
                  contestant code
                </h5>
                <h1 className="text-lg font-semibold">
                  {contestant.contestant_code}
                </h1>
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
      {filtered.length === 0 && (
        <Empty text={"No record found"} />
      )}
    </section>
  );
};

export default Contestants;
