import React from "react";
import Vehicle from "./Vehicle";
import axios from "axios";

// async function getVehicles(){
//     return await axios.get('http://localhost:4000/vehicles',{
//         headers:{
//             Authorization: 'Bearer '+ JSON.parse(localStorage.getItem('Token'))
//         }
//     });
// }

export default class AllVehicles extends React.Component{
    state={
        vehicles:[]
    };
    componentDidMount(){
        axios.get('http://localhost:4000/vehicles',{
            headers:{
                Authorization: 'Bearer '+ JSON.parse(localStorage.getItem('Token'))
            }
        }).then((response)=>{
            const vehicles=response.data;
            this.setState({vehicles});
        }).catch((error)=>{
            console.log(error);
        });
    };
    render(){
        return(
           <div>
           {
            this.state.vehicles.map((vehicle)=>{
                return <Vehicle key={vehicle.licensePlate} description={vehicle.description}
                 licensePlate={vehicle.licensePlate} manufacturer={vehicle.manufacturer} model= {vehicle.model}/>
            })
           }
           </div>
        );
    }
}