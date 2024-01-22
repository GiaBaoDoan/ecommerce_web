import React from "react";
import image1 from "../../images/app/01.jpg";
import image2 from "../../images/app/02.jpg";
const btnText = "Sign up for free";
const title = "Learn Anytime, Annywhere";
const desc =
  "Take courses on your any device with our app & learn all about business what you want. Just download & install & start to learn";
const Application = () => {
  return (
    <div className="p-[80px] font-poppins">
      <div className="flex justify-center">
        <div className="flex-col justify-center space-y-5 items-center ">
          <div className="flex justify-center">
            <button class="border-[3px] transition-all hover:-translate-y-1  mt-10 text-xl py-2 px-4 font-medium rounded  hover:bg-[#FFEF00] font-poppins border-[#FFEF00]">
              {btnText}
            </button>
          </div>
          <p className="font-bold text-4xl text-center">{title}</p>
          <div className="flex justify-center">
            <p className="w-[60%] text-center text-gray-500 font-normal">
              {desc}
            </p>
          </div>
          <div className="flex justify-center space-x-4 !mt-10">
            <img src={image1} alt="" />
            <img src={image2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;
