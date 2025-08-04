//import { Outlet } from "react-router-dom";
//0r
import ProfileFunction from "../components/ProfileFunction";
//---> by this also we can work profile component.
import ProfileClass from "../components/ProfileClass";
const About = () => {
  return (
    <div>
      {/*<Outlet />*/}
      <br />
      <ProfileFunction name={"Appu"} />
      <br />
      {/* <ProfileClass name={"ALLAN"} xyz="Abc" /> */}
    </div>
  );
};

export default About;
