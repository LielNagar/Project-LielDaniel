import React from "react";
import {Link} from "react-router-dom";

export default function Menu(){
    return(
        <div>
            <Link to='/' style={{margin:"25px"}}>Home</Link>
            <Link to='/Login' style={{margin:"25px"}}>Log in</Link>
            <Link to='/SignUp' style={{margin:"25px"}}>Sign up</Link>
            <Link to='/List' style={{margin:"25px"}}>List a car</Link>
        </div>
    );
}