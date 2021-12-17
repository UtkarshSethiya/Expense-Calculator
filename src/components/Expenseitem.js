import React,{useState} from 'react';
import './Expenseitem.css';
import Expensedate from './Expensedate';



function Expenseitem(props){

    

    return(
        <div className="maincontainer">
            <div className="date">
           <Expensedate date2={props.mydate}/>
            <h3>{props.details}</h3>
            </div>
            
              
            <div className="details">
                
                <div className="price">
                  Rs-  {props.pric}
                </div>
            </div>
        </div>
    );
}
export default Expenseitem;