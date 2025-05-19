import React from 'react'
import { burgerLayer } from '../assets/assest'
import { motion } from 'framer-motion'

const Favorite = () => {
  return (
    <div className='w-full h-auto text-center bg-[#F8F8F8] py-[50px] px-[80px] flex flex-col justify-center item-center mx-auto'>
        <motion.div  initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}>
            <h1 className='md:text-5xl text-4xl font-bold'>or build your own from scratch</h1>
            <p className='mt-2 text-[#999999]'>only add your favorite ingredients & toppings</p>
        </motion.div>
        <div className='py-14 w-full h-full flex justify-center items-center overflow-hidden'>
            <motion.img initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }} src={burgerLayer} className='object-cover object-center min-h-[200px]' alt="" />
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }} className='mt-6'>
            <button className='cursor-pointer font-bold px-3.5 py-2 bg-[#A5102E] text-white rounded-4xl text-[15px] hover:bg-[#DC163E] hover:text-black duration-300 transition ease-in-out'>BUILD YOUR BURGER</button>
        </motion.div>
    </div>
  )
}

export default Favorite