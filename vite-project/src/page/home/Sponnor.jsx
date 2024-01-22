import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import app1 from "../../images/sponsor/01.png";
import app2 from "../../images/sponsor/02.png";
import app3 from "../../images/sponsor/03.png";
import app4 from "../../images/sponsor/04.png";
import app5 from "../../images/sponsor/05.png";
import app6 from "../../images/sponsor/06.png";
// import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
const sponsorList = [
  {
    imgUrl: app1,
  },
  {
    imgUrl: app2,
  },
  {
    imgUrl: app3,
  },
  {
    imgUrl: app4,
  },
  {
    imgUrl: app5,
  },
  {
    imgUrl: app6,
  },
];
function Sponnor() {
  return (
    <div className="p-10 bg-[#fff1e8]">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {sponsorList.map((item, index) => {
          return (
            <SwiperSlide>
              <img src={item.imgUrl} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Sponnor;
