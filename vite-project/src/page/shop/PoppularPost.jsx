import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../images/blog/10.jpg";
import img2 from "../../images/blog/11.jpg";
import img3 from "../../images/blog/12.jpg";
import img4 from "../../images/blog/09.jpg";
const postList = [
  {
    id: 1,
    imgUrl: img1,
    imgAlt: "rajibraj91",
    title: "Poor People Campaign Our Resources",
    date: "Jun 05,2022",
  },
  {
    id: 2,
    imgUrl: img2,
    imgAlt: "rajibraj91",
    title: "Poor Peoples Campaign Our Resources",
    date: "Jun 05,2022",
  },
  {
    id: 3,
    imgUrl: img3,
    imgAlt: "rajibraj91",
    title: "Poor Peoples Campaign Our Resources",
    date: "Jun 05,2022",
  },
  {
    id: 4,
    imgUrl: img4,
    imgAlt: "rajibraj91",
    title: "Poor Peoples Campaign Our Resources",
    date: "Jun 05,2022",
  },
];
const PoppularPost = () => {
  return (
    <div className="mt-5">
      <div className="shadow bg-white rounded ">
        <h1 className="font-bold text-xl p-4 ">Most Popular</h1>
        <div className="space-y-4 ">
          {postList.map((item, index) => {
            return (
              <div className="border-b py-2 px-4 ">
                <li
                  style={{ listStyleType: "none" }}
                  className="flex items-center"
                  key={index}
                >
                  <div>
                    <Link className="" to={`/blog/${item.id}`}>
                      <img className="w-[100px]" src={item.imgUrl} alt="" />
                    </Link>
                  </div>
                  <div className="flex-col ml-3  justify-between flex py-1">
                    <p className="font-bold">{item.title}</p>
                    <span className="text-gray-500">{item.date}</span>
                  </div>
                </li>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PoppularPost;
