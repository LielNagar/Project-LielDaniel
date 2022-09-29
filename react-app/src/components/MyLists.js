import React from "react";
import axios from "axios";
import Vehicle from "./Vehicle";

export default class MyLists extends React.Component{
    state={
        vehicles:[],
        numOfVehicles:0
    };
    componentDidMount(){
        if(!this.props.result){
            axios.get('http://localhost:4000/myvehicles',{
                headers:{
                    Authorization: 'Bearer '+ JSON.parse(localStorage.getItem('Token'))
                }
            }).then((response)=>{
                let vehicles=response.data;
                this.setState({vehicles});  
            }).catch((error)=>{
                console.log(error);
            });
        }
        else{

        }
    };
    render(){
        return(
           <div>
           <p>My Lists</p>
           {
            this.state.vehicles.map((vehicle)=>{
                return <Vehicle key={vehicle.licensePlate} _id={vehicle._id} description={vehicle.description}
                 licensePlate={vehicle.licensePlate} manufacturer={vehicle.manufacturer} model= {vehicle.model}  removeRentButton = {false} rentButton = {false} removeButtonFromDB = {true}/>
            })
           }
           </div>
        );
    }
}