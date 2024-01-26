import React from "react";
const title = "Our Popular Tags";
const tagsList = [
  {
    link: "#",
    text: "envato",
  },
  {
    link: "#",
    text: "themeforest",
  },
  {
    link: "#",
    text: "codecanyon",
  },
  {
    link: "#",
    text: "videohive",
  },
  {
    link: "#",
    text: "audiojungle",
  },
  {
    link: "#",
    text: "3docean",
  },
  {
    link: "#",
    text: "envato",
  },
  {
    link: "#",
    text: "themeforest",
  },
  {
    link: "#",
    text: "codecanyon",
  },
];

const Tag = () => {
  return (
    <div className="mt-5">
      <div className="bg-white shadow">
        <h2 className="font-bold text-xl p-3  my-2 border-b">{title}</h2>
        <div className="text-center p-3 pb-4 space-y-2 mt-2">
          {tagsList.map((item, index) => {
            return (
              <button
                key={index}
                className="bg-white text-sm mr-2 text-center rounded shadow hover:bg-[#ff5243] hover:text-white transition-all  p-2"
              >
                {item.text}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tag;
