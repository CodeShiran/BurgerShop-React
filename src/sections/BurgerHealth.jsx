import React from "react";
import { background2, healthyBurger } from "../assets/assest.js";
import { motion } from "framer-motion";

const BurgerHealth = () => {
  return (
    <div className="w-full h-auto relative py-[150px] md:px-[100px] px-[50px] overflow-hidden">
      <div className="absolute left-0 top-0 w-full h-full">
        <img
          src={background2}
          className="object-cover object-center h-full w-full"
          alt=""
        />
      </div>
      <motion.div initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }} className="relative w-full flex justify-center items-center flex-col mx-auto text-white text-center">
        <h1 className="md:text-5xl text-4xl">
          is a <span>Burger™</span> healthy?… hell <span>yeah!</span>
        </h1>
        <p className="mt-6">but we’d eat them anyway, each & every day</p>
      </motion.div>
      <div className="relative w-full grid grid-cols-1 md:grid-cols-3 justify-items-center md:mt-[100px]">
        <motion.div initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }} className="max-w-[300px] flex flex-col justify-between items-center max-h-[250px] backdrop-blur-md bg-white/10 border border-white/30 rounded-xl shadow-lg px-[60px] py-9 mt-[25px] max-md:h-[350px] max-md:mb-[30px]">
          <div className="text-center w-full">
            <h4 className="text-black">
              <span className="font-bold">Burger</span> bun
            </h4>
            <p className="text-white">165 kCals</p>
          </div>
          <div className="text-center w-full">
            <h4 className="text-black">bacon & egg</h4>
            <p className="text-white">142 kCals</p>
          </div>
        </motion.div>
        <div className="max-w-[350px] text-white h-auto w-full max-md:w-[250px]">
          <motion.img initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
            src={healthyBurger}
            className="object-cover object-center"
            alt=""
          />
        </div>
        <motion.div initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }} className="max-w-[300px] flex flex-col justify-between items-center max-h-[250px]  backdrop-blur-md bg-white/10 border border-white/30 rounded-xl shadow-lg px-[60px] py-9 mt-[25px] max-md:h-[350px]">
          <div className="text-center w-full">
            <h4 className="text-black">
              <span className="font-bold">smoked </span>Cheddar
            </h4>
            <p className="text-white">165 kCals</p>
          </div>
          <div className="text-center w-full">
            <h4 className="text-black">bacon & egg</h4>
            <p className="text-white">142 kCals</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BurgerHealth;
