import React from "react";
import EventsData from "../utils/events";
import Link from "next/link";

const Event = ({ bg, month, date, title, paragraph }) => (
  <Link href={"/contestants"}>
    <article className="bg-white rounded-lg overflow-hidden cursor-pointer">
      <div
        className={`bg-[url(/assets/events1.jpg)] h-52 bg-no-repeat bg-center bg-cover`}
      ></div>
      <div className="flex gap-8 px-5 py-8">
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
  return (
    <section className="bg-gray-100">
      <div className="grid grid-cols-3 px-20 gap-12 font-text py-20">
        {EventsData.map((eventData, index) => (
          <Event
            bg={eventData.imgURL}
            month={eventData.month}
            date={eventData.date}
            title={eventData.title}
            paragraph={eventData.paragraph}
            key={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Events;
