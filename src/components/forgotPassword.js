import React, {useState} from "react";
import {useHistory} from "react-router-dom"
import {Link} from "react-router-dom"
import {sendPasswordResetEmail} from 'firebase/auth'
import {auth} from  '../config/firebase'

function ForgotPass(){

    const [email, setEmail] = useState('');

    let history = useHistory();

    const forgotPass = (()=>{

        sendPasswordResetEmail(auth, email).then(()=>{
            history.push("/");
        }).catch(()=>{
            console.log('Enter the correct email');
        })

        
    })
    return(
        <div className="container">

            <h1>Forgot Password</h1>
            <input type="email" placeholder="Enter your email" onChange={(e)=> setEmail(e.target.value)}/><br></br>

            <button style={{width: "150px", height: "30px"}} onClick={forgotPass}>Reset Password</button>

            <span>Don't have an account?</span> <span>
                <Link to="/sign-up">Create an account here</Link>
                
            </span>
        </div>
    )
}

export default ForgotPass