import React from "react";
import Card from "../components/Card";
import { foods } from "../assets/assest.js";

const MenuList = () => {
  return (
    <div className="w-full h-auto py-[100px] px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="w-full text-center">
        <h1 className="text-3xl md:text-5xl">
          choose one of our <span className="font-bold">bestsellers</span>
        </h1>
        <p className="text-[#999999] font-light">
          a time proven taste loved by thousands
        </p>
      </div>
      <div className="mt-6 grid lg:grid-cols-3 md:grid-cols-2 gap-4 justify-items-center">
        {foods.map((food) => (
          <Card
            key={food.id}
            name={food.name}
            description={food.description}
            price={food.price}
            img={food.img}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuList;
