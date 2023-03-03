// Named import and import {} from"";
import { restaurantList } from "../coding-6/constant";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

const Body = () => {
  // This is how we create a variable in JavaScript
  //const searchTxt = "KFC";

  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState([]);

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
  Empty dependency array  ======>  once render after one render happend
  dep array [searchText]  ======>  once after intial render + everytime re-render when my searchText changes(on every key press.)
  */
  console.log("render");

  useEffect(() => {
    //fecht API
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3164945&lng=78.03219179999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    //setRestaurants(json.data.cards[2].data.data.cards) // This is a bad way.by doing this it will break.
    // Optional  chaining
    setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

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
            const data = filterData(searchText, restaurants);
            //update the state - restaurants
            setRestaurants(data);
          }}
        >
          <i className="fa fa-search"></i>
        </button>
        {/*<h1>{searchClicked}</h1>*/}
      </div>

      <div className="rest-list">
        {restaurants.map((restaurant) => {
          return (
            // no key (not acceptable) <<< index key(use only if you don't have anything LAST OPTION) <<< unique key (BEST PRACTICE).
            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
