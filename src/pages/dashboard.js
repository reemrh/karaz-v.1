import React, { useState } from "react";
import TopNavDashboard from "../components/topNavDashboard";
import Content from "../components/content";



function Dashboard(props) {

    return(
           
         <div>
           <TopNavDashboard /> 
           <Content />
         </div>    
    )
}

export default Dashboard;