import React from "react";
import { background, mightMeat, overlay } from "../assets/assest.js";
import { motion } from "framer-motion"

const Hero = () => {

  return (
    <div className="relative h-[80vh] max-md:h-[100vh] w-full bg-[#A5102E] overflow-hidden">
      <div className="absolute inset-0">
        <img
          className="object-cover object-center h-full w-full"
          src={overlay}
          alt="overlay"
        />
      </div>

      <motion.div initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }} className="absolute top-10 w-full text-center z-40 px-4">
        <h1 className="text-4xl md:text-6xl text-white">
          mighty, meaty & <span className="font-bold">mmm...</span>
        </h1>
        <p className="mt-4 text-white text-base md:text-lg">
          the cure to all hunger cravings is hidden inside the{" "}
          <span className="font-bold">Burger™</span>
        </p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }} className="absolute bottom-10 w-full text-center z-40 px-4">
        <button className="hover:text-white duration-300 hover:bg-[#DC163E] px-6 py-3 rounded-2xl bg-[#A5102E] shadow-xl">
          BUILD YOUR BURGER
        </button>
      </motion.div>

      <motion.div  initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }} className="absolute inset-0 flex items-center justify-center z-30">
        <div className="relative w-full flex items-center justify-center">
          <img
            src={background}
            className="w-[700px]  lg:w-[900px] max-w-full absolute"
            alt="background"
          />
          <img
            src={mightMeat}
            className="w-[300px] md:w-[400px] lg:w-[500px] max-w-full z-10 relative"
            alt="burger"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
