import './expensedate.css'
import React from 'react';
function Expensedate(props){

return(
    <div className="newdate">
     {props.date2.toDateString()} 
    
    </div>
);


}
export default Expensedate;