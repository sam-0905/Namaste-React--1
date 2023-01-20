import React from "react";
import ReactDOM from "react-dom/client";

// Functional Component
const HeaderComponent = function () { // Normal function
  return (
    <div>
      <h1> Namamste react Functional Component </h1>
      <h2></h2>
    </div>
  );
};

const HeaderComponent1 = () => { // Arrow function
  return (
    <div>
      <h1> Namamste react Functional Component </h1>
      <h2></h2>
    </div>
  );
};
// these both are one and the same. this is a arrow function thing.In advanced
const HeaderComponent2 = () => (
  <div>
    <h1> Namamste react Functional Component </h1>
    <h2></h2>
  </div>
);

//React.createElement => Object =>Html(DOM)
//const heading = React.createElement("h1", {
//        id: "title",
//        key: "h1",
//    },
//    "Hello World !"
//)

// JSX? React.createElement => Object =>Html(DOM) //** react element */
const head5 = (
  <h1 id="title" key="h1">
    Namamste React{" "}
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(head5);
