import React from "react";
import Header from "../components/header/Header.js";
import Hero from "../components/Route/Hero/Hero.js";
import Categories from "../components/Route/Categories/Categories.js";
import BestDeals from "../components/Route/BestDeals/BestDeals.js";
const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
      <Categories />
      <BestDeals />
    </div>
  );
};

export default HomePage;
