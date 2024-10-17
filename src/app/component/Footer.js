import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { RiRecordMailFill } from "react-icons/ri";

const Footer = () => {
  return (
    <main className="bg-gray-300">
      <div>
        <div className="flex justify-center items-center flex-col space-y-6 p-8 ">
          <h1 className="text-4xl font-bold text-balance ">
            Get special offers and more from Traveler
          </h1>
          <p className="text-xl font-semibold text-balance text-gray-500">
            Subscibe to see the secret deals prices drop the moment you sign up
          </p>
          <form className="">
            <input
              className="rounded-lg hover:ease-in-out w-64 h-8 pl-3"
              type="email"
              placeholder="Enter your email"
            />
            <button className="bg-red-500 text-white rounded-lg ml-4 hover:bg-sky-500 hover:text-black">
              Subscribe
            </button>
          </form>
        </div>

        <div className="flex justify-evenly">
          <div className="w-[260px] h-[300px] flex flex-col">
            <Link href={"/"} className="text-xl font-semibold text-sky-600 mt-4 mb-4">Skywings</Link>
            <p className="text-base text-balance font-thin">
              Explore the world with ease and excitement through our
              comprehensive travel platform. Your journey begins here, where
              seamless planning meets unforgettable experiences.
            </p>

          </div>

          <div className="flex flex-col space-y-3">
            <h1 className="text-xl font-medium text-sky-600">Quick Links</h1>
            <Link href={'/'} className="text-base text-gray-500 hover:underline">Home</Link>
            <Link href={'/'} className="text-base text-gray-500 hover:underline">Flights</Link>
            <Link href={'/'} className="text-base text-gray-500 hover:underline">Hotels</Link>
            <Link href={'/'} className="text-base text-gray-500 hover:underline">Cruise</Link>
          </div>

          <div className="flex flex-col space-y-3">
            <h1 className="text-xl font-medium text-sky-600">Contact Us</h1>
            <ul>
              <li >
                <Link className="text-base text-gray-500 hover:underline flex flex-row" href={'/'}>
                  <span><FaPhone className="mr-4 text-xl"/></span> 91 900 52 52
                </Link>
              </li>
              <li>
                <Link className="text-base text-gray-500 hover:underline flex flex-row" href={'/'}>
                  <span><RiRecordMailFill className="mr-4 text-xl" /></span> info@skywings
                </Link>
              </li>
              <li>
                <Link className="text-base text-gray-500 hover:underline flex flex-row" href={'/'}>
                  <span><FaLocationDot className="mr-4 text-xl"/></span> Tashkent, Uzbekistan
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-row space-x-4 mt-4">
            <FaFacebook className="text-blue-800 text-xl font-bold"/>
            <FaSquareInstagram className="text-rose-600 text-xl font-bold"/>
            <FaYoutube className="text-red-600 text-xl font-bold" />
            </div>
        </div>
      </div>
    </main>
  );
};

export default Footer;
