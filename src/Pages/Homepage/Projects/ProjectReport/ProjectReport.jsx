import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const ProjectReport = () => {
  return (
    <div>
      <div className="lg:py-8 py-4 bg-stone-100">
        <div className="lg:w-10/12 w-11/12  mx-auto flex flex-wrap">
          <div className="lg:w-[60%] w-full text-center lg:text-left">
            <h1 className="text-2xl font-bold text-stone-600">
              Project Report
            </h1>
          </div>
          <div className="lg:w-[40%] w-full ">
            <p className="flex items-center lg:justify-start justify-center">
              <span className="flex items-center text-blue-600">
                Home
                <IoIosArrowForward className="text-sm mx-1"></IoIosArrowForward>
              </span>
              <span>Project Report</span>
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-10/12 w-11/12  mx-auto pt-1 lg:pb-16 pb-8">
        <p className="font-bold text-center lg:text-left">Text .....</p>
      </div>
    </div>
  );
};

export default ProjectReport;
