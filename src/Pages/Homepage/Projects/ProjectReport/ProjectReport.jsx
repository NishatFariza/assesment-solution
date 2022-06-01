import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const ProjectReport = () => {
  return (
    <div>
      <div className="py-8 bg-stone-100">
        <div className="lg:w-10/12 w-11/12  mx-auto flex">
          <div className="lg:w-[60%]">
            <h1 className="text-2xl font-bold text-stone-600">Project Report</h1>
          </div>
          <div className="lg:w-[40%]">
            <p className="flex items-center">
              <span className="flex items-center text-blue-600">
                Home <IoIosArrowForward className="text-sm mx-1"></IoIosArrowForward>
              </span>
              <span>Project Report</span>
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-10/12 w-11/12  mx-auto pt-1 pb-16">
        <p className="font-bold">Text .....</p>
      </div>
    </div>
  );
};

export default ProjectReport;
