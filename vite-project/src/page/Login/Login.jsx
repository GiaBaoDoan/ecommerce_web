import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../assets/css/Animation.css";
import { login } from "../../fetch/fetchApi";
const Login = () => {
  const [infor, setInfor] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handelOnchange = (e) => {
    const { name, value } = e.target;
    setInfor({
      ...infor,
      [name]: value,
    });
  };
  const handelSubmit = async (e) => {
    e.preventDefault();
    const res = await login(infor);
    if (res) {
      navigate("/");
    }
  };
  return (
    <div className="bg-[#fcf8f5] h-[100vh]">
      <div className="font-poppins h-full">
        <div className="flex justify-center h-full items-center">
          <form
            action=""
            className="bg-white p-[70px] rounded shadow-md w-[600px]"
          >
            <h1 className="text-center text-2xl font-bold">Login</h1>
            <div className="space-y-3 mt-5">
              <input
                onChange={handelOnchange}
                name="email"
                type="text"
                className="outline-none border rounded p-3 w-full"
                placeholder="Email Address*"
              />
              <input
                onChange={handelOnchange}
                name="password"
                type="password"
                className="outline-none border p-3 rounded w-full"
                placeholder="Password*"
              />
            </div>
            <div className="mt-5 flex justify-between">
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 cursor-pointer" />
                <span className="opacity-80">Remember me</span>
              </div>
              <div>
                <p className="underline opacity-80 cursor-pointer">
                  Forgot password?
                </p>
              </div>
            </div>
            <div className="bg-orange-600 flex rounded justify-center mt-5 p-2">
              <button
                className="text-white font-medium"
                onClick={(e) => handelSubmit(e)}
              >
                Login
              </button>
            </div>
            <div className="mt-5">
              <div className="flex flex-col items-center space-y-5">
                <p className="text-gray-500">
                  Don't have any account?{" "}
                  <Link to={"/SignUp"} className="underline">
                    Sign Up
                  </Link>{" "}
                </p>
                <div className="relative wrap">
                  <div className="bg-orange-600 w-12 h-12 rounded-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-15"></div>
                  <div className="round">
                    <div className="bg-orange-600 w-14 h-14 round1 rounded-full opacity-15"></div>
                  </div>
                  <div className="bg-orange-500 z-30 relative w-10 h-10 flex justify-center items-center   rounded-full">
                    <span className="text-white font-medium ">OR</span>
                  </div>
                </div>
                <p className="font-bold text-xl">Login With Social Media</p>
              </div>
            </div>
            <div className="flex justify-center items-center mt-5">
              <div className="flex space-x-4 items-center">
                <div className="flex justify-center items-center rounded-full">
                  <svg
                    className="w-[42px]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#316FF6"
                    viewBox="0 0 512 512"
                  >
                    <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                  </svg>
                </div>
                <div className="bg-[#1DA1F2] flex justify-center items-center p-3 rounded-full">
                  <svg
                    className="w-[18px]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 512 512"
                  >
                    <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
                  </svg>
                </div>
                <div className="bg-[#fa7e1e] flex justify-center items-center p-3 rounded-full">
                  <svg
                    className="w-[18px]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 448 512"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </div>
                <div className="bg-[#0a66c2] flex justify-center items-center p-3 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[18px]"
                    fill="white"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                  </svg>
                </div>
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={40}
                    viewBox="0 0 512 512"
                    fill="orange"
                  >
                    <path d="M503.5 204.6L502.8 202.8L433.1 21C431.7 17.5 429.2 14.4 425.9 12.4C423.5 10.8 420.8 9.9 417.9 9.6C415 9.3 412.2 9.7 409.5 10.7C406.8 11.7 404.4 13.3 402.4 15.5C400.5 17.6 399.1 20.1 398.3 22.9L351.3 166.9H160.8L113.7 22.9C112.9 20.1 111.5 17.6 109.6 15.5C107.6 13.4 105.2 11.7 102.5 10.7C99.9 9.7 97 9.3 94.1 9.6C91.3 9.9 88.5 10.8 86.1 12.4C82.8 14.4 80.3 17.5 78.9 21L9.3 202.8L8.5 204.6C-1.5 230.8-2.7 259.6 5 286.6C12.8 313.5 29.1 337.3 51.5 354.2L51.7 354.4L52.3 354.8L158.3 434.3L210.9 474L242.9 498.2C246.6 500.1 251.2 502.5 255.9 502.5C260.6 502.5 265.2 500.1 268.9 498.2L300.9 474L353.5 434.3L460.2 354.4L460.5 354.1C482.9 337.2 499.2 313.5 506.1 286.6C514.7 259.6 513.5 230.8 503.5 204.6z" />
                  </svg>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
