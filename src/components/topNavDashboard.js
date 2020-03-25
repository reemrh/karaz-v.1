import React, { useState } from "react";
import Logo from "../img/karazT.png";
import SearchIcon from "../img/search.png";
import SettingIcon from "../img/setting.png";
import NotificationIcon from "../img/bell.png";
import Person from "../img/person.jpg";
import "../App.css";

function TopNavDashboard(props) {

    return(
        <div className="TopNavDashboard" dir="rtl">
            <div className="right-section-of-TopNavDashboard">
               <img src={Logo} alt="logo" /> 
               <h1>كرز بيوتي </h1>
            </div>
            <div className="mid-section-of-TopNavDashboard">
                <div className="inputWrapper">
                    <img src={SearchIcon} width="16" height="16"/>
                    <input type="text" placeholder="بحث" onChange={ e => console.log(e.target.value)} />
                </div>
            </div>
            <div className="left-section-of-TopNavDashboard">
                <div className="circlur-icon-wrapper" id="notification">
                    <div className="red-dot">.</div>
                    <img src={NotificationIcon} id="notificationIcon" width="13.5" height="13.5"/>
                </div>
                <div className="circlur-icon-wrapper">
                    <img src={SettingIcon} width="13.5" height="13.5"/>
                </div>
                <img src={Person} id="person" />
            </div>
        </div>
    )
}

export default TopNavDashboard;