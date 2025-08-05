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
            <div className="profile-banner"></div>
            
            <div className="profile-avatar">
             <img src={userInfo.avatar_url} alt={userInfo.login} />
            </div>
            
            <div className="profile-info">
              <h2 className="profile-title">About Me</h2>
              <p className="profile-name">👤 Allan sam</p>
              <p className="profile-id">🆔 {userInfo.id}</p>
                <div className="skills">
                  <strong>Tech Stack:</strong> React, JavaScrpit , Html , css
                </div>

              <div className="profile-links">
                <a href={userInfo.html_url} className="profile-link github">GitHub</a>
                <a href="https://www.linkedin.com/in/allan-sam/" className="profile-link linkedin">LinkedIn</a>
              </div>
            </div>
     </div>

  );
};

export default Profile;
