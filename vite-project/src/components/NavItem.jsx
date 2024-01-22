import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo/logo.png";
import "../assets/css/Header.css";

const NavItem = () => {
  const [openNav, setOpenNav] = useState(false);
  const [headerTop, setHeaderTop] = useState(false);
  const [toogle, setToolgle] = useState(false);
  window.addEventListener("scroll", () => {
    if (scrollY > 300) {
      setToolgle(true);
    } else {
      setToolgle(false);
    }
  });
  return (
    // header top start
    <div className="Header">
      <header
        style={{
          background: `${toogle ? "white" : ""}`,
        }}
        className={`py-8  z-20 w-full transition-all !bg-opacity-25 absolute font-poppins ${
          toogle && "shadow-md"
        }`}
      >
        <div className="container mx-auto lg:hidden">
          {headerTop && (
            <div className="header-top-area mb-4 mt-10 ">
              <div className="flex justify-between items-center">
                <div className="hover:-translate-y-1 transition-all">
                  <button className="bg-yellow-300  rounded p-3 font-bold">
                    Create Account
                  </button>
                </div>
                <div>
                  <button className="text-gray-500 text-xl">Log in</button>
                </div>
              </div>
            </div>
          )}

          <hr />
        </div>
        <div className="">
          <div className="container mx-auto justify-between items-center flex">
            {/* logo */}
            <div className="flex-1">
              <img src={logo} alt="" />
            </div>
            {/* meanu area */}
            <div className="hidden lg:block">
              <div className="flex justify-between items-center">
                <ul className="flex space-x-10">
                  <li className="uppercase transition-all duration-400 relative hover:text-[#FFEF00] font-medium">
                    <Link to={"/"}>Home</Link>
                    <div className="w-0 h-[2px] absolute bottom-0 bg-[#FFEF00] left-0"></div>
                  </li>
                  <li className="uppercase transition-all duration-400 relative hover:text-[#FFEF00] font-medium">
                    <Link to={"/Shop"}>Shop</Link>
                    <div className="w-0 h-[2px] absolute bottom-0 bg-[#FFEF00] left-0"></div>
                  </li>
                  <li className="uppercase transition-all duration-400 relative hover:text-[#FFEF00] font-medium">
                    <Link to={"/Blog"}>Blog</Link>
                    <div className="w-0 h-[2px] absolute bottom-0 bg-[#FFEF00] left-0"></div>
                  </li>
                  <li className="uppercase transition-all duration-400 relative hover:text-[#FFEF00] font-medium">
                    <Link to={"/About"}>About</Link>
                    <div className="w-0 h-[2px] absolute bottom-0 bg-[#FFEF00] left-0"></div>
                  </li>
                  <li className="uppercase transition-all duration-400 relative hover:text-[#FFEF00] font-medium">
                    <Link to={"/Contact"}>Contact</Link>
                    <div className="w-0 h-[2px] absolute bottom-0 bg-[#FFEF00] left-0"></div>
                  </li>
                </ul>
                {/* auth button */}
                <div className="ml-[50px] space-x-7 flex items-center">
                  <div className="hover:-translate-y-1 transition-all">
                    <button className="bg-yellow-300  rounded p-3 font-bold">
                      Create Account
                    </button>
                  </div>
                  <div>
                    <button className="text-gray-500 text-xl">Log in</button>
                  </div>
                </div>
              </div>
            </div>
            {/* toogle bar */}
            <div className="flex items-center space-x-3">
              {!openNav ? (
                <div
                  onClick={() => setOpenNav(true)}
                  className="lg:hidden cursor-pointer max-w-md:block"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    color="red"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-align-justify"
                  >
                    <line x1="3" x2="21" y1="6" y2="6" />
                    <line x1="3" x2="21" y1="12" y2="12" />
                    <line x1="3" x2="21" y1="18" y2="18" />
                  </svg>
                </div>
              ) : (
                <div
                  onClick={() => setOpenNav(false)}
                  className="lg:hidden cursor-pointer max-w-md:block"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    color="red"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-x"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </div>
              )}
              <div
                onClick={() => setHeaderTop(!headerTop)}
                className="lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  color="red"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-info"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
            </div>
          </div>
          <div
            className={`container  mx-auto lg:hidden mt-4 h-[0px] ${
              openNav ? "" : "hidden"
            }`}
          >
            <div className="bg-yellow-300 p-3 font-bold border-b-2 border-black-200 ">
              <span className="">Home</span>
            </div>
            <div className="bg-yellow-300 p-3 font-bold border-b-2 border-black-200">
              <span className="">Shop</span>
            </div>
            <div className="bg-yellow-300 p-3 font-bold border-b-2 border-black-200">
              <span className="">Blog</span>
            </div>
            <div className="bg-yellow-300 p-3 font-bold border-b-2 border-black-200">
              <span className="">About</span>
            </div>
            <div className="bg-yellow-300 p-3 font-bold border-b-2 border-black-200">
              <span className="">Contact</span>
            </div>
          </div>
        </div>
      </header>
      <header
        className={`z-20 w-full translate-y-[-100px] bg-white transition-all fixed font-poppins ${
          toogle && "shadow-md translate-y-[0px] py-8"
        }`}
      >
        <div className="container mx-auto lg:hidden">
          {headerTop && (
            <div className="header-top-area mb-4 mt-10 ">
              <div className="flex justify-between items-center">
                <div className="hover:-translate-y-1 transition-all">
                  <button className="bg-yellow-300  rounded p-3 font-bold">
                    Create Account
                  </button>
                </div>
                <div>
                  <button className="text-gray-500 text-xl">Log in</button>
                </div>
              </div>
            </div>
          )}

          <hr />
        </div>
        <div className="">
          <div className="container mx-auto justify-between items-center flex">
            {/* logo */}
            <div className="flex-1">
              <img src={logo} alt="" />
            </div>
            {/* meanu area */}
            <div className="hidden lg:block">
              <div className="flex justify-between items-center">
                <ul className="flex space-x-10">
                  <li className="uppercase transition-all duration-400 relative hover:text-[#FFEF00] font-medium">
                    <Link to={"/"}>Home</Link>
                    <div className="w-0 h-[2px] absolute bottom-0 bg-[#FFEF00] left-0"></div>
                  </li>
                  <li className="uppercase transition-all duration-400 relative hover:text-[#FFEF00] font-medium">
                    <Link to={"/Shop"}>Shop</Link>
                    <div className="w-0 h-[2px] absolute bottom-0 bg-[#FFEF00] left-0"></div>
                  </li>
                  <li className="uppercase transition-all duration-400 relative hover:text-[#FFEF00] font-medium">
                    <Link to={"/Blog"}>Blog</Link>
                    <div className="w-0 h-[2px] absolute bottom-0 bg-[#FFEF00] left-0"></div>
                  </li>
                  <li className="uppercase transition-all duration-400 relative hover:text-[#FFEF00] font-medium">
                    <Link to={"/About"}>About</Link>
                    <div className="w-0 h-[2px] absolute bottom-0 bg-[#FFEF00] left-0"></div>
                  </li>
                  <li className="uppercase transition-all duration-400 relative hover:text-[#FFEF00] font-medium">
                    <Link to={"/Contact"}>Contact</Link>
                    <div className="w-0 h-[2px] absolute bottom-0 bg-[#FFEF00] left-0"></div>
                  </li>
                </ul>
                {/* auth button */}
                <div className="ml-[50px] space-x-7 flex items-center">
                  <div className="hover:-translate-y-1 transition-all">
                    <button className="bg-yellow-300  rounded p-3 font-bold">
                      Create Account
                    </button>
                  </div>
                  <div>
                    <button className="text-gray-500 text-xl">Log in</button>
                  </div>
                </div>
              </div>
            </div>
            {/* toogle bar */}
            <div className="flex items-center space-x-3">
              {!openNav ? (
                <div
                  onClick={() => setOpenNav(true)}
                  className="lg:hidden cursor-pointer max-w-md:block"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    color="red"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-align-justify"
                  >
                    <line x1="3" x2="21" y1="6" y2="6" />
                    <line x1="3" x2="21" y1="12" y2="12" />
                    <line x1="3" x2="21" y1="18" y2="18" />
                  </svg>
                </div>
              ) : (
                <div
                  onClick={() => setOpenNav(false)}
                  className="lg:hidden cursor-pointer max-w-md:block"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    color="red"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-x"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </div>
              )}
              <div
                onClick={() => setHeaderTop(!headerTop)}
                className="lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  color="red"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-info"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
            </div>
          </div>
          <div
            className={`container  mx-auto lg:hidden mt-4 h-[0px] ${
              openNav ? "" : "hidden"
            }`}
          >
            <div className="bg-yellow-300 p-3 font-bold border-b-2 border-black-200 ">
              <span className="">Home</span>
            </div>
            <div className="bg-yellow-300 p-3 font-bold border-b-2 border-black-200">
              <span className="">Shop</span>
            </div>
            <div className="bg-yellow-300 p-3 font-bold border-b-2 border-black-200">
              <span className="">Blog</span>
            </div>
            <div className="bg-yellow-300 p-3 font-bold border-b-2 border-black-200">
              <span className="">About</span>
            </div>
            <div className="bg-yellow-300 p-3 font-bold border-b-2 border-black-200">
              <span className="">Contact</span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavItem;
