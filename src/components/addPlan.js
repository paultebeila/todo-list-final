import React,{useState} from "react";
import "../css/add.css"
import {db} from '../config/firebase';

import {addDoc, collection} from 'firebase/firestore'
function AddPlan(props){

    const [id, setId] = useState('')
    const [plan, setPlan] = useState('')
    const [priority, setPriority] = useState('')

    const add=(()=>{
        const collectionRef=collection(db,"planning");

        const transaction={
            priority:priority,
            plan:plan,
        };

        addDoc(collectionRef, transaction).then(()=>{
            alert("Planning successfully added")
        }).catch((err)=>{
            console.log(err);
        })

        props.add(plan, priority);
    })

   
    return (
        
        <div className="container">
            <div className="header">
                <h1 style={{paddingLeft: "5px"}}>Add Plan</h1><br></br>
            </div>
            <div className="body">
                <input placeholder="Enter Plan" onChange={(e)=>setPlan(e.target.value)} />
                <select onChange={(e)=>setPriority(e.target.value)}>
                    <option hidden>Priority</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
                <button id="btn" onClick={add}>Add</button>
            </div>
        </div>
    )
}

export default AddPlan;