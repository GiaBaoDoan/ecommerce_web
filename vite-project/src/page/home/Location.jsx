import React from "react";
import bg from "../../images/clients/bg.png";
import { NavLink, Link } from "react-router-dom";
import "../../assets/sass/style.scss";
const title = "More Then 60,000 Customers";
import userImg from "../../images/clients/avater.jpg";
import "../../assets/css/Location.css";
import { Button, Popover, Space } from "antd";

const desc =
  "Buy products on your any device with our app & enjoy your time what you want. Just download & install & start to shopping";
const clientsList = [
  {
    imgUrl: userImg,
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
  {
    imgUrl: userImg,
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
  {
    imgUrl: userImg,
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
  {
    imgUrl: userImg,
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
  {
    imgUrl: userImg,
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
  {
    imgUrl: userImg,
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
  {
    imgUrl: userImg,
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
];
const Location = () => {
  return (
    <div className="font-poppins py-[100px]">
      <div className="flex items-center justify-center">
        <div className="w-[40%]">
          <p className="text-4xl text-center font-bold">{title}</p>
          <p className="text-gray-500  text-[20px] mt-2 text-center">{desc}</p>
        </div>
      </div>
      {/* main */}
      <div
        className="h-[400px] relative w-full mt-[50px]"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "75% 100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="font-poppins">
          {clientsList.map((item, index) => {
            return (
              <div>
                <Link to="/sign-up"></Link>
                <Space wrap>
                  <Popover
                    content={
                      <div className="flex items-center space-x-2">
                        <img
                          src={item.imgUrl}
                          className="rounded-full"
                          alt=""
                        />
                        <p className="capitalize font-medium">{item.text}</p>
                      </div>
                    }
                    trigger="hover"
                  >
                    <div
                      className={`ntn-child-${index} cursor-pointer rounded-full w-[20px] h-[20px] absolute`}
                    >
                      {/* <img className="rounded-full" src={item.imgUrl} alt="" /> */}
                    </div>
                  </Popover>
                </Space>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Location;
