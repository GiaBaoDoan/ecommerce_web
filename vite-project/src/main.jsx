import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "swiper/css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./page/home/Home.jsx";
import Shop from "./page/shop/Shop.jsx";
import Blog from "./page/Blog/Blog.jsx";
import DetailProduct from "./page/Detail/DetailProduct.jsx";
import CartPage from "./page/CartPage/CartPage.jsx";
import SingleBlog from "./page/SingleBlog/SingleBlog.jsx";
import About from "./page/About/About.jsx";
import Contact from "./page/Contact/Contact.jsx";
import Login from "./page/Login/Login.jsx";
import Auth from "./page/auth/Auth.jsx";
import Register from "./page/register/Register.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Shop",
        element: <Shop />,
      },
      {
        path: "/Blog",
        element: <Blog />,
      },
      {
        path: "/shop/:id",
        element: <DetailProduct />,
      },
      {
        path: "/blog/:id",
        element: <SingleBlog />,
      },
      {
        path: "/cart-page",
        element: <CartPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/",
    element: <Auth />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Register />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
