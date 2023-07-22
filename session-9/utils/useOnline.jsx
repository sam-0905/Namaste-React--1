import React, { useEffect, useState } from "react";

//it return a boolean value true/false
/*

**/
const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => {
      setIsOnline(true);
    });
    window.addEventListener("offline", () => {
      setIsOnline(false);
    });
  }, []);
  return isOnline;
};
export default useOnline;

//const useOnline = () => {
//  const [isOnline, setIsOnline] = useState(true);

//  useEffect(() => {
//    const handleOnline = () => {
//      setIsOnline(true);
//    };

//    const handleOffline = () => () => {
//      setIsOnline(false);
//    };

//    window.addEventListener("online", handleOnline);
//    window.addEventListener("offline", handleOffline);
//  }, []);

//  return () => {
//    window.removeEventListener("online", handleOnline);
//    window.removeEventListener("offline", handleOffline);
//  };
//};

//export default useOnline;
