// Named import and import {} from"";
//import { restaurantList } from "../coding-6/constant";(We use live api data now)
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import {MAIN_API_URL } from "../constant";
import useOffline from "../utils/useOffline";

function filterData(searchText, restaurants) {
  console.log({ restaurants });
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [widget,setWidget] = useState([])

  useEffect(() => {
    //fetch (Make an API call)
    getRestaurants();
  }, []);

  // async function getRestaurant to fetch API data
  async function getRestaurants() {
    // handle the error using try... catch
    try {
      const data = await fetch(MAIN_API_URL)
      const json = await data.json();
      console.log(json);

      const cards = await json.data.cards;

      for (let i = 1; i < cards.length; i++) {
        if (cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants) {
          setAllRestaurants(
            cards[i].card.card.gridElements.infoWithStyle.restaurants
          );
          setFilteredRestaurants(
            cards[i].card.card.gridElements.infoWithStyle.restaurants
          );
          return;
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    async function getWidget(){

      try{
      const data1 = await fetch(MAIN_API_URL)
      const jsonData = await data1.json();
      console.log(jsonData)
      }
      catch{}
    }
  },[])

  const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      const data = filterData(searchText, restaurants);
      setFilteredRestaurants(data);
      setErrorMessage("");
      if (data.length === 0) {
        setErrorMessage("No matches restaurant found");
      }
    } else {
      setErrorMessage("");  
      setFilteredRestaurants(restaurants);
    }
  };

  const isOnline = useOnline();
  console.log("your network is ", isOnline);

 if (!isOnline) {
  return <useOffline/>
 }

  if (!allRestaurants) return null;

  return ( 
    <>
      <div className="Search-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search for restaurants and food"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            searchData(searchText, allRestaurants);
          }}
        >
          <i className="fa fa-search"></i>
        </button>
      </div>

      {errorMessage && <div className="error-container">{errorMessage}</div>}
      {allRestaurants?.length === 0 ? ( //Optional Chaining
        <Shimmer />
      ) : (
        <div className="restaurant-list">
          {filteredRestaurants.map((restaurant) => {
            // console.log("Res:", restaurant);
            return (
              <Link
                to={"/restaurant/" + restaurant?.info?.id}
                key={restaurant?.info?.id}
                style={{ textDecoration: "none" }}
              >
                <RestaurantCard {...restaurant?.info} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Body;
