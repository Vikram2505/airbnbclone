import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard'
import 'mapbox-gl/dist/mapbox-gl.css';
import data from "../utility/homes.json"


export default function Home() { //{ exploreData, cardsData }

	return (
		<div className="">
			<Head>
				<title>Airbnb clone</title>
				<link rel="icon" href="https://a0.muscache.com/airbnb/static/logotype_favicon-21cc8e6c6a2cca43f061d2dcabdf6e58.ico" />
			</Head>

			<Header />
			<Banner />

			<main className='max-w-fullxl bg-white mx-auto px-8 sm:px-16 '>
				<section className='pt-6'>
					<h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
						{data.data.exploreData?.map(({ img, distance, location }) => (
							<SmallCard
								key={img}
								img={img}
								distance={distance}
								location={location}
							/>
						))}
					</div>
				</section>

				<section>
					<h2 className='text-4xl font-semibold pt-6 '>Live Anywhere</h2>
					<div className='flex space-x-3 p-3 -ml-3 overflow-scroll scrollbar-hide'>
						{data.data.cardsData?.map(item => (
							<MediumCard
								key={item.img}
								img={item.img}
								title={item.title}
							/>
						))}
					</div>
				</section>
				<LargeCard 
					img="https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440"
					title="The Greatest Outdoors"
					description="Wishlists curated by Airbnb" 
					buttonText="Get Inspired"
				/>
			</main>
				<Footer />
		</div>
	)
}


// export async function getStaticProps() {
// 	const exploreData = await fetch('../utility/homes.json')
// 		.then(res => {
// 			if(!res.ok){
// 				throw new Error(
// 					`This is an HTTP error: The status is ${res.status} `
// 				);
// 			}
// 			return res.json()
		
// 		}).catch((err) => {
// 			console.log(err.message);
// 		})

// 	const cardsData = await fetch(' https://jsonkeeper.com/b/VMSR')
// 		.then(res => res.json());

// 	return {
// 		props: {
// 			exploreData, cardsData
// 		}
// 	}
// }