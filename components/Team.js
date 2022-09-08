import React from "react";

const Team = () => {
  const c1 = "/assets/c1.jpg";
  const c4 = "/assets/c4.jpg";
  const c3 = "/assets/c3.jpg";

  return (
    <div className="w-full h-full m-auto">
      <div className="m-5 ">
        <h1 className="text-4xl font-bold m-auto">Meet Our Team</h1>
      </div>

      <div className="w-full  grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 pt-[3rem] md:pt-36  m-auto gap-y-16">
        <div className="card border border-solid w-[70%] h-[110%] mx-auto  border-x-emerald-100 rounded">
          <div>
            <img src={c1} alt="mem1 " className="w-full  rounded" />
          </div>
          <div className="mt-4 pl-2">
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            </p>
            <p className="font-bold">CEO</p>
          </div>
        </div>

        <div className="card border border-solid w-[70%] h-[110%] m-auto border-x-emerald-100   rounded">
          <div>
            <img src={c4} alt="mem1 " className="w-full rounded" />
          </div>
          <div className="mt-4 pl-2">
            {" "}
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            </p>
            <p className="font-bold">Manager</p>
          </div>
        </div>
        <div className="card border border-solid w-[70%] h-[110%] m-auto  border-x-emerald-100   rounded">
          <div>
            <img src={c3} alt="mem1 " className="w-full rounded" />
          </div>
          <div className="mt-4 pl-2">
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            </p>
            <p className="font-bold">Secretary</p>
          </div>
        </div>
        <div className="card border border-solid w-[70%] h-[110%] m-auto  border-x-emerald-100   rounded">
          <div>
            <img src={c3} alt="mem1 " className="w-full rounded" />
          </div>
          <div className="mt-4 pl-2">
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            </p>
            <p className="font-bold">Secretary</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
