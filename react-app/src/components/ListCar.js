import React,{useState} from "react";
import axios from 'axios';

async function Submit(e){

    e.preventDefault();
    await axios.post('http://localhost:4000/vehicles',{
        
        description: document.getElementById('description').value,
        manufacturer: document.getElementById('manufacturer').value,
        owner: JSON.parse(localStorage.getItem('User'))._id,
        licensePlate: document.getElementById('licensePlate').value,
        engineSize: document.getElementById('engineSize').value,
        engineType: document.getElementById('engineType').value,
        gear: document.getElementById('gear').value,
        seats: document.getElementById('seats').value,
        doors: document.getElementById('doors').value,
        model: document.getElementById('model').value,
        year: document.getElementById('year').value,
        numOfBaggage: document.getElementById('numOfBaggage').value,
        rating: document.getElementById('rating').value,
        isAvail: true,
        AC: document.getElementById('AC').checked,
        GPS: document.getElementById('GPS').checked,
        blueTooth: document.getElementById('blueTooth').checked,




            // LIEL SIM PO LEV
        // sDate: document.getElementById('sDate').value,
        // eDate: document.getElementById('eDate').value,
        // duration: (eDate-sDate)/1000,
        // carURL: document.getElementById('carURL'),


       
    },{
        // headers:{
        //     Authorization: localStorage.getItem('Token')
        // }
    }).then((response)=>{
        console.log(response)
    }).catch((error)=>{
        console.log(error)
    });
}

export default function ListCar(){
    const [licencePlate, setLicensePlate] = useState(undefined);
    const [manufacturer,setManufacturer] = useState(undefined);
    const [description, setdescription] = useState(undefined);
    const [engineSize,setengineSize] = useState(undefined);
    const [engineType, setengineType] = useState(undefined);
    const [gear, setgear] = useState(undefined);
    const [seats,setseats] = useState(undefined);
    const [doors, setdoors] = useState(undefined);
    const [numOfBaggage,setnumOfBaggage] = useState(undefined);
    const [rating, setrating] = useState(undefined);
    const [model,setmodel] = useState(undefined);
    const [year, setyear] = useState(undefined);


// LIEL SIM LEV PO LESADER 
    // const [sDate, setsDate] = useState(undefined);
    // const [eDate,seteDate] = useState(undefined);



    
    
    
    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "licensePlate"){
            return setLicensePlate(value);
        }
        if(id === "manufacturer"){
            return setManufacturer(value);
        }
        if(id === "description"){
            return setdescription(value);
        }
        if(id === "engineSize"){
            return setengineSize(value);
        }
        if(id === "engineType"){
            return setengineType(value);
        }
        if(id === "gear"){
            return setgear(value);
        }
        if(id === "seats"){
            return setseats(value);
        }
        if(id === "doors"){
            return setdoors(value);
        } 
        if(id === "numOfBaggage"){
            return setnumOfBaggage(value);
        }
        if(id === "rating"){
            return setrating(value);
        }
        if(id === "model"){
            return setmodel(value);
        }
        if(id === "year"){
            return setyear(value);
        }      
    }

    return(
        <div>
            <form>
                <input id="description" placeholder="Fill out description about the rent" onChange = {(e) => handleInputChange(e)} value={description} required></input>
                <input id="licensePlate" placeholder="Enter Car Number" onChange = {(e) => handleInputChange(e)} value={licencePlate} required></input>
                <input id="manufacturer" placeholder="Enter Manufacturer" onChange = {(e) => handleInputChange(e)} value={manufacturer} required></input>
                <input id="model" placeholder="Enter Model" onChange = {(e) => handleInputChange(e)} value={model} required></input>
                <input id="engineSize" placeholder="Enter engine size" onChange = {(e) => handleInputChange(e)} value={engineSize} required></input>
                <input id="engineType" placeholder="Enter engine type" onChange = {(e) => handleInputChange(e)} value={engineType} required></input>
                <input id="gear" placeholder="Enter type of gear" onChange = {(e) => handleInputChange(e)} value={gear} required></input>
                <input id="seats" type="number" placeholder="Enter number of seats" onChange = {(e) => handleInputChange(e)} value={seats} required></input>
                <input id="doors" type="number" placeholder="Enter number of doors" onChange = {(e) => handleInputChange(e)} value={doors} required></input>
                <input id="numOfBaggage" type="number" placeholder="Enter baggages capacity" onChange = {(e) => handleInputChange(e)} value={numOfBaggage} required></input>
                <input id="rating" type="number" placeholder="Enter rating (1-5)" onChange = {(e) => handleInputChange(e)} value={rating} required></input>
                <input id="year" type="number" min="1900" max="2099" step="1" placeholder="year" onChange = {(e) => handleInputChange(e)} value={year} required></input>
                <input id="AC"  type="checkbox"></input>
                <input id="GPS" type="checkbox" ></input>
                <input id="blueTooth"  type="checkbox"></input>


                <button onClick={Submit}>List Your Car</button>
            </form>
        </div>
    );
}