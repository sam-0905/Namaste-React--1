// import Logo from "../assets/Logo.png
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

// SPA - Single Page Routing
// Client Side Routing
// const Logo = require("../assets/Logo.png");
const logoUrl = new URL("../assets/Logo.png", import.meta.url).href;
console.log("Logo")
console.log(logoUrl);
export const Title = () => (
  <div>
    <Link to="/">
      <img className="logo" src={logoUrl} alt="logo" />
    </Link>
  </div>
)
// Functional Component

const Header = function () {
  // Normal function
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();
  //console.log(useState());

  return (
    <div className="header">
      <Title />
      <div className="Nav-container">
        <ul>
          <li>
            <Link to="/about" id="Nav-container" className="fa fa-info-circle">
              About us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              id="Nav-container"
              className="fa fa-address-book"
            >
              Contact
            </Link>
          </li>
          {/* <li>
            <Link id="Nav-container" to="/Instamart" className="fa fa-bell">
              Instamart
            </Link>
          </li> */}
          <li>
            <Link id="Nav-container" className="fa fa-shopping-cart">
              Cart
            </Link>
          </li>

          {/* use conditional rendering for login and logout */}
          <h1 className="py-2.5">{isOnline ? "🟢" : "🔴"}</h1>
          <li>
            {isLoggedIn ? (
              <buttons
                className="logout-btn"
                onClick={() => setIsLoggedIn(false)}
              >
                Logout
              </buttons>
            ) : (
              <button className="login-btn" onClick={() => setIsLoggedIn(true)}>
                Login
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
