import React from "react";
import Banner from "../Banner/Banner";
import AdvertisedItems from "../AdvertisedItems/AdvertisedItems";
import Categories from "../Categories/Categories";
import Testimonials from "../Testimonials/Testimonials";
import FeaturedSellers from "../FeaturedSellers/FeaturedSellers";
import AdvertisedProduct from "../AdvertisedProduct/AdvertisedProduct";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      {/* <AdvertisedItems></AdvertisedItems> */}
      <Categories></Categories>
      <AdvertisedProduct></AdvertisedProduct>
      <Testimonials></Testimonials>
      <FeaturedSellers></FeaturedSellers>
    </div>
  );
};

export default Home;
