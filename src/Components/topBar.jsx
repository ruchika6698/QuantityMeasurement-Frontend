import React from "react";
import "../CSS/TopBar.css";
import {Link } from "react-router-dom";
import Inactivescale from "../Assets/Inactivescale.svg";
import Inactivehot from "../Assets/Inactivehot.svg";
import Inactivebeaker from "../Assets/Inactivebeaker.svg";

export class TopBar extends React.Component {
    
render() {
    return (
    <div class="main">
      <div class="topbar-container"> 
        <div class="quanment">Quanment</div>
        <div/> 
        <div class="history">History</div>
      </div> 
      <div class="header-container">
         <span class="header-text" align="center">Welcome To Quantity Measurement</span>
      </div>
      <div class="header">
        <span class="header-span">CHOOSE TYPE</span>
      </div>
      <div class="home">
          <Link to={{pathname:"/quantity-measuremen/length"}}><div class="length"><img src={Inactivescale} class="lengthimage" alt="Length"/>Length</div></Link>
          <div class="temperature"><img src={Inactivehot} class="tempimage" alt="Temperature"/>Temperature</div>
          <div class="volume"><img src={Inactivebeaker} class="volumeimage" alt="Volume"/>Volume</div>
      </div>
    </div>
    )
  }
}