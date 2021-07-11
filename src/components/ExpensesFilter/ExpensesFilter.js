import React,{useState} from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    const [year,setYear]=useState('');
    const handleOnChange=(e)=>{
        console.log(e.target.value)
        props.getYearFromFilter(e.target.value);
       setYear(e.target.value);
    }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={handleOnChange}>
          <option value='ALL'>ALL</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
          <option value='2018'>2018</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;