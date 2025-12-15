import { useState, useEffect } from "react";
// import { FETCH_MENU_URL } from "../constant";
import mockData from "../../mockData.json"

const useRestaurant = (resId) => {
  const [restaurantMenu, setRestaurantMenu] = useState([]);
  const [restaurantDetails, setRestaurantDetails] = useState({});

  console.log(restaurantDetails)
  // get data from API
  useEffect(() => {
    getRestaurantInfo();
  }, [resId]);

  async function getRestaurantInfo() {
    try {
      const response = mockData;
      console.log("get res info",response)
    
      console.log("From response",response.data.cards);
      setRestaurantDetails(response?.data?.cards[2]?.card?.card?.info);
      setRestaurantMenu(response?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);

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
