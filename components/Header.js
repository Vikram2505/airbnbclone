import Image from 'next/image'
import React from 'react'
import {SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UserIcon, UserAddIcon} from '@heroicons/react/solid'

function Header() {
    return (
        <header className='sticky z-50 top-0 grid grid-cols-3 bg-zinc-50 p-5 shadow-md md:px-10'>
            <div className='relative flex items-center h-10 cursor-pointer'>
                <Image src="https://links.papareact.com/qd3" layout='fill' objectFit='contain' objectPosition='left' />
            </div>

            {/* middle - search */}
            <div className='flex items-center md:border-2 rounded-full py-2 pr-2 md:shadow-sm'>
                <input className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400' type="text" placeholder='Start your search' />
                <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer '/>
            </div>

            <div className='flex space-x-4 items-center justify-end'>
                <p className='text-gray-500 hidden md:inline'>Become a host</p>
                <GlobeAltIcon className='h-6 text-gray-500 cursor-pointer' />
                <div className='flex items-center cursor-pointer space-x-2 border-2 text-gray-500 rounded-full px-2 py-1'>
                    <MenuIcon className='h-6' />
                    <UserCircleIcon className='h-6' />
                </div>
            </div>
        </header>
    )
}

export default Header
