import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
Link;
const Body=()=>{
  const[listOfRestaurants,setListOfRestaurants]=useState([])
  const[filteredRes,setFilteredRes]=useState([])
  const[searchText,setSearchText]=useState('')
  useEffect(()=>{
    fetchData()
  },[])
  const fetchData=async()=>{
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.01020&lng=76.97010&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json=await data.json();
    console.log(json);
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    
  }
  const onlineStatus=useOnlineStatus();
  if(onlineStatus===false)return <h1>Looks like your offline,please check your internet connection</h1>
  return(listOfRestaurants.length===0)?<Shimmer/>:(
    <div className="body">
      <div className="filter">
        <input type="text" value={searchText} onChange={(e)=>setSearchText(e.target.value)}></input>
        <button onClick={()=>{
          const filteredRestaurants=listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
          setFilteredRes(filteredRestaurants)
        }}>search</button>
        <button className="filter-btn" onClick={()=>{
          const filteredRestaurants=listOfRestaurants.filter((res)=>res.info.avgRating>4.4)
          setFilteredRes(filteredRestaurants)
        }}>Top Rated Restaurants</button>
      </div>
      <div className="res-container">
       {
        filteredRes.map((restaurant)=><Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}><RestaurantCard  resData={restaurant}/></Link>)
       }
      </div>
    </div>
  )
}
export default Body;