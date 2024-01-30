import React from "react";
import { useParams } from "react-router-dom";
import blogList from "../../data//utilis/blogdata";
import PageHeader from "../../components/PageHeader";
import PoppularPost from "../shop/PoppularPost";
import img1 from "../../images/blog/single/01.jpg";
import img2 from "../../images/blog/single/02.jpg";
import img3 from "../../images/blog/single/03.jpg";
import Tag from "../shop/Tag";
const SingleBlog = () => {
  const { id } = useParams();
  const filterId = blogList.filter((item) => item.id == id);
  const addressList = [
    {
      iconName: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
          color="black"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
          />
        </svg>
      ),
      text: "New York, USA.",
    },
    {
      iconName: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="white"
          stroke="currentColor"
          stroke-width="2"
          color="black"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-phone"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      text: "+880 123 456 789",
    },
    {
      iconName: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
          color="black"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
          />
        </svg>
      ),
      text: "info@shopcart.com",
    },
  ];
  return (
    <div className="font-poppins blog">
      <PageHeader title={"Home"} curPage={"Blog / Single Blog"} />
      <div className="bg-[#fcf8f5]">
        <div className="p-[100px]">
          <div className="container mx-auto">
            <div className="grid grid-cols-2">
              <div className="">
                {filterId?.map((item, index) => {
                  return (
                    <div className="mt-5 ">
                      <img className="w-full" src={item.imgUrl} alt="" />
                      <div className="bg-white shadow-md rounded p-6">
                        <p className="font-bold text-2xl">{item.title}</p>
                        <div className="flex space-x-4 mt-5">
                          <div className="flex space-x-1">
                            {"  "}
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
                              class="lucide lucide-book-user"
                            >
                              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                              <circle cx="12" cy="8" r="2" />
                              <path d="M15 13a3 3 0 1 0-6 0" />
                            </svg>
                            <p>Lavendor</p>
                          </div>
                          <div className="flex space-x-1">
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
                              class="lucide lucide-calendar-days"
                            >
                              <path d="M8 2v4" />
                              <path d="M16 2v4" />
                              <rect width="18" height="18" x="3" y="4" rx="2" />
                              <path d="M3 10h18" />
                              <path d="M8 14h.01" />
                              <path d="M12 14h.01" />
                              <path d="M16 14h.01" />
                              <path d="M8 18h.01" />
                              <path d="M12 18h.01" />
                              <path d="M16 18h.01" />
                            </svg>
                            <p>Jun 05,2022</p>
                          </div>
                          <div className="flex space-x-1">
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
                              class="lucide lucide-message-square-text"
                            >
                              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                              <path d="M13 8H7" />
                              <path d="M17 12H7" />
                            </svg>
                            <p>09 comments</p>
                          </div>
                        </div>
                        <div className="my-5 ">
                          <p className="text-gray-500">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Eligendi totam dolore, debitis error
                            voluptatem temporibus maxime nisi laboriosam
                            inventore vitae numquam a incidunt explicabo
                            perferendis officiis, excepturi quidem dolorum vel!
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Eligendi totam dolore, debitis error
                            voluptatem temporibus maxime nisi laboriosam
                            inventore vitae numquam a incidunt explicabo
                            perferendis officiis, excepturi quidem dolorum vel!
                          </p>
                          <p className="bg-orange-600 p-10 mt-5 text-white space-x-2 flex items-start">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="42"
                              height="42"
                              viewBox="0 0 24 24"
                              fill="white"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="lucide lucide-quote"
                            >
                              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                              <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                            </svg>
                            <blockquote>
                              <p className="mt-5">
                                {item.desc}{" "}
                                <p className="text-right">
                                  <i>...GiaBao</i>
                                </p>
                              </p>
                            </blockquote>
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-500">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Eligendi totam dolore, debitis error
                            voluptatem temporibus maxime nisi laboriosam
                            inventore vitae numquam a incidunt explicabo
                            perferendis officiis, excepturi quidem dolorum vel!
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Eligendi totam dolore, debitis error
                            voluptatem temporibus maxime nisi laboriosam
                            inventore vitae numquam a incidunt explicabo
                            perferendis officiis, excepturi quidem dolorum vel!
                          </p>
                        </div>
                        <div className="my-5">
                          <img src={img1} alt="" />
                          <p className="text-gray-500 mt-5">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Eligendi totam dolore, debitis error
                            voluptatem temporibus maxime nisi laboriosam
                            inventore vitae numquam a incidunt explicabo
                            perferendis officiis, excepturi quidem dolorum vel!
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Eligendi totam dolore, debitis error
                            voluptatem temporibus maxime nisi laboriosam
                            inventore vitae numquam a incidunt explicabo
                            perferendis officiis, excepturi quidem dolorum vel!
                          </p>
                        </div>
                        <div className="my-5">
                          <div className="relative">
                            <img src={img2} alt="" />

                            <div className="absolute top-1/2 left-1/2">
                              <div className="par relative">
                                <div className=" bg-white bg-opacity-50 child1 w-[92px] h-[92px] rounded-full flex justify-center items-center"></div>
                                <div className="bg-white absolute left-1/2 -translate-y-1/2 top-1/2 -translate-x-1/2 w-[90px] h-[90px] flex items-center justify-center cursor-pointer rounded-full">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    color="orange"
                                    viewBox="0 0 24 24"
                                    fill="orange"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-play"
                                  >
                                    <polygon points="5 3 19 12 5 21 5 3" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-500 mt-5">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Eligendi totam dolore, debitis error
                            voluptatem temporibus maxime nisi laboriosam
                            inventore vitae numquam a incidunt explicabo
                            perferendis officiis, excepturi quidem dolorum vel!
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Eligendi totam dolore, debitis error
                            voluptatem temporibus maxime nisi laboriosam
                            inventore vitae numquam a incidunt explicabo
                            perferendis officiis, excepturi quidem dolorum vel!
                          </p>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="my-5 space-x-2">
                            <span className="p-2 border rounded">Angency</span>
                            <span className="p-2 border rounded">Business</span>
                            <span className="p-2 border rounded">Personal</span>
                          </div>
                          <div>
                            <div className="flex space-x-4 items-center">
                              <div className="flex justify-center items-center rounded-full">
                                <svg
                                  className="w-[42px]"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="#316FF6"
                                  viewBox="0 0 512 512"
                                >
                                  <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                                </svg>
                              </div>
                              <div className="bg-[#1DA1F2] flex justify-center items-center p-3 rounded-full">
                                <svg
                                  className="w-[18px]"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="white"
                                  viewBox="0 0 512 512"
                                >
                                  <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
                                </svg>
                              </div>
                              <div className="bg-[#fa7e1e] flex justify-center items-center p-3 rounded-full">
                                <svg
                                  className="w-[18px]"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="white"
                                  viewBox="0 0 448 512"
                                >
                                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                </svg>
                              </div>
                              <div className="bg-[#0a66c2] flex justify-center items-center p-3 rounded-full">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-[18px]"
                                  fill="white"
                                  viewBox="0 0 448 512"
                                >
                                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                                </svg>
                              </div>

                              <div className="">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={40}
                                  viewBox="0 0 512 512"
                                  fill="orange"
                                >
                                  <path d="M503.5 204.6L502.8 202.8L433.1 21C431.7 17.5 429.2 14.4 425.9 12.4C423.5 10.8 420.8 9.9 417.9 9.6C415 9.3 412.2 9.7 409.5 10.7C406.8 11.7 404.4 13.3 402.4 15.5C400.5 17.6 399.1 20.1 398.3 22.9L351.3 166.9H160.8L113.7 22.9C112.9 20.1 111.5 17.6 109.6 15.5C107.6 13.4 105.2 11.7 102.5 10.7C99.9 9.7 97 9.3 94.1 9.6C91.3 9.9 88.5 10.8 86.1 12.4C82.8 14.4 80.3 17.5 78.9 21L9.3 202.8L8.5 204.6C-1.5 230.8-2.7 259.6 5 286.6C12.8 313.5 29.1 337.3 51.5 354.2L51.7 354.4L52.3 354.8L158.3 434.3L210.9 474L242.9 498.2C246.6 500.1 251.2 502.5 255.9 502.5C260.6 502.5 265.2 500.1 268.9 498.2L300.9 474L353.5 434.3L460.2 354.4L460.5 354.1C482.9 337.2 499.2 313.5 506.1 286.6C514.7 259.6 513.5 230.8 503.5 204.6z" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="justify-between flex mt-10">
                        <div className="cursor-pointer hover:text-orange-600 transition-all">
                          <div className="flex  font-bold items-center   mt-5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="lucide lucide-chevrons-left"
                            >
                              <path d="m11 17-5-5 5-5" />
                              <path d="m18 17-5-5 5-5" />
                            </svg>
                            <p>Prev article</p>
                          </div>
                          <p className="w-[90%] opacity-80">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                          </p>
                        </div>
                        <div className="hover:text-orange-600 cursor-pointer transition-all">
                          <div className="flex cursor-pointer font-bold  items-center mt-5">
                            <p className="text-right flex-1">Next article</p>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="lucide lucide-chevrons-right"
                            >
                              <path d="m6 17 5-5-5-5" />
                              <path d="m13 17 5-5-5-5" />
                            </svg>
                          </div>
                          <p className="text-right opacity-80">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* right side */}
              <div className="self-start w-[500px] ml-[30px]">
                <aside>
                  <PoppularPost />
                  <Tag />
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
