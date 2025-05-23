import React from "react";
import { backgroundLayer, beefBurger, chickenBeef } from "../assets/assest.js";
import { motion } from "framer-motion";

const BeefChicken = () => {
  return (
    <div className="w-full  h-auto overflow-hidden relative py-[100px]">
      <div className="absolute top-0 left-0 h-full w-full z-10">
        <img
          src={backgroundLayer}
          className="object-center object-cover w-full h-full"
          alt=""
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative max-w-[750px] mx-auto z-20 text-center w-full flex flex-col justify-center items-center"
      >
        <p className="font-bold text-[#A5102E]">
          THEY COME IN DIFFERENT SHAPES & SIZES
        </p>
        <h1 className="md:text-5xl text-3xl font-bold">
          some are beef & some are chick’n,but they are all egg-cellent
        </h1>
        <p className="mt-4 text-[#999999] font-light">
          which option tickles your taste buds more?
        </p>
      </motion.div>
      <div className="relative grid md:grid-cols-2 z-20 w-full mx-auto px-10 justify-items-center mt-[60px]">
        <div>
          <div className="max-w-[400px] w-full h-auto flex flex-col justify-center items-center mx-auto">
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              src={beefBurger}
              className="object-center object-cover"
              alt=""
            />
            <button className="mt-8 bg-[#A5102E] px-3 py-2 rounded-4xl text-white w-[150px] hover:shadow-xl hover:bg-[#DC163E] hover:text-black duration-300 transition ease-in-out">
              ORDER BEEF
            </button>
          </div>
        </div>
        <div>
          <div className="max-w-[400px] w-full h-auto flex flex-col justify-center items-center mx-auto">
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              src={chickenBeef}
              className="object-center object-cover"
              alt=""
            />
            <button className="mt-8 bg-[#A5102E] px-3 py-2 rounded-4xl text-white w-[150px] hover:shadow-xl hover:bg-[#DC163E] hover:text-black duration-300 transition ease-in-out">
              ORDER CHICK'N
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeefChicken;
