//import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URl } from "./../coding-11/constant";
import Shimmer from "./shimmer";
import useRestaurant from "../utils/useRestaurant";
import { REACT_MEDIA_URL } from './../coding-11/constant';
import { IMG_MENU_URL } from './../coding-11/constant';
import "../components/RestaurantMenu.css"


const RestaurantMenu = () => {
  const { resId } = useParams(); // destructuring the id
  const { restaurantMenu, restaurantDetails } = useRestaurant(resId); 
  const CDN_URL = IMG_MENU_URL;

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
          <h3>Restaurant id: {resId}</h3>
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
              const { id, name,imageId,description,price,ribbon,ratings} = item?.card?.info || {}
               const ribbonText = ribbon?.text || null;
                const rating = ratings?.aggregatedRating?.rating || "–";

              return(
                 <li key={id}>
                <h1>{name}</h1>
                <span>{ribbonText}</span>
               {imageId && (
                <img
                  src={ REACT_MEDIA_URL +CDN_URL + imageId}
                  style={{ width: "100px", height: "auto" }}
                />
              )}
              <p>{description}</p>
              <h3>₹ {price}</h3>
                <p>
                <strong>⭐ {rating}</strong> | ₹{(price || 0) / 100}
              </p>
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
