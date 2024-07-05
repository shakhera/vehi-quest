import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProduct from "../../../hooks/useProducts";
import ProductCard from "../ProductCard/ProductCard";

const Services = () => {
  const id = useParams();
  const [carData] = useProduct();
  console.log(carData)


  return (
    <div className="pt-20">
      <h2>All Category</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-11/12 mx-auto">
        {carData.map((items) => (
          <ProductCard key={items._id} items={items}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
