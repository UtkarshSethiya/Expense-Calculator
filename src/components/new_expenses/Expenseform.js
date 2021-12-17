import React,{useState} from "react";
import './form.css'

const Expenseform=(props)=>{
const [add_details,setdetails]=useState('');
const [add_price,setprice]=useState('');
const [add_date,setdate]=useState('');



const detailschangehandler=(event)=>{
setdetails(event.target.value)
}
const pricechangehandler=(event)=>{
    setprice(event.target.value)
}
const datechangehandler=(event)=>{
    setdate(event.target.value)
}
const submithandler=(event)=>{
event.preventDefault();
const expensedData={
    info:add_details,
    price:add_price,
    date:new Date(add_date)
}
props.expense_to_newexpense(expensedData);

setdetails('');
setprice('');
setdate('');
console.log(expensedData);
}

return(
    <form onSubmit={submithandler}>
        <div className="newexpense__controls">
        <div className="newexpense_control">
              <lable>Details</lable>
              <input type="text" value={add_details} onChange={detailschangehandler}></input>
              </div>
          
          
          <div className="newexpense_control">
              <lable>Price</lable>
              <input type="number" value={add_price} min="1" step="1"onChange={pricechangehandler}></input>
              </div> 

             

              <div className="newexpense_control">
              <lable>Date</lable>
              <input type="date" value={add_date}   onChange={datechangehandler}></input>
              </div> 
        </div>
        <div className="newexpense_actions">
            <button className="btn" type="submit">Add expense</button>
        </div>
    </form>
);
}

export default Expenseform;