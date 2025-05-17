import React from 'react'
import { background, mightMeat, overlay } from '../assets/assest.js'

const Hero = () => {
  return (
    <div className='h-[80vh] w-full bg-[#A5102E] relative overflow-hidden'>
        <div className='absolute top-0 left-0 h-full w-full'>
            <img className='object-cover object-center h-full w-full' src={overlay} alt="" />
        </div>
        <div className='absolute top-18 md:top-10  w-full text-center z-50'>
            <h1 className='text-4xl text-white md:text-6xl'>mighty, meaty & <span className='font-bold'>mmm...</span></h1>
        </div>
        <div className='absolute top-40 md:top-35 z-50 w-full text-center text-white'>
            <p>the cure to all hunger cravings is hidden inside the <span className='font-bold'>Burger™</span></p>
        </div>
        <div className='absolute bottom-15 text-center w-full z-50'>
            <button className='hover:text-white ease-in-out duration-300 hover:bg-[#DC163E] px-4 py-3 rounded-2xl bg-[#A5102E] shadow-xl'>BUILD YOUR BURGER™</button>
        </div>
        <div className='relative w-full flex justify-center items-center'>
            <img src={background} className='absolute top-75 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] md:w-[900px] max-w-[1000px] ' alt="" />
            <img src={mightMeat} className='absolute top-75 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[300px] md:w-[400px] max-w-[500px] ' alt="" />
        </div>
    </div>
  )
}

export default Hero