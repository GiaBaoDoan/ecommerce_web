import { useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import NavItem from "./components/NavItem";
import Footer from "./page/home/Footer";
import BannerBG from "./images/bg-img/06.jpg";

function App() {
  return (
    <div className="h-[100vh]">
      <NavItem />
      <div className="min-h-[100vh]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
