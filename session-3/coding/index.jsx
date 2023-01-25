import React, { Component } from "react";
import ReactDOM from "react-dom/client";

//React.createElement => Object =>Html(DOM)

const heading = React.createElement(
  "h1",
  {
    id: "title",
    key: "h1",
  },
  "Hello World !"
);

//JSX? React.createElement => Object =>Html(DOM) //** react element */

const Title2 = (
  <h1 id="title2" key="h1">
    Namamste React{" "}
  </h1>
);

var xyz = 100;

// Functional Component

const HeaderComponent = function () {
  // Normal function
  return (
    <div>
      <h1> Namamste react Functional Component </h1>
      <h2>This is a h2 tag</h2>
    </div>
  );
};

const HeaderComponent1 = () => {
  // Arrow function
  return (
    <div>
      <Title2 />
      <h2> Namamste react Functional Component </h2>
      <h3>This is a h2 tag</h3>
    </div>
  );
};

// these both are one and the same. This is a arrow function thing.In advanced

const HeaderComponent2 = () => (
  <div>
    <h1> Namamste react Functional Component </h1>
    <h2>This is a h2 tag</h2>
  </div>
);

/*//*
//
**/

// Component Composition

const Title7 = () => (
  <h1 id="tile7" key="h1">
    Namamste react
  </h1>
);

const HeaderComponent4 = function () {
  // Normal function
  return (
    <div>
      <Title7 />
      <h1> Namamste react Functional Component </h1>
      <h2>This is a h2 tag</h2>
    </div>
  );
};

// passing a ReactElement inside root
const root = ReactDOM.createRoot(document.getElementById("root"));

//passing  a Functional component inside root
//root.render(<PrintElements />);
//root.render(<HeaderComponent/>);

/*/
  //


  /*/
/***/
/** */
// async defer
//root.render(head5);
