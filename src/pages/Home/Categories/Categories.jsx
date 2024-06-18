import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const result = await axios("/categories.json");
      setCategories(result.data);
    };
    fetchCategories();
  }, []);

  return (
    <div>
      <div className="container mx-auto p-4">
        \{" "}
        <h2 className="text-3xl mb-4 font-semibold text-center">
          || Product Categories ||
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="border p-4 flex flex-col items-center"
            >
              <img
                src={category.img}
                alt={category.name}
                className="h-48 w-full object-cover mb-4"
              />
              <h3 className="text-xl">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
