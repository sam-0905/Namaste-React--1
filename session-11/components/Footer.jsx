// Named import
import { Title } from "./Header";
import linkedin from "../Assets/linkedin.svg";
import twitter from "../Assets/twitter.svg";

const Footer = () => {
  return (
    <div className="foot">
      <span>{<Title />}</span>
      <h4>
        <i className="fa fa-copyright"></i> | Chef in the Hat | 2023 |
      </h4>
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
  );
};

export default Footer;
