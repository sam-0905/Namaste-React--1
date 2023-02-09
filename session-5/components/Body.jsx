// Named import and import {} from"";
import { restaurantList } from "../coding-5/constant";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="rest-list">
      {restaurantList.map((restaurant) => {
        return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />;
      })}
    </div>
  );
};

export default Body;
