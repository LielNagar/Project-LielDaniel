import React   , {useState} from "react";
import axios from 'axios';

export default function Profile(){
    const user= localStorage.getItem('User');

    return(
        <div>
            {user && <p>{user}</p>}
        </div>
    );
}