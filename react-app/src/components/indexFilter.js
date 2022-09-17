import React, { useState } from "react";
import axios from 'axios';

function Submit(){
  console.log(document.getElementById('year').value);
}
export default class IndexFilter extends React.Component{
  state={
    manufacturers:[]
  }
  componentDidMount(){
    axios.get('http://localhost:4000/vehicles/details/distinct').then((response)=>{
      const manufacturers=response.data;
      this.setState({manufacturers});
    }).catch((error)=>{
      console.log(error);
    });
  }
  render(){
    return(
      <div>
        <input id='sDate' type='date'></input>
        <input id='eDate' type='date'></input>
        <select>
          <option>Select A Manufacturer</option>
          {this.state.manufacturers.map((manufacturer)=>{
            return <option>{manufacturer}</option>
          })}
        </select>
        <select>
          <option>Select Gear Type</option>
          <option>Auto</option>
          <option>Manual</option>
        </select>
        <input id='year' type='number' min='1990' max={new Date().getFullYear()} placeholder='Year Above'></input>
        <br></br>
        <label>Do you want AC?</label>
        <input id='AC' type='checkbox'></input>
        <br></br>
        <label>Do you want BlutTooth?</label>
        <input id='BT' type='checkbox'></input>
        <br></br>
        <label>Do you want GPS?</label>
        <input id='GPS' type='checkbox'></input>
        <br></br>
        <button onClick={Submit}>Search!</button>
      </div>
    );
  }
}