import Logo from "../images/Chef in the Hat.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

// SPA - Single Page Routing
// Client Side Routing

export const Title = () => (
  <div>
    <a href="/">
      <img className="logo" src={Logo} alt="logo" />
    </a>
  </div>
);

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
            <Link to="/" id="Nav-container" className="fa fa-home">
              Home
            </Link>
          </li>
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
          <li>
            <Link id="Nav-container" to="/Instamart">
              Instamart
            </Link>
          </li>
          <li>
            <Link id="Nav-container" className="fa fa-shopping-cart">
              Cart
            </Link>
          </li>

          {/* use conditional rendering for login and logout */}
          <h1>{isOnline ? "🟢" : "🔴"}</h1>
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
