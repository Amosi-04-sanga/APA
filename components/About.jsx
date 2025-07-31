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
            <p>
              we envision a developed and effectively performing generation.
            </p>
          </div>

          <div className="mt-10 px-2 flex flex-col justify-center items-center">
            <Image
              className="block mx-auto"
              src="/images/mission.svg"
              alt=""
              width={70}
              height={70}
            />
            <h1 className="text-2xl ">Our <span className="text-yellow-400">Mission</span></h1>
            <p>
              imparting parents, guardians, youth and children stakeholders with
              efficient parenting skills and knowledge.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center min-h-[50vh] relative bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className=" opacity-60 absolute top-0 left-0 w-full h-full z-[1] " />
        <Image
          className="block pt-16 mx-auto"
          src="/images/values.svg"
          alt=""
          width={80}
          height={80}
        /> 

        <h1 className="text-2xl text-center font-bold">Core <span className="text-[#199DEF]">Values</span> </h1>

        <div className="mt-4 pb-10 mb-10 grid place-content-center ">
          {values.map((item, index) => (
            <div key={index} className="flex gap-2 justify-start items-center">
              <Image src="/images/check.svg" alt="" width={10} height={10} />
              <p className="text-xl capitalize text-[#10284A]">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
