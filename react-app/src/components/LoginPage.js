import React from "react";
import axios from 'axios';
async function Submit(e){
    e.preventDefault();
    await axios.get('http://localhost:4000/users').then((respone)=>{
        console.log(respone);
    }).catch((error)=>console.log(error));
}

const LoginPage=()=>{
    return(
        <div>
            <form>
                <input id="email" placeholder="Enter Email"></input>
                <input id="password" placeholder="Enter Password"></input>
                <button onClick={Submit}>Login</button>
            </form>
        </div>
    );
}
export default LoginPage;