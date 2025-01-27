import Image from 'next/image'
import React from 'react'

const Objectives = () => {
  return (
    <div className='mt-20 mx-[24px]'>
        <div className='relative px-4'>
        <div className='absolute bottom-0 left-0 w-[4px] h-24 bg-gradient-to-t from-blue-700 to-blue-500/0'/>
        <h1 className="text-3xl font-bold text-center">Transforming African parenting</h1>
        <p className='mt-8'>Our aim is to transform African parenting
by integrating cultural heritage with
modern practices, promoting education,
nurturing, and holistic approaches to
raising the next generation</p>
<p className='mt-2'>Helping parents raise children who are healthy, emotionally stable, and prepared to thrive in the modern world.</p>
    
        </div>
    
    <div className='mt-12 '>
        <Image src='/images/objectives.svg' alt='objectives' className='block mx-auto' width={80} height={80}/>
      <h1 className='text-center mt-4 font-bold text-3xl'>Our objectives</h1>
      <div className="overflow-y rounded-lg mt-8 h-[60vh] p-4 border-[#4272B2] border-solid border-2">
          <div className='p-4 relative rounded-md text-white bg-[#2D3572]'>
              <p className='absolute -left-4 -top-2 z-10 w-8 h-8 rounded-full bg-inherit border-white border-solid border-2 text-xl p-1 flex justify-center items-center'>1</p>
              <p>To improve quality of education, childhood schools and education systems at large</p>
          </div>

          <div className='p-4 mt-4 relative rounded-md text-white bg-[#2D3572] text-right'>
              <p className='absolute -right-4 -top-2 z-10 w-8 h-8 rounded-full bg-inherit border-white border-solid border-2 text-xl p-1 flex justify-center items-center'>2</p>
              <p>To facilitate effective parenting skills among parents and guardians</p>
          </div>


          <div className='p-4 mt-4 relative rounded-md text-white bg-[#2D3572]'>
              <p className='absolute -left-4 -top-2 z-10 w-8 h-8 rounded-full bg-inherit border-white border-solid border-2 text-xl p-1 flex justify-center items-center'>3</p>
              <p>To improve quality of education childhood schools and education systems at large</p>
          </div>


          <div className='p-4 mt-4 relative rounded-md text-white bg-[#2D3572] text-right'>
              <p className='absolute -right-4 -top-2 z-10 w-8 h-8 rounded-full bg-inherit border-white border-solid border-2 text-xl p-1 flex justify-center items-center'>4</p>
              <p>implementing partner of program jumuishi ya taifa ya malezi, makuzi na maendeleo ya awali ya mtoto[P](T-MMMAM)</p>
          </div>


          <div className='p-4 mt-4 relative rounded-md text-white bg-[#2D3572]'>
              <p className='absolute -left-4 -top-2 z-10 w-8 h-8 rounded-full bg-inherit border-white border-solid border-2 text-xl p-1 flex justify-center items-center'>5</p>
              <p>recorginizing and awarding the successfully parents in parenting according to APA parenting standards</p>
          </div>


          <div className='p-4 mt-4 relative rounded-md text-white bg-[#2D3572] text-right'>
              <p className='absolute -right-4 -top-2 z-10 w-8 h-8 rounded-full bg-inherit border-white border-solid border-2 text-xl p-1 flex justify-center items-center'>6</p>
              <p>providing youth with career coaching personal development and preparatory parental knowledge</p>
          </div>

       
          <div className='p-4 mt-4 relative rounded-md text-white bg-[#2D3572]'>
              <p className='absolute -left-4 -top-2 z-10 w-8 h-8 rounded-full bg-inherit border-white border-solid border-2 text-xl p-1 flex justify-center items-center'>7</p>
              <p>Economic empowernmen for single parents to support the financial costs for parenting</p>
          </div>


      </div>
    </div>
    
    
    </div>
  )
}

export default Objectives