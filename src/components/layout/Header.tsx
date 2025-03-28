import React from 'react'
import { NavLinks } from '@/data/navLinks'
import Image from 'next/image'
import Link from 'next/link'
const Header = () => {
  return (
    <header className='bg-slate-200 w-full h-24'>
<nav className='justify-between flex items-center px-4 py-3' >
    <div className='flex space-x-4 items-center'>
      <Image
      className='rounded-2xl'
      src="/logo.png"
      alt='logo image'
      width={80}
      height={80}
      />
      <h1 className='text-black w-auto font-bold text-2xl'>DevSphere</h1>
    </div>
<ul className='items-center flex mr-5 space-x-8'>
  {NavLinks.map(({href,label})=>(
<li key={href} className='text-center group'>
  <Link href={href} className='text-black  py-4 items-center'> 
  {label}
  </Link>
 
</li>

  )
  )}
</ul>


</nav>
    </header>
  )
}

export default Header