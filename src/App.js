
import './app.css'
import React,{useState} from 'react';
import Newexpense from './components/new_expenses/Newexpense.js'
import Expenseitem from './components/Expenseitem'

 let  expensearray=[
    


]



 
 



function App(){

    const [expenseit,updateit]=useState(expensearray);
fetch('https://reqres.in/api/unknown').then(
    response=>{
        return response.json();
    }
).then(
    dats=>{
        console.log(dats);
    }
)
    const appexpense=(details_newexpenseto_app)=>{
       const array=[details_newexpenseto_app,...expenseit]
       updateit(array);
               }

    var sum=0;
    for (let i = 0;i <  expenseit.length; i++)
    {
sum=parseInt(sum)+parseInt(expenseit[i].price)

    }   
              
    
    return(
        <div>
            <h1>Expense Calculator </h1>
            <h3 className="sum">Total Expense- Rs {sum} /-</h3>
           
             <div>
                 <Newexpense new_expense_toapp={appexpense}  />
                 <div>
                 {
                     expenseit.map((expenseit)=>{
                      return <Expenseitem mydate={expenseit.date} pric={expenseit.price} details={expenseit.info} ></Expenseitem>
                     }
                     )
                 }
                

                 </div>
               
               

             </div>
          
           
        </div>
        
    )
}
export default App;