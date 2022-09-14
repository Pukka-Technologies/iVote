import Image from "next/image";
import { useEffect, useState } from "react";
import { fetchLeaderboard } from "../utils/functions";
import { BiLoader } from "react-icons/bi";

const LeaderboardTable = ({ id }) => {
  const [contestants, setContestants] = useState(null);
  const [totalVotes, setTotalVotes] = useState(0)
  useEffect(() => {
    const event_id = id;
    const year = new Date().getFullYear();
    let body = {
      event_id,
      year,
    };
    fetchLeaderboard(body, async (data) => {
        if (data.success) {
          const {leaderboard, total_votes_cast} = data.data;
        // sort the leaderboard by votes
        leaderboard.sort((a, b) => b.votes - a.votes);
        setContestants(leaderboard);
        setTotalVotes(total_votes_cast)
      } else {
        console.log(data);
      }
    });
  }, []);
  return (
    <div className="w-full flex flex-col md:px-14 items-center justify-center p-8 my-16 overflow-x-auto">
      <div className="relative w-full shadow-md ">
        <table className="w-full sm:rounded-lg text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:text-gray-500">
            <tr>
              <th scope="col" className="py-3 px-6"></th>
              <th scope="col" className="py-3 px-6">
                Contestant
              </th>
              <th scope="col" className="py-3 px-6 text-center">
                Online Votes
              </th>
              <th scope="col" className="py-3 px-6 text-center">
                Offline Votes
              </th>
              <th scope="col" className="py-3 px-6 text-center">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            {contestants && contestants.length > 0 &&
              contestants.map((contestant, idx) => (
                <tr
                  key={contestant._id}
                  className={`border-b ${
                    idx % 2 > 0
                      ? "bg-gray-100 text-gray-500"
                      : "text-white bg-green-400"
                  } text-[1rem] dark:border-gray-50`}
                >
                  <td className="py-2 px-6">
                    <div className="relative w-12 h-12 rounded-md overflow-hidden">
                      <Image
                        src={contestant.imageURL}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium flex flex-col gap-y-1 whitespace-nowrap"
                  >
                    {contestant.name}
                    <span className="text-sm font-normal">({contestant.contestant_code})</span>
                  </th>
                  <td className="py-4 px-6 text-center ">{contestant.online_votes}</td>
                  <td className="py-4 px-6 text-center ">{contestant.offline_votes}</td>
                  {/* <td className="py-4 px-6 text-center ">{contestant.votes}</td> */}
                  <td className="py-4 px-6 flex items-center justify-center">
                    <p className="font-medium px-5 flex items-center justify-center py-3 w-16 max-w-20 text-center bg-gray-300 rounded-lg text-blue-600 dark:text-blue-500">
                      {contestant.votes}
                    </p>
                  </td>
                </tr>
              ))}
              {
                contestants && contestants.length == 0 && (
                  <tr className="border-b bg-gray-100 text-gray-500 text-[1rem] dark:border-gray-50">
                    <td className="py-4 px-6 text-center" colSpan={5}>No Contestants</td>
                  </tr>

                )
              }
              {
                !contestants && (
                  <tr className="border-b flex items-center justify-center  text-gray-500 text-[1rem] ">
                    <td className="py-4 px-6 flex items-center justify-center text-center" colSpan={5}>
                      {/* loading icon spin */}
                      <BiLoader className="animate-spin text-2xl" />
                      <span className="ml-2">Loading...</span>
                    </td>
                  </tr> 
                ) 
              }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaderboardTable;
