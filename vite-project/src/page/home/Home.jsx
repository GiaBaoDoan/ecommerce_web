import React from "react";
import Banner from "./Banner";
import HomeCategory from "./HomeCategory";
import CategoryShowCase from "./CategoryShowCase";
import Register from "./Register";
import Location from "./Location";
import AboutUs from "./AboutUs";
import Application from "./Application";
import Sponnor from "./Sponnor";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Banner />
      <HomeCategory />
      <CategoryShowCase />
      <Register />
      <Location />
      <AboutUs />
      <Application />
      <Sponnor />
    </div>
  );
};

export default Home;
