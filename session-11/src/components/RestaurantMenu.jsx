//import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URl } from "../constant";
import Shimmer from "./shimmer";
import useRestaurant from "../utils/useRestaurant";
import { REACT_MEDIA_URL } from '../constant';
import { IMG_MENU_URL } from '../constant';
import UserOffline from "./userOffline";
import useOnline from "../utils/useOnline";
import "./RestaurantMenu.css";


const RestaurantMenu = () => {
  const { resId } = useParams(); // destructuring the id
  const { restaurantMenu, restaurantDetails } = useRestaurant(resId); 
  const CDN_URL = IMG_MENU_URL;

    console.log({ restaurantDetails, restaurantMenu });

const isOnline = useOnline();

   if (!isOnline) {
  return <UserOffline/>
 }

  return !restaurantMenu ? (
    <Shimmer />
  ) : (
    <>
      <div className="Menu">
          <div className="res-container">
                <div className="res-left">
                      <img
                        className="res-img"
                        src={REACT_MEDIA_URL + IMG_CDN_URl + restaurantDetails?.cloudinaryImageId}
                        alt={restaurantDetails?.name}
                      />
                    </div>

                    <div className="res-right">
                      <h2>{restaurantDetails?.name}</h2>
                      <p className="res-cuisines">{restaurantDetails?.cuisines?.join(", ")}</p>
                      <div className="rest-details">
                        <h3>{restaurantDetails?.areaName} |</h3>
                        <h3>{restaurantDetails?.city} |</h3>
                        <h3>{restaurantDetails?.costForTwoMessage} |</h3>
                        <h3 className="res-ratings">{restaurantDetails?.avgRating} stars</h3>
                      </div>
                    </div>
                  </div>

         <div>
          <h1>Menu</h1>
          {restaurantMenu.map((item) => {
           const { id, name,imageId,description,price,ribbon,ratings,itemAttribute,ratingCountV2} = item?.card?.info || {}
               const ribbonText = ribbon?.text || "New";
                const food_Type = itemAttribute.vegClassifier;
                 const rating = ratings?.aggregatedRating?.rating || "–";
                  const ratingCount = ratings?.aggregatedRating?.ratingCountV2
                   const veg = new URL("../assets/veg.png", import.meta.url).href;
                     const nonVeg = new URL("../assets/non-veg.png", import.meta.url).href;
         return(
                <li key={id}>
                      <div className="menu-item-row">
                       <div className="Menu-container">
                          <h1>{name}</h1>

                   <span className="food-info">
                        {itemAttribute && (
                          <span className="food-icon">
                            {food_Type === "VEG" ? (
                              <img src={veg} alt="Veg" className="veg-icon" />
                            ) : (
                              <img src={nonVeg} alt="Non-Veg" className="veg-icon" />
                            )}
                              </span>
                            )}
                          <span className="food-ribbon">{ribbonText || "\u00A0"}</span>
                      </span>

                     <h3>₹ {(price || 0) / 100}</h3>
                   <p>
                   <strong>⭐ {rating} </strong>
                   <i>({ratingCount})</i>
                     </p>
                  <p className="res-description">{description}</p>
                  </div>

                  <div className="Menu-img">
                {imageId && (
              <img src={REACT_MEDIA_URL + CDN_URL + imageId} alt={name} />
                )}
                </div>
                 </div>
               
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
