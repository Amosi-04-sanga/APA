import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='px-8'>
        <h2 className='text-center font-bold mt-8 text-2xl'>Choosing the Right Name for Your Baby</h2>

        <p className='mt-4'>A baby’s name is more than just an identity; it is a lifelong gift that carries meaning, history, and sometimes even destiny. Names reflect culture, tradition, and family heritage, shaping a child’s sense of belonging and self-worth. Parents often spend a lot of time choosing the perfect name, considering factors like uniqueness, pronunciation, meaning, and religious or cultural significance. A well-chosen name can boost a child's confidence, create a positive first impression, and even influence how they are perceived by others throughout life.</p>
        
        <div className="mt-8 flex flex-wrap justify-center items-center gap-2">
           <Link href='/kidnames/girlnames' className='rounded-md block px-2 py-1 bg-[#10284A] text-white'>Babynames A to Z</Link>
           <Link href='/kidnames/girlnames' className='rounded-md block px-2 py-1 bg-[#10284A] text-white'>Female names</Link>
           <Link href='/kidnames/girlnames' className='rounded-md block px-2 py-1 bg-[#10284A] text-white'>Male names</Link>
           <Link href='/kidnames/girlnames' className='rounded-md block px-2 py-1 bg-[#10284A] text-white'>Gender neutral names</Link>
        </div>

        <p className='text-green-600 text-center mt-8 text-3xl'>  comming soon!</p>
    </div>
  )
}

export default page