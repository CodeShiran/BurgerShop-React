import React from 'react'
import { CiHeart } from "react-icons/ci";

const Card = ({name, img, description, price}) => {
  return (
    <div className='w-full sm:w-[350px] h-auto px-[25px] sm:px-6'>
        <div className='border-[#F1F1F1] border-2 h-auto mt-4 rounded-md w-full overflow-hidden relative'>
            <img src={img} className='object-cover object-center w-full h-auto' alt="" />
            <div className='absolute top-3 left-3 bg-[#4D2C21] px-2.5 py-1.5 rounded-md'>
                <p className='text-[#FEDA5E] text-bold text-[10px]'>{price}</p>
            </div>
            <CiHeart className='absolute bottom-3 right-3'/>
        </div>
        <div className='flex flex-col justify-center items-center w-full text-center py-[35px]'>
            <h4 className='text-[17px]'>{name}</h4>
            <p className='text-[#8888] text-[14px]'>{description}</p>
            <button className='text-[12px] mt-5 px-4 py-2 rounded-2xl border-[#E8E8E8] border-2 hover:bg-gray-100 transition hover:shadow-xl'>Order Now</button>
        </div>
    </div>
  )
}

export default Card