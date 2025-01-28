import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#161359] mt-20 text-center md:text-left text-white'>
        <div className="flex flex-col">
            <h1 className='mt-4'>Visit and learn more on our social medias</h1>
            <div className="flex flex-wrap justify-center gap-4 mt-2">
                <Image src='/images/icons/facebook.svg' className='block' alt='icon' width={36} height={36} />
                <Image src='/images/icons/instagram.svg' className='block' alt='icon' width={36} height={36} />
                <Image src='/images/icons/tiktok.svg' className='block' alt='icon' width={36} height={36} />
                <Image src='/images/icons/whatsaap.svg' className='block' alt='icon' width={36} height={36} />
            </div>
        </div>

        <div className="flex flex-col">
            <h1 className="text-xl mt-4">Useful links</h1>

            <div className="mt-2">
                <ul>
                    <li className='cursor-pointer'> <Link href='/'>Family</Link> </li>
                    <li className='cursor-pointer'> <Link href='/'>parening</Link> </li>
                    <li className='cursor-pointer'> <Link href='/'>kids literacy</Link> </li>
                    <li className='cursor-pointer'> <Link href='/'>about us</Link> </li>
                    <li className='cursor-pointer'> <Link href='/'>contact us</Link> </li>
                </ul>
            </div>
        </div>

        <p className='mt-8'>© 2025</p>

    </div>
  )
}

export default Footer