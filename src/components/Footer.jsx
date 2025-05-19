import React from 'react'
import { logo2 } from '../assets/assest.js'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full h-auto px-[100px] py-[80px] bg-[#A5102E]'>
        <div className='w-full flex justify-center items-center'>
            <img src={logo2} className='object-center object-cover max-w-[200px]' alt="" />
        </div>
        <div className='mt-10 max-w-[1000px] mx-auto flex md:flex-row flex-col justify-between item-center'>
            <div className='flex flex-row justify-center items-center gap-1.5 text-white'>
                <FaFacebookF className='hover:text-black transition ease-in-out cursor-pointer' />
                <FaTwitter className='hover:text-black transition ease-in-out cursor-pointer' />
                <FaYoutube className='hover:text-black transition ease-in-out cursor-pointer' />
                <FaInstagram  className='hover:text-black transition ease-in-out cursor-pointer' />
            </div>
            <div className='text-white text-center'>
                <p>© 2025 All rights reserved!</p>
            </div>
        </div>
    </div>
  )
}

export default Footer