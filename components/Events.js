/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import EventsData from "../utils/events";
import Link from "next/link";
import { fetchData } from "../utils/functions";
import Image from "next/image";

const Event = ({ month, date, title, paragraph, image}) => (
  <Link href={"/contestants"}>
    <article className="bg-white rounded-lg overflow-hidden cursor-pointer">
      <div
        className={`relative h-52 bg-no-repeat bg-center bg-cover`}
      >
        <Image src={image} objectFit="cover" layout="fill" />
      </div>
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
            image={event.imageURL}
            key={event._id}
          />
        ))}
      </div>
    </section>
  );
};

export default Events;
