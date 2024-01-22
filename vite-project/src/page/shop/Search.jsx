import React, { useState } from "react";

const Search = ({ products, gridList }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const filterProducts = products.filter((prd) =>
    prd.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="p-6 bg-white rounded w-full shadow-md">
      <div className="bg-gray-200 py-3  px-4 w-full">
        <div className="flex justify-between">
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            placeholder="Search..."
            className="bg-gray-200 outline-none"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            color=""
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-search"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </div>
      </div>
      {/* results of searching */}
      <div className="mt-5">
        <form action="">
          <div
            className={`flex ${
              searchTerm ? "h-[300px]" : "h-auto"
            } flex-wrap gap-x-3 gap-y-3 overflow-auto`}
          >
            {searchTerm &&
              filterProducts.map((item, index) => {
                return (
                  <div className="flex">
                    <img className="w-[82px] h-[82px]" src={item.img} alt="" />
                    <div className="flex flex-col py-1 ml-2">
                      <p className="font-light text-[18px]">{item.name}</p>
                      <span className="font-bold self-start">
                        ${item.price}
                      </span>
                    </div>
                  </div>
                );
              })}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
