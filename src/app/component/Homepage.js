import React from "react";
import { FaCirclePlay } from "react-icons/fa6";


const Homepage = () => {
  return (
    <main className="mt-10 px-4 relative overflow-hidden isolate">
      <div className="relative h-screen ">
        <img
          className="absolute inset-0 object-cover w-full h-full rounded-3xl z-0"
          src="https://i.pinimg.com/originals/88/9b/86/889b86dfb255824f611c12f367f69cb6.png"
          alt="home"
        />
        <div className="flex justify-between items-center h-full">
          <div className="relative flex flex-col z-10 justify-center w-[580px] items-center space-y-13 h-full">
            <p className="text-3xl font-semibold uppercase text-center">
              ELEVATE YOUR TRAVEL JOURNEY
            </p>
            <h1 className="text-balance text-6xl text-center font-extrabold uppercase mt-4 ml-4">
              Experience The Magic Of Flight!
            </h1>
            <div className="flex flex-row">
              <button className="mt-4 px-4 py-2 bg-sky-500 rounded-full font-bold text-white hover:text-black hover:bg-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                <span>Book A Trip Now</span>
              </button>
              <button className="rounded-full bg-sky-400 w-12 h-12 ml-12 px-3 py-2 mt-4  hover:bg-white">
                <FaCirclePlay className="text-center text-white text-2xl hover:text-sky-400" />
              </button>
            </div>

            

          </div>
          {/*plane img*/}
          <div className="relative flex z-10 justify-end items-center h-full w-full pr-0">
            <img
              className="absolute object-cover z-10 w-[750px] h-auto mt-20 mr-0"
              src="https://th.bing.com/th/id/R.3c1bcd1a050e404d8d2ebf0a9e7786bc?rik=FXM3Yx8zP1Py0g&riu=http%3a%2f%2fpngimg.com%2fuploads%2fplane%2fplane_PNG101255.png&ehk=n1c5Ri8KU5R1KnFSBGEp2TtRNFY9%2b8Ry%2f%2fN2Nsueebs%3d&risl=&pid=ImgRaw&r=0"
              alt="plane"
            />
          </div>
        </div>
        
      </div>
    </main>
  );
};

export default Homepage;
