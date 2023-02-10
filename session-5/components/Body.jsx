// Named import and import {} from"";
import { restaurantList } from "../coding-5/constant";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  // This is how we create a variable in JavaScript
  //const searchTxt = "KFC";

  const [searchText, setSearchText] = useState("KFC");

  //useState() - retruns an array = [1st variablename /  setFunction - function to update the variable]
  // This is how we create a variable in React
  // function os his useState is? To create state variable;

  const [searchClicked, setSearchClicked] = useState("false");

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
        <button className="search-btn" onClick={() => setSearchClicked("true")}>
          <i className="fa fa-search"></i>
        </button>
        <h1>{searchClicked}</h1>
      </div>
      <div className="rest-list">
        {restaurantList.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
