import React from "react";
const subTitle = "Choose  Any  Products";
const title = "Buy Everything with Us";
const btnText = "Get Started Now";
import "../../assets/css/HomeCategory.css";
import image1 from "../../images/category/01.jpg";
import image2 from "../../images/category/02.jpg";
import image3 from "../../images/category/03.jpg";
import image4 from "../../images/category/04.jpg";
import image5 from "../../images/category/05.jpg";
import image6 from "../../images/category/06.jpg";
const categoryList = [
  {
    imgUrl: image1,
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "DSLR Camera",
  },
  {
    imgUrl: image2,
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Shoes",
  },
  {
    imgUrl: image3,
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Photography",
  },
  {
    imgUrl: image4,
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Formal Dress",
  },
  {
    imgUrl: image5,
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Colorful Bags",
  },
  {
    imgUrl: image6,
    imgAlt: "category rajibraj91 rajibraj",
    iconName: "icofont-brand-windows",
    title: "Home Decor",
  },
];
const HomeCategory = () => {
  return (
    <div className="p-20">
      <div className="flex font-poppins mb-10 justify-center">
        {/* section header */}
        <div>
          <p className="text-[#FFEF00] text-xl tracking-[5px] mb-5 uppercase text-center">
            {subTitle}
          </p>
          <h2 className="text-5xl font-medium  text-center ">{title}</h2>
        </div>
        {/* section card */}
      </div>
      <div className="grid grid-cols-3 container mx-auto gap-[30px]">
        {categoryList.map((item, index) => {
          return (
            <div className="relative cursor-pointer transition-all hover:-translate-y-2">
              <div className="relative">
                <img className="" src={item.imgUrl} alt="" />
                <div className="absolute bottom-[20px] left-2">
                  <div className="flex items-center card  space-x-3">
                    <div className="bg-[#FFEF00] z-10 p-3 rounded-full">
                      <img
                        className="w-[20px] h-[20px]"
                        src="https://static-00.iconduck.com/assets.00/brand-windows-icon-512x512-altl4s6j.png"
                        alt=""
                      />
                    </div>
                    <p className="text-white  tracking-wider font-medium font-poppins uppercase z-20">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute top-0 left-0 w-full h-full opacity-50 bg-black"></div>
            </div>
          );
        })}
      </div>
      {/* button */}
      <div className="flex items-center justify-center">
        <button className="border-[3px] mt-10 text-xl py-2 px-4 font-medium rounded hover:text-white hover:bg-[#FFEF00] font-poppins border-[#FFEF00]">
          Get Started Now
        </button>
      </div>
    </div>
  );
};

export default HomeCategory;
