import { useEffect, useState } from "react";

const Profile = () => {
  const [userInfo, setUserInfo] = useState("");
  useEffect(() => {
    getUserProfile();
  }, []);

  async function getUserProfile() {
    const data = await fetch("https://api.github.com/users/aneenajohn");
    const json = await data.json();
    setUserInfo(json);
  }

  return (
    <div>
      <img src={userInfo.avatar_url} alt="" />
      <h1>Profile Component</h1>
      <h2>Name: {userInfo.login}</h2>
      <h3>id: {userInfo.id}</h3>
    </div>
  );
};

export default Profile;
