import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "font-awesome/css/font-awesome.min.css";
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "../components/About";
import Error from "../components/Error";
import Contact from "../components/Contact";
import RestaurantMenu from "../components/RestaurantMenu";
import Profile from "../components/ProfileFunction";
import Shimmer from "../components/shimmer";
//import Instamart from "../components/Instamart";

const Instamart = lazy(() => import("../components/Instamart"));
//upon On Demand Loading ->upon render -> suspend loading

//Chunking
//Code splitting
//Dynamic Building
//Lazy loading
//On Demand Loading
//Dynamic Import

const Applayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile", // ->/about/profile -This will also work -> If we given Like this - ParentPath/{path}
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

// passing a ReactElement inside root
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
