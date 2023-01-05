import Image from "next/image";
import React, { useState, useRef, Fragment } from "react";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
  UserAddIcon,
} from "@heroicons/react/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";
import UseComponentVisible from "./UseComponentVisible";
import Link from "next/link";
import { Dialog, Menu, Transition } from "@headlessui/react";
import Login from "./Login";

function Header({ placeholder }) {
  const [searchInput, setSerchInput] = useState("");
  // const [showSearchInput, setShowSearchInput] = useState(false)
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState("1");
  const router = useRouter();
  const [openSignupModal, setOpenSignupModal] = useState(false);

  const cancelButtonRef = useRef(null);

  const { ref, isComponentVisible, setIsComponentVisible } =
    UseComponentVisible(false);
  const inputref = useRef(null);

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const search = () => {
    !inputref.current.value
      ? inputref.current.classList.add("border-red-400")
      : (inputref.current.classList.remove("border-red-400"),
        router.push({
          pathname: "/search",
          query: {
            location: searchInput,
            startdate: startDate.toISOString(),
            enddate: endDate.toISOString(),
            noOfGuests,
          },
        }));
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  // assign names to dropdown
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <header className="fixed w-full z-50 top-0 grid grid-cols-2 sm:grid-cols-3 md:w-full  bg-zinc-50 p-3 lg:px-50 lg:py-5 shadow-md md:px-10">
      <div className="relative flex items-center hidden h-10 cursor-pointer my-auto md:block lg:block">
        <Image
          onClick={() => router.push("/")}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
          height="50"
          width="130"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* middle - search */}
      <div className="flex items-center relative">
        <input
          value={searchInput}
          onChange={(e) => setSerchInput(e.target.value)}
          ref={inputref}
          onClick={() => setIsComponentVisible(!isComponentVisible)}
          className=" shadow-md md:border-2 rounded-full py-3 pr-2 md:shadow-sm flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder={placeholder || "Start your search"}
        />
        <SearchIcon onClick={search} className="hidden md:inline-flex h-8 absolute right-3 bg-red-400 text-white rounded-full p-2 cursor-pointer " />
      </div>

      <div className="flex space-x-4 items-center justify-end">
        <Link href={"/becomeHost"}>
          <p className="text-black opacity-60 font-semibold hidden md:inline cursor-pointer">
            Become a host
          </p>
        </Link>
        <GlobeAltIcon className="h-6 text-gray-500 cursor-pointer" />

        <div className="relative inline-block text-left">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="flex items-center cursor-pointer space-x-2 border-2 focus:outline-none text-gray-500 rounded-full px-2 py-1 hover:shadow-md transition-all duration-300">
                <MenuIcon className="h-6" />
                <UserCircleIcon className="h-6" />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-5 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm cursor-pointer"
                        )}
                        onClick={() => setOpenSignupModal(true)}
                      >
                        Sign up
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Login
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Became a host
                      </a>
                    )}
                  </Menu.Item>
                  <form method="POST" action="#">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          type="submit"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block w-full px-4 py-2 text-left text-sm"
                          )}
                        >
                          Help
                        </button>
                      )}
                    </Menu.Item>
                  </form>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
      
      {isComponentVisible ? (
        <div className="flex flex-col col-span-3 mt-6 mx-auto rounded-lg">
          <div
            ref={ref}
            onClick={() => setIsComponentVisible(isComponentVisible)}
          >
            <div className="hidden lg:block md:block">
              <DateRangePicker
                ranges={[selectionRange]}
                months={2}
                direction="horizontal"
                minDate={new Date()}
                rangeColors={["#fd5b61"]}
                onChange={handleSelect}
              />
            </div>
            <div className="block lg:hidden md:hidden">
              <DateRangePicker
                ranges={[selectionRange]}
                minDate={new Date()}
                rangeColors={["#fd5b61"]}
                onChange={handleSelect}
              />
            </div>
            <div className="flex items-center bg-white border-b ">
              <h2 className="text-2xl pl-5 flex-grow font-semibold mb-2">
                Number of Guests
              </h2>
              <UsersIcon className="h-5" />
              <input
                value={noOfGuests}
                onChange={(e) => setNoOfGuests(e.target.value)}
                type="number"
                className="w-12 pl-2 outline-none text-red-400"
                min={1}
              />
            </div>
          </div>
          <div className="flex">
            <button className="flex-grow text-gray-500 py-2 hover:bg-red-400 shadow-sm hover:text-white rounded-md active:scale-90">
              Cancel
            </button>
            <button
              onClick={search}
              className="flex-grow text-red-400 py-2 shadow-sm hover:bg-red-400 hover:text-white rounded-md active:scale-90"
            >
              Search
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
      {/* Login form Modal */}
      <Login
        openSignupModal={openSignupModal}
        setOpenSignupModal={setOpenSignupModal}
        cancelButtonRef={cancelButtonRef}
      />
    </header>
  );
}

export default Header;
