import React from "react";

const Header=(props)=>{
    const user= JSON.parse(localStorage.getItem('User'));
    let greeting='';
    if(user){
        greeting='Hello '+ user.name+ ',';
    }else greeting='Hello Guest,'
    return(
        <div>
            <h1>Cars-BnB-Project</h1>
            <h3>{greeting}</h3>
        </div>
    );
};

export default Header;