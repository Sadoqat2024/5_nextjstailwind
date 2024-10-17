import React from 'react'
import { IoMapSharp } from "react-icons/io5"
import { MdCalendarMonth } from "react-icons/md";

const Forms = () => {
  return (
    <div>
      {/*forms*/}
      <hr className="border-black/10 mt-8"/>
      <div className="flex  relative  z-10 w-full justify-evenly items-center mt-2 ">
              <div className="flex justify-between space-x-3 p-2 w-[260px] h-[120px] bg-sky-400 rounded-xl mt-6">
                <div className="flex justify-start items-center ">
                  <IoMapSharp className="text-red-500 text-2xl"/>
                </div>
                <form className="flex flex-col items-center justify-center">
                  <label className="text-xl font-bold text-gray-700" for="location">Location</label>
                  <input className="text-gray-600 rounded-tr-lg rounded-bl-lg mt-3 italic"
                    type="text"
                    id="location"
                    name="location"
                    placeholder="Where are you going?"
                  />
                </form>
              </div>
              <div className="relative z-10 flex justify-between space-x-3 p-2 w-[260px] h-[120px] bg-sky-400 rounded-xl mt-6">
                <div className="flex justify-start items-center ">
                  <MdCalendarMonth className="text-red-500 text-2xl"/>
                </div>
                <form className="flex flex-col items-center justify-center pr-7">
                  <label className="text-xl font-bold text-gray-700" for="date">Start Date</label>
                  <input className="text-gray-600 rounded-tr-lg rounded-bl-lg mt-3"
                    type="date"
                    id="date"
                    name="date"
                  />
                </form>
              </div>
              <div className="relative z-10 flex justify-between space-x-3 p-2 w-[260px] h-[120px] bg-sky-400 rounded-xl mt-6">
                <div className="flex justify-start items-center ">
                  <MdCalendarMonth className="text-red-500 text-2xl"/>
                </div>
                <form className="flex flex-col items-center justify-center pr-7">
                <label className="text-xl font-bold text-gray-700" for="date">End Date</label>
                  <input className="text-gray-600 rounded-tr-lg rounded-bl-lg mt-3"
                    type="date"
                    id="date"
                    name="date"
                  />
                </form>
              </div>
              <div className="relative z-10 flex justify-between space-x-3 p-2 w-[260px] h-[120px] bg-sky-400 rounded-xl mt-6">
                <div className="flex justify-start items-center ">
                  <MdCalendarMonth className="text-red-500 text-2xl"/>
                </div>
                <form className="flex flex-col items-center justify-center">
                  <label className="text-xl font-bold text-gray-700" for="text">Guest</label>
                  <input className="text-gray-600 rounded-tr-lg rounded-bl-lg mt-3 italic"
                    type="text"
                    id="guest"
                    name="guest"
                    placeholder="1 Guest 1 Room"
                  />
                </form>
              </div>
            </div>
            <div className="flex justify-center items-center ">
              <button className="bg-red-600 text-2xl font-bold text-center text-white m-3 rounded-lg w-48 h-10 hover:bg-white hover:text-red-600">Search</button>
            </div>
    </div>
  )
}

export default Forms
