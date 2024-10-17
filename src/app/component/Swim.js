import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Swim = () => {
  return (
    <div className="bg-gray-200">
      <div className="flex justify-evenly items-center p-2 pt-32">
        <div className="w-[500px] h-auto ">
          <img
            className="rounded-lg object-cover w-[480px] h-[550px] "
            src="https://stories.cnnbrasil.com.br/wp-content/uploads/sites/9/2021/08/capa-memorias-infancia.png"
            alt="swim"
          />
        </div>
        <div className="w-[600px] h-auto">
          <h1 className="text-5xl font-bold text-balance uppercase top-0 mb-3">
            UNLEASH WANDERLUST WITH SKYWINGS
          </h1>
          <p className="text-lg font-sans text-balance mt-3 ">
            Embark on a journey like no other with Skywings, where your travel
            dreams come to life. Our mission is to inspire and facilitate your
            adventures, whether you seek the vibrant energy of bustling
            cityscapes, the serene beauty of pristine beaches, or the
            captivating history of ancient landmarks. At Skywings, we provide
            expertly curated destinations and personalized itineraries, ensuring
            that every trip is tailored to your unique preferences. Discover
            hidden gems, immerse yourself in diverse cultures, and create
            unforgettable memories that will last a lifetime.
          </p>
          <p className="text-lg font-sans text-balance mt-3 ">
            With Skywings as your ultimate travel companion, exploring the
            wonders of the world has never been easier. Our insider tips and
            local insights give you the tools to navigate new places with
            confidence and excitement. From the moment you start planning to the
            day you return home, we are dedicated to making your travel
            experience seamless and enriching.
          </p>
          <div className="mt-4">
            <img
              className=" w-[600px] h-14 absolute object-cover rounded-lg"
              src="https://www.adorama.com/alc/wp-content/uploads/2017/11/shutterstock_114802408.jpg"
              alt="book"
            />
            <h3 className="relative text-lg font-semibold flex flex-row justify-center items-center p-4 hover:text-sky-700 ">
              Book A Flight Now <HiArrowNarrowRight className="ml-4" />
            </h3>
          </div>
        </div>
      </div>

      <hr className="border-black/10 mt-16" />
      <div className="flex justify-evenly items-center mt-24">
        <div className="card1 relative isolate pt-8 overflow-hidden group mb-8">
          <div className="card_bg bg-sky-300 w-[300px] h-[200px] rounded-xl flex justify-center items-center flex-col space-y-5">
          <h1 className="text-6xl font-bold text-gray-500 ">10+</h1>
          <p className="text-3xl font-bold text-gray-500 text-balance">Years Experience</p>
        </div>

        <div className="card_hover absolute top-full left-0 right-0 w-full h-full p-4  transition-transform duration-300 group-hover:top-0">
          <img className="absolute w-[330px] h-[220px] mr-2 flex items-center justify-center rounded-xl" src="https://i.pinimg.com/736x/08/18/de/0818de6129729f87772b01c9e86fbd25.jpg" alt="hoverimg"/>
        </div>
        </div>

        <div className="card2 relative isolate pt-8 overflow-hidden group mb-8">
          <div className="bg-sky-300 w-[300px] h-[200px] rounded-xl flex justify-center items-center flex-col space-y-5">
          <h1 className="text-6xl font-bold text-gray-500 ">12K</h1>
          <p className="text-3xl font-bold text-gray-500 text-balance">Happy Clients</p>
        </div>

        <div className="card_hover absolute top-full left-0 right-0 w-full h-full p-4  transition-transform duration-300 group-hover:top-0">
          <img className="absolute w-[330px] h-[220px] mr-2 flex items-center justify-center rounded-xl" src="https://telecomfit.com/wp-content/uploads/2019/02/Happy-Clients.jpg" alt="hoverimg"/>
        </div>
        </div>
        

        <div className="card3 relative isolate pt-8 overflow-hidden group mb-8">
          <div className="bg-sky-300 w-[300px] h-[200px] rounded-xl flex justify-center items-center flex-col space-y-5">
          <h1 className="text-6xl font-bold text-gray-500 ">4.8</h1>
          <p className="text-3xl font-bold text-gray-500 text-balance">Overall Ratings</p>
        </div>

        <div className="card_hover absolute top-full left-0 right-0 w-full h-full p-4  transition-transform duration-300 group-hover:top-0">
          <img className="absolute w-[330px] h-[220px] mr-2 flex items-center justify-center rounded-xl" src="https://techknowprime.com/wp-content/uploads/2023/06/Star-Ratings.webp" alt="hoverimg"/>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Swim;
