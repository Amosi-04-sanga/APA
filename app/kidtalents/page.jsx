import { posts } from "@/constants";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="px-8">
      <h1 className="mt-8 font-bold text-center text-2xl">
        Developing your kids talents
      </h1>

      <p className="mt-4">
        Every child is born with unique abilities and interests. Some children
        naturally excel in music, others in drawing, sports, storytelling,
        problem-solving, or leadership. These natural abilities are called
        talents. Talents are like seeds—if nurtured and developed, they can grow
        into something amazing!
      </p>
      <h1 className="mt-8 text-center text-xl font-bold">
        ways children can develop their talents
      </h1>
      <p className="mt-4">
        Children discover their talents through exploration and practice. By
        trying different activities such as painting, singing, playing an
        instrument, or solving puzzles, they can find what they enjoy and what
        they are naturally good at. Parents and teachers play a key role in
        helping children identify and develop their talents by providing
        encouragement and opportunities to learn.
      </p>

      <h1 className="text-center font-bold text-xl mt-8">
        kids talents recent posts
      </h1>

      <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
        {posts.map((post, index) => (
          <div key={index} className="flex flex-col w-[330px]">
            <div className="">
              <img
                src={post.image}
                alt="post image"
                className="w-full max-h-[30vh] "
              />
            </div>
            <div className="flex justify-between mt-2">
              <p>on 19/01/2025 </p>
              <p>by Neus njugunya</p>
            </div>
            <p className="mt-4">
              Parenting in Africa is shaped by the continent's diverse cultures,
              traditions, and socioeconomic contexts. While practices vary
              widely across countries and ethnic group
            </p>

            <button className="block mx-auto mt-4 px-2 py-1 hover:bg-[#199DEF] transition-all duration-300 rounded-md border-2 border-solid border-[#199DEF]">
              Read More
            </button>
          </div>
        ))}

        <div className="text-center mt-8">
          {" "}
          <Link className="text-blue-700 block mx-autor" href="/">
            Load More
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default page;
