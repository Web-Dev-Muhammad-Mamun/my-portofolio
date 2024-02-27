import React from "react";
import eCommerceSite from "../../../public/shopping-cart-e-commerce.png";
import miniCalculator from "../../../public/mini-calculater.png";
import taksMenegment from "../../../public/taksMenegment.png";

import halalJibika from "../../../public/halalJibika.png";

import tasbih from "../../../public/tasbih.png";

import megamart from "../../../public/megamart.png";
const Portfolio = () => {
  const Portfolios = [
    {
      id: 1,
      src: eCommerceSite,
      lives: "https://shopping-cart-e-commerce.vercel.app/",
    },

    {
      id: 2,
      src: miniCalculator,
      lives: "https://mini-calender-beta.vercel.app/",
    },

    {
      id: 3,
      src: taksMenegment,
      lives : "https://to-do-app-puce-omega.vercel.app/"
    },

    {
      id: 4,
      src: halalJibika,
      lives : "https://halal-jibika2024.vercel.app/"
    },
    {
      id: 5,
      src: tasbih,
      lives : "https://tasbih-seven.vercel.app/"
    },

    {
      id: 6,
      src: megamart,
      lives : "https://mega-mart-ochre.vercel.app/"
    },
  ];
  return (
    <div
      id="portfolio"
      className="Portfolio bg-white w-full h-full mt-24 text-black"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full mt-40">
        <div className="pb-8">
          <p className=" text-4xl font-bold inline border-b-4  border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right now</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {Portfolios.map(({ id, src, lives }) => {
            return (
              <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
                <img
                  className=" w-96 h-64 rounded-md duration-200 hover:scale-105"
                  src={src}
                  alt=""
                />
                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    <a href={lives}>demo</a>
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
