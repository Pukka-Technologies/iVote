import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import Contestant from "./Contestant";
import { Empty } from "./Promises";
const Contestants = ({ contestants }) => {
  const [filtered, setFiltered] = useState(contestants);

  return (
    <section className="font-text bg-gray-100">
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
      <div className="grid lg:grid-cols-3 gap-10 md:px-20 px-4 my-2">
        {filtered.map((contestant) => (
          <Contestant key={contestant.id} contestant={contestant} />
        ))}
      </div>
      {filtered.length === 0 && <Empty text={"No record found"} />}
    </section>
  );
};

export default Contestants;
