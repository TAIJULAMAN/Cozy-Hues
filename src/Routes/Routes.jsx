import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import Blogs from "../Pages/Blog/Blogs";
import SignUp from "../Pages/SignUp/SignUp";
// import Categories from './../Pages/Categories/Categories';




  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/products",
            element:<Products/>
        },
        {
            path: "/signup",
            element:<SignUp/>
        },
    //     {
    //       path: "/categories",
    //       element:<Categories/>
    //   },
      {
        path: "/blogs",
        element:<Blogs/>
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

      ]
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
  