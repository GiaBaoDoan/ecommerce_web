import React, { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";
import { Modal } from "antd";
import CheckOutPage from "./CheckOutPage";
const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCartItems);
  }, []);
  const handelQuanlity = (val, index) => {
    if (val == "+") {
      cartItems[index].quantity += 1;
    } else {
      if (cartItems[index].quantity > 1) {
        cartItems[index].quantity -= 1;
      }
    }
    setCartItems([...cartItems]);
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };
  const handelRemoveItem = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
    localStorage.setItem("cart", JSON.stringify(newCartItems));
  };
  return (
    <div className="font-poppins">
      <PageHeader title={"Home"} curPage={"CartPage"} />
      {/* list product in cart */}
      <div className="p-[100px] w-[90%] mx-auto">
        <div className="p-4">
          <table className="w-full ">
            <thead className="bg-orange-500  text-left text-white w-full">
              <tr className="">
                <th className="px-3 py-5">Product</th>
                <th className="px-3 py-5">Price</th>
                <th className="px-3 py-5">Quanity</th>
                <th className="px-3 py-5">Total</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody className="bg-white shadow border-spacing-2">
              {cartItems.map((item, index) => {
                return (
                  <tr className="text-left border-b ">
                    <td className="flex items-center">
                      <img className="w-[100px] p-2" src={item.img} alt="" />
                      <span className="ml-5 text-xl font-bold">
                        {item.name}
                      </span>
                    </td>
                    <td>${item.price}</td>
                    <td>
                      <div className="flex items-center">
                        <span
                          onClick={() => handelQuanlity("-", index)}
                          className="w-10 h-10 flex justify-center items-center cursor-pointer hover:bg-[#ff5243] transition-all hover:text-white border-slate-100 border"
                        >
                          -
                        </span>
                        <div className="w-10 h-10 flex justify-center items-center cursor-pointer border-slate-100 border">
                          <input
                            onChange={(e) => {
                              const inputValue = e.target.value;
                              const parsedValue = parseInt(inputValue, 10);
                              const newValue = isNaN(parsedValue)
                                ? null
                                : parsedValue;
                              setQuanlity(newValue);
                            }}
                            value={item.quantity}
                            className="w-full outline-none h-[100%] text-center"
                          />
                        </div>
                        <span
                          onClick={() => handelQuanlity("+", index)}
                          className="w-10 h-10 flex justify-center items-center cursor-pointer hover:bg-[#ff5243] transition-all hover:text-white border-slate-100 border"
                        >
                          +
                        </span>
                      </div>
                    </td>
                    <td>${item.quantity * item.price} </td>
                    <td onClick={() => handelRemoveItem(index)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1"
                        color="red"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-trash-2"
                      >
                        <path d="M3 6h18" />
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                        <line x1="10" x2="10" y1="11" y2="17" />
                        <line x1="14" x2="14" y1="11" y2="17" />
                      </svg>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {/* add some features */}
        <div className="p-4">
          <div className=" border-slate-100 border shadow p-4">
            <div className="grid grid-cols-2 gap-6 mt-6 ">
              <div>
                <div>
                  <input
                    type="text"
                    placeholder="Coupon code..."
                    className="border outline-none p-2"
                  />
                  <button className="bg-orange-600 border-orange-600 border font-medium px-5 py-2 text-white">
                    Apply Coupon
                  </button>
                </div>
                <div className="mt-10 space-y-5">
                  <h3 className="text-3xl font-bold">Caculate Shipping</h3>
                  <div className="space-y-5">
                    <div className="flex items-center">
                      <select
                        style={{ appearance: "none" }}
                        className="w-full border p-2 text-gray-500 outline-none "
                        name=""
                        id=""
                      >
                        <option value="uk">New York</option>
                        <option value="us">London</option>
                        <option value="bd">Bangladesh</option>
                        <option value="pak">Paskistan</option>
                        <option value="ind">India</option>
                        <option value="np">Nepal</option>
                      </select>
                      <div className="bg-orange-500 h-full border border-orange-500 p-2 text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-chevron-down"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex justify-between space-x-5">
                      <div className="flex items-center basis-1/2">
                        <select
                          style={{ appearance: "none" }}
                          className="w-full border p-2 text-gray-500 outline-none "
                          name=""
                          id=""
                        >
                          <option value="uk">New York</option>
                          <option value="us">London</option>
                          <option value="bd">Bangladesh</option>
                          <option value="pak">Paskistan</option>
                          <option value="ind">India</option>
                          <option value="np">Nepal</option>
                        </select>
                        <div className="bg-orange-500 h-full border border-orange-500 p-2 text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-chevron-down"
                          >
                            <path d="m6 9 6 6 6-6" />
                          </svg>
                        </div>
                      </div>
                      <div className="basis-1/2">
                        <input
                          type="text"
                          placeholder="PostCode/ZIP"
                          className="border w-full p-2 outline-none"
                        />
                      </div>
                    </div>
                    <div>
                      <button className="bg-orange-500 rounded mt-5 py-2 px-5 text-white">
                        Update Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-around">
                  <button className=" px-5 py-2 hover:bg-black hover:text-white transition-all border rounded border-slate-100 shadow">
                    Update Cart
                  </button>
                  <button
                    onClick={showModal}
                    className="bg-blue-500 px-5 py-2  text-white rounded"
                  >
                    Proccest to checked
                  </button>
                </div>
                <div className="mt-10">
                  <h3 className="text-3xl font-bold mb-5">Caculate Shipping</h3>
                  <div className="">
                    <div className="space-y-5">
                      <div className="border w-full outline-none p-2 flex justify-between">
                        <p className="text-gray-500">Cart Subtotal</p>
                        <span className="text-orange-500 font-medium ">
                          $
                          {cartItems.reduce((total, item) => {
                            return (total += item.price * item.quantity);
                          }, 0)}
                        </span>
                      </div>
                      <div className="border w-full outline-none p-2 flex justify-between">
                        <p className="text-gray-500">Shipping and Handeling</p>
                        <span className="text-orange-500 font-medium ">
                          Free shipping
                        </span>
                      </div>
                      <div className="border w-full outline-none p-2 flex justify-between">
                        <p className="text-gray-500">Order Total</p>
                        <span className="text-orange-500 font-medium ">
                          {" "}
                          $
                          {cartItems
                            .reduce((total, item) => {
                              return (total += item.price * item.quantity);
                            }, 0)
                            .toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* checkout payment method */}
      <CheckOutPage
        isModalOpen={isModalOpen}
        handleCancel={handleCancel}
        handleOk={handleOk}
      />
    </div>
  );
};

export default CartPage;
