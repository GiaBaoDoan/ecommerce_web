import React from "react";
import img1 from "../../images/about/01.jpg";
import img2 from "../../images/about/02.jpg";
import icon1 from "../../images/about/icon/01.jpg";
import icon2 from "../../images/about/icon/02.jpg";
import icon3 from "../../images/about/icon/03.jpg";
import PageHeader from "../../components/PageHeader";
const aboutList = [
  {
    imgUrl: icon1,
    imgAlt: "about icon rajibraj91 rajibraj",
    title: "Skilled Instructors",
    desc: "Distinctively provide acces mutfuncto users whereas communicate leveraged services",
  },
  {
    imgUrl: icon2,
    imgAlt: "about icon rajibraj91 rajibraj",
    title: "Get Certificate",
    desc: "Distinctively provide acces mutfuncto users whereas communicate leveraged services",
  },
  {
    imgUrl: icon3,
    imgAlt: "about icon rajibraj91 rajibraj",
    title: "Online Classes",
    desc: "Distinctively provide acces mutfuncto users whereas communicate leveraged services",
  },
];
const About = () => {
  return (
    <div className="font-poppins">
      <PageHeader title={"Home"} curPage={"About"} />
      <div className="bg-[#fcf8f5]">
        <div className="p-[100px] grid grid-cols-2">
          {/* left side */}
          <div className="relative">
            <div className="">
              <img className="p-2 bg-white shadow rounded" src={img1} alt="" />
            </div>
            <div className="absolute bg-white  bottom-2 left-2  pr-2 pt-2 rounded-tr">
              <div className=" p-2 bg-orange-500">
                <p className="text-center">
                  <span className="text-white text-3xl text-center font-bold">
                    30+
                  </span>
                </p>
                <p className="w-[80%] mx-auto text-white  text-center">
                  Years Of Experiences
                </p>
              </div>
            </div>
            <div className="bg-white shadow top-1/2 right-20  absolute rounded p-2">
              <img src={img2} alt="" />
            </div>
          </div>
          {/* right side */}
          <div className="flex items-center">
            <div className="">
              <h2 className="uppercase text-xl text-orange-600 tracking-widest">
                About Our Brand
              </h2>
              <p className="text-3xl mt-3 font-bold w-[90%] ">
                Good Quanlification and Services And Better Expericens
              </p>
              <p className="text-gray-500 mt-5 text-[18px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati beatae culpa aspernatur doloremque sed architecto
                labore, dolorum eligendi alias aut. Eligendi provident ducimus
                eaque voluptatibus possimus fugit sapiente accusantium
              </p>
              <div className="space-y-4 mt-5">
                {aboutList.map((item, index) => {
                  return (
                    <div key={index} className="flex space-x-2 items-center">
                      <img
                        className="bg-[#fcf8f5] rounded-full"
                        src={item.imgUrl}
                        alt=""
                      />
                      <div className="space-y-5">
                        <span className="font-bold">{item.title}</span>
                        <p className="opacity-80">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
