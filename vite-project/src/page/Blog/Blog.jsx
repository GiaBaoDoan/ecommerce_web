import React from "react";
import PageHeader from "../../components/PageHeader";
import blogData from "../../data/utilis/blogdata";
import { useNavigate } from "react-router-dom";
const Blog = () => {
  const navigate = useNavigate();
  return (
    <div className="font-poppins">
      <PageHeader title={"Blog Page"} curPage={"Blog"} />
      <div className="p-[100px] bg-[#fcf8f5]">
        <div className="grid grid-cols-3 gap-10">
          {blogData.map((item, index) => {
            return (
              <div
                onClick={() => navigate(`/blog/${item.id}`)}
                className="p-4 hover:-translate-y-3 cursor-pointer transition-all shadow-md rounded bg-white "
              >
                <img className="w-full" src={item.imgUrl} alt="" />
                <div className="mt-2">
                  <p>{item.name}</p>
                  <p className="text-xl font-bold">{item.title}</p>
                </div>
                <div className="flex mt-5 space-x-3 items-center">
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
                </div>
                <div className="my-5">
                  <p className="text-gray-500">{item.desc}</p>
                </div>
                <hr />
                <div className="justify-between flex mt-5 items-center">
                  <button className="flex space-x-1">
                    <span> Read more</span>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        color="#ff5243"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-arrow-up-right-from-square"
                      >
                        <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                        <path d="m21 3-9 9" />
                        <path d="M15 3h6v6" />
                      </svg>
                    </div>
                  </button>
                  <button className="relative">
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
                      class="lucide lucide-message-square-more"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      <path d="M8 10h.01" />
                      <path d="M12 10h.01" />
                      <path d="M16 10h.01" />
                    </svg>
                    <div className="absolute bg-[#ff5243] font-medium p-2 text-[14px] rounded-full w-4 h-4 text-white flex justify-center items-center -top-2 right-0">
                      {item.commentCount}
                    </div>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
