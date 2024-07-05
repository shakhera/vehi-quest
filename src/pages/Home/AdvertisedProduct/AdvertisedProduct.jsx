import React, { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const AdvertisedProduct = () => {
  const [advertisedProducts, setAdvertisedProducts] = useState([]);
  const axiosPublic = useAxiosPublic();
  console.log(advertisedProducts);
  useEffect(() => {
    axiosPublic
      .get("/carData/advertise")
      .then((res) => {
        setAdvertisedProducts(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      {advertisedProducts.length > 0 && (
        <div className="container mx-auto px-4 py-8">
          <h3 className="text-3xl font-bold text-center mb-8">
            Advertised Items
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advertisedProducts.map((product) => (
              <div
                key={product._id}
                className="border p-6 rounded-lg shadow-lg"
              >
                <h4 className="text-xl font-semibold mb-2">{product.name}</h4>
                <p className="text-gray-700 mb-2">
                  Price: {product.resalePrice}
                </p>
                <p className="text-gray-700 mb-2">
                  Status: {product?.sold ? "Sold" : "Available"}
                </p>
                <p className="text-gray-700 mb-2">
                  Location: {product?.location}
                </p>
                <p className="text-gray-700 mb-2">
                  Condition: {product?.condition}
                </p>
                <p className="text-gray-700 mb-2">
                  Years of Use: {product?.yearsOfUse}
                </p>
                <p className="text-gray-700 mb-2">
                  Mobile Number: {product?.mobileNumber}
                </p>
                <p className="text-gray-700 mb-2">
                  Description: {product?.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvertisedProduct;
