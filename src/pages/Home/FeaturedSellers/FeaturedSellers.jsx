import React, { useEffect, useState } from "react";
import axios from "axios";

const FeaturedSellers = () => {
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    const fetchSellers = async () => {
      try {
        const result = await axios("/featuredSellers.json");
        setSellers(result.data);
      } catch (error) {
        console.error("Error fetching featured sellers:", error);
      }
    };
    fetchSellers();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl mb-4 font-semibold text-center">
        || Featured Sellers ||
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {sellers.map((seller) => (
          <div
            key={seller.id}
            className="border rounded-lg p-4 flex flex-col items-center text-center bg-white shadow-md transition-transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold">{seller.name}</h3>
            <p className="mt-2 text-gray-600">Rating: {seller.rating} ⭐</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors duration-300">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSellers;
