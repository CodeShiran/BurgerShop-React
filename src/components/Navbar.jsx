import React, { useEffect, useRef, useState } from "react";
import { logo } from "../assets/assest.js";
import { IoIosCall } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { FaP } from "react-icons/fa6";
import { motion } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const menuRef = useRef(null);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    if (nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "hidden";
    };
  }, [nav]);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setNav(false);
      }
    };

    if (nav) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.addEventListener("mousedown", handleOutsideClick);
    };
  }, [nav]);


  

  return (
    <div className="w-full  bg-[#A5102E] py-2 sticky top-0 z-50">
      {/*mobile menu*/}

      {nav ? (
        <div
          ref={menuRef}
          className={`md:hidden absolute top-0 left-0 w-[60%] bg-black/90 h-[100vh] z-90 transform transition-transform duration-300 ${
            nav ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="max-w-[80%] text-white flex flex-row gap-10 items-center bg-black mt-15 px-8 py-4">
            <p>Menu</p>
            <div className="flex justify-end w-full gap-4">
              <CiHeart className="hover:text-[#A5102E] text-2xl" />
              <IoMdClose
                onClick={handleNav}
                className="hover:text-[#A5102E] text-2xl"
              />
            </div>
          </div>
          <div className="text-white px-8 mt-3 flex gap-5 flex-col">
            <p className="hover:text-[#A5102E]">Home</p>
            <p className="hover:text-[#A5102E]">About Burger</p>
            <p className="hover:text-[#A5102E]">Location</p>
            <div className="flex items-center justify-between hover:text-[#A5102E]">
              <p>Order Online</p>
              <FaPlus />
            </div>
            <p className="hover:text-[#A5102E]">Blog</p>
            <p className="hover:text-[#A5102E]">Content</p>
          </div>
        </div>
      ) : (
        <></>
      )}

      <div className="max-w-[750px] flex justify-between items-center mx-auto text-white">
        <div>
          {!nav ? (
            <CiMenuFries
              onClick={handleNav}
              className="md:hidden absolute left-2 top-8"
            />
          ) : (
            <></>
          )}
        </div>
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <ul className="md:flex hidden justify-between items-center gap-[25px] font-light cursor-pointer">
            <li className="hover:text-black transition">Home</li>
            <li className="hover:text-black transition">About Burger</li>
            <li className="hover:text-black transition">Location</li>
          </ul>
        </motion.div>
        <div className="max-md:w-full max-md:flex justify-center items-center">
          <motion.img
            src={logo}
            className="max-md:w-full max-md:flex justify-center items-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            alt=""
          />
        </div>
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <ul className="md:flex hidden justify-between items-center gap-[25px] font-light cursor-pointer">
            <li className="hover:text-black transition">Order Online</li>
            <li className="hover:text-black transition">Blog</li>
            <li className="hover:text-black transition">Contact</li>
          </ul>
        </motion.div>
      </div>
      <div className="max-w-[1000px] text-white hidden md:flex justify-between items-center mx-auto ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-[150px] text-center bg-[#A5102E] shadow-lg rounded-xl px-2 py-2"
        >
          <p className="text-[10px]">Order online Or Call Now</p>
          <div className="flex justify-center items-center">
            <IoIosCall />
            <p>+9458231569</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-[150px] text-center bg-[#A5102E] shadow-lg rounded-xl px-2 py-3 flex justify-center items-center gap-[10px]"
        >
          <CiHeart className="hover:text-black transition" />
          <IoPersonOutline className="hover:text-black transition" />
          <IoCartOutline className="hover:text-black transition" />
          <IoSearchOutline className="hover:text-black transition" />
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
