import { CDN_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
  const{resData}=props;
  const{name,cuisines,cloudinaryImageId,avgRating,costForTwo,deliveryTime}=resData?.info
  return(
    <div className="res-card">
      <img className="res-logo" src={CDN_URL+cloudinaryImageId}></img>
      <h2>{name}</h2>
      <h3>{cuisines.join(" , ")}</h3>
      <h3>{costForTwo}</h3>
      <h3>⭐{avgRating} stars</h3>
    </div>
  )
}

export default RestaurantCard