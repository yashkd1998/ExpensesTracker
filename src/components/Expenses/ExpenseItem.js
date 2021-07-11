import React,{useState} from 'react';
import './ExpenseItem.css';
import './Expenses.css'
import ExpenseDate from './ExpenseDate';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpensesChart from './ExpenseCharts';
function ExpenseItem(props){
    const [title,setTitle]=useState('');
    const handleYear=(year)=>{
        props.getFilteredYear(year);
    }
    const handleClick=()=>{
        setTitle('updated!')
    }
    return(
           <div className="expenses">
            <ExpensesFilter getYearFromFilter={handleYear}/>
            <ExpensesChart expenses={props.expense}/>
        { 
            props.expense.length === 0 ? <label className="data-not">No Expenses Found</label> : 
            props.expense.map(exp=>{
            return(
                  <div key={exp.id} className="expense-item">
                  <ExpenseDate date={exp.date}/>
                  <div className='expense-item__description'>
                  <h2>{exp.title}</h2>
                  <div className='expense-item__price'>{exp.amount} Rs</div>
                </div>
                   <button onClick={handleClick}>click here</button>
                </div>
         )})
            }
            </div>
    );
}
export default ExpenseItem;