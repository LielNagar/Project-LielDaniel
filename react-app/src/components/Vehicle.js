import axios from "axios";
import React from "react";
import Swal from "sweetalert2";


async function Submit(_id , removeButtonFromDB, rentButton , removeRentButton){
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false

      }) 

      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        html: '<p>adssad</p>',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          )
        }
      })
     
    if (rentButton) {
      axios.post('http://localhost:4000/rentvehicle',{
        _id
    },{
        headers:{
            Authorization: 'Bearer '+ JSON.parse(localStorage.getItem('Token'))
        }
    }).then((response)=>{
        console.log(response);
    }).catch((error)=>{
        console.log('formsad')
        console.log(error);
    });
    }else if(removeButtonFromDB){
      axios.delete(`http://localhost:4000/vehicle?_id=${_id}`, {
      },{
        headers:{
          Authorization: 'Bearer '+ JSON.parse(localStorage.getItem('Token'))
      }
      }).then((response) => {
        console.log(response)
      }).catch((error) => {
        console.log(error)
      })
    } else if (removeRentButton) {
      axios.patch(`http://localhost:4000/removerent?_id=${_id}`, {
      },{
        headers:{
          Authorization: 'Bearer '+ JSON.parse(localStorage.getItem('Token'))
      }
      }).then((response) => {
        console.log(response)
      }).catch((error) => {
        console.log(error)
      })
    }
    
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
                    {props.rentButton &&  <td><button onClick={ () => Submit(props._id , props.removeButtonFromDB , props.rentButton , props.removeRentButton)}>Rent Me!</button></td>}
                    {props.removeButtonFromDB &&  <td><button onClick={ () => Submit(props._id , props.removeButtonFromDB , props.rentButton , props.removeRentButton)}>Remove</button></td>}
                    {props.removeRentButton &&  <td><button onClick={ () => Submit(props._id , props.removeButtonFromDB , props.rentButton , props.removeRentButton)}>Unrent</button></td>}
                   
                </tr>
            </table>
        </div>
    );
}