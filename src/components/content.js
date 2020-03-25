import React, { useState } from "react";
import {BrowserRouter as Router,Link,Route,Switch} from 'react-router-dom';

function Content(props) {

    return(          
        <Router> 
            <div dir="rtl">
                <div className="sideBar">
                    kkkkkkkk
                </div>
                <Switch>
                    <Route path="/about">
                    <div className="sideBar">kkk</div>
                    </Route>
                    <Route path="/users">
                    <div className="main-content">llll</div>
                    </Route>                
               </Switch>
           </div>
        </Router>  
    )
}

export default Content;