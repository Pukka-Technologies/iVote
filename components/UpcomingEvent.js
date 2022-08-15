import React from "react";
import images from "../utils/images";
import UEvent from "./uevent";

const UpcomingEvent = ({ data }) => {
  return (
    <div className="bg-slate-100  ">
      <div className="flex items-center justify-between w-full pt-5 bg-slate-100">
        <div className="basis-2/4 flex items-center md:justify-around ">
          <h1 className="text-5xl text-[#001212] font-bold">Upcoming Events</h1>
        </div>
        <div className="basis-2/4 bg-slate-100 flex  items-center md:px-28 justify-end gap-x-5">
          <select value="Event type" className="bg-slate-200 outline-none rounded-full px-2 py-1">
         
            Event type
            <option value="">Event Type</option>
            <option value=""></option>
          </select>
          <select value="Any category" className="bg-slate-200 outline-none rounded-full px-2 py-1">
            Any category
            <option value="">     Any category</option>
            <option value=""></option>
          </select>
          <select value="Days" className="bg-slate-200 outline-none rounded-full px-2 py-1">
          Days
            <option value=""> Days</option>
            <option value=""></option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-7 mt-44 px-28">
        {images.map((img) => (
          <UEvent data={img}  />
        ))}
      </div>
    </div>
  )
};

export default UpcomingEvent;
