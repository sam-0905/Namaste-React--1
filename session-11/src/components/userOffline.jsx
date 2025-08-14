import React from "react";
import "./userOffline.css";

function UserOffline() {
  const OfflineImg = new URL("../assets/offlinePic.png", import.meta.url).href;

  return (
      <>
       <div className="offline-container">
        <h1>🥵 Oops! Looks like you are offline</h1>
        <img className="offline-image" src={OfflineImg} alt="offline" />
        <p className="offline-message">
          Check your internet connection and try again. Your cravings are waiting!
        </p>
       <button
        className="offline-retry-btn"
        onClick={() => window.location.reload()}
         >
        Retry
       </button>
    </div>
      </>
  );
}

export default UserOffline;
