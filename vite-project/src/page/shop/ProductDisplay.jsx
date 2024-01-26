import React, { useState } from "react";
import "../../assets/css/CartQuanlity.css";
import { useNavigate } from "react-router-dom";
const ProductDisplay = ({ item }) => {
  const navigate = useNavigate();
  const { name, id, price, seller, ratingsCount, img, quantity, category } =
    item;
  const [num, setQuanlity] = useState(quantity);
  const [cupon, setCupon] = useState("");
  const [size, setSize] = useState("Select Size");
  const [color, setColor] = useState("Select Color");
  const handelOnChange = (e) => {
    const { name, value } = e.target;
    setSize(value);
  };
  const handelQuanlity = (val) => {
    if (val === "+") {
      setQuanlity(num + 1);
    } else {
      if (num > 1) {
        setQuanlity(num - 1);
      }
    }
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    const products = {
      id,
      img,
      name,
      price,
      quantity: num,
      size,
      color,
      cupon,
    };
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingCartIndex = existingCart.findIndex((item) => item.id == id);
    if (existingCartIndex !== -1) {
      existingCart[existingCartIndex].quantity += 1;
    } else {
      existingCart.push(products);
    }
    localStorage.setItem("cart", JSON.stringify(existingCart));
    navigate("/cart-page");
  };
  return (
    <div>
      <h4 className="text-2xl font-bold">{name}</h4>
      <div className="flex mt-3">
        <div className="flex">
          {[1, 2, 3, 4, 5].map((item, index) => {
            return (
              <svg
                color="gold"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="gold"
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
        <span className="text-gray-500">({ratingsCount} review)</span>
      </div>
      <div className="mt-3 space-y-2">
        <p className="text-2xl font-bold">${price}</p>
        <p className="text-2xl font-light">{category}</p>
        <p className="opacity-80 text-[18px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
          deleniti, minima consectetur
        </p>
      </div>
      {/* selected components */}
      <div className="mt-5">
        <form action="" className="">
          <div className="flex justify-between">
            <div className="p-3 bg-white shadow rounded basis-[45%] cursor-pointer ">
              <select
                onChange={handelOnChange}
                value={size}
                className="w-full pr-3 outline-none cursor-pointer "
              >
                <option>Select Size</option>
                <option value="SM">SM</option>
                <option value="MD">MD</option>
                <option value="LG">LG</option>
                <option value="XL">XL</option>
                <option value="XXL">XXl</option>
              </select>
            </div>
            <div className="p-3 bg-white shadow rounded basis-[45%] cursor-pointer ">
              <select
                name=""
                onChange={(e) => setColor(e.target.value)}
                className="w-full pr-3  cursor-pointer   outline-none"
                id=""
              >
                <option>Select Color</option>
                <option value="Pink">Pink</option>
                <option value="Ash">Ash</option>
                <option value="Red">Red</option>
                <option value="White">White</option>
                <option value="Blue">Blue</option>
                <option value="Black">Black</option>
              </select>
            </div>
          </div>
          <div className="flex items-center mt-4 space-x-4">
            <div className="flex justify-center cart">
              <div className="flex items-center">
                <span
                  onClick={() => handelQuanlity("-")}
                  className="w-10 h-10 flex justify-center items-center cursor-pointer hover:bg-[#ff5243] transition-all hover:text-white border-slate-100 border"
                >
                  -
                </span>
                <div className="w-10 h-10  flex justify-center items-center cursor-pointer border-slate-100 border">
                  <input
                    onChange={(e) => {
                      const inputValue = e.target.value;
                      const parsedValue = parseInt(inputValue, 10);
                      const newValue = isNaN(parsedValue) ? null : parsedValue;
                      setQuanlity(newValue);
                    }}
                    value={num}
                    className="w-full outline-none h-[100%]"
                  />
                </div>
                <span
                  onClick={() => handelQuanlity("+")}
                  className="w-10 h-10 flex justify-center items-center cursor-pointer hover:bg-[#ff5243] transition-all hover:text-white border-slate-100 border"
                >
                  +
                </span>
              </div>
            </div>
            {/* cart discount code */}
            <div className="p-2 border-slate-100 shadow border w-full">
              <input
                onChange={() => setCupon(e.target.value)}
                type="text"
                className="h-full w-full outline-none"
                placeholder="Enter Discount code"
              />
            </div>
          </div>
          <div className="flex justify-between mt-5">
            <button className="bg-orange-600 hover:-translate-y-1 transition-all py-2 px-4 font-medium text-white rounded">
              Add to Cart
            </button>
            <button
              onClick={(e) => handelSubmit(e)}
              className="bg-blue-600 py-2 px-4 hover:-translate-y-1 transition-all font-medium text-white rounded"
            >
              Check Out
            </button>
          </div>
        </form>
      </div>
      {/* cart quanlity compoents */}
    </div>
  );
};

export default ProductDisplay;
