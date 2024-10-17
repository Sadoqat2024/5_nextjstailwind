import React from "react";
import { BsBookmarkStarFill } from "react-icons/bs";
import { RiLandscapeFill } from "react-icons/ri";
import { IoMap } from "react-icons/io5";


const Journey = () => {
  return (
    <div>
      <div>
        <div>
          <h1 className="text-4xl font-bold text-balance text-center mt-24">
            Journey To The Sky Made Simple!
          </h1>
          <p className="text-xl text-gray-700 text-center font-semibold text-balance  mx-auto mt-5 mb-16 leading-6 ">
            Effortless Planning for Your Next Adventure
          </p>
        </div>
        <div className="flex justify-evenly items-center h-auto ">
          <div className="journey_card relative isolate pt-8 overflow-hidden group w-[350px] h-[240px] mb-6">
            <div className="journey_card_bg p-6 bg-gray-300 rounded-tr-xl rounded-tl-xl">
              <span className="flex justifiy-between space-x-20 gap-x-20 mt-2 mb-12 text-2xl text-sky-700 ">
                <BsBookmarkStarFill className="mt-2" />
                <img className="rounded-full w-20 h-20 object-cover" src="https://th.bing.com/th/id/R.39185cccc233a3dc4981dc0fc4d3b5ca?rik=IYP77YIvLOKSzQ&pid=ImgRaw&r=0" alt="iconimg"/>
              </span>
              <h1 className="text-xl font-semibold text-black text-balance mb-1 mt-6">
                Seamless Booking Process
              </h1>
            </div>
            <div className="journey_card_hover absolute top-full left-0 w-full h-full p-4 bg-sky-500 rounded-tr-xl rounded-tl-xl transition-transform duration-300 group-hover:top-0 ">
              <span className="inline-block mt-1 mb-8 text-2xl text-white hover:text-sky-200 ">
              <BsBookmarkStarFill />
              </span>
              <h1 className="text-lg font-semibold text-white text-balance">
                Easy Reservations, One Click Away
              </h1>
              <p className="text-lg font-normal text-white text-balance mt-3 mb-2 ">
                {" "}
                From flights and accommodations to activities and transfers,
                everything you need is available at your fingertips, making
                travel planning effortless.
              </p>
            </div>
          </div>
          <div className="journey_card relative isolate pt-8 overflow-hidden group w-[350px] h-[240px] mb-6">
            <div className="journey_card_bg p-6 bg-gray-300 rounded-tr-xl rounded-tl-xl">
              <span className="flex justifiy-between space-x-20 gap-x-20 mt-2 mb-12 text-2xl text-sky-700 ">
                <RiLandscapeFill className="mt-2" />
                <img className="rounded-full w-20 h-20 object-cover" src="https://th.bing.com/th/id/OIP.XLsDnqGeP7rJ9dzjnY-aSgAAAA?rs=1&pid=ImgDetMain" alt="iconimg"/>
              </span>
              <h1 className="text-xl font-semibold text-black text-balance mb-1 mt-6">
              Tailored Itineraries
              </h1>
            </div>
            <div className="journey_card_hover absolute top-full left-0 w-full h-full p-4 bg-sky-500 rounded-tr-xl rounded-tl-xl transition-transform duration-300 group-hover:top-0 ">
              <span className="inline-block mt-1 mb-8 text-2xl text-white hover:text-sky-200 ">
              <RiLandscapeFill />
              </span>
              <h1 className="text-lg font-semibold text-white text-balance">
              Customized Plans Just for You
              </h1>
              <p className="text-lg font-normal text-white text-balance mt-3 mb-2 ">
                {" "}
                Enjoy personalized travel plans designed to match your preferences
              and interests. Whether you seek adventure or cultural immersion,
              our tailored itineraries ensure your journey is uniquely yours.
              </p>
            </div>
          </div>
          <div className="journey_card relative isolate pt-8 overflow-hidden group w-[350px] h-[240px] mb-6">
            <div className="journey_card_bg p-6 bg-gray-300 rounded-tr-xl rounded-tl-xl">
              <span className="flex justifiy-between space-x-20 gap-x-20 mt-2 mb-12 text-2xl text-sky-700 ">
                <IoMap className="mt-2" />
                <img className="rounded-full w-20 h-20 object-cover" src="https://img.freepik.com/premium-photo/front-view-daisy-flower-stand-with-copy-space_636537-89076.jpg" alt="iconimg"/>
              </span>
              <h1 className="text-xl font-semibold text-black text-balance mb-1 mt-6">
              Insider Tips and Recommendations
              </h1>
            </div>
            <div className="journey_card_hover absolute top-full left-0 w-full h-full p-4 bg-sky-500 rounded-tr-xl rounded-tl-xl transition-transform duration-300 group-hover:top-0 ">
              <span className="inline-block mt-1 mb-8 text-2xl text-white hover:text-sky-200 ">
              <IoMap />
              </span>
              <h1 className="text-lg font-semibold text-white text-balance">
              Expert Local Insights
              </h1>
              <p className="text-lg font-normal text-white text-balance mt-3 mb-2 ">
                {" "}
                We provide curated recommendations for dining, sightseeing, and
              hidden gems, so you can experience each destination like a local.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
