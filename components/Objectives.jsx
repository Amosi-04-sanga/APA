import { objectives } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FadeUp } from ".";


const Objectives = () => {
  return (
    <div className="mt-8">
      
        <div className="px-4 sm:flex-row-reverse sm:items-center sm:justify-center sm:gap-8 flex gap-4 flex-col">

        <div className="flex flex-col max-w-[450px]">
      <FadeUp>
          <div className=" shrink-0 ">
        <Image
          className="block mx-auto"
          src="/images/about.svg"
          alt=""
          width={40}
          height={40}
        />
        <div className="text-center">
          <h1 className="text-center text-3xl mt-4 text-[#10284A] inline-block px-4 mx-auto bg-blue-100 font-bold">
            Who we are
          </h1>
        </div>
        <p className="mt-4 text-left">
          We believe in nurturing the next generation of confident,
          compassionate, and successful children. we aim to share valuable
          insights, practical tips, and cultural wisdom on effective parenting
          we believe in developing children inborn talents and their potentials
          for their bright future.
        </p>
        <button className="block mx-auto mt-4 px-2 py-1 hover:bg-[#199DEF] hover:text-white transition-all duration-300 rounded-md border-[1px] border-[#199DEF]">
          <Link href='/about'>
            Read More
          </Link>
        </button>
      </div>
      </FadeUp>

        <FadeUp>
        <div className="mt-4 text-center">
          <h1 className="text-center text-3xl mt-4 text-[#10284A] inline-block px-4 mx-auto bg-blue-100 font-bold">
            Why APO
          </h1>
          <p className="mt-2">This organization is dedicated to solve the following problems</p>
          <div className="mt-2 text-left ">
            <div><span>🔹</span> Inssuficient knowledge of parenting</div>
            <div className="flex gap-1"><span>🔹</span> <p>Unholistic and less inclusive education system that does not promote talents and develop all the genius in children</p></div>
            <p><span>🔹</span> Lacking innovative generation</p>
            <p><span>🔹</span> Poor morals among teenagers</p>
            <p><span>🔹</span> High rate of children trafficking</p>
            <p><span>🔹</span> Fear of responsibility</p>
            <div className="flex gap-1"><span>🔹</span> <p>Increasing rate of women in single mothering</p></div>

          </div>
        </div>
      </FadeUp>


        </div>
      <div className="shrink-0" >
        <Image
        src='/images/photos/about.png'
        alt="photos"
        width={350}
        height={350}
        className="block mx-auto"
        />
      </div>
        </div>

      <div className="mt-12 mx-4 ">
        <Image
          src="/images/objectives.svg"
          alt="objectives"
          className="block mx-auto"
          width={50}
          height={50}
        />
        <div className="text-center">
          <h1 className="mt-4 font-bold text-3xl inline-block px-1 mx-auto ">
            Our <span className="text-[#2D3572]">objectives</span>
          </h1>
        </div>

         <div className="mt-4 p-1 flex flex-wrap gap-4 md:gap-8 max-sm:justify-center md:pl-8 w-[90vw] ">

          {
            objectives.map( (objective, index) => (
              <FadeUp delay={0.1 * index} key={index}>
                 <div className="text-center px-8 py-8 max-w-[350px] md:min-h-[150px] relative rounded-lg text-white bg-[#2D3572]">
            <p className="absolute -left-4 -top-1 z-10 w-6 h-6 rounded-full bg-inherit border-white border-solid border-2 text-xl p-1 flex justify-center items-center">
              {objective.id}
            </p>
            <p>
              {objective.text}
            </p>
          </div>
              </FadeUp>
            ))
          }
        </div>
       
      </div>
    </div>
  );
};

export default Objectives;


/*
 <div className="overflow-y h-[60vh]  rounded-lg mt-8  p-4 border-[#4272B2] border-solid border-2">
          <div className="p-4 relative rounded-md text-white bg-[#2D3572]">
            <p className="absolute -left-4 -top-2 z-10 w-8 h-8 rounded-full bg-inherit border-white border-solid border-2 text-xl p-1 flex justify-center items-center">
              1
            </p>
            <p>
              To improve quality of education, childhood schools and education
              systems at large
            </p>
          </div>

          <div className="p-4 mt-4 relative rounded-md text-white bg-[#2D3572] text-right">
            <p className="absolute -right-4 -top-2 z-10 w-8 h-8 rounded-full bg-inherit border-white border-solid border-2 text-xl p-1 flex justify-center items-center">
              2
            </p>
            <p>
              To facilitate effective parenting skills among parents and
              guardians
            </p>
          </div>

          <div className="p-4 mt-4 relative rounded-md text-white bg-[#2D3572]">
            <p className="absolute -left-4 -top-2 z-10 w-8 h-8 rounded-full bg-inherit border-white border-solid border-2 text-xl p-1 flex justify-center items-center">
              3
            </p>
            <p>
              To improve quality of education childhood schools and education
              systems at large
            </p>
          </div>

          <div className="p-4 mt-4 relative rounded-md text-white bg-[#2D3572] text-right">
            <p className="absolute -right-4 -top-2 z-10 w-8 h-8 rounded-full bg-inherit border-white border-solid border-2 text-xl p-1 flex justify-center items-center">
              4
            </p>
            <p>
              implementing partner of program jumuishi ya taifa ya malezi,
              makuzi na maendeleo ya awali ya mtoto[P](T-MMMAM)
            </p>
          </div>

          <div className="p-4 mt-4 relative rounded-md text-white bg-[#2D3572]">
            <p className="absolute -left-4 -top-2 z-10 w-8 h-8 rounded-full bg-inherit border-white border-solid border-2 text-xl p-1 flex justify-center items-center">
              5
            </p>
            <p>
              recorginizing and awarding the successfully parents in parenting
              according to APA parenting standards
            </p>
          </div>

          <div className="p-4 mt-4 relative rounded-md text-white bg-[#2D3572] text-right">
            <p className="absolute -right-4 -top-2 z-10 w-8 h-8 rounded-full bg-inherit border-white border-solid border-2 text-xl p-1 flex justify-center items-center">
              6
            </p>
            <p>
              providing youth with career coaching personal development and
              preparatory parental knowledge
            </p>
          </div>

          <div className="p-4 mt-4 relative rounded-md text-white bg-[#2D3572]">
            <p className="absolute -left-4 -top-2 z-10 w-8 h-8 rounded-full bg-inherit border-white border-solid border-2 text-xl p-1 flex justify-center items-center">
              7
            </p>
            <p>
              Economic empowernmen for single parents to support the financial
              costs for parenting
            </p>
          </div>
        </div>
*/