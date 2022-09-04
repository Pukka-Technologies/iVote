import React, { useEffect } from 'react'
import Events from '../../components/Events';
import EventsHeader from '../../components/EventsHeader';
import Footer from '../../components/Footer';
import { Fetching } from '../../components/Promises';
import { useStateValue } from '../../context/StateProvider';
import { fetchData } from '../../utils/functions';


const Page = () => {
  const [{events}, dispatch] = useStateValue()
  useEffect(() => {
    fetchData("event", async (data) => {
      if (data.success) {
        // console.log(data.data)
        dispatch({
          type: "SET_EVENTS",
          events: data.data,
        });
        // return data.data
      }
    });

    fetchData("contestant", async (data) => {
      if (data.success) {
        // console.log(data.data)
        dispatch({
          type: "SET_CONTESTANTS",
          contestants: data.data,
        });
        // return data.data
      }
    });
  }, []);
  return (
    <>
    <EventsHeader/>
    {
      events.length > 0 ? <Events/> : <Fetching text={"Loading events"} />
    }
    <Footer/>
    </>
  );
}

export default Page