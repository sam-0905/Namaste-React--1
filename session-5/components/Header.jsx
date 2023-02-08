import Logo from "../icons/Chef in the Hat.png";

const Title = () => (
  <div>
    <a href="/">
      <img className="logo" src={Logo} alt="logo" />
    </a>
  </div>
);

const Header = function () {
  // Normal function
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
