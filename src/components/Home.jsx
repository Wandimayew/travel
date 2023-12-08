import React,{useState} from "react";
import { TbWorld } from "react-icons/tb";
import { BiPlayCircle } from "react-icons/bi";
import one from "../assets/images/one.jpg";
import one1 from "../assets/images/one3.jpg";
import one2 from "../assets/images/one5.jpg";
import { BsPersonAdd } from "react-icons/bs";
import { LuPlane } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import video from '../assets/video/video.mp4'

const Home = () => {
  const [isClicked, setIsClicked]= useState(false);

  return (
    <>
   
    <div id="home" className="flex  justify-between flex-col lg:flex-row gap-16 h-auto lg:w-2/3">
      <div className="w-full px-4 flex justify-center items-center lg:w-1/2 gap-10 flex-col lg:py-14">
        <p className="h-10 w-48 cursor-pointer justify-center shadow-lg rounded-full text-[#00487b] gap-2 flex items-center">
          Explore the world!
          <TbWorld size={20} />
        </p>
        <h1 className="text-5xl font-bold">
          Travel <span className=" text-[#00a3cb]">top destination </span> of
          the world
        </h1>
        <p className="text-gray-500 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae tempora
          numquam ut ipsum id velit molestiae quidem. Minus eum fugit eius,
          delectus eos cumque ipsum, hic amet enim provident rem?
        </p>
        <div className="flex  justify-center lg:justify-normal gap-14">
          <button className="rounded-full w-28 py-2 shadow-2xl flex justify-center bg-[#00a3cb] text-white">
            Get Started
          </button>
          <button className="flex items-center gap-2 rounded-full w-32 lg:w-40 justify-center shadow-xl"
          onClick={()=> setIsClicked(true)}
          >
            <BiPlayCircle size={20} className="text-[#00a3cb]" /> Watch Demo
          </button>
          
        </div>

      </div>
      <div className="w-full lg:w-1/2 h-auto px-2 flex gap-5">
        <div className="w-1/2  flex flex-col items-end lg:items-center gap-4">
          <div className=" h-full flex justify-end lg:w-full  w-auto relative">
            <img
              src={one}
              alt="images"
              className="h-full lg:h-full lg:w-full rounded-3xl"
            />
            <div className="flex z-30 items-center justify-center absolute bottom-0 w-12 h-12 left-0 sm:-left-8 rounded-full bg-[#00487b]">
              <LuPlane size={22} className="text-white cursor-pointer" />
            </div>
          </div>
          <div>
            <img
              src={one1}
              alt="images"
              className="h-full lg:h-64  w-full lg:w-full rounded-3xl"
            />
          </div>
        </div>
        <div className="flex items-center relative w-1/2">
          <img src={one2} alt="images" className="rounded-3xl h-3/5" />
          <div className="z-20 absolute lg:right-16  sm:right-64 right-20 w-10 h-10 bottom-10 rounded-full items-center flex justify-center text-[#e76a43] bg-[#f3ded8]">
            <BsPersonAdd size={25} className="cursor-pointer" />
          </div>
          <div className="flex gap-1 rounded-3xl bg-white w-32 h-9 items-center justify-center absolute left-auto lg:right-0 bottom-48 lg:-mr-20 shadow-2xl">
            <CiLocationOn size={23} className="text-[#e76a43] cursor-pointer" />
            <p>Top Place</p>
          </div>
        </div>
      </div>
    </div>
    {isClicked && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
          <div className="relative w-full h-full">
          <video width="100%" height="100%" controls className=" w-full h-full">
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute top-0 right-0 p-4 text-xl bg-[#00a3cb] h-10 rounded-full flex justify-center items-center text-white cursor-pointer hover:bg-[#84d3e7] w-10"
          onClick={()=>setIsClicked(false)}
          >
          X
          </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
