import React from "react";
import Vehicle from "./Vehicle";
import axios from "axios";

var getVehicles = async()=>{
    await axios.get('http://localhost:4000/vehicles',{
        headers:{
            Authorization: 'Bearer '+ JSON.parse(localStorage.getItem('Token'))
        }
    }).then((response)=>{
        console.log(response.data);
        // return setVehicle(response.data)
    }).catch((error)=>{
        console.log(error);
    })
}


export default function AllVehicles(){
    // const [vehicle , setVehicle] = React.useState(null)
    // getVehicles()
    // function setVehicle(data) {
    //     vehicle = data
    // }
    getVehicles()
    return(
        <div>
        {
            
        }
        </div>
    );
}