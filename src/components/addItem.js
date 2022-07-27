import React,{useState} from "react";
import "../css/add.css"
import {db} from '../config/firebase';

import {addDoc, collection} from 'firebase/firestore'
function AddItem(props){

    const [plan, setPlan] = useState('')
    const [priority, setPriority] = useState('')

    const add=(()=>{
        const collectionRef=collection(db,"transaction");

        const transaction={
            priority:priority,
            plan:plan,
        };

        addDoc(collectionRef, transaction).then(()=>{
            alert("Added transaction successfully")
        }).catch((err)=>{
            console.log(err);
        })

        props.add
        (plan, priority);
    })

   
    return (
        <div className="container">
            <h1 style={{paddingLeft: "5px"}}>Add Plan</h1>
            <input placeholder="Enter Item" onChange={(e)=>setPlan(e.target.value)} /><br></br>
            <select onChange={(e)=>setPriority(e.target.value)}>
                <option hidden>Priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select><br></br>
            <button id="btn" onClick={add}>Add</button>
        </div>
    )
}

export default AddItem;