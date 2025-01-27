import React from 'react'
import { HeroSlideshow } from "../constants";


const Hero = () => {
  return (
    <div className='text-center min-h-[50vh] relative'>
        <div className='bg-[#222222] opacity-60 absolute top-0 left-0 w-full h-full z-[1] '/>
        <div className='h-full w-full absolute left-0 top-0 '>
         <img src="/images/slideshow/slideshow1.jpg" className='w-full h-full' alt="hero image"  />
        </div>

        <div className='text-center w-full text-white text-2xl z-10 absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2'>
        <h1>HAPPY FAMILY</h1>
        <h1>BETTER PATENTING</h1>
        <h1>BETTER KIDS LITERACY</h1>
        </div>
    </div>
  )
}

export default Hero

