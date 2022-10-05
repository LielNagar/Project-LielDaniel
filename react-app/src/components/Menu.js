import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import "../styles/style.css";

const Logout=()=>{
    axios.post('http://localhost:4000/users/logoutAll',{

    },{
        headers:{
            Authorization: 'Bearer '+ JSON.parse(localStorage.getItem('Token'))
        }
    }).then((response)=>{
        console.log(response);
    }).catch((error)=>{
        console.log(error);
    })
    localStorage.clear();
}

export default function Menu(){
    if(localStorage.getItem('User')){
        return(
            <div class='menu'>
                <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Profile'>My Profile</Link></li>
                <li><Link to='/List'>List a car</Link></li>
                <li><a href='/' onClick={Logout}>Logout</a></li>
                </ul>   
            </div>
        );
    }
    return(
        <div class='menu'>
              <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/SignUp'>Sign up</Link></li>
              <li><Link to='/Login'>Login</Link></li>
              <li><Link to='/List'>List a car</Link></li>
              </ul>
        </div>
    );
}