import axios from "axios";
import React from "react";

async function Submit(_id){
    axios.post('http://localhost:4000/rentvehicle',{
        _id
    },{
        headers:{
            Authorization: 'Bearer '+ JSON.parse(localStorage.getItem('Token'))
        }
    }).then((response)=>{
        console.log(response);
    }).catch((error)=>{
        console.log(error);
    });
}

export default function Vehicle(props){
    return(
        <div>
            <table>
                <th>
                    <td>Description</td>
                </th>
                <th>
                    <td>License Plate</td>
                </th>
                <th>
                    <td>Manufacturer</td>
                </th>
                <th>
                    <td>Model</td>
                </th>
                <tr>
                    <td>{props.description}</td>
                    <td>{props.licensePlate}</td>
                    <td>{props.manufacturer}</td>
                    <td>{props.model}</td>
                    <td><button onClick={()=>Submit(props._id)}>Rent Me!</button></td>
                </tr>
            </table>
        </div>
    );
}