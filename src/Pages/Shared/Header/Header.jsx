import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

const Header = () => {
  return (
    <header>
      <div className="py-4 bg-blue-600 px-10 flex justify-between items-center">
        <div className="flex w-6/12 justify-between ">
          <div className="flex justify-center items-center text-sm  text-white">
            <BsTelephoneFill></BsTelephoneFill>
            <p className=" ml-2">+91 000000000</p>
            <p className=" mx-2">/</p>
            <BsWhatsapp></BsWhatsapp>
            <p className="ml-2">+91 000000000</p>
          </div>
          <div className="flex justify-center items-center text-sm  text-white">
            <FaEnvelope></FaEnvelope>
            <p className=" ml-2 ">info@gmail.com</p>
            <p className=" mx-2 ">/</p>
            <p className=" ">info@gmail.com</p>
          </div>
        </div>
        <div className="w-4/12">
          <div className="flex justify-center items-center ">
            <div className=" text-white flex justify-center items-center ">
              <FaFacebookF className="text-sm cursor-pointer"></FaFacebookF>
              <p className="text-sm cursor-pointer">Have any question?</p>
            </div>
            <div className="text-sm  text-white flex justify-center items-center ">
              <FaFacebookF className="text-sm cursor-pointer"></FaFacebookF>
            </div>
            <div className="text-sm  text-white flex justify-center items-center mx-2">
              <FiInstagram className="text-sm cursor-pointer"></FiInstagram>
            </div>
            <div className="text-sm  text-white flex justify-center items-center ">
              <FaLinkedinIn className="text-sm cursor-pointer"></FaLinkedinIn>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 px-10">
        <p className="lg:text-3xl md:text-xl font-semibold">LOGO</p>
      </div>
      <div>
          

      </div>
    </header>
  );
};

export default Header;
