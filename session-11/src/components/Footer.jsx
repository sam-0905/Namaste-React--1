// Named import
import { Link } from "react-router-dom";
import { Title } from "./Header";
import Support from './../pages/support';


const Footer = () => {

  const linkedin = new URL("../assets/linkedin.svg", import.meta.url).href;
  const twitter = new URL("../assets/twitter.svg", import.meta.url).href;


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
              <li>
              <Link to="/about">About us</Link>
              </li>
            </ul>
          </div>

          <div className="foot-col">
            <h4>Contact</h4>
            <ul>
              <li><Link to="/Support">Help & Support</Link></li>
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
