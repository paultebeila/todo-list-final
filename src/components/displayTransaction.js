import React from 'react'

import '../css/displayTransactions.css'

function DisplayTransaction(props){
    const deleteHandler = () => {
        props.setTransection(props.list.filter((el) => el.id !== props.item.id));
    }

    return(
        <div>
           {props.list.map((plan) => (
               <div>

                   {plan.priority === "Low" ? (
                    <div className="transaction-item" style={{borderBottom: '2px solid green', display: 'flex', justifyContent: 'space-between'}}>
                       <div>
                           <h4 style={{paddingLeft: "12px", paddingTop: "20px"}}>{plan.plan}</h4>
                       </div>
                       <button onClick={deleteHandler} className=" delete">COMPLETE</button>
                   </div> 
                   ): plan.priority === "High" ? (
                    <div className="transaction-item" style={{borderBottom: '2px solid red', display: 'flex', justifyContent: 'space-between'}}>
                       <div>
                           <h4 style={{paddingLeft: "12px", paddingTop: "20px"}}>{plan.plan}</h4>
                       </div>
                       <button onClick={deleteHandler} className=" delete">COMPLETE</button>
                   </div> 
                   ):(
                   <div className="transaction-item" style={{borderBottom: '2px solid yellow', display: 'flex', justifyContent: 'space-between'}}>
                   <div>
                       <h4 style={{paddingLeft: "12px", paddingTop: "20px"}}>{plan.plan}</h4>
                   </div>
                   <button onClick={deleteHandler} className="delete">COMPLETE</button>
               </div>
                   
                )}
                   
               </div>
           ))}
        </div>
    );
}
export {DisplayTransaction};