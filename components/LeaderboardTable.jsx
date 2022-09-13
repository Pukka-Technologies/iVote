import Image from "next/image";

const LeaderboardTable = ({leaderboard}) => {
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
                    Votes
                </th>
                <th scope="col" className="py-3 px-6 text-center">
                    <span className="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
            {leaderboard?.map((contestant, idx) => (
                <tr key={contestant._id} className={`border-b ${idx % 2 > 0 ? "bg-gray-100 text-gray-500" : "text-white bg-green-400"} text-[1rem] dark:border-gray-50`}>
                <td className="py-2 px-6">
                    <div className="relative w-12 h-12 rounded-md overflow-hidden">
                        <Image src={contestant.imageURL} layout="fill" objectFit="cover" />
                    </div>
                </td>
                <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap">
                    {contestant.name}
                </th>
                <td className="py-4 px-6 text-center ">
                    {contestant.total_votes}
                </td>
                <td className="py-4 px-6 text-right">
                    <span className="font-medium px-2 bg-gray-300 rounded-lg text-blue-600 dark:text-blue-500">{contestant.contestant_code}</span>
                </td>
            </tr>
            ))}
        </tbody>
    </table>
</div>

    </div>
  );
};

export default LeaderboardTable;
