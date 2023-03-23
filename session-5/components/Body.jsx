// Named import and import {} from"";
import { restaurantList } from "../coding-5/constant";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

//what is state?
//what is React Hooks? - functions
//what is use state?

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
  const [restaurants, setRestaurant] = useState(restaurantList);
  //
  // This is how we create a variable in React
  //useState() - retruns an array = [1st variablename /  setFunction - function to update the variable]
  // function os his useState is? To create state variable;

  //
  //const [searchClicked, setSearchClicked] = useState("false");

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
            setRestaurant(data);
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
