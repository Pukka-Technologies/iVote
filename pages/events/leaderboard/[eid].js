import React from 'react'
import { useStateValue } from '../../../context/StateProvider'

const EventBoard = () => {

    const [{contestants, votes}, dispatch] = useStateValue()

    const fetchLeaderboard = (params) => {
        const { event_id } = params;
        const year = new Date().getFullYear();
        const event_votes = votes.filter(
          (vote) => vote.event_id == event_id && vote.year == year
        );
        const event_contestants = contestants.filter(
          (contestant) => contestant.event_id == event_id && contestant.year == year
        );
        // generate leaderboard for contestants in event
        const { leaderboard, total_votes_cast } = generateLeaderboard(
          event_contestants,
          event_votes
        );
        setLeaderboard(leaderboard);
        setTotalVotes(total_votes_cast);
      };
    

  return (
    <div>EventBoard</div>
  )
}

export default EventBoard