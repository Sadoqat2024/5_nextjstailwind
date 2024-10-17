import React from "react";
import { FaStar } from "react-icons/fa";

const Destination = () => {
  return (
    <section>
      <div className="pt-10 m-10">
        <h1 className="text-4xl font-bold text-balance">Popular Destination</h1>
        <p className="text-2xl text-gray-700 font-semibold text-balance mx-auto mt-4 mb-6 leading-6 ">Discover the Most Loved Destinations Around the Globe</p>
      </div>
      <hr className="border-black/10"/>
      <div className="flex justify-evenly items-center h-auto mt-8 mb-8">
         <div>
        <img className="rounded-xl w-[340px] h-[240px]" src="https://th.bing.com/th/id/OIP.Lac8Cl6YuL-5b5toYkxkUQHaEK?rs=1&pid=ImgDetMain" alt="123" />
        <div className="flex justify-between">
          <div className="mt-3">
            <h3 className="text-lg font-semibold mb-2 text-[min(8vw, 60px)] " >Tradition and Futurism</h3>
            <p className="text-sm font-medium text-gray-700">Thailand, Phooke island</p>
          </div>
          <div className="mt-3">
            <button className="bg-sky-500 flex flex-row p-1 rounded-lg hover:bg-sky-300"> <FaStar  className="text-white m-1 hover:text-sky-500"/> 4.7</button>
          </div>
        </div>
      </div>
         <div>
        <img className="rounded-xl w-[340px] h-[240px]" src="https://www.guiadasemana.com.br/contentFiles/image/opt_w340h212/2017/11/FEA/54404_fira-capa.jpg" alt="123" />
        <div className="flex justify-between">
          <div className="mt-3">
            <h3 className="text-lg font-semibold mb-2 text-[min(8vw, 60px)] ">Tradition and Futurism</h3>
            <p className="text-sm font-medium text-gray-700">Thailand, Phooke island</p>
          </div>
          <div  className="mt-3" >
            <button className="bg-sky-500 flex flex-row p-1 rounded-lg hover:bg-sky-300"> < FaStar className="text-white m-1 hover:text-sky-500" /> 4.7</button>
          </div>
        </div>
      </div>
         <div>
        <img className="rounded-xl w-[340px] h-[240px]" src="https://drprem.com/travel/wp-content/uploads/sites/53/2014/06/Tonga-780x405.jpg" alt="123" />
        <div className="flex justify-between">
          <div className="mt-3">
            <h3 className="text-lg font-semibold mb-2 text-[min(8vw, 60px)] ">Tradition and Futurism</h3>
            <p className="text-sm font-medium text-gray-700">Thailand, Phooke island</p>
          </div>
          <div  className="mt-3" >
            <button className="bg-sky-500 flex flex-row p-1 rounded-lg hover:bg-sky-300"> <FaStar className="text-white m-1 hover:text-sky-500" /> 4.7</button>
          </div>
        </div>
      </div>
      </div>
     
      
    </section>
  );
};

export default Destination;
