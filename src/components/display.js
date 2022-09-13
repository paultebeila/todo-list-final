import React from 'react'

import '../css/display.css'

function Display(props){
    /*const deleteHandler = (id) => {
        props.setTransection(props.list.filter((el) => el.id !== props.item.id));
    }*/

    function deleteHandler(row){
        document.getElementById('row').deleteRow(row);
     }

    return(
        <div id='row'>
            
            <h1 style={{color: 'Gray'}}>Below are your Plans</h1>
           {props.list.map((plan) => (
               <div>

                   {plan.priority === "Low" ? (
                    <div className="transaction-item" style={{borderBottom: '5px solid green', display: 'flex', justifyContent: 'space-between', marginTop: '5px'}}>
                       <div>
                           <h4 style={{paddingLeft: "12px", paddingTop: "20px"}}>{plan.plan}</h4>
                       </div>
                       <button onClick={deleteHandler} className=" delete">COMPLETE</button>
                   </div> 
                   ): plan.priority === "High" ? (
                    <div className="transaction-item" style={{borderBottom: '5px solid red', display: 'flex', justifyContent: 'space-between', marginTop: '5px'}}>
                       <div>
                           <h4 style={{paddingLeft: "12px", paddingTop: "20px"}}>{plan.plan}</h4>
                       </div>
                       <button onClick={deleteHandler} className=" delete">COMPLETE</button>
                   </div> 
                   ):(
                   <div className="transaction-item" style={{borderBottom: '5px solid yellow', display: 'flex', justifyContent: 'space-between', marginTop: '5px'}}>
                   <div>
                       <h4 style={{paddingLeft: "12px", paddingTop: "20px"}}>{plan.plan}</h4>
                   </div>
                   <button value="Delete" onClick={deleteHandler} className="delete">COMPLETE</button>
               </div>
                   
                )}
                   
               </div>
           ))}
        </div>
    );
}
export {Display};