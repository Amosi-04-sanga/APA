import React from 'react'
import { parentingValues, posts } from "../../constants";
import Image from 'next/image';
import Link from 'next/link';



const page = () => {
  return (
    <div className='px-8'>
        <h1 className='mt-8 font-bold text-2xl text-center'>African Parenting</h1>
        <p className="mt-4">African parenting is deeply rooted in culture, tradition, and community values. Unlike Western parenting styles that often emphasize individualism, African parenting focuses on collectivism, respect, discipline, and strong family bonds. Parents play a vital role in shaping a child’s character, behavior, and future, ensuring they grow up with values that align with their cultural heritage</p>

        <h1 className='mt-8 mb-4 font-bold text-center text-xl'>why parenting is important in Africa</h1>

        {
           parentingValues.map( (item, index) => (
            <div>
               <div key={index} className='flex gap-2 justify-start'>
               <Image src='/images/check.svg' alt='' width={10} height={10}/>
               <p>{item}</p>
               </div>
            </div>
           ))
        }

<h1 className='text-center font-bold text-xl mt-8'>parenting recent posts</h1>

<div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
        {
            posts.map( (post, index) => (
                <>
                   <div key={index} className="flex flex-col w-[330px]">
                        <div className="">
                            <img src={post.image} alt="post image" className='w-full max-h-[30vh] ' />
                        </div>
                        <div className="flex justify-between mt-2">
                            <p>on 19/01/2025 </p>
                            <p>by Neus njugunya</p>
                        </div>
                        <p className='mt-4'>Parenting in Africa is shaped by the continent's diverse cultures, traditions, and socioeconomic contexts. While practices vary widely across countries and ethnic group</p>
                        
                        <button className="block mx-auto mt-4 px-2 py-1 hover:bg-[#199DEF] transition-all duration-300 rounded-md border-2 border-solid border-[#199DEF]">Read More</button>
                   </div>
                </>
            ))
          }


          <div className='text-center mt-8'> <Link className='text-blue-700 block mx-autor' href='/'>Load More</Link> </div>
       </div>


    </div>
  )
}

export default page