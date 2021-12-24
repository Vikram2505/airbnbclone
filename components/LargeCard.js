import Image from "next/image"

function LargeCard({img, title, description, buttonText}) {
    return (
        <section className="relative py-16 cursor-pointer">
        <div className="relative h-96 min-w-[300px] ">
            <Image src={img} layout="fill" className="rounded-xl" objectFit="cover" />
            <div className="absolute top-20 left-12">
                <h1 className="text-4xl mb-3 w-64 font-medium">{title}</h1>
                <p className="mt-3">{description}</p>
                <button className="bg-black text-white mt-3 px-2 py-1 rounded-md">{buttonText}</button>
            </div>
        </div>
        </section>
    )
}

export default LargeCard