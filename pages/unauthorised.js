import React, { useEffect } from 'react'
import Header from '../components/Header'
import Router from "next/router";
import { useSelector } from 'react-redux';

const unauthorised = () => {
  const { userInfo} = useSelector((state) => ({
    ...state.Auth,
  }));
  useEffect(() => {
    if(userInfo){
      Router.push("/");
    }
  }, [userInfo])
  
  return (
    <div>
        <Header />
        <div className='h-screen grid items-center'>
        <h1 className='text-3xl text-center font-semibold mt-24'>Unauthorised User <br /> Please login first</h1>
        </div>

    </div>
  )
}

export default unauthorised