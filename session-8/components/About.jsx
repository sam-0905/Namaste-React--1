//import { Outlet } from "react-router-dom";
//0r
import Profile from "./ProfileFunction";
//---> by this also we can work profile component.
import ProfileClass from "./ProfileClass";
const About = () => {
  return (
    <div>
      <h1>Chef in the hat</h1>
      <p>This is namaste react live class</p>
      {/*<Outlet />*/}
      <Profile name={"Appu"} />
      <ProfileClass name={"ALLAN"} />
    </div>
  );
};

export default About;
