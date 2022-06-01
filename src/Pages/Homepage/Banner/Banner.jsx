import React from "react";
import { FaHome } from "react-icons/fa";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="bg-black">
      <div className="lg:w-10/12 w-11/12  lg:mx-auto mx-0 flex  text-white">
        <div className="lg:w-[8%]  w-[14%] cursor-pointer border-l border-stone-700 text-center lg:py-4 md:py-3 py-2">
          <FaHome className="mx-auto text-2xl"></FaHome>
        </div>
        <div className="w-[17%] border-l border-stone-700 text-center lg:text-base text-xs lg:py-4 md:py-3 py-2">
          Menu
        </div>
        <div className="w-[17%] border-l lg:text-base text-xs border-stone-700 text-center lg:py-4 md:py-3 py-2">
          Menu 1
        </div>
        <div className="lg:w-[12%] w-[16%] border-l lg:text-base text-xs border-stone-700 text-center lg:py-4 md:py-3 py-2">
          Menu 2
        </div>
        <div className="lg:w-[8%] w-[6%] border-l lg:text-base text-xs border-stone-700 text-center lg:py-4 md:py-3 py-2"></div>
        <div className="lg:w-[16%] w-[10%] border-l lg:text-base text-xs border-stone-700 text-center lg:py-4 md:py-3 py-2"></div>
        <div className="lg:w-[13%] w-[10%] border-l lg:text-base text-xs border-stone-700 text-center lg:py-4 md:py-3 py-2"></div>
        <div className="lg:w-[13%] w-[10%] border-x lg:text-base text-xs border-stone-700 text-center lg:py-4 md:py-3 py-2"></div>
        {/* <div className="border-x py-6 border-yellow-800">
        <FaHome></FaHome>
      </div>
      <div className="border-x py-6 border-yellow-800">
        <FaHome></FaHome>
      </div>
      <div className="flex justify-around ">
        <div>
          <FaHome></FaHome>
        </div>
        <div className="border-x py-6 border-yellow-800">
          <FaHome></FaHome>
        </div>
      </div>
      <div className="border-x py-6 border-yellow-800">
        <FaHome></FaHome>
      </div>
      <div className="flex justify-around ">
        <div>
          <FaHome></FaHome>
        </div>
        <div>
          <FaHome></FaHome>
        </div>
      </div>
      <div className="flex justify-around ">
        <div>
          <FaHome></FaHome>
        </div>
        <div>
          <FaHome></FaHome>
        </div>
      </div>
      <div className="flex justify-around ">
        <div>
          <FaHome></FaHome>
        </div>
        <div>
          <FaHome></FaHome>
        </div>
      </div>
      <div className="flex justify-around ">
        <div>
          <FaHome></FaHome>
        </div>
        <div>
          <FaHome></FaHome>
        </div>
      </div> */}
      </div>
    </div>
  );
};

export default Banner;
