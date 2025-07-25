import { members } from "@/constants";
import Image from "next/image";
import React from "react";
import { Collaborate } from ".";

const OurTeam = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl inline-block font-bold px-1 text-[#10284A] bg-orange-100">
        Our team
      </h1>

      <div className="relative  max-w-[700px] mx-auto mt-8 flex flex-wrap justify-center items-start gap-2 sm:gap-12">
        <div className="px-8 py-4 shadow-md rounded-md flex flex-col justify-center items-center hover:scale-105 transition duration-200">
          <div className="bg-blue-700 rounded-full p-[2px]">
            <div className="rounded-full bg-blue-400 ">
              <img
                src="/images/photos/photo.png"
                alt="photo of member"
                className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] rounded-full block object-contain"
              />
            </div>
          </div>
          <p className="mt-2">Neus njugunya</p>
          <p className="opacity-60">CEO of APO</p>
        </div>

        <div className="px-8 py-4 shadow-md rounded-md  flex flex-col justify-center items-center hover:scale-105 transition duration-200">
          <div className="bg-blue-700 rounded-full p-[2px]">
            <div className="rounded-full bg-blue-400 ">
              <img
                src="/images/photos/girl.png"
                alt="photo of member"
                className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] rounded-full block object-contain"
              />
            </div>
          </div>
          <p className="mt-2">Martin Kidudu</p>
          <p className="opacity-60">CEO of APO</p>
        </div>

        <div className="px-8 py-4 shadow-md rounded-md flex flex-col justify-center items-center hover:scale-105 transition duration-200">
          <div className="bg-blue-700 rounded-full p-[2px]">
            <div className="rounded-full bg-blue-400">
              <img
                src="/images/photos/photo.png"
                alt="photo of member"
                className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] rounded-full block object-contain"
              />
            </div>
          </div>
          <p className="mt-2">Martin Kidudu</p>
          <p className="opacity-60">
            General Manager <br /> of APO
          </p>
        </div>

        <div className="px-8 py-4 shadow-md rounded-md flex flex-col justify-center items-center hover:scale-105 transition duration-200">
          <div className="bg-blue-700 rounded-full p-[2px]">
            <div className="rounded-full bg-blue-400">
              <img
                src="/images/photos/girl.png"
                alt="photo of member"
                className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] rounded-full block object-contain"
              />
            </div>
          </div>
          <p className="mt-2">Dinnah Munyu</p>
          <p className="opacity-60">IT Manager of APO</p>
        </div>

        <div className="px-8 py-4 shadow-md rounded-md flex flex-col justify-center items-center hover:scale-105 transition duration-200">
          <div className="bg-blue-700 rounded-full p-[2px]">
            <div className="rounded-full bg-blue-400 ">
              <img
                src="/images/photos/girl.png"
                alt="photo of member"
                className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] rounded-full block object-contain"
              />
            </div>
          </div>
          <p className="mt-2">Anifa malatu</p>
          <p className="opacity-60">CEO of APO</p>
        </div>

        <div className="absolute -bottom-8 left-[50%] -translate-x-1/2 w-[120px] h-1 bg-gradient-to-r from-white via-blue-500 to-white" />
      </div>
      {}
      <div className="mt-28">
        <Collaborate />
      </div>
    </div>
  );
};

export default OurTeam;
