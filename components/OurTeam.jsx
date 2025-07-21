import { members } from "@/constants";
import Image from "next/image";
import React from "react";

const OurTeam = () => {
  return (
    <div className="text-center px-8">
      <h1 className="text-3xl font-bold">Our team</h1>

      <div className="max-w-[700px] mx-auto mt-8 flex flex-wrap justify-center items-center gap-8 sm:gap-12">
        <div className="flex flex-col justify-center items-center">
          <div className="bg-blue-700 rounded-full p-1">
            <div className="rounded-full bg-blue-400 p-[2px]">
              <img
                src="/images/photos/girl.png"
                alt="photo of member"
                className="w-[120px] h-[120px] md:w-[200px] md:h-[200px] rounded-full block object-contain"
              />
            </div>
          </div>
          <p className="mt-2">Martin Kidudu</p>
          <p >CEO of APO</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="bg-blue-700 rounded-full p-1">
            <div className="rounded-full bg-blue-400 p-[2px]">
              <img
                src="/images/photos/photo.png"
                alt="photo of member"
                className="w-[120px] h-[120px] md:w-[200px] md:h-[200px] rounded-full block object-contain"
              />
            </div>
          </div>
          <p className="mt-2">Martin Kidudu</p>
          <p >General Manager of APO</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="bg-blue-700 rounded-full p-1">
            <div className="rounded-full bg-blue-400 p-[2px]">
              <img
                src="/images/photos/girl.png"
                alt="photo of member"
                className="w-[120px] h-[120px] md:w-[200px] md:h-[200px] rounded-full block object-contain"
              />
            </div>
          </div>
          <p className="mt-2">Dinnah Munyu</p>
          <p>IT Manager of APO</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="bg-blue-700 rounded-full p-1">
            <div className="rounded-full bg-blue-400 p-[2px]">
              <img
                src="/images/photos/photo.png"
                alt="photo of member"
                className="w-[120px] h-[120px] md:w-[200px] md:h-[200px] rounded-full block object-contain"
              />
            </div>
          </div>
          <p className="mt-2">Neus njugunya</p>
          <p>CEO of APO</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="bg-blue-700 rounded-full p-1">
            <div className="rounded-full bg-blue-400 p-[2px]">
              <img
                src="/images/photos/girl.png"
                alt="photo of member"
                className="w-[120px] h-[120px] md:w-[200px] md:h-[200px] rounded-full block object-contain"
              />
            </div>
          </div>
          <p className="mt-2">Neus njugunya</p>
          <p >CEO of APO</p>
        </div>

        <div className="absolute -bottom-10 left-[50%] -translate-x-1/2 w-[120px] h-1 bg-gradient-to-r from-white via-blue-500 to-white" />
      </div>
      {}
      <div className="mt-16 text-center">
        <h1 className="pt-8 text-2xl font-bold">we collaborate with</h1>
        

        


      </div>
    </div>
  );
};

export default OurTeam;
