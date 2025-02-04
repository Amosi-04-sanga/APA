import React from 'react'
import { HeroSlideshow } from "../constants";


const Hero = () => {
  return (
    <div>
    <div className="flex gap-2 h-[50vh]">
      <div className='relative p-2 grid place-content-center flex-1'>
      <p className="text-3xl uppercase text-center font-bold before:absolute before:-left-4">The smartest guide for nurturing </p>
      </div>
      <div className='w-[300px] flex-1'>
        <img src="/images/logo.svg" alt="logo image" className='w-full h-full' />
      </div>
    </div>

    <div className='text-center min-h-[50vh] relative'>
        <div className='bg-[#222222] opacity-60 absolute top-0 left-0 w-full h-full z-[1] '/>
        <div className='h-full w-full absolute left-0 top-0 '>
         <img src="/images/slideshow/slideshow1.jpg" className='w-full h-full' alt="hero image"  />
        </div>

        <div className='text-center font-bold w-full text-white text-2xl z-10 absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2'>
        <h1>HAPPY FAMILY</h1>
        <h1>BETTER PATENTING</h1>
        <h1>BETTER KIDS LITERACY</h1>
        </div>
    </div>
    </div>
  )
}

export default Hero

