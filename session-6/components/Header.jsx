import Logo from "../icons/Chef in the Hat.png";
import { useState } from "react";

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
            <i className="fa fa-home"> Home</i>
          </li>
          <li>
            <i className="fa fa-info-circle"> About us</i>
          </li>
          <li>
            <i className="fa fa-shopping-cart"> Cart</i>
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
