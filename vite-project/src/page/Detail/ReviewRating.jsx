import React, { useState } from "react";
import img1 from "../../images/shop/01.jpg";
import { useNavigate } from "react-router-dom";
const ReviewRating = ({ ReviewList }) => {
  const [reviews, setReviews] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="w-full border transition-all border-slate-100 mt-10 shadow">
      <div className="space-x-3">
        <button
          onClick={() => setReviews(false)}
          className={`${
            reviews ? "bg-orange-600" : "bg-blue-950"
          } font-bold text-white py-3 px-6`}
        >
          Desciptions
        </button>
        <button
          onClick={() => {
            setReviews(true);
          }}
          className={`${
            !reviews ? "bg-orange-600" : "bg-blue-950"
          } font-bold text-white  py-3 px-6`}
        >
          Reviews
        </button>
      </div>
      {reviews ? (
        <div>
          <div className="">
            {ReviewList.map((item, index) => {
              return (
                <div
                  className={`flex items-center space-x-3 w-full px-4 py-7  ${
                    index !== ReviewList.length - 1
                      ? "border-b border-black-100"
                      : ""
                  } `}
                >
                  <div className="">
                    <img src={item.imgUrl} className="w-[120px]" alt="" />
                  </div>
                  <div>
                    <div className="flex space-x-5">
                      <p className="font-medium">{item.name}</p>
                      <p className="text-gray-500">{item.date}</p>
                    </div>
                    <div className="mt-2">
                      <p className="text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="p-4">
            <h4 className="font-bold text-xl">Add a Reviews</h4>
            <div className="flex space-x-2 my-3 items-center">
              <div className="bg-orange-500 h-1 w-[100px] rounded"></div>
              {[1, 2, 3].map((item, index) => {
                return (
                  <div className="bg-orange-500 h-[4px] w-[6px] rounded"></div>
                );
              })}
            </div>
            <form action="">
              <div className="flex mt-3 space-x-4 items-center ">
                <input
                  type="text"
                  className="border p-2  outline-none"
                  placeholder="Full name*"
                />
                <input
                  type="text"
                  className="border p-2  outline-none"
                  placeholder="Your email*"
                />
                <div className="flex space-x-2">
                  <p className="text-gray-500 text-[18px]">Your rating:</p>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((item, index) => {
                      return (
                        <div className="">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            color="gold"
                            viewBox="0 0 24 24"
                            fill="gold"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-star"
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  placeholder="Type Here Message "
                  className="w-full p-2 mt-5 border outline-none"
                  rows="10"
                ></textarea>
              </div>
              <div>
                <button className="bg-orange-500 p-3 my-5 text-white rounded font-medium hover:-translate-y-1 transition-all">
                  {" "}
                  Submit Reviews
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="px-4 py-7">
          <p className="text-gray-500 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
            libero sint tenetur harum sequi officiis quia alias commodi magnam
            praesentium eos perferendis ut eveniet, nobis ea facere explicabo!
            Ullam, omnis? Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Culpa libero sint tenetur harum sequi officiis quia alias
            commodi magnam praesentium eos perferendis ut eveniet, nobis ea
            facere explicabo! Ullam, omnis? Ullam, omnis? Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Culpa libero sint tenetur harum
            sequi officiis quia alias commodi magnam praesentium eos perferendis
            ut eveniet, nobis ea facere explicabo! Ullam, omnis?
          </p>
          <div className="flex mt-10 justify-between">
            <div className="space-y-4">
              <div className="flex flex-row-reverse justify-end  items-center">
                <p className="ml-3 w-[80%] text-gray-500">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  color="gold"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-star"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <div className="flex flex-row-reverse justify-end items-center">
                <p className="ml-3 w-[80%] text-gray-500">
                  Pariatur molestias consequuntur earum atque obcaecati! sit
                  amet consectetur adipisicing elit.
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  color="gold"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-star"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <div className="flex flex-row-reverse justify-end items-center">
                <p className="ml-3 w-[80%] text-gray-500">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Vitae, iure.
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  color="gold"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-star"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <div className="flex flex-row-reverse justify-end items-center">
                <p className="ml-3 w-[80%] text-gray-500">
                  Pariatur molestias consequuntur earum atque obcaecati!
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  color="gold"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-star"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <div className="flex flex-row-reverse justify-end items-center">
                <p className="ml-3 w-[80%] text-gray-500">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Vitae, iure.
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  color="gold"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-star"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <div className="flex flex-row-reverse justify-end items-center">
                <p className="ml-3 w-[80%] text-gray-500">
                  Pariatur molestias consequuntur earum atque obcaecati!
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  color="gold"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-star"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
            </div>
            <img src={img1} alt="" />
          </div>
          <div className="text-gray-500 w-full mt-10">
            Ullam, omnis? Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Culpa libero sint tenetur harum sequi officiis quia alias
            commodi magnam praesentium eos perferendis ut eveniet, nobis ea
            sequi officiis quia alias commodi magnam praesentium eos perferendis
            ut eveniet, nobis ea facere explicabo! Ullam, omnis?
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewRating;
