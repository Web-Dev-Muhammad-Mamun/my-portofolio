import React from "react";
import eCommerceSite from "../../../public/shopping-cart-e-commerce.png";
import miniCalculator from "../../../public/mini-calculater.png";
const Portfolio = () => {
  const Portfolios = [
    {
      id: 1,
      src: eCommerceSite,
    },

    {
      id: 2,
      src: miniCalculator,
    },

    {
      id: 3,
      src: eCommerceSite,
    },

    {
      id: 3,
      src: eCommerceSite,
    },
    {
      id: 4,
      src: eCommerceSite,
    },

    {
      id: 5,
      src: eCommerceSite,
    },
  ];
  return (
    <div id="portfolio" className="Portfolio bg-white w-full h-full mt-24 text-black ">
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full mt-40">
        <div className="pb-8">
          <p className=" text-4xl font-bold inline border-b-4  border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right now</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {Portfolios.map(({ id, src }) => {
            return (
              <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
                <img
                  className=" w-96 h-64 rounded-md duration-200 hover:scale-105"
                  src={src}
                  alt=""
                />
                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
