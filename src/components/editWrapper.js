import React from "react";
import '../App.css';

function EditWrapper(props) {

    return(          
        <div className="edit-wrapper" onClick={props.onClick} {...props}>
            <div className="edit">
                <label>{props.name}</label>
                <label className="feild-value">{props.value}</label>
                <div><img src={props.icon} /></div>               
            </div>
        </div>
    )
}

export default EditWrapper;