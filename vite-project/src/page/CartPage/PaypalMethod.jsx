import React, { useState } from "react";

const PaypalMethod = () => {
  const [focus, setFocus] = useState([]);
  const handelFocus = (e, index) => {
    const newFocus = [...focus];
    newFocus[index].value = e.target.value;
    setFocus(newFocus);
  };
  return (
    <div className="font-poppins p-5">
      <h3 className="font-bold text-xl text-center mt-5">
        Paypal Account Infor{" "}
      </h3>
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
                Enter Your Email
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
                Name
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
                Other infor
              </label>
            </div>
          </div>
        </form>
        <div className="mt-10">
          <button className="bg-green-600 p-2 pt-4 text-white font-medium rounded-full">
            Order
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

export default PaypalMethod;
