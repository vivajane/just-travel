import React from 'react'
import Hero from './components/Hero'
import Reach from './components/Reach'
import FunParkedActivities from './components/FunParkedActivities'
import Loyalty from './components/Loyalty'
import Reviews from './components/Reviews'
import WhyChoose from './components/WhyChoose'
import TopRated from './components/TopRated'

const Home = () => {
  return (
    <div className=''>
      <Hero/>
      <Reach/>
      <FunParkedActivities/>
      <Loyalty/>
      <Reviews/>
      <WhyChoose/>
      <TopRated/>
    </div>
  )
}

export default Home
