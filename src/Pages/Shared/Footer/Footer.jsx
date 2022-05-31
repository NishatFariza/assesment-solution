import React from "react";
import "./Footer.css";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="footer-bg ">
      <div className="py-14 px-10 grid grid-cols-3 gap-5">
        <div className="flex  justify-start items-center">
          <FaEnvelope className="text-white mr-4"></FaEnvelope>
          <p className="text-stone-400">info@gmail.com</p>
          <p className="text-stone-400">info@gmail.com</p>
        </div>
        <div className="flex justify-center items-center ">
          <FaEnvelope className="text-white mr-4"></FaEnvelope>
          <p className="text-stone-400">info@gmail.com</p>
          <p className="text-stone-400">info@gmail.com</p>
        </div>
        <div className="flex justify-center items-center ">
          <FaEnvelope className="text-white"></FaEnvelope>
          <FaEnvelope className="text-white mx-4"></FaEnvelope>
          <FaEnvelope className="text-white"></FaEnvelope>
        </div>
      </div>
      <div className="text-center div-border py-8">
        <p className="text-center text-stone-400">
          Copyright {year} <span>All Rights Reserve</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
