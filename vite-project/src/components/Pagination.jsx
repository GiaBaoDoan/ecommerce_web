import React, { useState } from "react";

const Pagination = ({ productsPerPage, totalProducts, paginate, curPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="flex justify-center items-center mt-[30px] space-x-10">
      <div
        onClick={() => {
          curPage > 1 && paginate(curPage - 1);
        }}
        className="bg-white w-10 h-10 flex justify-center items-center shadow-md rounded-full cursor-pointer transition-all hover:text-white hover:bg-[#ff5243]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-left"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </div>
      <div className="flex space-x-10">
        {pageNumbers.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => paginate(item)}
              className={`rounded-full cursor-pointer  hover:text-white transition-all hover:bg-yellow-300 ${
                curPage == index + 1 ? "bg-yellow-300 text-white" : ""
              } shadow-md w-10 h-10 flex items-center justify-center `}
            >
              <span>{item}</span>
            </li>
          );
        })}
      </div>

      <div
        onClick={() => {
          curPage < 7 && paginate(curPage + 1);
        }}
        className="bg-white w-10 h-10 flex justify-center items-center shadow-md rounded-full cursor-pointer transition-all hover:text-white hover:bg-[#ff5243]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-chevron-right"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </div>
    </div>
  );
};

export default Pagination;
