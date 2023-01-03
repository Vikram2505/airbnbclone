import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";
import data from "../utility/homes.json";
import moment from "moment";
import Image from "next/image";

import {allHomes} from "../store/slices/homeSlice.js";
import { useDispatch, useSelector } from 'react-redux';

export default function Search() {
  const router = useRouter();
  const dispatch = useDispatch();
  const {AllHomes} = useSelector((state) => ({...state.AllHomes.Homes}));
//   console.log(AllHomes,'all homes');
  //ES6 destructuring
  const { location, startdate, enddate, noOfGuests } = router.query;
  const formattedStartDate = moment(new Date(startdate)).format("ddd MMMM yy");
  const formattedEndDate = moment(new Date(enddate)).format("ddd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

console.log(location);
  const getAllHomes = () => {
    let requestBody = {
        "dataLimit": 20,
        "pageNo": 1,
        "keyword": location,
        "minPrice": "",
        "maxPrice": "",
        "typeOfPlace": "",
        "bedrooms": "",
        "beds": "",
        "bathroom": "",
        "propertyType": "",
        "amenities": ""
    };

    dispatch(allHomes(requestBody));    
};

useEffect(() => {
    getAllHomes();
}, [])
  return (
    <div className="h-screen">
      <Head>
        <title>Search results</title>
        <link
          rel="icon"
          href="https://a0.muscache.com/airbnb/static/logotype_favicon-21cc8e6c6a2cca43f061d2dcabdf6e58.ico"
        />
      </Head>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />

      <main className="flex">
        <section className="flex-grow pt-32 px-6 min-w-[100px]">
          <p className="text-sm mb-5 font-medium">
            300+ stays -{" "}
            <span className="bg-red-400 p-1 text-white rounded-md mr-1">
              {" "}
              {formattedStartDate}{" "}
            </span>{" "}
            -{" "}
            <span className="bg-red-400 p-1 text-white rounded-md mr-1">
              {formattedEndDate}
            </span>{" "}
            for {noOfGuests} guests
          </p>
          <h2 className="text-2xl font-semibold mt-2 mb-4">
            Stays in {location} - ({AllHomes?.length} Results found)
          </h2>

          <div className="hidden lg:inline-flex space-x-3 mb-5 text-gray-800 whitespace-nowrap">
            <p className="button">Price</p>
            <p className="button">Type of place</p>
            <p className="button">Free cancellation</p>
            <p className="button">Type of Place</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">Wifi</p>
            <p className="button">Free parking</p>
            <p className="button">Self check-in</p>
            <p className="button">More filters</p>
          </div>
          <div className="flex flex-col border-t pb-3">
            {AllHomes?.map(
              (item,index) => (
                <InfoCard
                  key={index}
                  item={item}
                //   img={img}
                //   location={location}
                //   title={title}
                //   description={description}
                //   star={star}
                //   price={price}
                //   total={total}
                />
              )
            )}
          </div>
        </section>

        <section className="hidden sticky top-0 lg:inline-flex h-screen lg:min-w-[600px]">
          <Map searchResults={data.data.searchResults} />
        </section>
      </main>

      <Footer />
    </div>
  );
}

// export default Search;

// export async function getServerSideProps() {
//     const searchResults = await fetch('https://jsonkeeper.com/b/5NPS')
//     .then(res => res.json())
//     return{
//         props: {
//             searchResults,
//         }
//     }

// }
