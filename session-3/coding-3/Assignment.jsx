import React from "react";
import ReactDOM from "react-dom/client";
import Logo from "./icons/flipkart_icon.png";
import user from "./icons/user.png";

// Nested header Element using React.createElement

//const header = React.createElement("div", { className: "title" }, [
//  React.createElement(
//"h1",
//{ id: "head1", key: "h1" },
// "Namaste React"),
//  React.createElement(
//    "h2",
//    { id: "head2", key: "h2" },
//    "Learn from Akshay saini"
//  ),
//  React.createElement("h3", { id: "head3", key: "h3" }, "make us zero to hero"),
//]);

// Nested header Element using JSX

//const header2 = (
//  <div id="title2" key="title2">
//    <h1 key="h1">
//      {" "}
//      Jsx is a Html like syntax ,but it is not Html inside JavaScript.
//    </h1>
//    <h2 key="h2"> JSX makes it easier to write</h2>
//    <h3 key="h3">
//      javascript expressions in JSX : JSX supports all js expressions bywrapping
//      them in {}
//    </h3>
//  </div>
//);

//Nested header using  Functional Component in Jsx

//const HeaderComponent = function () {
//  return (
//    <div>
//      <h1 key="h1"> Namamste react Functional Component </h1>
//      <h2 key="h2">Functional component is nothing but function</h2>
//      <h3 key="h3">This is a h2 tag</h3>
//    </div>
//  );
//};

//Pass attribute into the tag in

//const Header3 = () => {
//  return (
//    <div className="Title" key="title3">
//      <h1 style={{ color: "darkblue" }} key="h1">
//        This is h1 tag passing style attribute in it
//      </h1>
//      <h2 style={{ color: "darkgoldenrod" }} key="h2">
//        This is h2 tag passing style attribute in it
//      </h2>
//      <h3 style={{ color: "darkmagenta" }} key="h3">
//        This is h3 tag passing style attribute in it
//      </h3>
//    </div>
//  );
//};

// Compisition of component (add a component inside another)
//const PrintElements = () => {
//  return (
//    <div>
//      {header}
//      {header2}
//      <HeaderComponent />
//      <Header3 />
//    </div>
//  );
//};

//

//
//**Assignment2 */
//
//Create a Header Component from scratch using Functional Components with JSX

const HeaderComponent3 = function () {
  return (
    <header className="container header">
      <div>
        <h1 id="logo1">
          <img src={Logo} alt="logo" />
        </h1>
      </div>

      <div>
        <input
          type="text"
          id="search-bar"
          placeholder="search for products..."
        ></input>
        <button type="submit" id="search-btn">
          🔍
        </button>
      </div>

      <div className="user-id">
        <img src={user} />
      </div>
    </header>
  );
};

// passing a ReactElement inside root
const root = ReactDOM.createRoot(document.getElementById("root"));

//passing  a Functional component inside root
//root.render(<PrintElements />);
root.render(<HeaderComponent3 />);
