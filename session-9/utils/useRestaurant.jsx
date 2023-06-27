import { useState, useEffect } from "react";

const useRestaurant = (resId) => {
  const [restaurantMenu, setRestaurantMenu] = useState([]);
  const [restaurantDetails, setRestaurantDetails] = useState({});

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.931948400167405&lng=80.1345556229353&restaurantId=" +
        resId
    );
    const json = await data.json();
    console.log(json);
    setRestaurantDetails(json?.data?.cards[0]?.card?.card?.info);
    setRestaurantMenu(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
  }

  return restaurantMenu;
};

export default useRestaurant;
