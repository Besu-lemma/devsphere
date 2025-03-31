import Image from 'next/image'
import React from 'react'

const ContactUs = () => {
  return (
   <section className='p-10 w-full bg-gray-900'>
    <h1 className='mb-4 text-4xl text-center tracking-tight font-extrabold text-white'>Contact us</h1>
    <div className='grid grid-cols-2 gap-8 shadow-2xl py-10 w-full'>
       <Image
       className='w-3xl h-full rounded-2xl'
       src="/map.jpg"
       alt='map image'
       width={300}
       height={250}
       />
        
        <div className=' rounded-2xl'>
        <form  className="space-y-6">
              {/* Row 1: Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white">
                    Your Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    // value={formData.name}
                    // onChange={handleInputChange}
                    className="mt-2 w-full px-4 py-2 border border-blue-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    // value={formData.email}
                    // onChange={handleInputChange}
                    className="mt-2 w-full px-4 py-2 border border-blue-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
              </div>

              {/* Row 2: Phone and Subject */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white">
                    Phone No
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    // value={formData.phone}
                    // onChange={handleInputChange}
                    className="mt-2 w-full px-4 py-2 border  rounded-lg border-blue-800 focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    // value={formData.subject}
                    // onChange={handleInputChange}
                    className="mt-2 w-full px-4 py-2 border  rounded-lg border-blue-800 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white">
                  Message Here*
                </label>
                <textarea
                  id="message"
                  name="message"
                  // value={formData.message}
                  // onChange={handleInputChange}
                  rows={6}
                  className="mt-2 w-full px-4 py-2 border border-blue-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="mt-6 inline-flex items-center px-5 py-2.5 text-sm font-medium text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                >
                  Send Mail
                </button>
              </div>
            </form>
        </div>
        </div>
   </section>
  )
}

export default ContactUs