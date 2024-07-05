import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import useProduct from "../../../hooks/useProducts";

const Categories = () => {
  const [carData] = useProduct();

  // console.log(carData);

  return (
    <div>
      <div className="container mx-auto p-4">
        <h2 className="text-3xl mb-4 font-semibold text-center">
          || Product Categories ||
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {carData.map((category, inx) => (
            <div
              key={inx}
              className="border border-gray-200 shadow-md hover:shadow-lg rounded-lg overflow-hidden duration-500"
            >
              {category?.products?.length > 0 ? (
                <Link to={`/category/${category.cars_id}`} className=" ">
                  <div className="">
                    <img
                      src={category.img}
                      alt={category.category}
                      className="h-64 w-full object-cover"
                    />
                    <div className="p-4 bg-white">
                      <h3 className="text-lg font-semibold mb-2">
                        {category.category}
                      </h3>
                      <p className="text-gray-600">
                        {category?.products?.length > 1
                          ? `${category?.products?.length} cars available`
                          : "1 car available"}
                      </p>
                    </div>
                  </div>
                </Link>
              ) : (
                <div className="border border-gray-300 rounded-lg overflow-hidden shadow-md p-4 bg-gray-100">
                  <img
                    src={category.img}
                    alt={category.category}
                    className="h-64 w-full object-cover opacity-50"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 text-gray-700">
                      {category.category}
                    </h3>
                    <p className="text-gray-500">No cars available</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
