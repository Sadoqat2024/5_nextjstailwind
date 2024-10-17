import React from "react";
import { MdOutlineCamera } from "react-icons/md";
import { RiShip2Fill } from "react-icons/ri";
import { RiLandscapeFill } from "react-icons/ri";
import { FaMapLocationDot } from "react-icons/fa6";

const Discover = () => {
  return (
    <div className="flex flex-col">
      <div className="">
        <h1 className="text-4xl font-bold text-balance text-center mt-24">
          Discover The World From Above
        </h1>
        <p className="text-xl text-gray-700 text-center font-semibold text-balance  mx-auto mt-5 mb-16 leading-6 ">
          Experience Breathtaking Views and Unique Perspectives
        </p>
      </div>

      <div className="flex justify-evenly items-center px-3">
        <div className="flex-col space-y-3 mb-4 w-[350px] h-[240px] hover:shadow-2xl rounded-lg">
          <div className="flex justify-center items-center mb-12">
            <MdOutlineCamera className="text-sky-500 text-2xl font-bold" />
          </div>
          <h2 className="text-gray-700 text-2xl font-semibold text-center text-balance">
            Aerial Cityscapes
          </h2>
          <p className="text-lg font-normal text-balance text-gray-500 text-center">
            Witness the architectural marvels and bustling streets from
            bird's-eye view, offering a unique perspective.
          </p>
        </div>
        <div className="flex-col space-y-3 mb-4 w-[350px] h-[240px] hover:shadow-2xl rounded-lg">
          <div className="flex justify-center items-center mb-12">
            <RiShip2Fill  className="text-sky-500 text-2xl font-bold" />
          </div>
          <h2 className="text-gray-700 text-2xl font-semibold text-center text-balance">
          Coastal Wonders
          </h2>
          <p className="text-lg font-normal text-balance text-gray-500 text-center">
            Witness the architectural marvels and bustling streets from
            bird's-eye view, offering a unique perspective.
          </p>
        </div>
        <div className="flex-col space-y-3 mb-4 w-[350px] h-[240px] hover:shadow-2xl rounded-lg">
          <div className="flex justify-center items-center mb-12">
            <RiLandscapeFill  className="text-sky-500 text-2xl font-bold" />
          </div>
          <h2 className="text-gray-700 text-2xl font-semibold text-center text-balance">
          Historic Landmarks
          </h2>
          <p className="text-lg font-normal text-balance text-gray-500 text-center">
            Witness the architectural marvels and bustling streets from
            bird's-eye view, offering a unique perspective.
          </p>
        </div>
        <div className="flex-col space-y-3 mb-4 w-[350px] h-[240px] hover:shadow-2xl rounded-lg">
          <div className="flex justify-center items-center mb-12">
            <FaMapLocationDot className="text-sky-500 text-2xl font-bold" />
          </div>
          <h2 className="text-gray-700 text-2xl font-semibold text-center text-balance">
           Create New Location
          </h2>
          <p className="text-lg font-normal text-balance text-gray-500 text-center">
            Witness the architectural marvels and bustling streets from
            bird's-eye view, offering a unique perspective.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Discover;
