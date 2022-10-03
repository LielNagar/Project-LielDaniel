import React, {useState} from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import {Link} from 'react-router-dom';

async function Submit(e){
    e.preventDefault();
    let email = document.getElementById('email');
    let name = document.getElementById('name').value;
    if(!name) name = 'Anonymous';
    let password = document.getElementById('password');
    let age= document.getElementById('age').value;
    if(!age) age = 0;
    await axios.post('http://localhost:4000/users',{
        email: email.value,
        name,
        password: password.value,
        age
    }).then((response)=>{
        if(response.status===201){
            Swal.fire(
                'Good job!',
                'Your user assigned to the system and ready to use!',
                'success'
            );
        }
        localStorage.setItem('User',JSON.stringify(response.data.user));
        localStorage.setItem('Token',JSON.stringify(response.data.token));
        setTimeout(()=>{
            window.location.href='/Profile'; 
        },2000);
    }).catch((error)=>{
        console.log(error);
        if(error.response.data.errmsg){
            return Swal.fire({
                icon: 'error',
                title: 'Duplicated Value',
                text: 'This email is taken'});
        }
        if(error.response.data.errors.email){
            email.style.background= '#ff5252';
            return email.focus();
        } 
        if(error.response.data.errors.password){
            password.style.background='#ff5252';
            return password.focus();
        }
    });
}

function SignUp(){
    const [name, setName] = useState(undefined);
    const [password,setPassword] = useState(undefined);
    const [email, setEmail] = useState(undefined);
    const [age,setAge] = useState(undefined);
    const [selectedImage, setSelectedImage] = useState(null);

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
        <div class='login-box'>
            <h2>Sign Up</h2>
            <form>
                <div class="user-box">
                    <input id="email" type="text" name="" required onChange = {(e) => handleInputChange(e)} value={email} ></input>
                    <label>Email</label>
                </div>
                <div class="user-box">
                    <input id="password" type="text" name="" required  onChange = {(e) => handleInputChange(e)} value={password}></input>
                    <label>Password</label>
                </div>    
                <div class="user-box">
                    <input id="name" type="text" name="" required  onChange = {(e) => handleInputChange(e)} value={name} ></input>
                    <label>Fullname</label>
                </div>
                <div class="user-box">
                     <input id="age" type="text" name="" required  onChange = {(e) => handleInputChange(e)} value={age}></input>
                     <label>Age</label>
                </div>    
                {selectedImage && (
                    <div>
                    <img id='profilePic' alt="not found" width={"100px"} src={URL.createObjectURL(selectedImage)} />
                    </div>
                  )}
                  <br />
                  <br /> 
                  <input
                    type="file"
                    name="myImage"
                    onChange={(event) => {
                      console.log(event.target.files[0]);
                      setSelectedImage(event.target.files[0]);
                    }}
                  />
                <div class="button-form">
                <button id='submit' onClick={Submit}>Sign Up</button>  
                    <div id="register">
                        Already have an account ?
                        <br></br>
                        <Link to='/../Login'>Log In</Link>
                    </div>
                </div>
            </form>
        </div>   
    );
}

export default SignUp;