import React from 'react'

const useOffline = () => {
      const offlineImg = new URL("../assets/offline.png", import.meta.url).href;

  return (
    <>   
     <div>
        <h1>🥵 Oops! Looks like you are offline</h1>
       <img src={offlineImg} alt="offline" />
   </div>
</>
  )
}

export default useOffline ;