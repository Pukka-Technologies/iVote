import Image from 'next/image'
import React, { useState } from 'react'
import { BsHandThumbsUp } from 'react-icons/bs'
import VotePopup from './Modal'

const Contestant = ({contestant}) => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <article className="bg-white rounded-lg overflow-hidden" key={contestant._id}>
    <div className={`relative h-80`}>
      <Image
        src={contestant.imageURL}
        alt="contestant"
        objectFit="cover"
        layout="fill"
      />
    </div>
    <div className="py-3 px-5 flex items-center justify-between">
      <div>
        <h5 className="uppercase text-xs font-extrabold text-green-400">
          name
        </h5>
        <h1 className="text-lg font-semibold">{contestant.name}</h1>
        <h5 className="uppercase text-xs font-extrabold text-green-400 pt-3">
          contestant code
        </h5>
        <h1 className="text-lg font-semibold">
          {contestant.contestant_code}
        </h1>
      </div>
      <button
        onClick={() => setIsOpen(true)}
        className="flex gap-2 items-center text-green-700 hover:bg-green-300 bg-green-200 px-[0.9em] py-[0.4em] rounded-lg mt-6"
      >
        Vote
        <span>
          <BsHandThumbsUp />
        </span>
      </button>
    </div>
    <VotePopup
      data={contestant}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    />
  </article>
  )
}

export default Contestant