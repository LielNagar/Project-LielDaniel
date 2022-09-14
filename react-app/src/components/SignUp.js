import React, {useState} from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import {Link} from 'react-router-dom';

async function Submit(e){
    e.preventDefault();
    let age= document.getElementById('age').value;
    if(!age) age=0;
    await axios.post('http://localhost:4000/users/signUp',{
        email: document.getElementById('email').value,
        password:document.getElementById('password').value,
        age,
        name: document.getElementById('name').value
    }).then((response)=>{
        if(response.status===201){
            Swal.fire(
                'Good job!',
                'Your user assigned to the system and ready to use!',
                'success'
            );
        } 
    }).catch((error)=>{
        console.log(error);
        if(error.response.data.errmsg){
            return Swal.fire({
                icon: 'error',
                title: 'Duplicated Value',
                text: 'This email is taken'});
        }
        Swal.fire({
            icon: 'error',
            title: error.response.data._message,
            text: error.response.data.message});
    });
}

function SignUp(){
    const [name, setName] = useState(null);
    const [password,setPassword] = useState(null);
    const [email, setEmail] = useState(null);
    const [age,setAge] = useState(null);
    
    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "name"){
            return setName(value);
        }
        if(id === "password"){
            return setPassword(value);
        }
        if(id === "email"){
            return setEmail(value);
        }
        if(id === "age"){
            return setAge(value);
        }
    }

    return(
        <div>
            <form>
                <input id="name" placeholder="Enter name" onChange = {(e) => handleInputChange(e)} value={name} required></input>
                <input id="password" placeholder="Enter password" onChange = {(e) => handleInputChange(e)} value={password} required></input>
                <input id="email" placeholder="Enter email" onChange = {(e) => handleInputChange(e)} value={email} required></input>
                <input id="age" placeholder="Enter age" onChange = {(e) => handleInputChange(e)} value={age}></input>
                <input type="file" id="file"></input>
                <button onClick={Submit}>Sign Up</button>
                <br></br>
                <p>Already have an account?</p>
                <Link to='/LoginPage'>Log In</Link>
            </form>
        </div>
    );
}

export default SignUp;