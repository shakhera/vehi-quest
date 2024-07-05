import React from "react";
import { useLoaderData } from "react-router-dom";

const ProductDetails = ({ item, closeModal }) => {
  const {
    name,
    category,
    img,
    location,
    originalPrice,
    resalePrice,
    postedTime,
    sellerName,
    yearsOfUse,
    verified,
  } = item;
  return (
    <div className="pt-20">
      <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg px-6 py-4 shadow-lg max-w-lg w-full sm:max-w-md overflow-y-auto overflow-auto max-h-[80vh] p-6">
          <div className="flex justify-end mb-4">
            <button
              onClick={closeModal}
              className="text-gray-500 hover:text-gray-800 focus:outline-none"
            >
              ✖
            </button>
          </div>
          <img
            className="h-48 w-full object-cover mb-4 rounded-lg"
            src={img}
            alt={name}
          />
          <h1 className="text-2xl font-bold mb-2 text-center">{name}</h1>
          <div className="space-y-2">
            <p className="text-base">
              <strong>Category:</strong> {category}
            </p>
            <p className="text-base">
              <strong>Location:</strong> {location}
            </p>
            <p className="text-base">
              <strong>Resale Price:</strong>{" "}
              <span className="text-green-600 font-semibold">
                {resalePrice}
              </span>
            </p>
            <p className="text-base">
              <strong>Original Price:</strong>{" "}
              <span className="text-red-600 line-through">{originalPrice}</span>
            </p>
            <p className="text-base">
              <strong>Years of Use:</strong> {yearsOfUse}
            </p>
            <p className="text-base">
              <strong>Posted Time:</strong> {postedTime}
            </p>
            <p className="text-base">
              <strong>Seller Name:</strong> {sellerName}{" "}
              {verified && (
                <span className="text-blue-500">✔ Verified Seller</span>
              )}
            </p>
          </div>
          <div className="flex justify-center mt-4">
            <button
              onClick={closeModal}
              className="rounded-lg bg-red-600 text-white px-4 py-2 hover:bg-red-800 focus:outline-none"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
