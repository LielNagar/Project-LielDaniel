import React from "react";
import axios from 'axios';
import "../styles/style.css";
//import Swal from "sweetalert2";

function Submit(){
  // const thisYear=new Date().getFullYear();
  // const year= document.getElementById('year').value;
  // if(year)
  //   if(year>thisYear || year<2000){
  //     return Swal.fire({
  //       icon: 'error',
  //       title: 'Year Problem!',
  //       text: 'In order to search a vehicle you have to apply a year between 2000 and '+ thisYear+ '. Or not at all'});
  //   } ******TO COMPLETE LATER********
  const manufacturer=document.getElementById('manufacturer').value;
  const gear= document.getElementById('gear').value;
  const AC= document.getElementById('AC').checked;
  const blueTooth= document.getElementById('BT').checked;
  const GPS= document.getElementById('GPS').checked;
  let params={};
  if(manufacturer === 'Select A Manufacturer')
    if(gear === 'Select Gear Type')
      params={AC, blueTooth, GPS};
    else params={AC, blueTooth, GPS, gear};
  else if (gear === 'Select Gear Type') params={AC, blueTooth, GPS, manufacturer};
  else params={AC,blueTooth,GPS,manufacturer,gear};
  console.log(params);
  axios.get('http://localhost:4000/vehicles',{params}).then((response)=>{
    localStorage.setItem('VehiclesAvail',JSON.stringify(response.data))
    window.location.href='/Results';
    console.log(response);
  }).catch((error)=>{
    console.log(error);
  })
}
export default class IndexFilter extends React.Component{
  state={
    manufacturers:[],
    gears:[],
    years:[]
  }
  componentDidMount(){
    axios.get('http://localhost:4000/vehicles/details/distinctmanufacturers').then((response)=>{
      const manufacturers=response.data;
      this.setState({manufacturers});
      axios.get('http://localhost:4000/vehicles/details/distinctgears').then((response) => {
        const gears = response.data;
        this.setState({gears})
      })
      axios.get('http://localhost:4000/vehicles/details/distinctyears').then((response) => {
        const years = response.data;
        this.setState({years})
      })
    }).catch((error)=>{
      console.log(error);
    });
  }
  render(){
    return(
      <div className='indexfilter'>
        <h2>Seach by filter</h2>
          <br/>
          <form>
          
            <label> Pickup Date </label>
            <input id='sDate' type='date'></input>
           
            <br/>
            <label> Return Date </label>
            <input id='eDate' type='date'></input>
            
            <br/>
            <br/>
          
            <div id='indexfilterselect'>
            <label>Manufacturer </label>
            <select id='manufacturer'>
            <option></option>
            {this.state.manufacturers.map((manufacturer)=>{
              return <option key={manufacturer} id={manufacturer} value={manufacturer}>{manufacturer}</option>
            })}
            </select>
            
            <label> Gear </label>
            <select id='gear'>
            <option></option>
            {this.state.gears.map((gear)=>{
              return <option key={gear} id={gear} value={gear}>{gear}</option>
            })}
            </select>
            <label> Year  </label>
            <select id='year'>
            <option></option>
            {this.state.years.map((year)=>{
              return <option key={year} id={year} value={year}>{year}</option>
            })}
           </select>
            </div>
            <br/>
            <div className="checkbx">
            <label> GPS </label>
            <input className='checkboxs' id='GPS' type='checkbox'></input>
            <label> BlueTooth </label>
            <input className='checkboxs' id='BT' type='checkbox'></input>
            <label> AC </label>
            <input className='checkboxs' id='AC' type='checkbox'></input>
            </div>
            
          </form>


        
       

        <br></br>
        <button id='searchButton' onClick={Submit}>Search!</button>
        
        
      </div>
    );
  }
}