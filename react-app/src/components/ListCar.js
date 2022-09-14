import React,{useState} from "react";
import axios from 'axios';

async function Submit(e){
    e.preventDefault();
    await axios.post('http://localhost:4000/vehicles',{
        description: document.getElementById('description').value,
        manufacturer: document.getElementById('manufacturer').value,
        // model: document.getElementById('model').value,
        // year: document.getElementById('year').value,
        owner: JSON.parse(localStorage.getItem('User'))._id,
        licensePlate: document.getElementById('licensePlate').value,
        // sDate: document.getElementById('sDate').value,
        // eDate: document.getElementById('eDate').value,
        // duration: (eDate-sDate)/1000
    },{
        headers:{
            Authorization: localStorage.getItem('Token')
        }
    }).then((response)=>{
        console.log(response)
    }).catch((error)=>{
        console.log(error)
    });
}

export default function ListCar(){
    const [licencePlate, setLicensePlate] = useState(undefined);
    const [manufacturer,setManufacturer] = useState(undefined);
    const [description, setModel] = useState(undefined);
    const [year,setYear] = useState(undefined);
    
    
    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "licensePlate"){
            return setLicensePlate(value);
        }
        if(id === "manufacturer"){
            return setManufacturer(value);
        }
        if(id === "model"){
            return setModel(value);
        }
        if(id === "year"){
            return setYear(value);
        }
    }

    return(
        <div>
            <form>
                <input id="description" placeholder="description" onChange = {(e) => handleInputChange(e)} value={description} required></input>
                <input id="licensePlate" placeholder="Enter Car Number" onChange = {(e) => handleInputChange(e)} value={licencePlate} required></input>
                <input id="manufacturer" placeholder="Enter Manufacturer" onChange = {(e) => handleInputChange(e)} value={manufacturer} required></input>
                <input id="year" type="number" min="1900" max="2099" step="1" placeholder="Enter Year Of Creation" onChange = {(e) => handleInputChange(e)} value={year} required></input>
                <input id="sDate" type="date"></input>
                <input id="eDate" type="date"></input>
                <button onClick={Submit}>List Your Car</button>
            </form>
        </div>
    );
}