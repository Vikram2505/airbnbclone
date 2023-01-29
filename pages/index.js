import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";
import "mapbox-gl/dist/mapbox-gl.css";
import data from "../utility/homes.json";
import { useRouter } from "next/router";

export default function Home({ exploreData }) {
  //{ exploreData, cardsData }
  const router = useRouter();
  const searchBySelectedCity = (e) =>{
   
    router.push({
      pathname: "/search",
      query: {
        location: e
      },})
  }

  return (
    <div className="">
      <Head>
        <title>Residencia-Hotels and Homes</title>
        <img src="/favicon.jpeg" alt="" />
      </Head>

      <Header />
      <Banner searchBySelectedCity={searchBySelectedCity} />

      <main className="max-w-fullxl bg-white mx-auto px-8 sm:px-16 ">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {data.data.exploreData?.map(({ img, distance, location }) => (
              <SmallCard
                key={img}
                img={img}
                distance={distance}
                location={location}
                searchBySelectedCity={searchBySelectedCity}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold pt-6 ">Live Anywhere</h2>
          <div className="flex space-x-3 p-3 -ml-3 overflow-scroll scrollbar-hide">
            {data.data.cardsData?.map((item) => (
              <MediumCard key={item.img} img={item.img} title={item.title} searchBySelectedCity={searchBySelectedCity}  />
            ))}
          </div>
        </section>
        <LargeCard
          img="https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440"
          title="The Greatest Outdoors"
          description="Wishlists curated by Residencia"
          buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </div>
  );
}

// export async function getStaticProps() {
//   const body = {
//     pageNo: 1,
//     dataLimit: 10,
//   };
//   const exploreData = await fetch(
//     "http://localhost:3000/home/get-all-homes",
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(body),
//     }
//   )
//     .then((res) => {
//       if (!res.ok) {
//         throw new Error(`This is an HTTP error: The status is ${res.status} `);
//       }
//       return res.json();
//     })
//     .catch((err) => {
//       console.log(err.message);
//     });

//   // 	const cardsData = await fetch(' https://jsonkeeper.com/b/VMSR')
//   // 		.then(res => res.json());

//   return {
//     props: {
//       exploreData,
//       // cardsData
//     },
//   };
// }
