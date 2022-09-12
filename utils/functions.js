import Axios from "./axios"

export const fetchData = async (route, callback) => {
    try {
        const { data } = await Axios({
            method: "GET",
            url: route,
        })

        callback(data)

    } catch (error) {
        console.log(error)
    }

}

export const castVote = async (data, callback) => {
    try {
        const { data: res } = await Axios({
            method: "POST",
            url: "/vote",
            data,
        })

        callback(res)

    } catch (error) {
        console.log(error)
    }

}

export const generateLeaderboard = (contestants, votes) => {
    const updatedContestants = contestants.map((contestant) => {
      const {online_votes, offline_votes} = getContestantTotalVotes(votes, contestant._id);
      // remove votes from contestant
      let total_votes = online_votes + offline_votes;
      delete contestant.votes;
      return { ...contestant, total_votes, online_votes, offline_votes };
    });
    return {
      leaderboard: updatedContestants,
      total_votes_cast: updatedContestants.reduce(
        (total, contestant) => total + contestant.total_votes,
        0
      ),
    };
  };
  
  // calculate total votes for each contestant from votes array
  export const getContestantTotalVotes = (votes, id) => {
    const items = votes.filter((vote) => vote.contestant_id == id);
    let online_votes = 0;
    let offline_votes = 0;
    items.forEach((item) => {
      if(item.type == "online"){
        online_votes += item.total_votes;
      }else{
        offline_votes += item.total_votes;
      }
    })
    return {online_votes, offline_votes};
  }
