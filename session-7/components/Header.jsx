import Logo from "../icons/Chef in the Hat.png";
import { useState } from "react";
import { Link } from "react-router-dom";

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

  return (
    <div className="header">
      <Title />

      <div className="Nav-container">
        <ul>
          <li>
            <Link to="/" className="fa fa-home">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="fa fa-info-circle">
              About us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="fa fa-shopping-cart">
              Cart
            </Link>
          </li>
          <li>
            <Link to="/contact" className="fa fa-address-book">
              contact
            </Link>
          </li>

          {/* use conditional rendering for login and logout */}
          <li>
            {isLoggedIn ? (
              <button
                className="logout-btn"
                onClick={() => setIsLoggedIn(false)}
              >
                Logout
              </button>
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
