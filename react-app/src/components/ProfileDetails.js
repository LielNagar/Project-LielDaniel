import React from "react";

export default function ProfileDetails(props){
    return(
        <div>
            <p>Name : {props.name}</p>
            <p>Email : {props.email}</p>
        </div>
    );
}

