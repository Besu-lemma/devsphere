import React from 'react';
import {SearchBlogs} from './SearchBlogs';
import {BlogFilters} from './BlogFilters';
import Image from 'next/image';

const BlogsSection = () => {
  return ( 
    <section className="p-12 w-ful dark:bg-gray-900">
      {/* Section Title */}
      <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center">Our Latest Blogs</h1>

      {/* Search & Filtering Controls */}
      <div className="py-8 flex justify-between items-center max-w-4xl mx-auto w-full">
        <SearchBlogs />
        <BlogFilters />
      </div>

      {/* Blog Card */}
      <div className='grid grid-cols-3 gap-8 py-10'>
      <div className="max-w-md w-80 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
  <a href="#">
    <Image 
      className="rounded-t-lg object-cover w-full h-40" 
      src="/blog1.jpg" 
      alt="Blog Thumbnail" 
      width={320} 
      height={160} 
    />
  </a>
  <div className="p-4">
    <div className='flex justify-between items-center '>
        <Image className='rounded-full w-12 h-12' src="/ava.jpg" alt="avatar" width={80} height={80}/>
        <p className='text-sm'>Mesfin Tsegaye</p>
<p className='text-sm'>march 28, 2004</p>
    </div>
    <a href="#">
      <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
    </a>
    <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">
      Biggest enterprise technology acquisitions of 2021 in reverse order.
    </p>
    <a 
      href="#" 
      className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Read more
      <svg className="rtl:rotate-180 w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
      </svg>
    </a>
  </div>
  
</div>
<div className="max-w-md w-80 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
  <a href="#">
    <Image 
      className="rounded-t-lg object-cover w-full h-40" 
      src="/blog1.jpg" 
      alt="Blog Thumbnail" 
      width={320} 
      height={160} 
    />
  </a>
  <div className="p-4">
    <div className='flex justify-between items-center '>
        <Image className='rounded-full w-12 h-12' src="/ava.jpg" alt="avatar" width={80} height={80}/>
        <p className='text-sm'>Mesfin Tsegaye</p>
<p className='text-sm'>march 28, 2004</p>
    </div>
    <a href="#">
      <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
    </a>
    <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">
      Biggest enterprise technology acquisitions of 2021 in reverse order.
    </p>
    <a 
      href="#" 
      className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Read more
      <svg className="rtl:rotate-180 w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
      </svg>
    </a>
  </div>
  
</div>
<div className="max-w-md w-80 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
  <a href="#">
    <Image 
      className="rounded-t-lg object-cover w-full h-40" 
      src="/blog1.jpg" 
      alt="Blog Thumbnail" 
      width={320} 
      height={160} 
    />
  </a>
  <div className="p-4">
    <div className='flex justify-between items-center '>
        <Image className='rounded-full w-12 h-12' src="/ava.jpg" alt="avatar" width={80} height={80}/>
        <p className='text-sm'>Mesfin Tsegaye</p>
<p className='text-sm'>march 28, 2004</p>
    </div>
    <a href="#">
      <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
    </a>
    <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">
      Biggest enterprise technology acquisitions of 2021 in reverse order.
    </p>
    <a 
      href="#" 
      className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Read more
      <svg className="rtl:rotate-180 w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
      </svg>
    </a>
  </div>
  
</div>
<div className="max-w-md w-80 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
  <a href="#">
    <Image 
      className="rounded-t-lg object-cover w-full h-40" 
      src="/blog1.jpg" 
      alt="Blog Thumbnail" 
      width={320} 
      height={160} 
    />
  </a>
  <div className="p-4">
    <div className='flex justify-between items-center '>
        <Image className='rounded-full w-12 h-12' src="/ava.jpg" alt="avatar" width={80} height={80}/>
        <p className='text-sm'>Mesfin Tsegaye</p>
<p className='text-sm'>march 28, 2004</p>
    </div>
    <a href="#">
      <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
    </a>
    <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">
      Biggest enterprise technology acquisitions of 2021 in reverse order.
    </p>
    <a 
      href="#" 
      className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Read more
      <svg className="rtl:rotate-180 w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
      </svg>
    </a>
  </div>
  
</div>
<div className="max-w-md w-80 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
  <a href="#">
    <Image 
      className="rounded-t-lg object-cover w-full h-40" 
      src="/blog1.jpg" 
      alt="Blog Thumbnail" 
      width={320} 
      height={160} 
    />
  </a>
  <div className="p-4">
    <div className='flex justify-between items-center '>
        <Image className='rounded-full w-12 h-12' src="/ava.jpg" alt="avatar" width={80} height={80}/>
        <p className='text-sm'>Mesfin Tsegaye</p>
<p className='text-sm'>march 28, 2004</p>
    </div>
    <a href="#">
      <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
    </a>
    <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">
      Biggest enterprise technology acquisitions of 2021 in reverse order.
    </p>
    <a 
      href="#" 
      className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Read more
      <svg className="rtl:rotate-180 w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
      </svg>
    </a>
  </div>
  
</div>
<div className="max-w-md w-80 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
  <a href="#">
    <Image 
      className="rounded-t-lg object-cover w-full h-40" 
      src="/blog1.jpg" 
      alt="Blog Thumbnail" 
      width={320} 
      height={160} 
    />
  </a>
  <div className="p-4">
    <div className='flex justify-between items-center '>
        <Image className='rounded-full w-12 h-12' src="/ava.jpg" alt="avatar" width={80} height={80}/>
        <p className='text-sm'>Mesfin Tsegaye</p>
<p className='text-sm'>march 28, 2004</p>
    </div>
    <a href="#">
      <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
    </a>
    <p className="mb-3 text-sm text-gray-700 dark:text-gray-400">
      Biggest enterprise technology acquisitions of 2021 in reverse order.
    </p>
    <a 
      href="#" 
      className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Read more
      <svg className="rtl:rotate-180 w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
      </svg>
    </a>
  </div>
  
</div>
      </div>
      

    </section>
  );
};

export default BlogsSection;
