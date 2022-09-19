import React from "react";
import Vehicle from "./Vehicle";
import axios from "axios";

export default class AllVehicles extends React.Component{
    state={
        vehicles:[],
        numOfVehicles:0
    };
    componentDidMount(){
        //*****THIS IS FOR COUNT ALL VEHICLES IN DB TO RENDER WITH LIMIT AND SKIP*******//
        // axios.get('http://localhost:4000/vehicles/count',{
        //     headers:{
        //         Authorization: 'Bearer '+ JSON.parse(localStorage.getItem('Token'))
        //     }
        // }).then((response)=>{
        //     this.setState({
        //         vehicle:[],
        //         numOfVehicles: response.data
        //     });
        // }).catch((error)=>{
        //     console.log(error);
        // });
        if(!this.props.result){
            axios.get('http://localhost:4000/vehicles',{
                headers:{
                    Authorization: 'Bearer '+ JSON.parse(localStorage.getItem('Token'))
                }
            }).then((response)=>{
                let vehicles=response.data;
                vehicles = vehicles.filter((vehicle) => {
                    return vehicle.isAvail === true
                })
                this.setState({vehicles});  
            }).catch((error)=>{
                console.log(error);
            });
        }
        else{
            const vehicles= JSON.parse(localStorage.getItem('VehiclesAvail'));
            this.setState({vehicles});
        }
    };
    render(){
        if(this.state.vehicles.length===0){
            return(
                <div>
                    <p>No Vehicles Avail IN DB</p>
                </div>
            );
        }
        
        return(
           <div>
           {
            this.state.vehicles.map((vehicle)=>{
                return <Vehicle key={vehicle.licensePlate} _id={vehicle._id} description={vehicle.description}
                 licensePlate={vehicle.licensePlate} manufacturer={vehicle.manufacturer} model= {vehicle.model} buttonStatus = {true}/>
            })
           }
           </div>
        );
    }
}