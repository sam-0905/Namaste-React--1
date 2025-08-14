import React from "react";
import OfflineImg from "../assets/offlinePic.png" ; // update the path if needed

function UserOffline() {
  return (
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
  );
}

export default UserOffline;
