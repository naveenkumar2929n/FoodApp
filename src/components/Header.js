import { Link } from "react-router";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header=()=>{
  const[btnName,setBtnName]=useState("Login")
  const onlineStatus=useOnlineStatus()
  return(
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            online Status:{onlineStatus?"✅":"❌"}
          </li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/grocery">grocery</Link></li>
          <li>Cart</li>
          <button onClick={()=>{
            btnName==="Login"?setBtnName("Logout"):setBtnName("Login")
          }} className="login-btn">{btnName}</button>
        </ul>
      </div>
    </div>
  )
}

export default Header;