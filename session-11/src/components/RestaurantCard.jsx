import { IMG_CDN_URl, REACT_MEDIA_URL } from "../constant";

const RestaurantCard = ({
  // props
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  sla,
  costForTwo,
}) => {
  const { deliveryTime } = sla;
  //console.log({ deliveryTime, costForTwo });
  return (
    <div className="card">
      <img src={REACT_MEDIA_URL+ IMG_CDN_URl +`${cloudinaryImageId}`} />
      <h2 className="card-name">{name}</h2>
      <h3 className="cuisines-text">{cuisines?.join(",")}</h3>
      <div className="card-footer">
        <h4 className="rating">{avgRating} ★</h4>
        <h4 className="foot-txt">{deliveryTime} mins</h4>
        <h4 className="foot-txt">{costForTwo}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
