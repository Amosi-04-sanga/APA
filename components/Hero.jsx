import React from "react";
import { HeroSlideshow } from "../constants";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <div className="flex items-center justify-around h-[30vh]">
        <div className="p-2">
          <p className="md:text-3xl text-2xl uppercase font-bold ">
            The smartest guide <br /> for nurturing{" "}
          </p>
        </div>
        <div className=" ">
          <Image width={250} height={250} src="/images/logo.svg" alt="logo image" className="" />
        </div>
      </div>

      <div className="text-center min-h-[60vh] relative">
        <div className="bg-[#222222] opacity-60 absolute top-0 left-0 w-full h-full z-[1] " />
        <div className="min-h-[60vh] w-full absolute left-0 top-0 ">
          <Image
            src="/images/slideshow/slideshow1.jpg"
            fill
            className="object-cover object-center"
            alt="hero image"
          />
        </div>

        <div className="text-center font-bold w-full text-white text-2xl z-10 absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2">
          <h1>HAPPY FAMILY</h1>
          <h1>BETTER PARENTING</h1>
          <h1>BETTER KIDS LITERACY</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
