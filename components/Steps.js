import React from 'react'
import {
  FaFileSignature,
  FaSignInAlt,
  FaVoteYea,
  FaRegCheckSquare,
} from "react-icons/fa";


const Steps = () => {
  return (
    <div className="flex flex-col justify-center items-center font-text pt-32">
      <h1 className="pb-5 text-5xl font-bold after:bg-green-400 after:block after:w-16 after:h-1 after:absolute after:bottom-30 after:left-[48%]">
        Follow these easy steps
      </h1>

      <div className="grid grid-cols-4">
        <article>
          <div>
            <FaFileSignature />
          </div>
          <p>Register yourself by filling the required information</p>
        </article>
        <article>
          <div>
            <FaSignInAlt />
          </div>
          <p>Sign in as a user</p>
        </article>
        <article>
          <div>
            <FaRegCheckSquare />
          </div>
          <p>Go to vote option on dashboard</p>
        </article>
        <article>
          <div>
            <FaVoteYea />
          </div>
          <p>Vote for desired candidate and submit</p>
        </article>
      </div>
    </div>
  );
}

export default Steps