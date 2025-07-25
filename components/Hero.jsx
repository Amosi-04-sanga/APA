"use client";
import React, { useEffect, useState } from "react";
import { HeroSlideshow } from "../constants";
import Image from "next/image";
import { Fade, Slide } from "react-awesome-reveal";


const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const toLeftHandler = () => {
    const isFirstSlide = currentIndex === 0;
    setCurrentIndex(isFirstSlide ? HeroSlideshow.length - 1 : currentIndex - 1);
  };

  const toRightHandler = () => {
    const isLastSlide = currentIndex === HeroSlideshow.length - 1;
    setCurrentIndex(isLastSlide ? 0 : currentIndex + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      toRightHandler();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <div>
      <div className="flex items-center justify-around h-[30vh]">
        <Slide className="p-2">
          <p className="md:text-3xl text-2xl uppercase font-bold ">
            The smartest guide <br /> for nurturing{" "}
          </p>
        </Slide>
        <div className=" ">
          <Image
            width={200}
            height={200}
            src="/images/logo.svg"
            alt="logo image"
            className=""
          />
        </div>
      </div>

      <section className="relative min-h-[80vh] md:h-[90vh] flex items-center justify-center">
        <div className="bg-[#333] absolute left-0 top-0 z-10 min-h-[80vh] md:h-[90vh] w-full opacity-[.6]" />

        <div className={`absolute left-0 top-0 inset-0 min-h-[80vh] w-100vw `}>
          <Image
            src={HeroSlideshow[currentIndex].url}
            alt="Hero Background"
            fill
            priority
            style={{
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.5s ease-in-out",
            }}
          />
        </div>

        <div className="flex flex-col justify-center items-center absolute left-[50%] -translate-x-2/4 top-[50%] -translate-y-2/4 z-10 min-h-[80vh] md:h-[90vh] max-sm:w-auto text-center text-white">
          <Fade className="sm:w-[400px] max-sm:w-[250px]">
            <h1 className="text-2xl md:text-3xl text-white leading-10 font-bold tracking-wider uppercase">
              {" "}
              {HeroSlideshow[currentIndex].text}{" "}
            </h1>
          </Fade>
        </div>
        <button
          onClick={toLeftHandler}
          className="absolute z-10 left-4 top-[50%] border-[#c8e4a3] border-[1px] rounded-full p-1 translate-y-2/4 cursor-pointer text-white font-bold uppercase"
        >
          <Image
            src={"/images/icons/right_arrow.svg"}
            alt="icon"
            width={20}
            height={20}
            className="rotate-180"
          />
        </button>
        <button
          onClick={toRightHandler}
          className="absolute z-10 right-4 top-[50%] border-[#c8e4a3] border-[1px] rounded-full p-1 translate-y-2/4 cursor-pointer text-white font-bold uppercase"
        >
          <Image
            src={"/images/icons/right_arrow.svg"}
            alt="icon"
            width={20}
            height={20}
            className=""
          />
        </button>
      </section>
    </div>
  );
};

export default Hero;
