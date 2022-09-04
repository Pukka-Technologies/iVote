/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { useStateValue } from "../context/StateProvider";
import { getEventStatus } from "../utils";
import { fetchData } from "../utils/functions";
import { FiSearch } from "react-icons/fi";
import Event from "./Event";
import { Empty, Fetching } from "./Promises";

const Events = () => {
  const [{ events, contestants }, dispatch] = useStateValue();
  const [filteredEvents, setFilteredEvents] = useState(events);

  return (
    <section className="bg-gray-100">
      {/* searchbar */}
    <div className="w-full flex items-center justify-end py-2 px-20">
    <div className="w-[30%]   flex items-center justify-center bg-gray-300 rounded-full px-4 py-2 focus:outline-none focus:border-gray-400">
        <input
          type="text"
          placeholder="Search event....."
          className="border-none bg-transparent outline-none w-full"
          onChange={(e) => {
            const filtered = events.filter((event) =>
              event.name.toLowerCase().includes(e.target.value.toLowerCase())
            );
            setFilteredEvents(filtered);
          }}
        />
        <FiSearch className="" />
      </div>
    </div>
      <div className="grid lg:grid-cols-3 md:px-20 px-4 gap-12 font-text pb-20 pt-5">
        {events.length > 0 &&
          filteredEvents
            .sort((a, b) => new Date(a.opening_date) - new Date(b.opening_date))
            .map((event) => {
              const status = getEventStatus(
                event.opening_date,
                event.closing_date
              );
              // if event status is closed, don't show it
              if (status === "closed") return;
              return <Event data={event} status={status} key={event._id} />;
            })}
      </div>
      {filteredEvents.length === 0 && <Empty text={"No record found....."} />}
    </section>
  );
};

export default Events;
