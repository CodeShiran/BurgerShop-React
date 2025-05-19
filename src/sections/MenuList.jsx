import React from "react";
import Card from "../components/Card";
import { foods } from "../assets/assest.js";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";

const MenuList = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full h-auto py-[100px] px-4 sm:px-8 md:px-16 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full text-center"
      >
        <h1 className="text-3xl md:text-5xl">
          choose one of our <span className="font-bold">bestsellers</span>
        </h1>
        <p className="text-[#999999] font-light">
          a time proven taste loved by thousands
        </p>
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-6 grid lg:grid-cols-3 md:grid-cols-2 gap-4 justify-items-center"
      >
        {foods.map((food) => (
          <motion.div key={food.id} variants={cardVariants}>
            <Card
              name={food.name}
              description={food.description}
              price={food.price}
              img={food.img}
              variants={cardVariants}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default MenuList;
