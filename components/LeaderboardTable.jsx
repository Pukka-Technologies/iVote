import Image from "next/image";

const LeaderboardTable = ({leaderboard}) => {
  return (
    <div className="w-full flex flex-col items-center justify-center p-8 my-16 overflow-x-auto">
      
<div className="relative shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="py-3 px-6"></th>
                <th scope="col" className="py-3 px-6">
                    Contestant
                </th>
                <th scope="col" className="py-3 px-6">
                    Category
                </th>
                <th scope="col" className="py-3 px-6">
                    Votes
                </th>
                <th scope="col" className="py-3 px-6">
                    <span className="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
            {leaderboard?.map(contestant => (
                <tr key={contestant._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="py-2 px-6">
                    <div className="relative w-12 h-12 rounded-md">
                        <Image src={contestant.imageURL} layout="fill" objectFit="cover" />
                    </div>
                </td>
                <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {contestant.name}
                </th>
                <td className="py-4 px-6">
                    Laptop
                </td>
                <td className="py-4 px-6">
                    {contestant.total_votes}
                </td>
                <td className="py-4 px-6 text-right">
                    <p className="font-medium text-blue-600 dark:text-blue-500">{contestant.contestant_code}</p>
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
