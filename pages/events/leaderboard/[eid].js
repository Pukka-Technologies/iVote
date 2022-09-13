import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import EventsHeader from '../../../components/EventsHeader';
import Footer from '../../../components/Footer';
import LeaderboardTable from '../../../components/LeaderboardTable';
import { useStateValue } from '../../../context/StateProvider'
import {fetchData, generateLeaderboard} from "../../../utils/functions"

const EventBoard = () => {

    const [{contestants}, dispatch] = useStateValue()

    const [leaderboard, setLeaderboard] = useState(null)
    const [totalVotes, setTotalVotes] = useState(null)
    const [event_name, setEvent_name] = useState(null)

    const router = useRouter()
    const { _id, eid } = router.query

    const fetchLeaderboard = () => {

      fetchData("vote", async (data) => {
        const year = new Date().getFullYear();
        const event_votes = data.data.filter(
          (vote) => vote.event_id === _id && vote.year == year
        );
        const event_contestants = contestants.filter(
          (contestant) => contestant.event_id == _id && contestant.year == year
        );
        // generate leaderboard for contestants in event
        const { leaderboard, total_votes_cast } = generateLeaderboard(
          event_contestants,
          event_votes
        );

        leaderboard.sort((a, b) => b.total_votes - a.total_votes)

        setLeaderboard(leaderboard);
        setTotalVotes(total_votes_cast);
      })

      };
    

      useEffect(() => {
        fetchLeaderboard()
        const eventName = eid.replace(/_/g, " ").split(" ")
        for (let i = 0; i < eventName.length; i++) {
          eventName[i] = eventName[i].charAt(0).toUpperCase() + eventName[i].slice(1);
      }
      setEvent_name(eventName.join(" "))
      }, [])
      

  return (
    <>
      <EventsHeader leaderboard={event_name}/>
        <LeaderboardTable leaderboard={leaderboard} />
      <Footer/>
    </>
  )
}

export default EventBoard