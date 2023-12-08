import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdAirplane } from "react-icons/io";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sm:1/2  w-full lg:w-2/3">
      <div className="flex justify-evenly sm:justify-between items-center sm:gap-3 lg:gap-14  sm:w-full">
        <div className="flex text-[#00a3cb] font-bold text-3xl">
          <IoMdAirplane size={34} />
          <h2 className="underline decoration-dashed">ravel</h2>
        </div>
        <div className="hidden sm:justify-evenly sm:flex  w-full lg:w-2/3 py-6">
          <div className="text-sm font-bold lg:text-lg flex items-center">
            <ul className="flex justify-between sm:gap-7 lg:gap-14">
              <Link to="home" spy={true} smooth={true} offset={-70} duration={500}>
                <li className="cursor-pointer">Home</li>
              </Link>
              <Link to="discover" spy={true} smooth={true} offset={-70} duration={500}>
                <li className="text-gray-400 cursor-pointer">Discover</li>
              </Link>
              <Link to="specialDeals" spy={true} smooth={true} offset={-70} duration={500}>
                <li className="text-gray-400 cursor-pointer">Special Deals</li>
              </Link>
              <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
                <li className="text-gray-400 cursor-pointer">Contact</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="flex gap-5">
          <button className="font-bold">Login</button>
          <button className="rounded-full w-24 py-2 shadow-xl bg-[#00a3cb] text-white">
            Sign Up
          </button>
        </div>
        <div
          className={`fixed z-40 top-0 left-0  transition-transform transform  duration-500 ease-in-out   shadow-lg h-full w-40 bg-white text-white ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-4 absolute top-14">
            <ul className="flex flex-col  gap-3">
              <Link to="home" spy={true} smooth={true} offset={-70} duration={500}>
                <li className="text-black cursor-pointer pb-4 border-b border-gray-100 ">Home</li>
              </Link>
              <Link to="discover" spy={true} smooth={true} offset={-70} duration={500}>
                <li className="text-gray-900 cursor-pointer pb-4 border-b border-gray-100">Discover</li>
              </Link>
              <Link to="specialDeals" spy={true} smooth={true} offset={-70} duration={500}>
                <li className="text-gray-900 cursor-pointer pb-4 border-b border-gray-100">Special Deals</li>
              </Link>
              <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
                <li className="text-gray-900 cursor-pointer  ">Contact</li>
              </Link>
            </ul>
          </div>
        </div>
        {isOpen && (
          <div
            className="bg-black/20 transition-transform transform duration-500 ease-in-out translate-x-0 fixed w-full h-screen z-10 top-0 right-0"
            onClick={toggleSidebar}
          ></div>
        )}
        <button
          className="fixed sm:hidden z-50 top-2 left-3 p-2 bg-gray-800 text-white rounded-full focus:outline-none"
          onClick={toggleSidebar}
        >
          {
            isOpen ? (
              <div className=" w-[22px] h-[14px">
                X
              </div>
            ):(

              <IoMenu size={20} className=""/>
            )
          }
        </button>
      </div>
    </div>
  );
};

export default Navbar;
