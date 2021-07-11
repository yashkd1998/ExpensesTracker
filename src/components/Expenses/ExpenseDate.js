import './ExpenseDate.css';
function ExpenseDate({date}){
 const month=date.toLocaleDateString('en-US',{month:'long'});
 const day=date.toLocaleDateString('en-US',{day:'numeric'});
 const year=date.getFullYear();   
  return(
      <div className="expense-date">
         <div className="expense-date__day">{day}</div>
         <div className="expense-date__month">{month}</div>
         <div className="expense-date__year">{year}</div>                             
      </div>
  )
}
export default ExpenseDate;