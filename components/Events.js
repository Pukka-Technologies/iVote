/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { getEventStatus } from "../utils";
import { fetchData } from "../utils/functions";

import Event from "./Event";
import { Fetching } from "./Promises";


const Events = () => {

  const [events, setEvents] = useState([])
  const [contestants, setContestants] = useState([])
  const getContestantsByEvents = (event) => {
    let sorted = contestants.filter(contestant => contestant.event_id === event._id)
    return sorted
  }

  useEffect(() => {

    fetchData("event", async (data) => {
      if (data.success) {
        // console.log(data.data)
        setEvents(data.data)
        // return data.data
      } 
    })

    fetchData("contestant", async (data) => {
      if (data.success) {
        // console.log(data.data)
        setContestants(data.data)
        // return data.data
      } 
    })

  }, [])

  return (
    <section className="bg-gray-100">

      <div className="grid lg:grid-cols-3 md:px-20 px-4 gap-12 font-text py-20">
        {events.length > 0 && events
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
              event={event.name}
              contestantData={getContestantsByEvents(event)}
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
