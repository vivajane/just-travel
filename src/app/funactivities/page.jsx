"use client";
import React, { createContext } from 'react'
import FunParkedActivities from '../components/FunParkedActivities'
import { ContextActivity } from '../components/Context';

const FunActivities = () => {
    const {search, setSearch} = createContext(ContextActivity)

  return (
    <div className='py-20 md:py-20 '>
        <div className="px-6 sm:px-12 md:px-16 lg:px-24">
            <h1 className='text-2xl font-bold text-center py-4' >Don't miss out on the fun</h1>
            <input className='border placeholder:text-pink-700 flex justify-center items-center mx-auto border-black py-2 rounded-full w-1/2' placeholder='    Search...' type="search" name="" id="" />
        </div>
      
      <FunParkedActivities/>
    </div>
  )
}

export default FunActivities
