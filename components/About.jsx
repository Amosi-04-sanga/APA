import Image from "next/image";
import React from "react";
import { values } from "@/constants";

const About = () => {
  return (
    <div className="mt-12">
      <div className="mt-16 relative h-[80vh] bg-fixed bg-[url('/images/bg-vision.svg')] bg-cover bg-center">
        <div className="bg-[#222222] opacity-60 absolute top-0 left-0 w-full h-full z-[1] " />

        <div className="text-center w-full text-white z-10 absolute ">
          <div className="mt-8 px-2 flex flex-col justify-center items-center">
            <Image
              className="block mx-auto"
              src="/images/vision.svg"
              alt=""
              width={80}
              height={80}
            />
            <h1 className="text-2xl">Our <span className="text-yellow-400">vision</span></h1>
            <p className="max-w-[450px]">
              We envision a developed and effectively performing generation.
            </p>
          </div>

          <div className="mt-10 px-2 flex flex-col justify-center items-center">
            <Image
              className="block mx-auto rotate-45"
              src="/images/icons/mission.png"
              alt=""
              width={70}
              height={70}
            />
            <h1 className="text-2xl ">Our <span className="text-yellow-400">Mission</span></h1>
            <p className="max-w-[450px]">
              Imparting parents, guardians, youth and children stakeholders with
              efficient parenting skills and knowledge.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-12 items-center" >
        <div className="max-md:hidden">
          <Image
           src='/images/photos/value.jpg'
           alt="values illutrations"
           width={450}
           height={450}
          />
        </div>

        <div className="text-center bg-slate-400 min-h-[50vh] relative bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className=" opacity-60 absolute top-0 left-0 w-full h-full z-[1] " />
        <Image
          className="block pt-16 mx-auto"
          src="/images/icons/values.png"
          alt=""
          width={120}
          height={120}
        /> 

        <h1 className="pl-12 text-2xl text-left font-bold">Our Core <span className="text-[#199DEF]"> Values</span> </h1>

        <div className="pl-12 mt-4 pb-10 px-4 min-w-[300px]">
          {values.map((item, index) => (
            <div key={index} className="flex gap-2 justify-start items-center">
              <span className="text-xl">🔹</span>
              <p className="text-xl capitalize text-[#10284A]">{item}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;
