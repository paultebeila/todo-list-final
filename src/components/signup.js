import React, {useState} from "react";
import {useHistory} from "react-router-dom"
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../config/firebase'

function SignUp(){

    const [email, setEmail]=useState('');
    const [Name, setName]=useState('');
    const [surname, setSurname]=useState('');
    const [password, setPassword]=useState('');

    let history = useHistory();

    const register = (()=>{

        createUserWithEmailAndPassword(auth, email, Name, surname, password).then(()=>{
            history.push("/home");
        }).catch((err)=>{
            console.log(err);
        })
        
    })

    return(
        <div className="container">

            <h1>Sign Up</h1>
            <input type="email" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}/><br></br>
            <input type="text" placeholder="Enter your name" onChange={(e)=>setName(e.target.value)}/><br></br>
            <input type="text" placeholder="Enter your surname" onChange={(e)=>setSurname(e.target.value)}/><br></br>
            <input type="password" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)}/><br></br>

            <button style={{width: "150px", height: "30px"}} onClick={register}>SignUp</button>
        </div>
    )
}

export default SignUp;