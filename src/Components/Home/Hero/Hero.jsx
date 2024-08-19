import React from 'react'
import HeroNav from '../../Shared/Navbar/HeroNav'
import HeroContent from './HeroContent'

function Hero() {
  return (
    <>
    <div>
      <HeroNav/>
    </div>
    <div className='py-20 bg-[#2d5356] px-16 text-white'>
      <HeroContent/>
    </div>
    </>
  )
}

export default Hero