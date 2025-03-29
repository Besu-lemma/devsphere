import React from 'react'
import Image from 'next/image'
const About = () => {
  return (
    <section className='w-full bg-slate-100 shadow-2xs h-auto relative p-14'>
        <div className='grid grid-cols-2 gap-8 '>
            <Image
            src="/blogs.jpg"
            alt="blogs image"
            width={80}
            height={80}  
            className='h-auto px-2 rounded-none'  
            style={{width:"22rem",
              
            }}       
            />
         <div className='items-center'>
            <h1 className='text-black text-4xl md:text-5xl font-semibold leading-relaxed'>About Devsphere</h1>
            <p className='text-black font-sans text-lg mt-3 font-medium leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam repellendus odit eius expedita quae nam labore earum omnis, repudiandae eaque veniam dolor aut accusantium, voluptatem ipsum similique quis iusto. Sapiente?</p>
            <button className=' mt-6 inline-flex items-center px-3 py-1.5 text-sm font-medium text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 '>
                Learn more
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
      </svg>
            </button>
         </div>
        </div>
    </section>
  )
}

export default About