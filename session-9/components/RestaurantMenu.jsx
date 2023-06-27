//import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URl } from "../coding-9/constant";
import Shimmer from "./shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  //   some cool devel also destructure in fly
  const { resId } = useParams(); // destructuring the id
  //console.log(resId);
  // --------
  //  const params = useParams();
  //  const { id } = params;
  //  console.log(params);
  const restaurantMenu = useRestaurant(resId);
  const restaurantDetails = useRestaurant(resId);

  return !restaurantMenu ? (
    <Shimmer />
  ) : (
    <>
      <div className="Menu">
        <div>
          <h1>Restautant id: {resId}</h1>
          <h2>{restaurantDetails?.name}</h2>
          <img
            src={IMG_CDN_URl + restaurantDetails?.cloudinaryImageId}
            alt={restaurantDetails?.name}
          />
          <h3>{restaurantDetails?.areaName}</h3>
          <h3>{restaurantDetails?.city}</h3>
          <h3>{restaurantDetails?.avgRating} stars</h3>
          <h3>{restaurantDetails?.costForTwoMessage}</h3>
        </div>

        <div>
          <h1>Menu</h1>
          {restaurantMenu.map((item) => (
            <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
          ))}
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;

//126915 - Zaitoon
//642768 - Gramin
//229 - Meghna Foods
