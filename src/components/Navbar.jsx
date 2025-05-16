import React from 'react'
import { logo } from '../assets/assest.js'

const Navbar = () => {
  return (
    <div className='w-full  bg-[#A5102E]'>
        <div className='max-w-[750px] flex justify-between items-center mx-auto text-white'>
            <div>
            <ul className='flex justify-between items-center gap-[25px]'>
                <li>Home</li>
                <li>About Burger</li>
                <li>Location</li>
            </ul>
        </div>
        <div>
            <img src={logo} alt="" />
        </div>
        <div>
            <ul className='flex justify-between items-center gap-[25px]'>
                <li>Order Online</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Navbar

