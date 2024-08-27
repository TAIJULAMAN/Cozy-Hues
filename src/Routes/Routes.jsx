import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import Blogs from "../Pages/Blog/Blogs";
import SignUp from "../Pages/SignUp/SignUp";
import LogIn from "../Pages/LogIn/LogIn";
import DashBoard from "../Layout/Dashboard/Dashboard";
import AllProducts from "../Components/Dashboard/AllProducts/AllProducts";
import AllBlogs from "../Components/Dashboard/AllBlogs/AllBlogs";
import AllUsers from "../Components/Dashboard/AllUsers/AllUsers";
import Cart from "../Pages/Cart/Cart";
import Checkout from "../Pages/Checkout/Checkout";
import OrderComplete from "../Pages/OrderComplete/OrderComplete";
import BlogSingle from "../Pages/Blog/BlogSingle";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";
import ProductDetails1 from "../Components/ProductDetails/ProductDetails1";
import CreateBlog from "../Components/Dashboard/AllBlogs/CreateBlog";
import CreatePost from "../Components/Dashboard/AllBlogs/CreateBlog";
import CreateProduct from './../Pages/Products/CreateProduct';
import UpdateProduct from "../Pages/Products/UpdateProduct";
import UpdateBlog from "../Components/Dashboard/AllBlogs/UpdateBlog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails1 />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blogs/:id",
        element: <BlogSingle />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/signup",
        element: <SignUp />,
      },

      {
        path: "/login",
        element: <LogIn />,
      },

      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/ordersummary",
        element: <OrderComplete />,
      },
    ],
  },

  // dashboard routes..............................................................................

  {
    path: "/dashboard",
    element: <DashBoard />,
    children: [
      {
        path: "allproduct",
        element: <AllProducts />,
      },
      {
        path: "createproduct",
        element: <CreateProduct/>,
      },
      {
        path: "updateproduct/:id",
        element: <UpdateProduct/>,
      },

      {
        path: "allblogs",
        element: <AllBlogs />,
      },
      {
        path: "createblog",
        element: <CreateBlog />,
      },
      {
        path: "updateblog/:id",
        element: <UpdateBlog />,
      },
      {
        path: "allusers",
        element: <AllUsers />,
      },
    ],
  },
]);
