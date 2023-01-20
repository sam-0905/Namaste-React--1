import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  {
    id: "title",
    key: "h1",
  },
  "Hello World !"
);

// Functional Component
const headerComponent = () => {
  return <h1> Namamste react Functional Component </h1>;
};

//const heading = React.createElement("h1", {
//        id: "title",
//        key: "h1",
//    },
//    "Hello World !"
//)

// JSX?
const head5 = (
  <h1 id="title" key="h1">
    Namamste React{" "}
  </h1>
);
