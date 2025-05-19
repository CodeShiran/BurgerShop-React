import React from "react";
import { background2, fries } from "../assets/assest.js";
import { motion } from "framer-motion";

const ChipsDrink = () => {
  return (
    <div className="w-full h-auto relative py-[150px] md:px-[100px] px-[50px] overflow-hidden">
      <div className="absolute left-0 top-0 w-full h-full">
        <img
          src={background2}
          className="object-cover object-center h-full w-full"
          alt=""
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 text-center w-full"
      >
        <p className="font-bold text-[#6E4D42]">best served with</p>
        <h1 className="mt-4 text-4xl md:text-5xl text-white font-bold">
          Shoestring fries & Hand-scooped™ shakes
        </h1>
        <p className="mt-3 text-[#95601C] font-light">
          ain’t no other combo like it, we bet!
        </p>
      </motion.div>
      <div className="relative z-10 mt-14 h-auto w-full flex justify-center items-center">
        <motion.img
          src={fries}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="object-center object-cover max-w-[690px] h-auto w-full"
          alt=""
        />
      </div>
    </div>
  );
};

export default ChipsDrink;
