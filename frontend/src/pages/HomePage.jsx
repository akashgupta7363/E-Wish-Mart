import React from "react";
import Header from "../components/header/Header.js";
import Hero from "../components/Route/Hero/Hero.js";
import Categories from "../components/Route/Categories/Categories.js";
import BestDeals from "../components/Route/BestDeals/BestDeals.js";
import FeaturedProduct from "../components/Route/FeaturedProduct/FeaturedProduct.js";
import Events from "../components/Route/Events/Events.js";
const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
      <Categories />
      <BestDeals />
      <Events />
      <FeaturedProduct />
    </div>
  );
};

export default HomePage;
