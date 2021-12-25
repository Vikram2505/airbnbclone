import { format } from "date-fns";
import Head from "next/head"
import { useRouter } from "next/router"
import Footer from "../components/Footer"
import Header from "../components/Header"
import InfoCard from "../components/InfoCard";

function Search({searchResults}) {
    // console.log(window.next.router.query)
    const router = useRouter();

    //ES6 destructuring
    const {location, startdate, enddate, noOfGuests} = router.query;
    // console.log(router.query)

    const formattedStartDate = format(new Date(startdate), 'dd MMMM yy');
    const formattedEndDate = format(new Date(enddate), 'dd MMMM yy');
    const range = `${formattedStartDate} - ${formattedEndDate}`;
    return (
        <div className="h-screen">
            <Head>
				<title>Search results</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
            <Header placeholder={`${location.toUpperCase()} | ${range} | ${noOfGuests} guests`} />

            <main className="flex">
                <section className="flex-grow pt-10 px-6">
                    <p className="text-xs">300+ stays - {range} for {noOfGuests} guests</p>
                    <h1 className="text-2xl font-semibold mt-2 mb-4">Stays in {location.toUpperCase()}</h1>

                    <div className="hidden lg:inline-flex space-x-3 mb-5 text-gray-800 whitespace-nowrap">
                        <p className="button">Cancellation Flexibility</p>
                        <p className="button">Type of Place</p>
                        <p className="button">Price</p>
                        <p className="button">Rooms and Beds</p>
                        <p className="button">More filters</p>
                    </div>
                    <div className="flex flex-col border-t pb-3">
                        {searchResults.map(
                            ({img, location, title, description, star, price, total}
                            ) => (
                            <InfoCard 
                                key={img}
                                img={img}
                                location={location}
                                title={title}
                                description={description}
                                star={star} 
                                price={price}
                                total={total}
                            />
                        ))}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default Search

export async function getServerSideProps() {
    const searchResults = await fetch('https://jsonkeeper.com/b/5NPS')
    .then(res => res.json())
    return{
        props: {
            searchResults,
        }
    }

}