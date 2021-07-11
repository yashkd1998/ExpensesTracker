import {useState} from 'react';
import './App.css';
import ExpenseItem from './components/Expenses/ExpenseItem';
import NewExpenses from './components/NewExpense/NewExpenses';
import ExpensesFilter from './components/ExpensesFilter/ExpensesFilter'; 
import expense from './Expenses';

function App() {
  const [filteredYear,setYr]=useState('ALL');
  const [expenses,setExpenses]=useState(expense);
  const tempExp=expenses.filter(expense=>expense.date.getFullYear().toString() === filteredYear);
  const handleExpenseNew=(exp)=>{
    console.log(exp);
    setExpenses((prevState)=>{
      return [exp,...prevState];
    })
    console.log(expenses);
  }
  const handleFilteredYear=(year)=>{
    setYr(year);
  }
  return (
     <div>
       <NewExpenses getExpenseFromNew={handleExpenseNew}/>
       {filteredYear === 'ALL'? <ExpenseItem expense={expenses} getFilteredYear={handleFilteredYear}/>:<ExpenseItem expense={tempExp} getFilteredYear={handleFilteredYear}/>}
     </div>
  );
}

export default App;
