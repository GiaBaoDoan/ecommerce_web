import React, { useState } from "react";
import productData from "../../data/data.json";
import { Link } from "react-router-dom";
import SelectCategory from "../../components/SelectCategory.jsx";
import BannerBG from "../../images/bg-img/06.jpg";

const title = (
  <h2>
    Search Your one from{" "}
    <span className="text-yellow-300 font-medium">Thousand </span> of Products
  </h2>
);
const desc = "We have The largest collection of products";

const bannerList = [
  {
    iconName: "icofont-users-alt-4",
    text: "1.5 Million Customers",
  },
  {
    iconName: "icofont-notification",
    text: "More then 2000 Marchent",
  },
  {
    iconName: "icofont-globe",
    text: "Buy Anything Online",
  },
];

const Banner = () => {
  const [searchInput, setSearchInput] = useState();
  const [filterProduct, setFilterProduct] = useState();
  const handelSearch = (e) => {
    const searchItem = e.target.value;
    setSearchInput(searchItem);
    const filterData = productData.filter((prd) =>
      prd.name.toLocaleLowerCase().includes(searchItem.toLocaleLowerCase())
    );
    setFilterProduct(filterData);
  };
  return (
    <div
      style={{ backgroundImage: `url(${BannerBG})`, backgroundSize: "cover" }}
      className="h-[100vh]"
    >
      <div className="flex justify-center items-center">
        {" "}
        <div className="max-lg:w-[80%] mt-[200px] mx-md:w-[70%]">
          <h2 className="text-5xl font-light font-poppins capitalize w-[90%] text-center">
            {title}
          </h2>
          <form action="" className="relative">
            <SelectCategory select={"all"} />
            <input
              style={{
                background: "rgba(255,255,255,0.7)",
                backdropFilter: "blur(10px)",
              }}
              value={searchInput}
              type="text"
              name="search"
              id="search"
              onChange={handelSearch}
              className="w-full font-medium shadow-lg  bg-opacity-1 mt-5 pt-[22px] rounded-full pr-[50px] pb-[22px] pl-[200px] font-poppins outline-none"
              placeholder="Search Your Product"
            />
            <button
              type="submit"
              className="absolute cursor-pointer top-1/2 right-10 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                color="gray"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-search"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </button>
          </form>
          <p className="text-center mt-5 font-poppins text-xl text-gray-500 font-normal">
            {desc}
          </p>
        </div>
      </div>
      <div className="flex mt-[20px] justify-center">
        <div className="w-[70%] text-center">
          {searchInput
            ? filterProduct?.slice(0, 20).map((prd, index) => {
                return (
                  <span
                    key={index}
                    className="bg-white  cursor-pointer shadow rounded border text-gray-500 font-medium p-2 mt-4 inline-block mx-1"
                  >
                    <Link to={`/shop/${prd.id}`} className="uppercase rounded">
                      {prd.name}
                    </Link>
                  </span>
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
};

export default Banner;
