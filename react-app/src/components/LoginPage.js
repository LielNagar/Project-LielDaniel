import React   , {useState} from "react";
import axios from 'axios';

async function Submit(e){
    e.preventDefault();
    await axios.post('http://localhost:4000/users/login',{
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    }).then((response)=>{
        if(response.status=200){
            console.log(response);
            localStorage.setItem('User',JSON.stringify(response.data.user));
            localStorage.setItem('Token',JSON.stringify(response.data.token));
            window.location.href="/Profile";
        } 
    }).catch((error)=>console.log(error));
}

export default function LoginPage(){
    const [email, setEmail] = useState(undefined);
    const [password,setPassword] = useState(undefined);

    const handleInputChange = (e) => { 
    const {id , value} = e.target;
        if(id === "email"){
            return setEmail(value);
        }
        if(id === "password"){
            return setPassword(value);
        }
    }

    return(
        <div>
            <form>
                <input id="email" placeholder="Enter Email" onChange = {(e) => handleInputChange(e)} value={email} required></input>
                <input id="password" placeholder="Enter Password" onChange = {(e) => handleInputChange(e)} value={password} required></input>
                <button onClick={Submit}>Login</button>
            </form>
        </div>
    );
}