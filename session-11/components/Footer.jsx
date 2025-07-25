// Named import
import { Title } from "./Header";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";

const Footer = () => {
  return (
    <div className="foot-container">
      <div className="foot">
        {/* Brand & Logo */}
        <div className="foot-brand">
          <span>{<Title />}</span>
          <p className="brand-tagline">Your favorite meals, delivered fresh.</p>
        </div>

        {/* Footer Links (Swiggy-style sections) */}
        <div className="foot-links">
          <div className="foot-col">
            <h4>Company</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              {/* <li><a href="/careers">Careers</a></li>
              <li><a href="/team">Team</a></li> */}
            </ul>
          </div>

          <div className="foot-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="/help">Help & Support</a></li>
              {/* <li><a href="/partner">Partner with Us</a></li>
              <li><a href="/ride">Ride with Us</a></li> */}
            </ul>
          </div>

        </div>

        {/* Social Media */}
        <div className="foot-social">
          <h4>Follow Us</h4>
          <ul>
            <li>
              <a href="https://twitter.com/AllanSam5050">
                <img src={twitter} alt="Twitter" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/allan-sam/">
                <img src={linkedin} alt="LinkedIn" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="foot-bottom">
        <h4>
          <i className="fa fa-copyright"></i> | Chef in the Hat | 2025
        </h4>
      </div>
    </div>
  );
};

export default Footer;
