'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { usePathname } from "next/navigation";
import { navLinks } from "@/constants";
import { Fade } from "react-awesome-reveal";


const Navbar = () => {
const [openMenu, setOpenMenu] = useState(false)


  return (
    <div className='bg-[#10284A] flex justify-between items-center h-[70px] p-2'>
      <div>
        <Image src='/images/logo.svg' alt='logo' width={75} height={75}/>
      </div>
      
      <div className='px-4 cursor-pointer'>
        <Image onClick={() => setOpenMenu(!openMenu)} src={openMenu ? '/images/close.svg': '/images/menu.svg'} alt='menu' width={35} height={35}/>
      </div>

    </div>
  )
}

export default Navbar