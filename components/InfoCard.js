import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

function InfoCard({ item }) {
  // img, location, title, description, star, price, total
  return (
    <div className="flex p-3 mt-2 border-b mb-2 cursor-pointer hover:opacity-90 hover:shadow-lg transition transform duration-100 ease-in rounded-lg ">
      <div className="relative flex h-24 w-40 md:h-48 md:w-60 ">
        <Image
          src={item?.home_image[0]}
          objectFit="cover"
          className="rounded-lg"
          layout="fill"
          objectPosition="left"
        />
      </div>
      <div className="ml-5 flex flex-col flex-grow">
        <div className="flex justify-between mb-1">
          <p className="text-gray-500">{item?.type_of_place} in {item?.home_city}</p>
          <HeartIcon className="h-6 cursor-pointer active:scale-90" />
        </div>
        <h2 className="text-lg font-medium ">{item?.home_name}</h2>
        <div className="border-b w-10 pl-2 mt-2" />
        <p className="text-gray-500 pt-2 text-sm flex-grow">
          <div className="mt-2 relative">
            <span className="">{item?.total_bedroom} bedroom </span>
            <span className="pl-4 listStyleDot"> {item?.total_beds} beds </span>
            <span className="pl-4 listStyleDot" >{item?.total_bathroom} bathroom </span>
            {item?.this_place_offers?.map((item) => (
              <span className="pl-4 listStyleDot">{item} </span>
            ))}
          </div>
        </p>
        <div className="flex justify-between">
          <p className="flex items-center font-semibold ">
            <StarIcon className="h-5 text-red-400" />
            {4.32}
          </p>
          <div className="">
            <p className="text-lg lg:text-2xl font-semibold">
              Rs.{item?.price} / night
            </p>
            <p className="text-right font-extralight">{item?.price} Total</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
