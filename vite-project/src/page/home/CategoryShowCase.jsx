import React, { useState } from "react";
import bg1 from "../../images/shape-img/icon/01.png";
import bg2 from "../../images/shape-img/icon/02.png";
import BannerBG from "../../images/shape-img/icon/06.png";
import Banner from "../../images/shape-img/08.png";
import prd1 from "../../images/categoryTab/01.jpg";
import prd2 from "../../images/categoryTab/02.jpg";
import prd3 from "../../images/categoryTab/03.jpg";
import prd4 from "../../images/categoryTab/04.jpg";
import prd5 from "../../images/categoryTab/05.jpg";
import prd6 from "../../images/categoryTab/06.jpg";
import prd7 from "../../images/categoryTab/07.jpg";
import prd8 from "../../images/categoryTab/08.jpg";
import { Link } from "react-router-dom";
const ProductData = [
  {
    imgUrl: prd1,
    cate: "Shoes",
    title: "Nike Premier X",
    author: "assets/images/course/author/01.jpg",
    brand: "Nike",
    price: "$199.00",
    id: 1,
  },
  {
    imgUrl: prd2,
    cate: "Bags",
    title: "Asthetic Bags",
    author: "assets/images/course/author/02.jpg",
    brand: "D&J Bags",
    price: "$199.00",
    id: 2,
  },
  {
    imgUrl: prd3,
    cate: "Phones",
    title: "iPhone 12",
    author: "src/assets/images/categoryTab/brand/apple.png",
    brand: "Apple",
    price: "$199.00",
    id: 3,
  },
  {
    imgUrl: prd4,
    cate: "Bags",
    title: "Hiking Bag 15 Nh100",
    author: "assets/images/course/author/04.jpg",
    brand: "Gucci",
    price: "$199.00",
    id: 4,
  },
  {
    imgUrl: prd5,
    cate: "Shoes",
    title: "Outdoor Sports Shoes",
    author: "assets/images/course/author/05.jpg",
    brand: "Nike",
    price: "$199.00",
    id: 5,
  },
  {
    imgUrl: prd6,
    cate: "Beauty",
    title: "COSRX Snail Mucin",
    author: "assets/images/course/author/06.jpg",
    brand: "Zaara",
    price: "$199.00",
    id: 6,
  },
  {
    imgUrl: prd7,
    cate: "Bags",
    title: "Look Less Chanel Bag ",
    author: "assets/images/course/author/01.jpg",
    brand: "Gucci",
    price: "$199.00",
    id: 7,
  },
  {
    imgUrl: prd8,
    cate: "Shoes",
    title: "Casual Sneakers",
    author: "assets/images/course/author/02.jpg",
    brand: "Bata",
    price: "$199.00",
    id: 8,
  },
];
const CategoryShowCase = () => {
  const [items, setItems] = useState(ProductData);
  const showItems = (prdItem) => {
    if (prdItem.toLowerCase() == "all") {
      setItems(ProductData);
      return;
    }
    const showItems = ProductData.filter((item, index) => {
      return item.cate == prdItem;
    });
    setItems(showItems);
  };
  return (
    <div className="">
      <div
        style={{ backgroundImage: `url(${BannerBG})`, backgroundSize: "cover" }}
        className="relative bg-slate-100 py-[100px]"
      >
        {/* shape section */}
        <div className="absolute w-full">
          <div className="flex justify-between mx-1">
            <div className="">
              <img src={bg1} className="opacity-55" alt="" />
            </div>
            <div>
              <img src={bg2} className="opacity-55" alt="" />
            </div>
          </div>
        </div>
        {/* main section */}
        <div className="w-full">
          <div className="flex justify-center">
            <div className="bg-white w-[70%] rounded border-none shadow justify-between p-6 items-center flex">
              <h1 className="font-bold text-3xl font-poppins ">Our Products</h1>
              <nav className="flex space-x-5">
                <Link
                  onClick={() => showItems("All")}
                  className="font-medium hover:bg-[#FFEF00] cursor-pointer p-2 transition-all rounded text-[18px] z-10 font-poppins"
                >
                  All
                </Link>
                <Link
                  onClick={() => showItems("Shoes")}
                  className="font-medium text-[18px] z-10  hover:bg-[#FFEF00] p-2 transition-all rounded  font-poppins"
                >
                  Shoes
                </Link>
                <Link
                  onClick={() => showItems("Bags")}
                  className="font-medium text-[18px] z-10 hover:bg-[#FFEF00] p-2 transition-all rounded  font-poppins"
                >
                  Bags
                </Link>
                <Link
                  onClick={() => showItems("Phones")}
                  className="font-medium text-[18px] z-10 hover:bg-[#FFEF00] p-2 transition-all rounded  font-poppins"
                >
                  Phones
                </Link>
                <Link
                  onClick={() => showItems("Beauty")}
                  className="font-medium text-[18px] z-10 hover:bg-[#FFEF00] p-2 transition-all rounded  font-poppins"
                >
                  Beauty
                </Link>
              </nav>
            </div>
          </div>
        </div>
        {/* Product Cards */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 mt-[100px]  gap-[30px] container w-[70%] mx-auto">
          {items.map((item, index) => {
            return (
              <div
                className="shadow-md cardProduct cursor-pointer rounded"
                key={index}
              >
                <div className="relative">
                  <img className="w-full" src={item.imgUrl} alt="" />
                  <div className="flex justify-between bg-opacity-90 w-full bottom-0 p-1 bg-[#FFEF00] absolute items-center">
                    <p className="font-poppins font-medium">{item.cate}</p>
                    <div className="flex">
                      {[0, 1, 2, 3].map((item, index) => {
                        return (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill=""
                            color=""
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-star"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="bg-white bg-opacity-40 p-3">
                  <div className="p-2">
                    <p className="capitalize text-gray-700 font-bold text-xl mb-2">
                      {item.title}
                    </p>
                    <hr />
                    <div className="flex mt-2 border-t-gray justify-between ">
                      <p className="text-gray-600 font-medium text-xl font-poppins">
                        {item.brand}
                      </p>
                      <p className="text-yellow-400 text-xl font-medium">
                        {item.price}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryShowCase;
