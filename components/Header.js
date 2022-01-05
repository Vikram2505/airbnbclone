import Image from 'next/image'
import React, { useState, useRef } from 'react'
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon, UserAddIcon } from '@heroicons/react/solid'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router';
import UseComponentVisible from './UseComponentVisible';

function Header({ placeholder }) {
    const [searchInput, setSerchInput] = useState('');
    // const [showSearchInput, setShowSearchInput] = useState(false)
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [noOfGuests, setNoOfGuests] = useState('1');
    const router = useRouter();
    const { ref, isComponentVisible, setIsComponentVisible } = UseComponentVisible(false);
    const inputref = useRef(null);

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }

    const search = () => {        
            !inputref.current.value ? (
                inputref.current.classList.add('border-red-400'))
                : (
                    inputref.current.classList.remove('border-red-400'),
                    router.push({
                        pathname: '/search',
                        query: {
                            location: searchInput,
                            startdate: startDate.toISOString(),
                            enddate: endDate.toISOString(),
                            noOfGuests
                        },
                    }))        
    }

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    }

    return (
        <header className='fixed w-full z-50 top-0  grid grid-cols-2 sm:grid-cols-3  bg-zinc-50 p-3 lg:p-5 shadow-md md:px-10'>
            <div className='relative flex items-center hidden h-10 cursor-pointer my-auto md:block lg:block'>
                <Image onClick={() => router.push('/')} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png" height='50' width='130' objectFit='contain' objectPosition='left' />
            </div>

            {/* middle - search */}
            <div className='flex items-center relative'>
                <input value={searchInput} onChange={(e) => setSerchInput(e.target.value)}
                    ref={inputref} onClick={() => setIsComponentVisible(!isComponentVisible)}
                    className=' md:border-2 rounded-full py-3 pr-2 md:shadow-sm sm:shadow-sm   flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400' type="text"
                    placeholder={placeholder || 'Start your search'} />
                <SearchIcon className='hidden md:inline-flex h-8 absolute right-3 bg-red-400 text-white rounded-full p-2 cursor-pointer ' />
            </div>

            <div className='flex space-x-4 items-center justify-end'>
                <p className='text-gray-500 hidden md:inline'>Become a host</p>
                <GlobeAltIcon className='h-6 text-gray-500 cursor-pointer' />
                <div className='flex items-center cursor-pointer space-x-2 border-2 text-gray-500 rounded-full px-2 py-1'>
                    <MenuIcon className='h-6' />
                    <UserCircleIcon className='h-6' />
                </div>
            </div>
            {isComponentVisible ? (
                <div className='flex flex-col col-span-3 mt-6 mx-auto rounded-lg'>
                    <div ref={ref} onClick={() => setIsComponentVisible(isComponentVisible)}>
                    <div className='hidden lg:block md:block'>
                        <DateRangePicker
                            ranges={[selectionRange]}
                            months={2}
                            direction='horizontal'
                            minDate={new Date()}
                            rangeColors={["#fd5b61"]}
                            onChange={handleSelect}
                        />
                        </div>
                        <div className='block lg:hidden md:hidden'>
                        <DateRangePicker
                            ranges={[selectionRange]}
                            minDate={new Date()}
                            rangeColors={["#fd5b61"]}
                            onChange={handleSelect}
                        /></div>
                        <div className='flex items-center bg-white border-b '>
                            <h2 className='text-2xl pl-5 flex-grow font-semibold mb-2'>Number of Guests</h2>
                            <UsersIcon className='h-5' />
                            <input value={noOfGuests} onChange={e => setNoOfGuests(e.target.value)} type="number" className='w-12 pl-2 outline-none text-red-400' min={1} />
                        </div>
                    </div>
                        <div className='flex'>
                            <button className='flex-grow text-gray-500 py-2 hover:bg-red-400 shadow-sm hover:text-white rounded-md active:scale-90'>Cancel</button>
                            <button onClick={search} className='flex-grow text-red-400 py-2 shadow-sm hover:bg-red-400 hover:text-white rounded-md active:scale-90'>Search</button>
                        </div>
                </div>) : (<></>)
            }

        </header>
    )
}

export default Header
