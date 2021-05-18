import React from "react";

const Avatar = () =>{
    return(
        <div className="p-2 bg-warning flex-row list-group-horizontal list-group avatar">
            <i className="bi bi-person-fill list-group-item flex-fill" style={{color: "white"}} ></i>
            <p className="list-group-item flex-fill">Log In</p>

        </div>
    );
}

export default Avatar;