import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Data from "../../data/data.json";
import PageHeader from "../../components/PageHeader";
import ShopCategory from "../shop/ShopCategory";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Search from "../shop/Search";
import PoppularPost from "../shop/PoppularPost";
import Tag from "../shop/Tag";
import ProductDisplay from "../shop/ProductDisplay";
import image1 from "../../images/instructor/01.jpg";
import image2 from "../../images/instructor/02.jpg";
import image3 from "../../images/instructor/03.jpg";
import image4 from "../../images/instructor/04.jpg";
import ReviewRating from "./ReviewRating";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
let ReviewList = [
  {
    imgUrl: image1,
    imgAlt: "Client thumb",
    name: "Ganelon Boileau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: image2,
    imgAlt: "Client thumb",
    name: "Morgana Cailot",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: image3,
    imgAlt: "Client thumb",
    name: "Telford Bois",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: image4,
    imgAlt: "Client thumb",
    name: "Cher Daviau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
];
const DetailProduct = () => {
  const [gridList, setGridList] = useState(false);
  const [products, setProducts] = useState(Data);
  const [currentPage, setCurrent] = useState(1);
  const productsPerPage = 12;
  const indexOfLastPage = productsPerPage * currentPage;
  const indexOfFristPage = indexOfLastPage - productsPerPage;
  const ListProductToPage = products.slice(indexOfFristPage, indexOfLastPage);
  const paginate = (number) => {
    setCurrent(number);
  };
  // filter product by category
  const [selectedCategory, setSelectedCategory] = useState("All");
  const menuItems = [...new Set(Data.map((val) => val.category))];
  const filterCate = (curCate) => {
    if (curCate == "All") {
      setSelectedCategory(curCate);
      setProducts(Data);
      return;
    }
    const newItem = Data.filter((cat) => {
      return cat.category === curCate;
    });
    setSelectedCategory(curCate);
    setProducts(newItem);
  };
  const { id } = useParams();
  const filterId = Data.filter((item) => item.id === id);
  return (
    <div className="font-poppins ">
      <PageHeader title={"Home"} curPage={"Shop / Single Product"} />
      <div className="container mx-auto p-[100px]">
        <div className="flex gap-2 ">
          {/* left side layout */}
          <div className="w-[80%] ">
            {/* img and detail */}
            <div className="grid grid-cols-2 bg-white border-slate-100 border rounded shadow-md p-6 gap-x-5">
              <div>
                <Swiper
                  navigation={true}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  {filterId.map((item, i) => {
                    return (
                      <SwiperSlide>
                        <img className="rounded" src={item.img} alt="" />
                        {/* <div className="top-1/2 py-5 cursor-pointer text-white bg-[#ff5243] absolute left-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-chevron-left"
                          >
                            <path d="m15 18-6-6 6-6" />
                          </svg>
                        </div>
                        <div className="top-1/2 py-5 cursor-pointer text-white bg-[#ff5243] absolute right-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-chevron-right"
                          >
                            <path d="m9 18 6-6-6-6" />
                          </svg>
                        </div> */}
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
              <div>
                <p>
                  {filterId.map((item, index) => {
                    return <ProductDisplay item={item} key={index} />;
                  })}
                </p>
              </div>
            </div>
            {/* reviews products */}
            <ReviewRating ReviewList={ReviewList} />
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
  );
};

export default DetailProduct;
