<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import EventsData from "../utils/events";
import Link from "next/link";
import { fetchData } from "../utils/functions";

const Event = ({ month, date, title, paragraph }) => (
  <Link href={"/contestants"}>
    <article className="bg-white rounded-lg overflow-hidden cursor-pointer">
      <div
        className={`bg-black h-52 bg-no-repeat bg-center bg-cover`}
      ></div>
      <div className="flex xl:gap-8 gap-4 px-5 py-8">
        <div>
          <h6 className="text-green-400 font-extrabold text-xs uppercase">
            {month}
          </h6>
          <h4 className="font-extrabold text-lg">{date}</h4>
        </div>
        <div>
          <h5 className="font-extrabold text-lg">{title}</h5>
          <p className="text-gray-600">{paragraph}</p>
        </div>
      </div>
    </article>
  </Link>
);

const Events = () => {

  const [events, setEvents] = useState([])

  useEffect(() => {
    fetchData("event", async (data) => {
      if (data.success) {
        // console.log(data.data)
        setEvents(data.data)
        console.log("events", Date(data.data[0].opening_date).split(" ")[2])
        console.log("events", data.data)
        // return data.data
      } else {
        console.log("late data",data);
      }
    })
  }, [])

  return (
    <section className="bg-gray-100">
      <div className="grid lg:grid-cols-3 md:px-20 px-4 gap-12 font-text py-20">
        {events.map((event, index) => (
          <Event
            month={Date(event?.opening_date).split(" ")[1]}
            date={Date(event?.opening_date).split(" ")[2]}
            title={event.name}
            paragraph={event.description}
            key={event._id}
          />
        ))}
=======
/* eslint-disable jsx-a11y/alt-text */

import { Empty, Fetching } from "./Promises";
import React, { useEffect, useState } from "react";

import Event from "./Event";
import { FiSearch } from "react-icons/fi";
import { fetchData } from "../utils/functions";
import { getEventStatus } from "../utils";
import { useStateValue } from "../context/StateProvider";

const Events = () => {
  const [{ events, contestants }, dispatch] = useStateValue();
  const [filteredEvents, setFilteredEvents] = useState(events);

  return (
    <section className="bg-gray-100">
      {/* searchbar */}
    <div className="w-full flex items-center justify-center md:justify-end py-2 md:px-20">
    <div className="w-[90%] md:w-[30%]   flex items-center justify-center bg-gray-300 rounded-full px-4 py-2 focus:outline-none focus:border-gray-400">
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
>>>>>>> ebe97df4952ec2f72388f92eb7cac8b2e85e649c
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
