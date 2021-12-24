import Image from 'next/image'
import React from 'react'

function Banner() {
    return (
        <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] '>
            <Image src='https://links.papareact.com/0fm' layout='fill' objectFit='cover' priority />
            <div className='absolute top-1/2 w-full text-center'>
                <h1 className='text-lg sm:text-lg lg:text-4xl'>Not sure where to go? </h1>
                <button className='text-purple-500 bg-white px-10 py-3 cursor-pointer rounded-full shadow-md font-bold my-3 hover:shadow-xl active:scale-90 transation duration-150'>I'm flexiable</button>
            </div>
        </div>
    )
}

export default Banner