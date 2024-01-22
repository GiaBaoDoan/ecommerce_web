import React from "react";
import Bg from "../../images/bg-img/07.jpg";
import "../../assets/css/Register.css";
const subTitle = "Save The Day";
const title = (
  <h2>
    Join on Day Free WorkShop for <br /> <b>Advance</b>{" "}
    <span className="text-yellow-400">Mastering</span> On Sales
  </h2>
);
const desc = "Limited Time Offer! Hurry Up ";
const Register = () => {
  return (
    <div className="pt-[50px] Register">
      <div className="font-poppins">
        {/* left content */}
        <div
          className="h-[500px]"
          style={{
            backgroundImage: `url(${Bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex justify-between p-20">
            <div className="flex justify-center w-[60%]  items-center">
              <div className="space-y-4">
                <span className="text-yellow-500 tracking-widest uppercase text-xl ">
                  {subTitle}
                </span>
                <div className="space-y-3">
                  <p className="text-4xl  font-medium text-white capitalize">
                    {title}
                  </p>
                  <p className="text-white tracking-widest text-xl">{desc}</p>
                </div>
              </div>
            </div>
            <div className="z-10">
              <form
                action=""
                className="w-[450px] p-10 bg-opacity-40 h-[500px] rounded"
              >
                <h1 className="text-center text-xl font-bold mb-10">
                  Register Now
                </h1>
                <div className="space-y-4">
                  <div className="">
                    <input
                      type="text"
                      name="username"
                      className="rounded p-3 w-full"
                      placeholder="Username"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className=" p-3 w-full"
                      name="emailrounded"
                      placeholder="Email"
                    />
                  </div>
                  <input
                    type="text"
                    className=" p-3 w-full"
                    name="phonerounded"
                    placeholder="Phone"
                  />
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-yellow-300 py-2 px-4 rounded font-bold  mt-4 "
                  >
                    Register Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* right content */}
      </div>
    </div>
  );
};

export default Register;
