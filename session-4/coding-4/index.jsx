import React from "react";
import ReactDOM from "react-dom/client";
import Logo from "./icons/logo-chef-restaurant.svg";

// JSX? React.createElement => Object =>Html(DOM) //** react element */

const Title = () => (
  <div className="brand">
    <a href="/">
      <img className="logo" src={Logo} alt="logo" />
    </a>
    <h3 className="brand"> The Chef in the Hat</h3>
  </div>
);

// Functional Component

const HeaderComponent = function () {
  // Normal function
  return (
    <div className="header">
      <Title />
      <div className="Nav-container">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// Component Composition

//const Title7 = () => (
//  <h1 id="tile7" key="h1">
//    Namamste react
//  </h1>
//);

//const HeaderComponent = function () { // Normal function
//  return (
//    <div>
//      <Title7 />
//      <h1> Namamste react Functional Component </h1>
//      <h2>This is a h2 tag</h2>
//    </div>
//  );
//};

// passing a ReactElement inside root
const root = ReactDOM.createRoot(document.getElementById("root"));

//passing  a Functional component inside root
//root.render(<PrintElements />);
root.render(<HeaderComponent />);
