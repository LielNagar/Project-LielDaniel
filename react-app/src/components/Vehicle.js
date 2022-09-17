import React from "react";

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
                    <td><button>List Me!</button></td>
                </tr>
            </table>
        </div>
    );
}