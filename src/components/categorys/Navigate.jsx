import React from "react";
import { Link } from "react-router-dom";
import { GiSkirt } from "react-icons/gi";
import { IoHome } from "react-icons/io5";

import logoVoufit from "@/assets/logoVoufit.jpg";

const Navigate = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row p-5 mb-12 gap-6 items-center justify-center ">
        <div className="flex gap-6">
          <Link to="/">
            <div className="flex flex-col w-full md:flex-row justify-center items-center md:gap-8 rounded-3xl shadow-lg shadow-[#e0598d] hover:scale-105 duration-200  px-6 p-3 cursor-pointer ">
              <div className="flex gap-4">
                <img
                  src="/vape1.png"
                  alt="contact us"
                  className="object-cover w-16 h-16    "
                />
              </div>
            </div>
          </Link>
          <Link to="/producto1">
            <div className="flex flex-col w-full md:flex-row justify-center items-center md:gap-8 rounded-3xl shadow-lg shadow-[#ddfd30] hover:scale-105 duration-200  px-6 p-3 cursor-pointer ">
              <div className="flex gap-4">
                <img
                  src="/vape2.png"
                  alt="contact us"
                  className=" object-cover w-16 h-16   "
                />
              </div>
            </div>
          </Link>
        </div>
        <div className="flex gap-6 ">
          <Link to="/producto2">
            <div className="flex flex-col w-full md:flex-row justify-center items-center md:gap-8 rounded-3xl shadow-lg shadow-[#323fc1] hover:scale-105 duration-200  px-6 p-3 cursor-pointer ">
              <div className="flex gap-4">
                <img
                  src="/vape3.png"
                  alt="contact us"
                  className=" object-cover w-16 h-16    "
                />
              </div>
            </div>
          </Link>

          <Link to="/producto3">
            <div className="flex flex-col w-full md:flex-row justify-center items-center md:gap-8 rounded-3xl shadow-lg shadow-[#714bc8] hover:scale-105 duration-200  px-6 p-3 cursor-pointer ">
              <div className="flex gap-4">
                <img
                  src="/vape4.png"
                  alt="contact us"
                  className=" object-cover w-16 h-16   "
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navigate;
