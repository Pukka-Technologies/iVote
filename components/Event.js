/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image"
import { useRouter } from "next/router"

const Event = ({ month, date, title, paragraph, image, contestantData, event}) => {

    const router = useRouter()

  return (

    <article onClick={() => router.push({
        pathname:`/events/${event}`,
        query: {participants: JSON.stringify(contestantData)}
        })} className="bg-white rounded-lg overflow-hidden cursor-pointer">
      <div
        className={`relative h-52 bg-no-repeat bg-center bg-cover`}
      >
        <Image src={image} objectFit="cover" layout="fill" />
      </div>
      <div className="flex xl:gap-8 gap-4 px-5 py-8">
        <div>
          <h6 className="text-green-400 font-extrabold text-xs uppercase">
            {month}
          </h6>
          <h4 className="font-extrabold text-lg">{date}</h4>
        </div>
        <div>
          <h5 className="font-extrabold text-lg">{title}</h5>
          <p className="text-gray-600">{paragraph}</p>
        </div>
      </div>
    </article>
  )
}

export default Event
