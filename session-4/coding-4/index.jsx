import React from "react";
import ReactDOM from "react-dom/client";
import Logo from "./icons/Chef in theHat (3).png";

/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
       
*/

// JSX? React.createElement => Object =>Html(DOM) //** react element */

const Title = () => (
  <div className="brand">
    <a href="/">
      <img className="logo" src={Logo} alt="logo" />
    </a>
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

// config Driven Ui
const kfc = {
  name: "kfc",
  image:
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bdcd233971b7c81bf77e1fa4471280eb",
  cusines: ["Burgers", "Americans"],
  ratings: "4.0",
};

const RestaurantCard = () => {
  return (
    <div className="card">
      <img src={kfc.image} />
      <h2>{kfc.name}</h2>
      {/*To Have , between in cusiens*/}
      <h3>{kfc.cusines.join(",")}</h3>
      <h4>{kfc.ratings}stars</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div>
      <RestaurantCard />
    </div>
  );
};

const Footer = () => {
  return <h3>Footer</h3>;
};

const Applayout = () => {
  return (
    <React.Fragment>
      <HeaderComponent />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

/***

 * If we writ this it gives error Jsx has only one parent and one root
 * by using this it will create a new div and not inside our root div.
//const jsx = (
//  <h1>jsx</h1>
//  <h1>second jsx</h1>
//)
* Inside div it gets work
const jsx = (
// <div>
//  <h1>jsx</h1>
//  <h1>second jsx</h1>
// </div>
//)

* Inside React.Fragment it gets work & put inside our root div not a separate div.

//React.Fragment 
const jsx = (
// <React.Fragment> *** insted ** <>
//  <h1>jsx</h1>
//  <h1>second jsx</h1>
// </React.Fragment> *** insted ** </>
//)
*

 */

// passing a ReactElement inside root
const root = ReactDOM.createRoot(document.getElementById("root"));

//passing  a Functional component inside root
//root.render(<PrintElements />);
root.render(<Applayout />);
