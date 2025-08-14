import React from 'react'

const UseOffline = () => {

      const offlineImg = new URL("../assets/offlinePic.png", import.meta.url).href;

  return (
    <>   
      <div>
        <h1>🥵 Oops! Looks like you are offline</h1>
       <img src={offlineImg} alt="offline" />
     </div>
   </>
  )
}

export default UseOffline;