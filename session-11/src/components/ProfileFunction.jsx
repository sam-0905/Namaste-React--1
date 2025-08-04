import { useEffect, useState } from "react";
import "./ProfileFunction.css";

const Profile = () => {
  const [userInfo, setUserInfo] = useState("");

  useEffect(() => {
    getUserProfile();
  }, []);

  async function getUserProfile() {
    const data = await fetch("https://api.github.com/users/sam-0905");
    const json = await data.json();
    setUserInfo(json);
  }

  return (
    <div className="profile-card">
      <div className="profile-avatar">
        <img src={userInfo.avatar_url} alt={userInfo.login} />
      </div>
      <h1 className="profile-title">About Me</h1>
      <h2 className="profile-name">👤 {userInfo.login}</h2>
      <p className="profile-id">🆔 ID: {userInfo.id}</p>

      {/* GitHub Link */}
      <a
        href={userInfo.html_url}
        target="_blank"
        rel="noreferrer"
        className="profile-link github"
      >
        View GitHub Profile ↗
      </a>

      {/* LinkedIn Link */}
      <a
        href="https://www.linkedin.com/in/allan-sam/"
        target="_blank"
        rel="noreferrer"
        className="profile-link linkedin"
      >
        Connect on LinkedIn 🔗
      </a>
    </div>
  );
};

export default Profile;
