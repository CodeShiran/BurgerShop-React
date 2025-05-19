import React from 'react'
import { burgerLayer } from '../assets/assest'

const Favorite = () => {
  return (
    <div className='w-full h-auto text-center bg-[#F8F8F8] py-[50px] px-[80px] flex flex-col justify-center item-center mx-auto'>
        <div>
            <h1 className='md:text-5xl text-4xl font-bold'>or build your own from scratch</h1>
            <p className='mt-2 text-[#999999]'>only add your favorite ingredients & toppings</p>
        </div>
        <div className='py-14 w-full h-full flex justify-center items-center overflow-hidden'>
            <img src={burgerLayer} className='object-cover object-center min-h-[200px]' alt="" />
        </div>
        <div className='mt-6'>
            <button className='cursor-pointer font-bold px-3.5 py-2 bg-[#A5102E] text-white rounded-4xl text-[15px] hover:bg-[#DC163E] hover:text-black duration-300 transition ease-in-out'>BUILD YOUR BURGER</button>
        </div>
    </div>
  )
}

export default Favorite