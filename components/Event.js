/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import { useRouter } from "next/router";
import { BsHandThumbsUp } from "react-icons/bs";

const Event = ({ data, status }) => {
  const {
    name,
    description,
    opening_date,
    closing_date,
    imageURL,
    _id,
    createdAt,
  } = data;

  const router = useRouter();

  return (
    <article className="bg-white rounded-lg overflow-hidden cursor-pointer">
      <div
        onClick={() =>
          router.push({
            pathname: `/events/${name.toLowerCase().replace(/ /g,"_")}`,
            query: { _id: _id },
          })
        }
        className={`relative h-52 bg-no-repeat bg-center bg-cover`}
      >
        <Image src={imageURL} objectFit="cover" layout="fill" />
      </div>
      <div className="flex flex-col xl:gap-4 gap-2 px-5 pt-8 pb-3">
        <div className="flex w-full items-center justify-between">
          <div>
            <h6 className="text-green-400 font-extrabold text-xs uppercase">
              {Date(opening_date).split(" ")[1]}
            </h6>
            <h4 className="font-extrabold text-lg">
              {Date(opening_date).split(" ")[2]}
            </h4>
          </div>
          <div>
            <h5 className="font-extrabold text-lg">{name}</h5>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <p className="text-gray-600 text-center">{description}</p>
        </div>
        <div className="flex items-center justify-between">
          {/* event status badge */}
          <div
            className={`${
              status === "ongoing"
                ? "bg-green-200 text-green-500"
                : "bg-yellow-200 text-yellow-500"
            }  font-bold text-xs uppercase px-4 py-2 rounded-lg`}
          >
            {status}
          </div>
          {/* vote badge */}
          <div className="flex items-center">
            <div
              className="bg-gray-400 hover:bg-gray-500 transition-all duration-100 ease-in-out  text-white font-bold text-xl uppercase px-4 py-2 rounded-lg"
              onClick={() =>
                router.push({
                  pathname: `/events/${name.toLowerCase().replace(/ /g,"_")}`,
                  query: { _id: _id },
                })
              }
            >
              <BsHandThumbsUp />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Event;
