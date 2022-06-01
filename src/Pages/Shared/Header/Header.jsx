import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsQuestionCircleFill } from "react-icons/bs";

const Header = () => {
  return (
    <header>
      <div className="lg:py-4 py-6 bg-blue-600">
        <div className="lg:w-10/12 w-11/12 flex-wrap mx-auto flex justify-between items-center">
          <div className="flex lg:w-6/12 w-full flex-wrap justify-center ">
            <div className="flex justify-center items-center text-sm  text-white mx-auto lg:mx-0 lg:border-r lg:pr-3">
              <BsTelephoneFill></BsTelephoneFill>
              <p className=" ml-2">+91 000000000</p>
              <p className=" mx-2">/</p>
              <BsWhatsapp></BsWhatsapp>
              <p className="ml-2">+91 000000000</p>
            </div>
            <div className="flex justify-center mx-auto lg:mx-0 items-center text-sm my-1.5 text-white lg:pl-3">
              <FaEnvelope></FaEnvelope>
              <p className=" ml-2 ">info@gmail.com</p>
              <p className=" mx-2 ">/</p>
              <p className=" ">info@gmail.com</p>
            </div>
          </div>
          <div className="lg:w-4/12 w-full ">
            <div className="flex lg:justify-end justify-center items-center  ">
              <div className=" text-white flex lg:justify-end justify-center items-center w-5/12 lg:mr-4 mr-1 ">
                <BsQuestionCircleFill className="text-xs cursor-pointer mr-1"></BsQuestionCircleFill>
                <p className="text-xs cursor-pointer">Have any question?</p>
              </div>
              <div className="flex justify-start items-center w-2/12">
                <div className="text-sm  text-white ">
                  <FaFacebookF className="text-sm cursor-pointer"></FaFacebookF>
                </div>
                <div className="text-sm  text-white flex mx-2">
                  <FiInstagram className="text-sm cursor-pointer"></FiInstagram>
                </div>
                <div className="text-sm  text-white">
                  <FaLinkedinIn className="text-sm cursor-pointer"></FaLinkedinIn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 lg:w-10/12 w-11/12  mx-auto">
        <p className="lg:text-3xl md:text-xl text-xl lg:text-left text-center font-semibold">LOGO</p>
      </div>
      <div></div>
    </header>
  );
};

export default Header;
