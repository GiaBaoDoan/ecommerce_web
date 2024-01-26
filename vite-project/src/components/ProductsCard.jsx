import React from "react";
import "../assets/css/ProduuctCard.css";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";
const ProductsCard = ({ gridList, products }) => {
  return (
    <div className="mt-[20px] ProductCard">
      <div className="grid grid-cols-3 gap-[50px]">
        {products.map((item, index) => {
          return (
            <div className="p-3 shadow bg-white">
              <div className="">
                <div className="par cursor-pointer relative">
                  <img className="" src={item.img} alt="" />
                  <div className="overlay"></div>
                  <div className="icons ">
                    <div className="flex space-x-3">
                      <div className="bg-[#ff5243] p-2 rounded-full">
                        <Link to={`/shop/${item.id}`}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2.5"
                            stroke="currentColor"
                            color="white"
                            className="w-6 lucide h-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                            />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                          </svg>
                        </Link>
                      </div>
                      <div className="bg-[#ff5243] p-2 rounded-full">
                        <Link to={`/shop/${item.id}`}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            color="white"
                            className="lucide lucide-heart"
                          >
                            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                          </svg>
                        </Link>
                      </div>
                      <div className="bg-[#ff5243] p-2 rounded-full">
                        <Link to={`/shop/${item.id}`}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            color="white"
                            className="lucide lucide-shopping-cart"
                          >
                            <circle cx="8" cy="21" r="1" />
                            <circle cx="19" cy="21" r="1" />
                            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my-5">
                  <p className="text-center font-medium text-xl">{item.name}</p>
                  <div className="flex justify-center mt-2">
                    {[1, 2, 3, 4, 5].map((item, index) => {
                      return (
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="gold"
                            color="gold"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-star"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </div>
                      );
                    })}
                  </div>
                  <div className="text-center mt-2">
                    <span className="font-bold text-xl">${item.price}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsCard;
