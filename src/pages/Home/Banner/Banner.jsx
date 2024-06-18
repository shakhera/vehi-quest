import React from "react";
import banner1 from "../../../assets/images/banner/banner1.jpg";

const Banner = () => {
  return (
    <div
      className="bg-cover bg-center h-64 sm:h-80 md:h-[500px] "
      style={{ backgroundImage: `url(${banner1})` }}
    >
      <div className="bg-black bg-opacity-70 h-full flex flex-col items-center justify-center px-4">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center mb-4">
          Welcome to VehiQuest
        </h1>
        <p className="text-white text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl text-center mb-6 max-w-2xl">
          Discover a wide range of second-hand cars at unbeatable prices. Whether you're looking for a sedan, SUV, or truck, we have the perfect vehicle for you.
        </p>
        <a
          href="#explore"
          className="bg-sky-500 text-white py-2 px-4 rounded hover:bg-sky-700 transition duration-300"
        >
          Explore Now
        </a>
      </div>
    </div>
  );
};

export default Banner;
