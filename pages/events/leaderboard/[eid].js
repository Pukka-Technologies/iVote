import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import EventsHeader from "../../../components/EventsHeader";
import Footer from "../../../components/Footer";
import LeaderboardTable from "../../../components/LeaderboardTable";
import { Fetching } from "../../../components/Promises";


const EventBoard = () => {
  const router = useRouter();
  const [id, setId] = React.useState(null);
  const [event, setEvent] = useState(null);

  useEffect(() => {
    if (router.asPath !== router.route) {
      const { _id, eid } = router.query;
      setId(_id);
      const eventName = eid.replace(/_/g, " ").split(" ");
      for (let i = 0; i < eventName.length; i++) {
        eventName[i] =
          eventName[i].charAt(0).toUpperCase() + eventName[i].slice(1);
      }
      setEvent(eventName.join(" "));
      // console.log(router.pathname);
    }
  }, [router]);


  return (
    <>
      <EventsHeader leaderboard={event} />
      {
        id ? <LeaderboardTable id={id} /> : <Fetching text={"Loading leaderboard...."} />
      }
      <Footer />
    </>
  );
};

export default EventBoard;
