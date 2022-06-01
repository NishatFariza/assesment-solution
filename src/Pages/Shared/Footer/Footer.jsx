import React from "react";
import "./Footer.css";
import { FaEnvelope } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="footer-bg ">
      <div className="lg:w-10/12 w-11/12  mx-auto">
        <div className="lg:py-14 py-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          <div className="flex  lg:justify-start justify-center items-center">
            <div className="lg:w-[40px] w-[30px]  lg:h-[40px] h-[30px]  rounded-full bg-blue-600 text-white flex justify-center items-center ">
              <FaEnvelope className="text-sm cursor-pointer"></FaEnvelope>
            </div>
            <p className="text-stone-400 ml-2 lg:text-base text-xs ">info@gmail.com</p>
            <p className="text-stone-400 mx-2 lg:text-base text-xs ">/</p>
            <p className="text-stone-400 lg:text-base text-xs ">info@gmail.com</p>
          </div>
          <div className="flex justify-center items-center ">
            <div className="lg:w-[40px] w-[30px]  lg:h-[40px] h-[30px]  rounded-full bg-blue-600 text-white flex justify-center items-center ">
              <BsTelephoneFill className="text-sm cursor-pointer"></BsTelephoneFill>
            </div>
            <p className="text-stone-400  ml-2 lg:text-base text-xs">+9 000000000</p>
            <p className="text-stone-400 mx-2 lg:text-base text-xs">/</p>
            <div className="lg:w-[40px] w-[30px]  lg:h-[40px] h-[30px]  rounded-full bg-blue-600 text-white flex justify-center items-center ">
              <BsWhatsapp className="text-sm cursor-pointer"></BsWhatsapp>
            </div>
            <p className="text-stone-400 ml-2 lg:text-base text-xs">+9 000000000</p>
          </div>
          <div className="flex justify-center items-center ">
            <div className="lg:w-[40px] w-[30px]  lg:h-[40px] h-[30px]  rounded-full bg-blue-600 text-white flex justify-center items-center ">
              <FaFacebookF className="text-sm cursor-pointer"></FaFacebookF>
            </div>
            <div className="lg:w-[40px] w-[30px]  lg:h-[40px] h-[30px]  rounded-full bg-blue-600 text-white flex justify-center items-center mx-2">
              <FiInstagram className="text-sm cursor-pointer"></FiInstagram>
            </div>
            <div className="lg:w-[40px] w-[30px]  lg:h-[40px] h-[30px]  rounded-full bg-blue-600 text-white flex justify-center items-center ">
              <FaLinkedinIn className="text-sm cursor-pointer"></FaLinkedinIn>
            </div>
          </div>
        </div>
        <div className="text-center div-border py-8">
          <p className="text-center lg:text-base text-sm text-stone-400">
            Copyright {year} <span>All Rights Reserve</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
