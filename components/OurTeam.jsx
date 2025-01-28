import Image from 'next/image'
import React from 'react'

const OurTeam = () => {
  return (
    <div className='mt-20 text-center px-8'>
        <h1 className="text-3xl mt-4 font-bold">Our team</h1>
         <p className="mt-8">We are a passionate team of parents, educators and child development experts committed to transforming parenting across Africa. We understand the unique challenges and opportunities that come with raising children in today’s world while honoring Africa's rich traditions.</p>
        
        <div className="relative mt-8 flex flex-wrap md:justify-start justify-center items-center gap-4">
             
             
             <div className='flex flex-col justify-center items-center'>
             <div className="rounded-full bg-blue-400">
                   <img src="/images/slideshow/slideshow1.jpg" alt="photo of member" className='w-[120px] h-[120px] rounded-full block object-cover p-1'/>
             </div>
             <p >Neus njugunya</p>
             </div>


             <div className='flex flex-col justify-center items-center'>
             <div className="rounded-full bg-blue-400">
                   <img src="/images/slideshow/slideshow1.jpg" alt="photo of member" className='w-[120px] h-[120px] rounded-full block object-cover p-1'/>
             </div>
             <p >Martin Kidudu</p>
             </div>


             <div className='flex flex-col justify-center items-center'>
             <div className="rounded-full bg-blue-400">
                   <img src="/images/slideshow/slideshow1.jpg" alt="photo of member" className='w-[120px] h-[120px] rounded-full block object-cover p-1'/>
             </div>
             <p >Dinnah Munyu</p>
             </div>


             <div className='flex flex-col justify-center items-center'>
             <div className="rounded-full bg-blue-400">
                   <img src="/images/slideshow/slideshow1.jpg" alt="photo of member" className='w-[120px] h-[120px] rounded-full block object-cover p-1'/>
             </div>
             <p >Neus njugunya</p>
             </div>


             <div className='flex flex-col justify-center items-center'>
             <div className="rounded-full bg-blue-400">
                   <img src="/images/slideshow/slideshow1.jpg" alt="photo of member" className='w-[120px] h-[120px] rounded-full block object-cover p-1'/>
             </div>
             <p >Neus njugunya</p>
             </div>

             <div className='absolute -bottom-10 left-[50%] -translate-x-1/2 w-[120px] h-1 bg-gradient-to-r from-white via-blue-500 to-white' />

        </div>
    </div>
  )
}

export default OurTeam