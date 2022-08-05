import React from 'react'

function Contestant() {
  return (
    <div className="max-w-sm bg-white px-4 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500  ">
    <h3 className="mb-3 text-xl font-bold text-indigo-600">
      MISS WORLD 2021
    </h3>
    <div className="relative">
      {/* CONTESTANTS IMAGE GOES HERE */}
      <div className="w-full h-44 rounded-xl">
        <img
          className="w-full h-full object-contain"
          src="https://images.unsplash.com/photo-1613876215075-276fd62c89a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt="Colors"
        />
      </div>

      <div className="text-center pt-2">
        <button className="w-24 p-2 flex items-center justify-center space-x-2 bg-gradient-to-r from-green-400 to-green-600 transform hover:scale-110 rounded-md transition ease-in duration-200 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6  text-white font-bold"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
            />
          </svg>
          <span className="uppercase text-white font-semibold">
            Vote
          </span>
        </button>
      </div>
    </div>
    <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer text-center">
      AKUA FORSON
    </h1>

    <div className="my-4">
      <div className="flex   items-center">
        <p className="pl-2 items-center">CODE :</p>
        <span className="text-gray-400  flex-1">9560</span>
        <p className="pr-2">VOTES:</p>
        <span className="text-gray-400 flex">331</span>
      </div>
    </div>
  </div>
  )
}

export default Contestant