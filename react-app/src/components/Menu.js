import React from "react";
import {Link} from "react-router-dom";

const Logout=()=>{
    localStorage.clear();
}

export default function Menu(){
    if(localStorage.getItem('User')){
        return(
            <div>
                <Link to='/' style={{margin:"25px"}}>Home</Link>
                <Link to='/Profile' style={{margin:"25px"}}>My Profile</Link>
                <Link to='/List' style={{margin:"25px"}}>List a car</Link>
                <a href='/' onClick={Logout}>Logout</a>
            </div>
        );
    }
    return(
        <div>
            <Link to='/' style={{margin:"25px"}}>Home</Link>
            <Link to='/SignUp' style={{margin:"25px"}}>Sign up</Link>
            <Link to='/Login' style={{margin:"25px"}}>Log in</Link>
            <Link to='/List' style={{margin:"25px"}}>List a car</Link>
        </div>
    );
}