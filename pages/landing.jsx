import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "bootstrap/dist/css/bootstrap.css";
import {AiFillCar,AiFillVideoCamera} from "react-icons/ai";
import {GiFireFlower,GiTable} from "react-icons/gi";
import {BiWater,BiWifi} from "react-icons/bi";
import {MdPool} from "react-icons/md";

function landing() {
 const placeOffers = [
    {
        icon:<GiFireFlower/>,
        description:"Garden View"
    },
    {
        icon:<BiWater/>,
        description:"Lake Water"
    }
    ,
    {
        icon:<BiWifi/>,
        description:"Wifi"
    }
    ,
    {
        icon:<GiTable/>,
        description:"Dedicated Workspace"
    },
    {
        icon:<AiFillCar/>,
        description:"Free parking on premises"
    },
    {
        icon:<MdPool/>,
        description:"Security cameras on property"
    },
    {
        icon:<AiFillVideoCamera/>,
        description:"Security cameras on property"
    },

 ]




  return (
    <>
      <Header />
      <div className="mx-56 mt-32">
        <div className="container mx-auto  h-16 ">
          <h1 className="text-3xl truncate font-semibold">
            Jannat 100% PetFriendly Pool villa with LakeView
          </h1>
          <p className="underline mt-2">Pimplad Nasik, Maharashtra, India</p>

          {/* Photos Section  */}
          <div className="photosSection ">
            <div className="row ">
              <div className="col-6" style={{ height: "385px" }}>
                <img
                  src="https://a0.muscache.com/im/pictures/miso/Hosting-605371928419351152/original/c8f48e8b-091d-47ea-85ac-b31bc2604bbb.jpeg?im_w=1200"
                  alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant."
                  className="banner-first"
                />
              </div>
              <div className="col-6">
                <div className="row">
                  <div className="col-6">
                    <img
                      src="https://a0.muscache.com/im/pictures/miso/Hosting-605371928419351152/original/59af5e61-037e-440c-92b5-429edc8baafe.jpeg?im_w=720"
                      alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant."
                      className="banner-rest "
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src="https://a0.muscache.com/im/pictures/miso/Hosting-605371928419351152/original/5fae54d7-9455-4c79-b077-02222ed699dd.jpeg?im_w=720"
                      alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant."
                      className="banner-rest "
                      style={{ borderRadius: "0px 10px 0px 0px" }}
                    />
                  </div>
                  <div className="col-6 mt-4">
                    <img
                      src="https://a0.muscache.com/im/pictures/miso/Hosting-605371928419351152/original/6b063c87-500b-4fe5-81b0-70ef370a1802.jpeg?im_w=720"
                      alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant."
                      className="banner-rest "
                    />
                  </div>
                  <div className="col-6 mt-4">
                    <img
                      src="https://a0.muscache.com/im/pictures/miso/Hosting-605371928419351152/original/ca080024-4408-4808-aecc-83e411bc7ff9.jpeg?im_w=720"
                      alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant."
                      className="banner-rest "
                      style={{ borderRadius: "0px 0px 10px 0px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* home Description  */}
          <div className="homeDescription mt-5">
            <div className="row">
              <div className="col-md-9">
                <div className="d-flex" style={{ justifyContent: "space-between" }}>
                  <div>
                    <h4>Entire villa hosted by Shreya</h4>
                    <ul className="d-flex homeCategory">
                      <li>12 guests</li>
                      <li>3 bedrooms</li>
                      <li>3 beds</li>
                      <li>3 bathrooms</li>
                    </ul>
                  </div>
                  <img
                    className="profile"
                    src="https://a0.muscache.com/im/pictures/user/b861bd91-1b45-4371-9398-7ce856a70af4.jpg?im_w=240"
                    alt=""
                  />
                </div>

                <hr />
                <div className="homeInfo">
                  <div className="d-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                      />
                    </svg>
                    <div>
                      <h6>Dedicated workspace</h6>
                      <p>
                        A common area with wifi that’s well suited for working.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                      />
                    </svg>

                    <div>
                      <h6>Self check-in</h6>
                      <p>You can check in with the doorperson.</p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                      />
                    </svg>

                    <div>
                      <h6>Shreya is a Superhost</h6>
                      <p>
                        Superhosts are experienced, highly rated hosts who are
                        committed to providing great stays for their guests.
                      </p>
                    </div>
                  </div>
                </div>

                <hr />

                <h2>
                  <span style={{ color: "red" }}>residencia</span> cover
                </h2>
                <p>
                  Every booking includes free protection from Host
                  cancellations, listing inaccuracies, and other issues like
                  trouble checking in.
                </p>

                <hr />
                <p>
                  Jannat blends the most luxurious backdrop of your fantasy with
                  nature’s incredible marvels to create a tranquil utopia that
                  caters to your comfort where Breakfast is complimentary! This
                  3Bed pool villa in Nashik is a hidden paradise waiting to
                  dazzle you with its tranquil charm.
                </p>
                <hr />

                <div className="placeOffer">
                  <h4>What this place offers</h4>
                  <div className="row">

                    {
                        placeOffers?.map((data)=>{
                            return(

                            <div className="col-md-6">
                            <div className="d-flex" style={{margin:'10px 0'}} >
                                <div className="icon">
                                    {data.icon} 
                                </div>
                              <div>
                                <h6>{data.description}</h6>
                              </div>
                            </div>
                          </div> 
                            )
                        })
                    }
                   


                  </div>
                </div>

                <hr />
                <div className="thingsToKnow">
                    <h4>Things to know</h4>
                    <div className="row">
                        <div className="col-md-4">
                                <h6>House rules</h6>
                                <p>Check-in: 1:00 pm – 6:00 pm</p>
                                <p>Checkout before 10:00 am</p>
                                <p>12 guests maximum</p>
                        </div>
                        <div className="col-md-4">
                            <h6>Safety and property </h6>
                            <p>No carbon monoxide alarm</p>
                            <p>No smoke alarm</p>
                            <p>Security camera/recording device</p>
                        </div>
                        <div className="col-md-4">
                            <h6>Cancellation policy</h6>
                            <p>This reservation is non-refundable.</p>
                            <p>Review the Host’s full cancellation policy which applies even if you cancel for illness or disruptions caused by COVID-19.</p>
                        </div>
                    </div>
                </div>
              </div>
              <div className="col-md-3">
            
              </div>
            </div>
          </div>
         
        </div>
       
      </div>

      <div style={{position:'relative',top:'100rem !important'}} >

            <Footer />
        </div>
     
    </>
  );
}

export default landing;
