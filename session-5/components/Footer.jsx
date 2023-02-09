import { Title } from "./Header";
import linkedin from "../icons/linkedin.svg";
import twitter from "../icons/twitter.svg";

const Footer = () => {
  return (
    <div className="foot">
      <span className="logo1">{<Title />}</span>
      <h4>©️ 2023 | Chef in the Hat |</h4>
      <ul>
        <li>
          <a href="https://twitter.com/AllanSam5050">
            <img src={linkedin} />
          </a>
        </li>
        <li>
          <a class="link" href="https://www.linkedin.com/in/allan-sam/">
            <img src={twitter} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
