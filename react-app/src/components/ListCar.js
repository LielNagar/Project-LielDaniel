import React,{useState} from "react";
import axios from 'axios';

async function Submit(e){
    e.preventDefault();
    await axios.post('http://localhost:4000/vehicles',{
        // carNumber: document.getElementById('email').value,
        // manufacturer: document.getElementById('manufacturer').value,
        // model: document.getElementById('model').value,
        // year: document.getElementById('year').value
    }).then((response)=>{
        console.log(response)
    }).catch((error)=>{
        console.log(error)
    });
}

export default function ListCar(){
    const [carNumber, setCarNumber] = useState(undefined);
    const [manufacturer,setManufacturer] = useState(undefined);
    const [model, setModel] = useState(undefined);
    const [year,setYear] = useState(undefined);
    
    
    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "carNumber"){
            return setCarNumber(value);
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
                <input id="carNumber" placeholder="Enter Car Number" onChange = {(e) => handleInputChange(e)} value={carNumber} required></input>
                <input id="manufacturer" placeholder="Enter Manufacturer" onChange = {(e) => handleInputChange(e)} value={manufacturer} required></input>
                <input id="model" placeholder="Enter Car Model" onChange = {(e) => handleInputChange(e)} value={model} required></input>
                <input id="year" type="number" min="1900" max="2099" step="1" placeholder="Enter Year Of Creation" onChange = {(e) => handleInputChange(e)} value={year} required></input>
                <button onClick={Submit}>List Your Car</button>
            </form>
        </div>
    );
}