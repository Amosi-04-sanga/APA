'use client'
import { members, ourTeam } from "@/constants";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Collaborate } from ".";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";


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

      <div ref={scrollRef} className="relative h-[300px] scorllbar-x mx-auto w-[90vw] mt-4 flex items-center  gap-4 sm:gap-12">
        
      {
        ourTeam.map( (person, index) => (
            <div key={index} className=" cursor-pointer block relative  py-4 flex-shrink-0 w-[180px] h-[230px] shadow-lg rounded-md hover:scale-110 transition duration-200">
          <div className="bg-blue-700 rounded-full inline-block p-[2px]">
            <div className="rounded-full bg-blue-400  w-[100px] h-[100px]">
              <img
                src={person.url}
                alt="photo of member"
                className="w-full h-full rounded-full block object-contain"
              />
            </div>
          </div>
          <p className="mt-2">{person.name}</p>
          <p className="opacity-60">{person.position}</p>
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
