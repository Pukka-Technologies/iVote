/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { fetchData } from "../utils/functions";
import Image from "next/image";
import { BsHandThumbsUp } from "react-icons/bs";
import { getEventStatus } from "../utils";
import { Fetching } from "./Promises";
import { FaSearch } from "react-icons/fa";

const Event = ({ month, date, title, paragraph, image, status }) => (
  <Link href={"/contestants"}>
    <article className="bg-white rounded-lg overflow-hidden cursor-pointer">
      <div className={`relative h-52 bg-no-repeat bg-center bg-cover`}>
        <Image src={image} objectFit="cover" layout="fill" />
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between items-center xl:gap-8 gap-4 px-5 py-8">
          <div className="flex flex-col">
            <h6 className="text-green-400 font-extrabold text-xs uppercase">
              {month}
            </h6>
            <h4 className="font-extrabold text-lg">{date}</h4>
          </div>
          <div className="flex flex-col items-end">
            <h5 className="font-extrabold text-lg">{title}</h5>
            <p className="text-gray-600">{paragraph}</p>
          </div>
        </div>
        <div className="flex items-center justify-between p-2">
          <div className={`
            ${status === "upcoming" ? "bg-yellow-200 text-yellow-600":"bg-green-200 text-green-600"}
          rounded-md py-1 px-4`}>{status}</div>
          <div>
            <button className="bg-green-400 text-white text-lg w-10 flex items-center justify-center h-8 rounded-md py-1 px-4">
            <BsHandThumbsUp />
            </button>
          </div>
        </div>
      </div>
    </article>
  </Link>
);

const Events = () => {
  const [events, setEvents] = useState([]);
  const [filter, setFilter] = useState(events)

  useEffect(() => {
    fetchData("event", async (data) => {
      if (data.success) {
        // console.log(data.data)
        setEvents(data.data);
        setFilter(data.data)
        // return data.data
      } else {
        console.log("late data", data);
      }
    });
  }, []);

  return (
    <section className="bg-gray-100">
      {/* search bar */}
      <div className="flex justify-end items-center bg-white py-4">
        <div className="flex items-center bg-gray-100 rounded-full w-full md:w-[30%] px-4 py-3">
          <input
            className="bg-transparent w-full text-sm text-gray-600 font-semibold outline-none"
            type="text"
            placeholder="Search for event"
            onChange={(e) => {
              const query_result = events.filter((event) => event.name.toLowerCase().includes(e.target.value.toLowerCase()))
              setFilter(query_result)
            }}
          />
          <button className="outline-none">
            <FaSearch className="text-gray-600" />
          </button>
        </div>
      </div>
      {/* events */}
      <div className="grid lg:grid-cols-3 md:px-20 px-4 gap-12 font-text py-20">
        {events.length > 0 && filter
        .sort((a, b) => new Date(a.opening_date) - new Date(b.opening_date))
        .map((event) => {
          const status = getEventStatus(event.opening_date, event.closing_date)
          // if event status is closed, don't show it
          if (status === "closed") return
          return (
            <Event
              month={Date(event?.opening_date).split(" ")[1]}
              date={Date(event?.opening_date).split(" ")[2]}
              title={event.name}
              paragraph={event.description}
              image={event.imageURL}
              status={status}
              key={event._id}
            />
          );
        })}
        {
          events.length === 0 && <Fetching text={"Loading eventing....."} />
        }
      </div>
    </section>
  );
};

export default Events;
