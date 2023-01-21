import React from "react";
import ReactDOM from "react-dom/client";

// JSX? React.createElement => Object =>Html(DOM) //** react element */
const head5 = (
  <h1 id="title" key="h1">
    Namamste React{" "}
  </h1>
);

const HeaderComponent1 = () => {
  // Arrow function
  return (
    <div>
      {head5}
      <h2> Namamste react Functional Component </h2>
      <h3>This is a h2 tag</h3>
    </div>
  );
};

// Functional Component
//const HeaderComponent = function () {   // Normal function
//  return (
//    <div>
//      <h1> Namamste react Functional Component </h1>
//      <h2>This is a h2 tag</h2>
//    </div>
//  );
//};

// these both are one and the same. This is a arrow function thing.In advanced
//const HeaderComponent2 = () => (
//  <div>
//    <h1> Namamste react Functional Component </h1>
//    <h2>This is a h2 tag</h2>
//  </div>
//);

//React.createElement => Object =>Html(DOM)

//const heading = React.createElement("h1", {
//        id: "title",
//        key: "h1",
//    },
//    "Hello World !"
//)

// passing a ReactElement inside root
const root = ReactDOM.createRoot(document.getElementById("root"));

// async defer
root.render(head5);

// passing  a Functional component inside root
root.render(<HeaderComponent1 />);
