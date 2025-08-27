'use client'
import { members, ourTeam } from "@/constants";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Collaborate } from ".";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Link from "next/link";


const OurTeam = () => {

   const [startAnimation, setStartAnimation] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      setStartAnimation(true);
    } else {
      setStartAnimation(false);
    }
  }, [inView]);

 const scrollRef = useRef(null)

  useEffect(() => {
    const container = scrollRef.current
    if(!container) return

    let scrollAmount = 1
    let direction = 1

    const scroll = () => {
      if(
        container.scrollLeft + container.clientWidth >= container.scrollWidth 
      ) {
        direction = -1
      } else if (container.scrollLeft <= 0) {
        direction = 1
      }
       

      container.scrollLeft += scrollAmount * direction

    }

  const interval = setInterval(scroll, 10)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
          className="text-center ">
      <h1 className="text-3xl mt-8 inline-block font-bold px-1 text-[#10284A] bg-orange-100">
        Our team
      </h1> 
      <p className="mt-4 mx-4">our team is available for the support and inovation conserning parenting and nurturing</p>

      <div 
       ref={ref}
      className="mt-8 flex flex-col text-center">
         <span className="text-4xl font-bold text-[#10284A]">
          <CountUp
                start={startAnimation ? 0 : undefined}
                end={10}
              /> {'+'}
          </span> <span className="text-blue-700 text-xl"> members</span>
      </div>

      <div ref={scrollRef} className="relative h-[300px] scorllbar-x mx-auto w-[80vw] mt-4 flex items-center  gap-4 sm:gap-12">
        
      {
        ourTeam.map( (person, index) => (
            <div key={index} className=" cursor-pointer block relative  py-4 flex-shrink-0 w-[180px] h-[230px] shadow-lg rounded-md hover:scale-110 transition duration-200">
          <div className="bg-blue-700 rounded-full inline-block p-[2px]">
            <div className="rounded-full bg-blue-400  w-[100px] h-[100px]">
              <img
                src={person.url}
                alt="photo of member"
                className="w-full h-full rounded-full block object-cover"
              />
            </div>
          </div>
         <div className="flex flex-col items-start p-2">
           <p className="mt-2 text-left">{person.name}</p>
          <p className="opacity-80 text-left">{person.position}</p>
          <Link
                href={`https://wa.me/${person.phone}?text=Hello%2C%20$'hello'`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open WhatsApp chat"
                    title="WhatsApp"
                    className="inline-flex"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-teal-600">
                      <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.08 1.52 5.79L0 24l6.39-1.67A11.93 11.93 0 0012 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22a9.9 9.9 0 01-5.05-1.4l-.36-.21-3.78.99 1.01-3.68-.23-.37A9.9 9.9 0 012 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm5.13-6.27c-.28-.14-1.66-.82-1.92-.91-.26-.1-.45-.14-.64.14-.19.27-.73.91-.9 1.1-.17.2-.34.22-.62.08-.28-.14-1.18-.44-2.24-1.41-.83-.74-1.39-1.66-1.56-1.94-.16-.27-.02-.42.12-.56.12-.12.27-.31.41-.46.14-.15.19-.26.28-.43.09-.17.05-.32-.02-.46-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.47-.64-.48l-.55-.01c-.19 0-.46.07-.7.32-.24.25-.92.9-.92 2.2s.94 2.55 1.07 2.73c.13.18 1.84 2.82 4.46 3.95.62.27 1.11.43 1.49.55.63.2 1.2.17 1.65.1.5-.08 1.66-.68 1.89-1.33.23-.65.23-1.21.16-1.33-.07-.12-.26-.19-.54-.33z"/>
                    </svg>
                  </Link>
         </div>
        </div>
        ))
      }

        

        <div className="absolute -bottom-12 left-[50%] -translate-x-1/2 w-[120px] h-1 bg-gradient-to-r from-white via-blue-500 to-white" />
      </div>
      {}
      <div className="mt-20">
        <Collaborate />
      </div>
    </div>
  );
};

export default OurTeam;
