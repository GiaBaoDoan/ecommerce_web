import React, { useState } from "react";
import PageHeader from "../../components/PageHeader.jsx";
import Data from "../../data/data.json";
import ProductsCard from "../../components/ProductsCard.jsx";
import Pagination from "../../components/Pagination.jsx";
import Search from "./Search.jsx";
import ShopCategory from "./ShopCategory.jsx";
import PoppularPost from "./PoppularPost.jsx";
import Tag from "./Tag.jsx";
const title = "Showing 01-12 of 139 results";
const Shop = () => {
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
  return (
    <div className="font-poppins">
      <PageHeader title={"Shop Page"} curPage={"Shop"} />
      {/* Shop Page section */}
      <div className="container mx-auto p-[100px]">
        <div className="flex gap-2 ">
          {/* left side layout */}
          <div className="w-[80%]">
            <div className="p-3 rounded shadow flex justify-between">
              <p>{title}</p>
              <div className="flex space-x-2">
                <svg
                  onClick={() => setGridList(true)}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  color={gridList ? "red" : ""}
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide cursor-pointer lucide-layout-grid"
                >
                  <rect width="7" height="7" x="3" y="3" rx="1" />
                  <rect width="7" height="7" x="14" y="3" rx="1" />
                  <rect width="7" height="7" x="14" y="14" rx="1" />
                  <rect width="7" height="7" x="3" y="14" rx="1" />
                </svg>
                <svg
                  onClick={() => setGridList(false)}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  color={gridList ? "" : "red"}
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide cursor-pointer lucide-list"
                >
                  <line x1="8" x2="21" y1="6" y2="6" />
                  <line x1="8" x2="21" y1="12" y2="12" />
                  <line x1="8" x2="21" y1="18" y2="18" />
                  <line x1="3" x2="3.01" y1="6" y2="6" />
                  <line x1="3" x2="3.01" y1="12" y2="12" />
                  <line x1="3" x2="3.01" y1="18" y2="18" />
                </svg>
              </div>
            </div>
            {/* productCard */}
            <ProductsCard gridList={gridList} products={ListProductToPage} />
            <Pagination
              productsPerPage={productsPerPage}
              totalProducts={products.length}
              paginate={paginate}
              curPage={currentPage}
            />
          </div>
          {/* right side */}
          <div className="self-start w-[500px] ml-[30px]">
            <aside>
              <Search products={products} gridList={gridList} />
              <ShopCategory
                filterCate={filterCate}
                setItem={setProducts}
                setProducts={setProducts}
                menuItems={menuItems}
                selectedCategory={selectedCategory}
              />
              <PoppularPost />
              <Tag />
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
