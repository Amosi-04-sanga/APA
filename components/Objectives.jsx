import Image from "next/image";
import React from "react";

const Objectives = () => {
  return (
    <div className="mt-16 mx-8">
      <div className="">
        <Image
          className="block mx-auto"
          src="/images/about.svg"
          alt=""
          width={50}
          height={50}
        />
        <h1 className="text-center text-3xl mt-4">Who we are</h1>
        <p className="mt-4">
          We believe in nurturing the next generation of confident,
          compassionate, and successful children. we aim to share valuable
          insights, practical tips, and cultural wisdom on effective parenting
          we believe in developing children inborn talents and their potentials
          for their bright future.
        </p>
        <button className="block mx-auto mt-4 px-2 py-1 hover:bg-[#199DEF] hover:text-white transition-all duration-300 rounded-md border-2 border-solid border-[#199DEF]">
          Read More
        </button>
      </div>

      <div className="mt-16 max-w-[350px]">
        <Image
          src="/images/objectives.svg"
          alt="objectives"
          className="block mx-auto"
          width={80}
          height={80}
        />
        <h1 className="text-center mt-4 font-bold text-3xl">Our objectives</h1>
        <div className="overflow-y  rounded-lg mt-8 h-[60vh] p-4 border-[#4272B2] border-solid border-2">
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
      </div>
    </div>
  );
};

export default Objectives;
