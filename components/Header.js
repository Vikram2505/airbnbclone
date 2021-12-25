import Image from 'next/image'
import React, { useState } from 'react'
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon, UserAddIcon } from '@heroicons/react/solid'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router';


function Header() {
    const [searchInput, setSerchInput] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [noOfGuests, setNoOfGuests] = useState('1');
    const router = useRouter();

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    }

    return (

        <header className='sticky z-50 top-0 grid grid-cols-3 bg-zinc-50 p-5 shadow-md md:px-10'>
            <div onClick={()=> router.push('/')} className='relative flex items-center h-10 cursor-pointer my-auto'>
                <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png" layout='fill' objectFit='contain' objectPosition='left' />
            </div>

            {/* middle - search */}
            <div className='flex items-center md:border-2 rounded-full py-2 pr-2 md:shadow-sm'>
                <input value={searchInput} onChange={(e) => setSerchInput(e.target.value)} className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400' type="text" placeholder='Start your search' />
                <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer ' />
            </div>

            <div className='flex space-x-4 items-center justify-end'>
                <p className='text-gray-500 hidden md:inline'>Become a host</p>
                <GlobeAltIcon className='h-6 text-gray-500 cursor-pointer' />
                <div className='flex items-center cursor-pointer space-x-2 border-2 text-gray-500 rounded-full px-2 py-1'>
                    <MenuIcon className='h-6' />
                    <UserCircleIcon className='h-6' />
                </div>
            </div>
            {searchInput &&
                <div className='flex flex-col col-span-3 mx-auto'>
                    <DateRangePicker
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={["#fd5b61"]}
                        onChange={handleSelect}
                    />
                    <div className='flex items-center border-b mb-4'>
                        <h2 className='text-2xl pl-5 flex-grow font-semibold'>Number of Guests</h2>
                        <UsersIcon className='h-5' />
                        <input value={noOfGuests} onChange={e => setNoOfGuests(e.target.value)} type="number" className='w-12 pl-2 outline-none text-red-400' min={1} />
                    </div>
                    <div className='flex'>
                        <button className='flex-grow text-gray-500' onClick={()=>setSerchInput('')}>Cancel</button>
                        <button className='flex-grow text-red-400'>Search</button>
                    </div>
                </div>
            }

        </header>
    )
}

export default Header
