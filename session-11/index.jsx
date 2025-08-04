import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ReactDOM from "react-dom/client";

import "font-awesome/css/font-awesome.min.css";

import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import About from "./src/pages/About";
import Error from "./src/pages/Error";
import Contact from "./src/pages/Contact";
import RestaurantMenu from "./src/components/RestaurantMenu";
import Profile from "./src/components/ProfileFunction";
import Shimmer from "./src/components/shimmer";
//import Instamart from "../components/Instamart";

const Instamart = lazy(() => import("./src/pages/Instamart"));
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
