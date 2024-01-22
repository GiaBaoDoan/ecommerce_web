import React from "react";
import "../../assets/css/About.css";
import CountUp from "react-countup";
import imgae from "../../images/instructor/01.png";
const subTitle = "Why Choose Us";
const title = "Become a Marchant";
const desc =
  "Take courses on your any device with our app & learn all about business what you want. Just download & install & start to learn";
const btnText = "Apply Now";
const countList = [
  {
    iconName: "icofont-graduate-alt",
    count: "30",
    text: "Certified Courses",
    bgColor: "#37d87b",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        strokeWidth={2.5}
        viewBox="0 0 24 24"
        fill="none"
        color="white"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="absolute z-10"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    iconName: "icofont-users-alt-4",
    count: "12600",
    text: "Marchant Enrolled",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        color="white"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-8 absolute h-8 z-10"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
        />
      </svg>
    ),

    bgColor: "#ff5243",
  },
  {
    iconName: "icofont-notification",
    count: "100",
    text: "Rewards and GitCards",
    bgColor: "#ffc313",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        color="white"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-8 absolute h-8 z-10"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
        />
      </svg>
    ),
  },
];
const AboutUs = () => {
  return (
    <div className="font-poppins">
      <div className="relative h-[700px]">
        <div className="absolute trapezoid-1 bg-black top-0 overflow-hidden translate-z-2 left-0 w-[56%] h-[100%]"></div>
        <div className="absolute trapezoid-2 bg-yellow-300 top- left-[45%] w-[55%] h-[100%]"></div>
        <div className="flex h-full items-center">
          <div className="relative w-full">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="">
                  {countList.map((item, index) => {
                    return (
                      <div className="ml-[100px] flex items-center space-x-10">
                        <div
                          style={{ backgroundColor: `${item.bgColor}` }}
                          className="cursor-pointer w-[70px] par relative h-[70px] mt-[40px]  rounded-full flex items-center  justify-center "
                        >
                          {item.icon}
                          <div
                            style={{
                              backgroundColor: `${item.bgColor}`,
                              opacity: 0.5,
                            }}
                            className="bg-[#fc7569] absolute child1 w-[80px] h-[80px] duration-600 bg-opacity-50 transition-all flex justify-center items-center rounded-full"
                          ></div>
                          <div
                            style={{
                              backgroundColor: `${item.bgColor}`,
                              opacity: 0.15,
                            }}
                            className="bg-[#ff5243] w-[100px] child2 h-[100px] absolute duration-600 bg-opacity-15 flex justify-center items-center rounded-full"
                          ></div>
                        </div>
                        <div className="flex flex-col mt-10">
                          <p className="text-white text-4xl font-medium mb-[20px]">
                            <CountUp end={item.count}></CountUp> +
                          </p>
                          <p className="text-slate-300 font-bold">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="">
                <img className="" src={imgae} alt="" />
              </div>
              <div className="relative space-y-4 w-[32%] self-center">
                <p className=" font-normal">{subTitle}</p>
                <p className="font-bold  tracking-wide text-4xl">{title}</p>
                <p className="w-[80%]  font-normal">{desc}</p>
                <button className="bg-white font-bold py-3 px-4 mt-10 inline-block rounded">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
