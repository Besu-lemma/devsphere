import React from 'react'
import Image from 'next/image'
const About = () => {
  return (
    <section className='w-full h-auto relative p-14'>
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
            <h1 className='text-slate-100 text-4xl md:text-5xl font-semibold leading-relaxed'>About Devsphere</h1>
            <p className='text-gray-100 text-lg mt-3 font-medium leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam repellendus odit eius expedita quae nam labore earum omnis, repudiandae eaque veniam dolor aut accusantium, voluptatem ipsum similique quis iusto. Sapiente?</p>
            <button className='bg-blue-950 px-10 py-2 mt-6 rounded-md '>
                Learn more
            </button>
         </div>
        </div>
    </section>
  )
}

export default About