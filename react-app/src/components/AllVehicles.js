import React from "react";
import Vehicle from "./Vehicle";
//import axios from "axios";
import AppPagination from "./AppPagination";

export default class AllVehicles extends React.Component{
    state={
        vehicles:[]
    };
    // componentDidMount(){
    //     // *****THIS IS FOR COUNT ALL VEHICLES IN DB TO RENDER WITH LIMIT AND SKIP*******//
    //     // axios.get('http://localhost:4000/vehicles/count',{
    //     //     headers:{
    //     //         Authorization: 'Bearer '+ JSON.parse(localStorage.getItem('Token'))
    //     //     }
    //     // }).then((response)=>{
    //     //     this.setState({
    //     //         numOfVehicles: response.data.count
    //     //     });
    //     // }).catch((error)=>{
    //     //     console.log(error);
    //     // });
    //     if(!this.props.result){
    //         console.log(this.props.vehicles)
    //         // axios.get('http://localhost:4000/vehicles',{
    //         //     headers:{
    //         //         Authorization: 'Bearer '+ JSON.parse(localStorage.getItem('Token'))
    //         //     }
    //         // }).then((response)=>{
    //         //     let vehicles=response.data;
    //         //     vehicles = vehicles.filter((vehicle) => {
    //         //         return vehicle.isAvail === true
    //         //     })
    //         //     this.setState({vehicles});  
    //         // }).catch((error)=>{
    //         //     console.log(error);
    //         // });
    //     }
    //     else{
    //         const vehicles= JSON.parse(localStorage.getItem('VehiclesAvail'));
    //         this.setState({vehicles});
    //     }
    //};
    render(){
        return(
           <div>
           {
            this.state.vehicles.map((vehicle)=>{
                return <Vehicle key={vehicle.licensePlate} AC={vehicle.AC} GPS={vehicle.GPS} BT={vehicle.blueTooth} engine={vehicle.engineSize} gear={vehicle.gear} _id={vehicle._id} description={vehicle.description}
                 licensePlate={vehicle.licensePlate} manufacturer={vehicle.manufacturer} model= {vehicle.model} removeRentButton = {false} rentButton = {true} removeButtonFromDB = {false}/>
            })
           }
           <AppPagination setVehicle={((vehicle)=> this.setState(vehicle))}/>
           </div>
        );
    }
}