import React from "react";
import axios from "axios";
import Vehicle from "./Vehicle";
import {Box,Pagination} from '@mui/material';
import MyListsPagination from "./MyListsPagination";

export default class MyLists extends React.Component{
    state={
        vehicles:[],
        numOfVehicles:0
    };

    render(){
        return(
           <div>
           <p>My Lists</p>
           {
            this.state.vehicles.map((vehicle)=>{
                return <Vehicle key={vehicle.licensePlate}  AC={vehicle.AC} GPS={vehicle.GPS} BT={vehicle.blueTooth} engine={vehicle.engineSize} gear={vehicle.gear} _id={vehicle._id} description={vehicle.description}
                 licensePlate={vehicle.licensePlate} manufacturer={vehicle.manufacturer} model= {vehicle.model}  removeRentButton = {false} rentButton = {false} removeButtonFromDB = {true}/>
            })
           }
           <MyListsPagination id='navbarPagination' setVehicle={((vehicle)=> this.setState(vehicle))}/>
           </div>
        );
    }
}