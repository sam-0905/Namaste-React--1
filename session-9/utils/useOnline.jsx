import React, { useEffect, useState } from "react";

//return a boolean value true/false
///*This is a junior level code
//const useOnline = () => {
//  const [isOnline, setIsOnline] = useState(true);

//  useEffect(() => {
//    window.addEventListener("online", () => {
//      setIsOnline(true);
//    });
//    window.addEventListener("offline", () => {
//      setIsOnline(false);
//    });
//  }, []);
//  return isOnline;
//};
//export default useOnline;

/*This is a senior level code*/
/*Here we reomve the addEventListener*/

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline; // it will return true/false
};

export default useOnline;
