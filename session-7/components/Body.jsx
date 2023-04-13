// Named import and import {} from"";
//import { restaurantList } from "../coding-6/constant";(We use live api data now)
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  // This is how we create a variable in JavaScript
  //const searchTxt = "KFC";

  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  /*
   This is how we create a variable in React
  useState() - retruns an array = [1st variablename /  setFunction - function to update the variable]
   function os his useState is? To create state variable;

  
  const [searchClicked, setSearchClicked] = useState("false");

  
    if we refresh this it re-render the whole component once if we had made any changes.IN case of search it we rnder eachand every time when input is happens.
    console.log("render");
    console.log(restaurants);
*/

  /*
  if we have i)render 
            ii)UseEffect   below comnditions will follow⬇️

  Empty dependency array[]  ======>  render once after render
  dep array [searchText]  ======>  render once  after Intial  render happend + everytime re-render when my searchText changes(on every key press.)
  */

  useEffect(() => {
    //fecht (Make an API call)
    getRestaurants();
  }, []);

  // async function getRestaurant to fetch Swiggy API data
  async function getRestaurants() {
    // handle the error using try... catch
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3164945&lng=78.03219179999999&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log(json);
      /*
       setRestaurants(json.data.cards[2].data.data.cards) 
       This is a bad way.by doing this it will break. so We use
       - Optional  chaining -
      */
      setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    } catch (error) {
      console.log(error);
    }
  }

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

  //console.log("render");

  /*  
    Conditional Rendering:
      - If the restaurant is empty ⇒ Shimmer UI
      - If the restaurant has data ⇒ actual data UI
  */

  // When we dont have any restaurant dont return anything.⬇️
  // not render components(Early retrun)
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
        {/*<h1>{searchText}</h1>*/}
        {/*//we can use this as local variable in any where.
           //This is Know as two way binding.*/}
        {/*<button className="search-btn" onClick={() => setSearchClicked("true")}>*/}
        {/*//*/}

        {/*For restaurantList we want filterData()*/}
        <button
          className="search-btn"
          onClick={() => {
            //need to filterData
            //const data = filterData(searchText, allRestaurants);
            //update the state - restaurants
            //setFilteredRestaurants(data);

            // user click on button searchData function is called
            searchData(searchText, allRestaurants);
          }}
        >
          <i className="fa fa-search"></i>
        </button>
        {/*<h1>{searchClicked}</h1>*/}
      </div>
      {/*
            ->if restaurants data is not fetched then display Shimmer UI after the fetched data display restaurants cards 
            -> Also handled shimmer with search box
            */}
      {errorMessage && <div className="error-container">{errorMessage}</div>}
      {allRestaurants?.length === 0 ? ( //Optional Chaining
        <Shimmer />
      ) : (
        <div className="restaurant-list">
          {filteredRestaurants.map((restaurant) => {
            return (
              // no key (not acceptable) <<< index key(use only if you don't have anything LAST OPTION) <<< unique key (BEST PRACTICE).
              <Link
                to={"/restaurant/" + restaurant.data.id}
                key={restaurant.data.id}
              >
                <RestaurantCard {...restaurant.data} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Body;
