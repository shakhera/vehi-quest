import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import useCategoryProducts from "../../../hooks/useCategoryProducts";
import ProductCard from "../ProductCard/ProductCard";

const CategoryPage = () => {
  const { id } = useParams();
  const [products, isLoading, isError] = useCategoryProducts(id);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading products.</div>;

  return (
    <div className="pt-20">
      <div className="container mx-auto p-4">
        <h2 className="text-3xl mb-4 font-semibold text-center">Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-11/12 mx-auto">
          {products.products?.map((product, inx) => (
            <ProductCard key={inx} items={product}></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
