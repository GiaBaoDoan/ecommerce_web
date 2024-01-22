import React from "react";
const ShopCategory = ({
  filterCate,
  setItem,
  selectedCategory,
  menuItems,
  setProducts,
}) => {
  return (
    <div className="mt-5">
      <div>
        <p className="text-xl font-medium">All Categories</p>
      </div>
      <div className="mt-3 space-y-3">
        <button
        onClick={() => filterCate('All')}
          className={`bg-white hover:bg-yellow-300 hover:text-white transition-all  p-3 mr-4 rounded shadow-md  inline-block ${
            selectedCategory === "All" ? "bg-yellow-300 text-white" : ""
          }`}
        >
          All
        </button>
        {menuItems.map((item, index) => {
          return (
            <button
              onClick={() => filterCate(item)}
              key={index}
              className={`bg-white hover:bg-yellow-300 hover:text-white transition-all  p-3 mr-4 rounded shadow-md  inline-block ${
                selectedCategory === item ? "bg-yellow-300 text-white" : ""
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ShopCategory;
