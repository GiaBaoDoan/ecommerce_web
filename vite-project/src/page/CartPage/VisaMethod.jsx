import React, { useState } from "react";
import "../../assets/css/Modal.css";
const VisaMethod = () => {
  const [focus, setFocus] = useState([]);
  const handelFocus = (e, index) => {
    const newFocus = [...focus];
    newFocus[index].value = e.target.value;
    setFocus(newFocus);
  };
  return (
    <div className="Visa font-poppins p-5">
      <h3 className="font-bold text-xl text-center mt-5">Credit card</h3>
      <div className="space-y-7">
        <form className="">
          <div className="mt-10">
            <div className="relative">
              <input
                type="text"
                name="text"
                className="test border-b w-full outline-none"
                id="text"
              />
              <label
                className="absolute left-0 top-0 transition-all"
                htmlFor="text"
              >
                CardHolder Name
              </label>
            </div>
          </div>
          <div className="mt-10">
            <div className="relative">
              <input
                type="text"
                name="text"
                className="test border-b w-full outline-none"
                id="text"
              />
              <label
                className="absolute left-0 top-0 transition-all"
                htmlFor="text"
              >
                Card number
              </label>
            </div>
          </div>
          <div className="mt-10 flex justify-between">
            <div className="relative">
              <input
                type="text"
                name="text"
                className="test border-b w-full outline-none"
                id="text"
              />
              <label
                className="absolute left-0 top-0 transition-all"
                htmlFor="text"
              >
                Expiration Date
              </label>
            </div>
            <div className="relative">
              <input
                type="text"
                name="text"
                className="test border-b w-full outline-none"
                id="text"
              />
              <label
                className="absolute left-0 top-0 transition-all"
                htmlFor="text"
              >
                CVV
              </label>
            </div>
          </div>
        </form>
        <div className="mt-10">
          <button className="bg-green-600 p-2 pt-4 text-white font-medium rounded-full">
            Add card
          </button>
          <div>
            <p className="mt-5 text-center">
              <i>*Payment Disclamer</i> : in no envent shall payment or partital
              payment by Ownwer for any meterial or sevice
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaMethod;
