import React from 'react';
import ExpenseForm from './ExpenseForm.js';
import './NewExpenses.css'
const NewExpenses=(props)=>{
    const handleExpenseSaveForm=(expense)=>{
          console.log(expense);
          props.getExpenseFromNew(expense);
    }
    return(
        <div className="new-expense">
           <ExpenseForm onExpenseFormSave={handleExpenseSaveForm}/>
        </div>
    );
}
export default NewExpenses;