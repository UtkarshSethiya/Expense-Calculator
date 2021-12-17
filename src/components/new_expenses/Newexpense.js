import './newexpense.css'
import React from 'react';

import Expenseform from './Expenseform';



const Newexpense=(props)=>{
const saveExpenseData_form=(transfereddata_from_form)=>{
console.log(transfereddata_from_form);
props.new_expense_toapp(transfereddata_from_form);
}



return(
    <div className='newexpense'>
   <Expenseform expense_to_newexpense={saveExpenseData_form} />
   </div>
);
}

export default Newexpense;