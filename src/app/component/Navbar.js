import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='isolate top-0 w-full z-10'>
        <div className='flex justify-between items-center'>
          <div className='ml-8'>
          <Link href={'/home'} className='font-4xl font-bold text-black hover:text-sky-400 hover:font-extrabold'>SkyWings</Link>
        </div>

        <div className='bottom-0 left-0 w-full p-8 flex items-center justify-center flex-row gap-8 bg-white transition-transform duration-500 z-0'>
          <Link href={'/home'} className='text-2xl font-medium hover:text-sky-400 hover:font-bold hover:underline'>Home</Link>
          <Link href={'/about'} className='text-2xl font-medium hover:text-sky-400 hover:font-bold hover:underline'>About</Link>
          <Link href={'/tour'} className='text-2xl font-medium hover:text-sky-400 hover:font-bold hover:underline'>Tour</Link>
          <Link href={'/package'} className='text-2xl font-medium hover:text-sky-400 hover:font-bold hover:underline'>Package</Link>
          <Link href={'/contact'} className='text-2xl font-medium hover:text-sky-400 hover:font-bold hover:underline'>Contact</Link>
        </div>

        <div className='mr-8'>
          <button className='p-4 outline-none border-none font-xl whitespace-nowrap text-white bg-black rounded-full hover:font-bold hover:bg-sky-400'>Book Trip</button>
        </div>
        </div>
        
      </nav>
    </div>
  )
}

export default Navbar
