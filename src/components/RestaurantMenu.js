import { useState,useEffect } from "react"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"


const RestaurantMenu=()=>{
  const {resId}=useParams()
  const[resInfo,setResInfo]=useState(null)
  useEffect(()=>{
    fetchMenu()
  },[])
  const fetchMenu=async()=>{
    const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.01020&lng=76.97010&restaurantId="+resId);
    const json=await data.json()
    console.log(json);
    setResInfo(json.data)
    }

  if(resInfo===null)return <Shimmer></Shimmer>
  const{name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info
  const{itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
  return(
    <div className="res-menu">
      <h1>{name}</h1>
      <p>{cuisines.join(" , ")}-{costForTwoMessage}</p>
      <h1>MENU</h1>
      <ul>
       {itemCards.map((item)=><li key={item.card.info.id}>{item.card.info.name}{"-Rs"}{item.card.info.defaultPrice/100||item.card.info.price/100}</li>)}
      </ul>
    </div>
  )
}

export default RestaurantMenu