import React from "react";
import Header from "../components/header/Header.js";
import Hero from "../components/Route/Hero/Hero.js";
const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
    </div>
  );
};

export default HomePage;
