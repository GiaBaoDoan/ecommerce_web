import React from "react";
import Bg from "../images/bg-img/01.jpg";
import { Link } from "react-router-dom";
const PageHeader = ({ title, curPage }) => {
  return (
    <div
      className="h-[50vh] font-poppins"
      style={{
        background: `url(${Bg})`,
        backgroundSize: "cover",
      }}
    >
      <div className="h-full flex items-center  justify-center">
        <div className="text-center">
          <p className="text-4xl font-bold mb-2">Our Shop Page</p>
          <Link to={"/Home"}>{title} /</Link>
          <Link to={"/Shop"}> {curPage}</Link>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
