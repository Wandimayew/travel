import React from "react";
import './scroll.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { IoImages } from "react-icons/io5";
import {AiFillCar } from 'react-icons/ai'
import { AiFillShop } from "react-icons/ai";
import { AiFillSketchSquare } from "react-icons/ai";
import { TiDropbox} from 'react-icons/ti'
import { TiVideo } from "react-icons/ti";

const HorizontalScrol = () => {
  return (
    <div id="discover" className="flex lg:justify-center items-center h-52 lg:ml-52 w-full lg:w-5/6 overflow-x-hidden">
      <div className="overflow-x-auto scrollbar-hide h-full max-w-screen-xl mx-auto">
        <div className="flex space-x-4 gap-2 scrollbar-hide">
          <div className="flex-shrink-0 border shadow-lg flex  pb-11 flex-col justify-center p-2 gap-5 h-full w-[250px] ">
            <h1 className="text-[#00a3cb] font-semibold text-xl">SERVICES</h1>
            <p className="text-2xl font-bold">
              Tailored Journeys for Comprehensive Travel Experience
            </p>
          </div>
          <div className="flex-shrink-0 flex flex-col border shadow-lg p-2 gap-3 h-full w-[250px]">
            <div className="flex justify-center items-center">
            <IoImages size={50} className="text-cyan-300"/>

            </div>
            <h1 className="font-bold text-xl">Wanderlust Escapes</h1>
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. atque
              rem vero praesentium perferendis! Id sit ratione illum ad
              quisquam.
            </p>
          </div>
          <div className="flex-shrink-0 flex flex-col border shadow-lg p-2 gap-3 h-full  w-[250px]">
            <div className="flex justify-center items-center">

            <AiFillCar  size={50} className="text-green-300"/>
            </div>
            <h1 className="font-bold text-xl">Wanderlust Escapes</h1>
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. atque
              rem vero praesentium perferendis! Id sit ratione illum ad
              quisquam.
            </p>
          </div>
          <div className="flex-shrink-0 flex flex-col border shadow-lg p-2 gap-3 h-full  w-[250px]">
            <div className="flex justify-center items-center">

            <AiFillShop size={50} className="text-cyan-300"/>
            </div>
            <h1 className="font-bold text-xl">Wanderlust Escapes</h1>
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. atque
              rem vero praesentium perferendis! Id sit ratione illum ad
              quisquam.
            </p>
          </div>
          <div className="flex-shrink-0 flex flex-col border shadow-lg p-2 gap-3 h-full  w-[250px]">
            <div className="flex justify-center items-center">

            <AiFillSketchSquare size={50} className="text-sky-600"/>
            </div>
            <h1 className="font-bold text-xl">Wanderlust Escapes</h1>
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. atque
              rem vero praesentium perferendis! Id sit ratione illum ad
              quisquam.
            </p>
          </div>
          <div className="flex-shrink-0 flex flex-col border shadow-lg p-2 gap-3 h-full  w-[250px]">
            <div className="flex justify-center items-center">

           <TiDropbox size={50} className="text-cyan-600"/>
            </div>
            <h1 className="font-bold text-xl">Wanderlust Escapes</h1>
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. atque
              rem vero praesentium perferendis! Id sit ratione illum ad
              quisquam.
            </p>
          </div>
          <div className="flex-shrink-0 flex flex-col border shadow-lg p-2 gap-3 h-full w-[250px]">
            <div className="flex justify-center items-center">

            <TiVideo size={50}  className="text-green-500"/>
            </div>
            <h1 className="font-bold text-xl">Wanderlust Escapes</h1>
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. atque
              rem vero praesentium perferendis! Id sit ratione illum ad
              quisquam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrol;
