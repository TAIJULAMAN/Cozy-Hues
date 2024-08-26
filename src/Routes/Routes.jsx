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
        path: "/signup",
        element: <SignUp />,
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
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/ordersummary",
        element: <OrderComplete />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/dashboard",
        element: <DashBoard/>
      },
      {
        path: "/allproduct",
        element: <AllProducts/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/allblogs",
        element: <AllBlogs/>
      },
      {
        path: "/allusers",
        element: <AllUsers/>
      },
      //     {
      //         path: "/order/:category",
      //         element:<OrderPage></OrderPage>
      //     },
      //     {
      //       path: "/login",
      //       element:<LogIn></LogIn>
      //   },
      //     {
      //       path: "/signup",
      //       element:<Signup></Signup>
      //   },
      //     {
      //       path: "gallery",
      //       element:<Gallery></Gallery>
      //   }
    ],
  },

  // dashboard routes..............................................................................

  // {
  //   path: "dashboard",
  //   element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
  //   children: [
  //     {
  //       path: "mycart",
  //       element:<MyCart></MyCart>,
  //     },
  //     {
  //       path: "userhome",
  //       element:<UserHome></UserHome>
  //     },
  //     {
  //       path: "reservation",
  //       element:<Reservation></Reservation>
  //     },
  //     {
  //       path: "payment",
  //       element:<Payment></Payment>
  //     },
  //     {
  //       path: "reviews",
  //       element:<AddReview></AddReview>
  //     },
  //     {
  //       path: "bookings",
  //       element:<Bookings></Bookings>
  //     },
  //     // ...................admin route.........................
  //     {
  //       path: "allusers",
  //       element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
  //     },
  //     {
  //       path: "addItem",
  //       element:<AdminRoute><AddItem></AddItem></AdminRoute>
  //     },
  //     {
  //       path: "manageitem",
  //       element:<AdminRoute><ManageItem></ManageItem></AdminRoute>
  //     },
  //     {
  //       path: "adminhome",
  //       element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
  //     },
  //   ]
  // }
]);
