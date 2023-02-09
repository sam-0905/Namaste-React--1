import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";
import "font-awesome/css/font-awesome.min.css";
//import linkedin from "../coding-5/icons/linkedin.svg";
//import twitter from "../coding-5/icons/twitter.svg";

// Functional Component

// config Driven Ui

// no key (not acceptable) <<< index key(use only if you don't have anything LAST OPTION) <<< unique key (BEST PRACTICE).

const Applayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

// passing a ReactElement inside root
const root = ReactDOM.createRoot(document.getElementById("root"));

//passing  a Functional component inside root
//root.render(<PrintElements />);
root.render(<Applayout />);
