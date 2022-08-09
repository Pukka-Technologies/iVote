import React from 'react'
const dashboard = "/assets/svg/dashboard.svg";
const register = "/assets/svg/register.svg";
const signin = "/assets/svg/signin.svg";
const vote = "/assets/svg/vote.svg";

const Steps = () => {
  return (
    <section className="flex flex-col justify-center items-center font-text pt-32">
      <h1 className="pb-5 text-5xl font-bold after:bg-green-400 after:block after:mt-2 after:w-16 after:h-1 after:absolute after:bottom-30 after:left-[48%]">
        Follow these easy steps
      </h1>

      <div className="grid grid-cols-4 py-16 gap-10 px-20">
        <article className="border-2 flex flex-col justify-center items-center p-10 relative before:content-['1'] before:flex before:absolute before:text-green-100 before:text-4xl before:font-extrabold before:top-5 before:left-5">
          <div>
            <img src={register} alt="Register yourself" className="w-44" />
          </div>
          <p className="pt-5 text-center">
            Register yourself by filling the required information
          </p>
        </article>
        <article className="border-2 flex flex-col justify-center items-center p-10 relative before:content-['2'] before:flex before:absolute before:text-green-100 before:text-4xl before:font-extrabold before:top-5 before:left-5">
          <div>
            <img src={signin} alt="Sign in" className="w-44" />
          </div>
          <p className="pt-5 text-center">Sign in as a user</p>
        </article>
        <article className="border-2 flex flex-col justify-center items-center p-10 relative before:content-['3'] before:flex before:absolute before:text-green-100 before:text-4xl before:font-extrabold before:top-5 before:left-5">
          <div>
            <img src={dashboard} alt="Vote" className="w-44" />
          </div>
          <p className="pt-5 text-center">Go to vote option on dashboard</p>
        </article>
        <article className="border-2 flex flex-col justify-center items-center p-10 relative before:content-['4'] before:flex before:absolute before:text-green-100 before:text-4xl before:font-extrabold before:top-5 before:left-5">
          <div>
            <img src={vote} alt="vote for candidate" className="w-44" />
          </div>
          <p className="pt-5 text-center">
            Vote for desired candidate and submit
          </p>
        </article>
      </div>
    </section>
  );
}

export default Steps