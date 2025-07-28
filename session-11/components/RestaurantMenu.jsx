//import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URl, IMG_MENU_CDN } from "./../coding-11/constant";
import Shimmer from "./shimmer";
import useRestaurant from "../utils/useRestaurant";
import { REACT_MEDIA_URL } from './../coding-11/constant';

const RestaurantMenu = () => {
  //   some cool devel also destructure in fly
  const { resId } = useParams(); // destructuring the id
  //console.log(resId);
  // --------
  //  const params = useParams();
  //  const { id } = useparams;
  //  console.log(params);
  const { restaurantMenu, restaurantDetails } = useRestaurant(resId);

  console.log({ restaurantDetails, restaurantMenu });

  return !restaurantMenu ? (
    <Shimmer />
  ) : (
    <>
      <div className="Menu">
        <div>
          <h2>{restaurantDetails?.name}</h2>
          <img
            className="res-img"
            src={REACT_MEDIA_URL+ IMG_CDN_URl + restaurantDetails?.cloudinaryImageId}
            alt={restaurantDetails?.name}
          />
          <h3>Restautant id: {resId}</h3>
          <div className="rest-details">
            <h3>{restaurantDetails?.areaName}</h3>
            <h3>{restaurantDetails?.city}</h3>
            <h3>{restaurantDetails?.avgRating} stars</h3>
            <h3>{restaurantDetails?.costForTwoMessage}</h3>
          </div>
        </div>

        <div>
          <h1>Menu</h1>
          {restaurantMenu.map((item) => {
              const { id, name, REACT_MEDIA_URL,IMG_MENU_CDN, imageId } = item?.card?.info || {}
              const imageUrl = `${REACT_MEDIA_URL || ""}${IMG_MENU_CDN}${imageId}`;

              return(
                 <li key={id}>
              {name} 
              {< img src={imageUrl} alt={name}/>} 
              </li>
              )
  
            })}
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;

//126915 - Zaitoon
//642768 - Gramin
//229 - Meghna Foods
