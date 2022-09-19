import React from "react";
import axios from "axios";
import Vehicle from "./Vehicle";

export default class MyLists extends React.Component{
    state={
        vehicles:[],
        numOfVehicles:0
    };
    componentDidMount(){
     
            axios.get('http://localhost:4000/myrents',{
                headers:{
                    Authorization: 'Bearer '+ JSON.parse(localStorage.getItem('Token'))
                }
            }).then(async (response)=>{
                await axios.get('http://localhost:4000/vehicles',{
                    _id :response.vehicle
                }).then((response) => {
                    let vehicles = response.data
                    this.setState({vehicles});  
                })
               
            }).catch((error)=>{
                console.log(error);
            });
      
    };
    render(){
        return(
           <div>
           {
            this.state.vehicles.map((vehicle)=>{
                return <Vehicle key={vehicle.licensePlate} _id={vehicle._id} description={vehicle.description}
                 licensePlate={vehicle.licensePlate} manufacturer={vehicle.manufacturer} model= {vehicle.model} buttonStatus = {false}/>
            })
           }
           </div>
        );
    }
}