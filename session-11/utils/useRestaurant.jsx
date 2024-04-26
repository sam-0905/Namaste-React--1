import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../coding-11/constant";

const useRestaurant = (resId) => {
  const [restaurantMenu, setRestaurantMenu] = useState([]);
  const [restaurantDetails, setRestaurantDetails] = useState({});
  // get data from API
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    console.log(restaurantDetails);
    console.log("res", restaurantMenu);
    const data = await fetch(FETCH_MENU_URL + resId);
    const json = await data.json();
    console.log(json);
    setRestaurantDetails(json?.data?.cards[2]?.card?.card?.info);
    setRestaurantMenu(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
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
