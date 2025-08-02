import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constant";

const useRestaurant = (resId) => {
  const [restaurantMenu, setRestaurantMenu] = useState([]);
  const [restaurantDetails, setRestaurantDetails] = useState({});
  // get data from API
  useEffect(() => {
    getRestaurantInfo();
  }, [resId]);

  async function getRestaurantInfo() {
    try {
      const data = await fetch(FETCH_MENU_URL + resId);
      const json = await data.json();

      setRestaurantDetails(json?.data?.cards[2]?.card?.card?.info);
      setRestaurantMenu(
        json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
          ?.card?.card?.itemCards
      );
    } catch (err) {
      console.error("Failed to fetch restaurant data:", err);
    }
  }
  
  //let obj = {
  //  restaurantMenu: restaurantMenu,
  //  restaurantDetails: restaurantDetails
  //}
  //return obj;/or⬇️

  return {
    restaurantMenu,
    restaurantDetails,
  };
};

export default useRestaurant;
