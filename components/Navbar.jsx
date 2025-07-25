"use client";
import Image from "next/image";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constants";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const pathname = usePathname();

  return (
    <div className="bg-[#10284A] sticky top-0 left-0 z-20 flex justify-between items-center h-[70px] p-2">
      <Link onClick={() => setOpenMenu(false)} href="/">
        <Image src="/images/logo.svg" alt="logo" width={75} height={75} />
      </Link>

      <div className="px-4 cursor-pointer">
        <Image
          onClick={() => setOpenMenu(!openMenu)}
          src={openMenu ? "/images/close.svg" : "/images/menu.svg"}
          alt="menu"
          width={35}
          height={35}
        />
      </div>

      <div
        className={`fixed ${
          !openMenu ? "-left-[80vw]" : "left-0"
        } transition-all duration-800 z-40 bg-menu-light dark:bg-menu-dark md:hidden top-[70px] w-[80vw] sm:w-[70w] h-[90vh] flex justify-start`}
      >
        <div className="flex flex-col gap-4 bg-[#10284A] p-6 pr-28 pt-12">
          {navLinks.map((link, index) => {
            const isActive =
              (pathname.includes(link.route) && link.route.length > 1) ||
              pathname === link.route;
            return (
              <div key={link.label}>
                <Fade cascade damping={index}>
                  <Link
                    href={link.route}
                    onClick={() => setOpenMenu(false)}
                    className={`${
                      pathname === link.route && "bg-red-600"
                    } transition-all duration-100 hover:bg-red-600 flex p-2 gap-4 rounded-md cursor-pointer text-dark-1`}
                  >
                    <p className="text-white text-lg"> {link.label} </p>
                  </Link>
                </Fade>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
