import React,{useState} from 'react';
import './ExpenseForm.css';
import './NewExpenses.css'
const ExpenseForm=(props)=>{
    //    const [title,setTitle]=useState('');
    //    const [amount,setAmount]=useState(0);
    //    const [date,setDate]=useState('');
    const [isNew,setIsNew]=useState(false);
    const [inputObj,setInputObj]=useState({
        title:'',
        amount:'',
        date:'',
        id:0,
    });
    const handleCancel=()=>{
        setIsNew(!isNew);
    }
    const handleClick=()=>{
        setIsNew(!isNew);
    }
       const handleTitle=(e)=>{
          setInputObj((prevState)=>{
              return {
                  ...prevState,title:e.target.value
              }
          });
        }
       
       const handleAmount=(e)=>{
        setInputObj((prevState)=>{
            return {
                ...prevState,amount:e.target.value
            }
        });
    }
       const handleDate=(e)=>{
        setInputObj((prevState)=>{
            return {
                ...prevState,date:e.target.value
            }
        });
       }  
       const handleFormSubmit=(e)=>{
        e.preventDefault();
        const expense={
            id:Math.random(),
            title:inputObj.title,
            amount:inputObj.amount,
            date:new Date(inputObj.date)
        }
        console.log(expense);
         setInputObj((prevState)=>{
             return {
                 ...prevState,id:0,title:'',amount:'',date:''
             }
         });
         props.onExpenseFormSave(expense);  
         setIsNew(!isNew);     
       }
    return(
        !isNew ? <button className="new-expense" onClick={handleClick}>Add New Expense</button>: <form onSubmit={handleFormSubmit}>
           <div className="new-expense__controls">
               <div className="new-expense__control">
                   <label>Title</label>
                   <input type="text" value={inputObj.title} onChange={handleTitle}/>
               </div>
               <div className="new-expense__control">
                   <label>Amount</label>
                   <input type="number" value={inputObj.amount} min="0.01" step="0.01" onChange={handleAmount}/>
               </div>
               <div className="new-expense__control">
                   <label>Date</label>
                   <input type="date" value={inputObj.date} min="2019-01-01" max="2022-12-31" onChange={handleDate}/>
               </div>
           </div>
                <div className="new-expense__actions">
                   <button type="button" onClick={handleCancel}>Cancel</button>
                   <button type="submit">Add Expense</button>
               </div>
       </form> 
    );
       
}
export default ExpenseForm;