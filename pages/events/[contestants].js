import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Participants from "../../components/Contestants";
import ContestsHeader from "../../components/ContestsHeader";
import Footer from "../../components/Footer";
import { Empty } from "../../components/Promises";
import { useStateValue } from "../../context/StateProvider";
import { getContestantsByEvents } from "../../utils";
import { fetchData } from "../../utils/functions";

const Contestants = () => {
  const [{ contestants, events }, dispatch] = useStateValue();
  const router = useRouter();
  const [id, setId] = React.useState(null);

  useEffect(() => {
    if (router.asPath !== router.route) {
      const { _id } = router.query;
      setId(_id);
      console.log(router.pathname);
    }
  }, [router]);
  useEffect(() => {
    events.length === 0 && fetchData("event", async (data) => {
      if (data.success) {
        // console.log(data.data)
        dispatch({
          type: "SET_EVENTS",
          events: data.data,
        });
        // return data.data
      }
    });

    contestants.length === 0 &&  fetchData("contestant", async (data) => {
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
      {id && (
        <div>
          <ContestsHeader event={id} />
          {
            contestants.length === 0 ? <Empty text={"Loading contestants"} /> : <Participants contestants={getContestantsByEvents(contestants, id)}  />
          }
          <Footer />
        </div>
      )}
    </>
  );
};

export default Contestants;
